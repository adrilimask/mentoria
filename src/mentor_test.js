// Queremos utilizar o arquivo 'Mentor.js'
const MentorModelo = require('./Mentor');

// Uma matriz para os assuntos do mentor1
let assuntos_mentor1 = ["Direito Tributário", "Recuperações Judiciais", "Defesa no STF"];

// Um objeto 'Mentor' com valores iniciais via construtor.
var mentor1 = new MentorModelo("Arlindo", "arlindo@empresa1.com", assuntos_mentor1);

// Um objeto 'Mentor', agora SEM valores iniciais.
var mentor2 = new MentorModelo();

// Uma matriz para os assuntos do mentor2
let assuntos_mentor2 = ["Direito do Consumidor", "Direito Administrativo"];

/*
A classe 'Mentor' possui uma relação de 'é um'
com a classe 'Pessoa', então conseguimos chamar também
métodos de 'Pessoa':
*/
mentor2.setNome('Aurélio Gomes');
mentor2.setEmail('aurelio@empresa2.com.br');
mentor2.setNovoAssunto(assuntos_mentor2);

// Imprimindo
console.log(`Mentor1: ${mentor1.getNome()}, especialista em: ${mentor1.getAssuntos()}`);
console.log(`Mentor2: ${mentor2.getNome()}, especialista em: ${mentor2.getAssuntos()}`);



