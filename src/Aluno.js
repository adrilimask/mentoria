const PessoaModelo = require('./Pessoa');

module.exports = class Aluno extends PessoaModelo {
  constructor(p_nome, p_email, p_mentor, p_data_inicio_mentoria) {
    super(p_nome, p_email);
    this._mentor = p_mentor;
    this._data_inicio_mentoria = p_data_inicio_mentoria;
  }

  setMentor(p_mentor) {
    this._mentor = p_mentor;
  }

  getMentor() {
    return this._mentor;
  }

  setDataInicio(p_data_inicio_mentoria) {
    this._data_inicio_mentoria = p_data_inicio_mentoria;
  }

  getDataInicio() {
    return this._data_inicio_mentoria;
  }
}

