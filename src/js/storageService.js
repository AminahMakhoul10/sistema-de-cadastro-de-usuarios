function armazenarUsuario(usuario) {
    let usuarios = obterUsuarios();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


function obterUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}


function atualizarUsuario(index, nome, dataNascimento, telefone, email, endereco, genero) {
    let usuarios = obterUsuarios();
    usuarios[index] = criarUsuario(nome, dataNascimento, telefone, email, endereco, genero);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário atualizado com sucesso!');
}


function deletarUsuario(index) {
    let usuarios = obterUsuarios();
    usuarios.splice(index, 1); 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário deletado com sucesso!');
    exibirUsuarios();
}
