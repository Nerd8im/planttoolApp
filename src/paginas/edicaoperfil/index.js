import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style.js";
import carregarPerfilDoUsuario from "../../servicos/perfilEdit.js";

export default function Perfil() {
  const [perfil, setPerfil] = useState(null);
  const [editando, setEditando] = useState(false);

  const [nome_do_usuario, setNome] = useState("");
  const [usoario_sobrenome, setSobrenome] = useState("");
  const [email_do_usoario, setEmail] = useState("");
  const [usoario_senha, setSenha] = useState("");

  const rotaBase = process.env.EXPO_PUBLIC_API_ROTA;

  useEffect(() => {
    carregarPerfil();
  }, []);

  async function carregarPerfil() {
    try {
      const token = await AsyncStorage.getItem("tokenSessao");
      const url = `${rotaBase}/perfilUsuario`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const dados = await response.json();
      setPerfil(dados);

      setNome(dados.nome_do_usuario || "");
      setSobrenome(dados.usuario_sobrenome || "");
      setEmail(dados["e-mail do usuário"] || "");
      setSenha(dados.usuario_senha || "");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar o perfil.");
    }
  }

  function renderCampo(label, valor, setValor, isPassword) {
    return (
      <View style={styles.campoContainer}>
        <Text style={styles.label}>{label}</Text>

        {editando ? (
          <TextInput
            value={valor}
            onChangeText={setValor}
            style={styles.input}
            placeholder={`Adicionar ${label}`}
            placeholderTextColor="#999"
            secureTextEntry={isPassword}
          />
        ) : (
          <Text style={styles.valor}>{valor}</Text>
        )}
      </View>
    );
  }

  if (!perfil) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/200" }}
        style={styles.avatar}
      />

      {renderCampo("Nome", nome_do_usuario, setNome)}
      {renderCampo("Sobrenome", usoario_sobrenome, setSobrenome)}
      {renderCampo("E-mail", email_do_usoario, setEmail)}
      {renderCampo("Senha", usoario_senha, setSenha, true)}

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: editando ? "#4caf50" : "#4c8bf5" },
        ]}
        onPress={() => setEditando(!editando)}
      >
        <Text style={styles.buttonText}>
          {editando ? "Salvar alterações" : "Editar perfil"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
