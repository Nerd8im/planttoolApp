import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './stiloRegistrar.js';
import cadastrarPlante from '../../servicos/plantascadrats.js'; // Assumindo que você tem a função de cadastro da planta

export default function RegistrarPlanta({ navigation }) {
  const [nome_da_planta_do_usuário, setNomeDaPlantaDoUsuario] = useState(''); // Nome personalizado da planta
  const [especies, setEspecies] = useState([]); // Lista de espécies obtida da API
  console.log(especies);
  const [loading, setLoading] = useState(false); // Indicador de carregamento
  const [plantaEspecie_id, setPlantaEspecieId] = useState('');
  const [plantaEspecie_nome, setPlantaEspecieNome] = useState('');
  const [localPlantio, setLocalPlantio] = useState('');
  const [medidaLocal, setMedidaLocal] = useState('');
  // Função para buscar as espécies da API
  const fetchEspecies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_ROTA}/especies`); // Substitua pela URL correta da sua API
      const data = await response.json();
      console.log('fetch especies ->', data);
      // Normaliza para array: se a API devolver um objeto com propriedade (ex: { especies: [...] }) adapta.
      const lista = Array.isArray(data) ? data : (Array.isArray(data.especies) ? data.especies : []);
      setEspecies(lista);
    } catch (error) {
      console.error('Erro ao buscar espécies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEspecies(); // Chama a função assim que o componente for montado
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ImageBackground source={require('../../../assets/fundo.jpg')} style={style.imagem} resizeMode="cover">
          <View style={style.card}>
            <Text style={style.titulo}>Registrar Planta</Text>
            
            {/* Planta */}
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
             {/* Medida & pH */}
            <View >
               <Text style={style.label}>Medidas</Text>
              <TextInput
                style={[style.input, { width: '48%' }]}
                placeholder="Medida m²"
                value={medidaLocal}
                onChangeText={setMedidaLocal}
                keyboardType="numeric"
              />
</View>

 <View>
               <Text style={style.label}>PH</Text>
              <TextInput
                style={[style.input, { width: '48%' }]}
                placeholder="PH"
                value={medidaLocal}
                onChangeText={setMedidaLocal}
                keyboardType="numeric"
              />
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