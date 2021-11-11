module.exports = class Pessoa {
  constructor(p_nome, p_email, p_senha) {
    this._nome  = p_nome;
    this._email = p_email;
    this._senha = p_senha;
  }

  setNome (p_nome) {
    this._nome = p_nome;  
  }

  getNome() {
    return this._nome;
  }

  setEmail (p_email) {
    this._email = p_email;  
  }

  getEmail() {
    return this._email;
  }

  setSenha(p_senha) {
    this._senha = p_senha;
  }

  _validaSenha(p_senha) {
    let ret = false;

    if (p_senha.length >= 6) {
      ret = true;
    }

    return ret;
  }
}


