export async function carregarPerfilDoUsuario() {
  const rotaBase = process.env.EXPO_PUBLIC_API_ROTA;

  try {
    const token = await AsyncStorage.getItem("tokenSessao");

    const url = `${rotaBase}/perfilUsuario`;
    console.log("GET Perfil:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar perfil.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro carregar perfil:", error);
    throw error;
  }
}
