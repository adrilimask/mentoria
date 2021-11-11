const PessoaModelo = require('./Pessoa');

module.exports = class Mentor extends PessoaModelo {
  constructor(p_nome, p_email, p_lista_assuntos) {
    super(p_nome, p_email);

    // Se for enviada uma lista de assuntos, a armazena.
    // Senão, gera uma lista vazia de assuntos.
    if (p_lista_assuntos) {
      this._lista_assuntos = p_lista_assuntos;
    } else {
      this._lista_assuntos = [];
    }
  }

  setNovoAssunto(p_assunto) {
    this._lista_assuntos.push(...p_assunto);
  }
  
  removeAssunto(p_assunto) {
    this._lista_assuntos.splice(this._lista_assuntos.indexOf(p_assunto), 1);
  }
    
  getAssuntos() {
    return this._lista_assuntos;  
  }
}


