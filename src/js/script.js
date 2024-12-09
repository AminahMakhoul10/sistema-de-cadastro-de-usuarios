document.getElementById('cadastroForm').onsubmit = function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const genero = document.getElementById('genero').value;

    //indice do usuario a ser atualizado recuperado do atributo data-index
    const usuarioIndex = this.getAttribute('data-index'); 

    const usuarios = obterUsuarios();
    let mensagemErro = '';
    // Verificar telefone duplicado, exceto para o mesmo usuário na atualização
    const telefoneExistente = usuarios.some((usuario, index) => {
        return index != usuarioIndex && usuario.telefone === telefone;
    });

    // Verificar email duplicado, exceto para o mesmo usuário na atualização
    const emailExistente = usuarios.some((usuario, index) => {
        return index != usuarioIndex && usuario.email === email;
    });

    // Verificar se o telefone tem um formato válido (exemplo: (11) 12345-6789)
     if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
        mensagemErro += 'O telefone deve estar no formato (XX) XXXXX-XXXX.\n';
    }

    /*Variável para retornar mensagem de erro caso o usuário tente se 
    cadastrar com um e-mail ou telefone já existente no sistema
    */
    if (telefoneExistente) {
        mensagemErro += 'Já existe um usuário cadastrado com este telefone.\n';
    }
    if (emailExistente) {
        mensagemErro += 'Já existe um usuário cadastrado com este email.\n';
    }

    // Se houver mensagem de erro, exibir um alerta e interromper o cadastro
    if (mensagemErro) {
        alert(mensagemErro);
        return;
    }

    if (usuarioIndex !== null) {
        // Atualiza o usuário
        atualizarUsuario(usuarioIndex, nome, dataNascimento, telefone, email, endereco, genero);
        this.removeAttribute('data-index'); //Aq o atributo é removido apos a atualização
        document.getElementById('btnSalvar').style.display = 'none';
        
    } else {
        // Cadastra um novo usuário
        const novoUsuario = criarUsuario(nome, dataNascimento, telefone, email, endereco, genero);
        armazenarUsuario(novoUsuario);
        alert('Usuário cadastrado com sucesso!');
    }

    exibirUsuarios();
    this.reset();
};

function exibirUsuarios() {
    const listaUsuarios = document.getElementById('listaCadastro').getElementsByTagName('tbody')[0];
    listaUsuarios.innerHTML = '';
    const usuarios = obterUsuarios();
    usuarios.forEach((usuario, index) => {
        const novaLinha = listaUsuarios.insertRow();
        novaLinha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.dataNascimento}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.email}</td>
            <td>${usuario.endereco}</td>
            <td>${usuario.genero}</td>
            <td>
                <button class="acao" title="Atualizar" onclick="preencherFormulario(${index})">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="acao" title="Deletar" onclick="deletarUsuario(${index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;
    });
}

//Quando o lápis de edição é clicado, o formulário é preenchido com os dados do usuário selecionado
function preencherFormulario(index) {
    const usuarios = obterUsuarios();
    const usuario = usuarios[index];

    document.getElementById('nome').value = usuario.nome;
    document.getElementById('dataNascimento').value = usuario.dataNascimento;
    document.getElementById('telefone').value = usuario.telefone;
    document.getElementById('email').value = usuario.email;
    document.getElementById('endereco').value = usuario.endereco;
    document.getElementById('genero').value = usuario.genero;

    // aq armazena o índice do usuário a ser atualizado
    document.getElementById('cadastroForm').setAttribute('data-index', index);
    document.getElementById('btnSalvar').style.display = 'inline';
}

exibirUsuarios();
