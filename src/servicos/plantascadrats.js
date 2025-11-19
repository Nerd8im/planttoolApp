const rotaBase = process.env.EXPO_PUBLIC_API_ROTA

export async function cadastrarPlant(plantaEspecie_nome, nome_da_planta_do_usuário, navigation) {
    if (plantaEspecie_nome && nome_da_planta_do_usuário) {
        try {
            const dados = { plantaEspecie_nome, nome_da_planta_do_usuário }
            const url = `${rotaBase}/registrarPlanta`
            console.log(rotaBase)
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (response.status === 201 || 200) {
                alert('Cadastro realizado com sucesso!')

                navigation.navigate('RegistrarPlanta')

            } else {
                const errorData = await response.json();
                alert('Cadastro falhou: ' + (errorData.msg || 'Erro desconhecido'))
            }
        } catch (error) {
            alert('Erro ao tentar cadastrar: ' + error.message)
        }
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}
