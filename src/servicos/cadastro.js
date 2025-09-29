const rotaBase = process.env.EXPO_PUBLIC_API_ROTA

export async function cadastrarUsuario(senha, email, nome, sobrenome, navigation) {
    if (senha && email && sobrenome && nome) {
        try {
            const dados = { senha, email, sobrenome, nome }
            const url = `${rotaBase}/registrarUsuario`
            console.log(rotaBase)
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (response.status === 201 || 200) {
                alert('Cadastro realizado com sucesso!')

                navigation.navigate('Login')

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
