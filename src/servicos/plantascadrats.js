const rotaBase = process.env.EXPO_PUBLIC_API_ROTA

export default  async function cadastrarPlante(dadosPlanta, navigation) {

    const { plantaEspecie_id, nome_da_planta_do_usuário, plantaEspecie_nome } = dadosPlanta;
    
    if (plantaEspecie_id && nome_da_planta_do_usuário && plantaEspecie_nome) {
        try {
            const dados = { 
                plantaEspecie_id: plantaEspecie_id, 
                plantaEspecie_nome: plantaEspecie_nome, 
                nome_da_planta_do_usuário: nome_da_planta_do_usuário,
            };

            const token = await AsyncStorage.getItem('tokenSessao'); 
            const url = `${rotaBase}/registrarPlanta`
            console.log('URL:', url)
            console.log('rotaBase:', rotaBase)

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(dados),
            });

            // CORREÇÃO: Verificar cada status separadamente
            if (response.status === 201 || response.status === 200) {
                const result = await response.json();
                console.log('Resposta do servidor:', result);
                
                alert('Cadastro realizado com sucesso!')
                
                // Navegar para uma tela diferente, como lista de plantas ou home
                navigation.navigate('MinhasPlantas') // ou 'Home'
                
            } else {
                const errorData = await response.json();
                alert('Cadastro falhou: ' + (errorData.msg || 'Erro desconhecido'))
            }
        } catch (error) {
            console.error('Erro no cadastro:', error);
            alert('Erro ao tentar cadastrar: ' + error.message)
        }
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}