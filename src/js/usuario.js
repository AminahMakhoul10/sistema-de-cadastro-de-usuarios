function criarUsuario (nome, dataNascimento, telefone, email, endereco, genero) {
    const usuario = {
        nome,
        dataNascimento,
        telefone,
        email,
        endereco,
        genero
    };
    return usuario;
}


//const usuario = criarUsuario("Aminah", "1990-01-01", "123456789", "aminah@example.com", "Rua A, 123", "F");
//console.log(usuario);