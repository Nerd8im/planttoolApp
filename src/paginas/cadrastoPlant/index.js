import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './stiloRegistrar.js';
import cadastrarPlant from '../../servicos/plantascadrats.js';

export default function RegistrarPlanta({ navigation }) {
  const [plantaEspecie_nome, setplantaEspecie_nome] = useState('');
  const [nome_da_planta_do_usuário, setnome_da_planta_do_usuário] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground
          source={require('../../../assets/fundo.jpg')}
          style={style.imagem}
          resizeMode="cover"
        >
          <View style={style.card}>
            
            <Text style={style.titulo}>Registrar Planta</Text>

            {/* Planta */}
            <Text style={style.label}>Planta</Text>
            <View style={style.inputContainer}>
              <Ionicons
                name="nutrition-outline"
                size={20}
                color="#6b6b6b"
                style={style.inputIcon}
              />
              <TextInput
                placeholder="Berinjela"
                placeholderTextColor="#aaa"
                style={style.input}
                value={plantaEspecie_nome}
                onChangeText={setplantaEspecie_nome}
              />
            </View>

            {/* Nome da Planta */}
            <Text style={style.label}>Nome da planta</Text>
            <View style={style.inputContainer}>
              <Ionicons
                name="pricetag-outline"
                size={20}
                color="#6b6b6b"
                style={style.inputIcon}
              />
              <TextInput
                placeholder="Sr. Jorge"
                placeholderTextColor="#aaa"
                style={style.input}
                value={nome_da_planta_do_usuário}
                onChangeText={setnome_da_planta_do_usuário}
              />
            </View>


            {/* Botão */}
            <TouchableOpacity style={style.botao}  onPress={() => cadastrarPlant(plantaEspecie_nome, nome_da_planta_do_usuário, navigation)}>
              <Text style={style.botaoTexto}>Registrar Planta</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
