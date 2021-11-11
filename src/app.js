// Declarando o uso da classe 'Pessoa', presente em outro arquivo.
const PessoaModelo = require('./Pessoa');

// Criando objeto com valores iniciais via construtor.
var alguem1 = new PessoaModelo("Jorge da Silva", "jorge@lugar1.com", "12345");

// Criando objeto SEM valores iniciais.
var alguem2 = new PessoaModelo();

/*
Atributos na classe são privados, devemos
por convenção utilizar os métodos públicos.
*/
alguem2.setNome('Valmir Soares');
alguem2.setEmail('valmir@lugar2.com');
alguem2.setSenha('891');

// Imprimindo
console.log(alguem1.getNome(), alguem1.getEmail());
console.log(alguem2.getNome(), alguem2.getEmail());

