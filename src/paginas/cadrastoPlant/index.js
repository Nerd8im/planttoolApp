import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './stiloRegistrar.js';
import cadastrarPlant from './index'; // Assumindo que você tem a função de cadastro da planta

export default function RegistrarPlanta({ navigation }) {
  const [plantaEspecie_nome, setPlantaEspecieNome] = useState(''); // Mantém o nome da espécie selecionada
  const [nome_da_planta_do_usuário, setNomeDaPlantaDoUsuario] = useState(''); // Nome personalizado da planta
  const [especies, setEspecies] = useState([]); // Lista de espécies obtida da API
  const [loading, setLoading] = useState(false); // Indicador de carregamento

  // Função para buscar as espécies da API
  const fetchEspecies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_ROTA}/especies/imagem`); // Substitua pela URL correta da sua API
      const data = await response.json();
      setEspecies(data); // Armazenando a resposta da API
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
                  selectedValue={plantaEspecie_nome}
                  style={style.input}
                  onValueChange={(itemValue) => setPlantaEspecieNome(itemValue)}
                >
                  <Picker.Item label="Selecione uma espécie" value="" /> {/* Opção padrão */}
                  {especies.map((especie, index) => (
                    <Picker.Item label={especie.nome} value={especie.nome} key={index} />
                  ))}
                </Picker>
              )}
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
            <TouchableOpacity style={style.botao} onPress={() => cadastrarPlant(plantaEspecie_nome, nome_da_planta_do_usuário, navigation)}>
              <Text style={style.botaoTexto}>Registrar Planta</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
