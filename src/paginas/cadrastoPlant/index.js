import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './stiloRegistrar.js';
import cadastrarPlante from '../../servicos/plantascadastros.js'; 
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RegistrarPlanta() {
  const [nome_da_planta_do_usuário, setNomeDaPlantaDoUsuario] = useState(''); // Nome personalizado da planta
  const [especies, setEspecies] = useState([]); // Lista de espécies obtida da API
  const [loading, setLoading] = useState(false); 
  const [plantaEspecie_id, setPlantaEspecieId] = useState('');
  const [plantaEspecie_nome, setPlantaEspecieNome] = useState('');
  const [localPlantio, setLocalPlantio] = useState('');
  const navigation = useNavigation();


  const fetchEspecies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_ROTA}/especies`); 
      const data = await response.json();
      console.log('fetch especies ->', data);
    
      const lista = Array.isArray(data) ? data : (Array.isArray(data.especies) ? data.especies : []);
      setEspecies(lista);
    } catch (error) {
      console.error('Erro ao buscar espécies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEspecies(); 
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ImageBackground source={require('../../../assets/fundo.jpg')} style={style.imagem} resizeMode="cover">
          <View style={style.card}>
                    <View style={style.header}>
                                <Icon name="arrow-back" size={28} color="#3A5A40"  onPress={() => navigation.navigate('Perfil')}/>
                              </View>
            
            <Text style={style.titulo}>Registrar Planta</Text>
            
            <Text style={style.label}>Planta</Text>
            <View style={style.inputContainer}>
              <Ionicons name="nutrition-outline" size={20} color="#6b6b6b" style={style.inputIcon} />
              {loading ? (
                <Text>Carregando...</Text> // Exibe um texto enquanto a lista está sendo carregada
              ) : (
              <Picker
               style={style.inputContainer}
              selectedValue={plantaEspecie_id}
              onValueChange={(value,) => {
                setPlantaEspecieId(value);
                const item = especies.find(e => e.plantaEspecie_id === value);
                setPlantaEspecieNome(item?.plantaEspecie_nome || '');
              }}
            >


            {Array.isArray(especies) &&
              especies.map((planta) => (
                <Picker.Item
                  key={planta.plantaEspecie_id}
                  label={planta.plantaEspecie_nome}
                  value={planta.plantaEspecie_id}
                />
              ))
            }
            </Picker>
                          )}  
                    
            </View>

               <View>
            <Text style={style.label}>Local que vai plantar</Text>
            <Picker selectedValue={localPlantio} onValueChange={setLocalPlantio} style={style.inputContainer}>
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Vaso" value="Vaso" />
              <Picker.Item label="Jardim" value="Jardim" />
              <Picker.Item label="Terrário" value="Terrário" />
            </Picker>
</View>



            {/* Nome da Planta */}
            <Text style={style.label}>Nome da planta</Text>
            <View style={style.inputContainer}>
              <Ionicons name="pricetag-outline" size={20} color="#6b6b6b" style={style.inputIcon} />
              <TextInput
                placeholder="Sr. Jorge"
                placeholderTextColor="#aaa"
                style={style.input}
                value={nome_da_planta_do_usuário}
                onChangeText={setNomeDaPlantaDoUsuario}
              />
            </View>

            {/* Botão */}
<TouchableOpacity
  style={style.botao}
  onPress={() =>
  cadastrarPlante({
    plantaEspecie_id,
    plantaEspecie_nome,
    nome_da_planta_do_usuário
  }, navigation)
  }
>
  <Text style={style.botaoTexto}>Registrar Planta</Text>
</TouchableOpacity>
</View>
   
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}