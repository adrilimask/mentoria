// Queremos utilizar 'Aluno.js' e 'Mentor.js'
const AlunoModelo = require('./Aluno');
const MentorModelo = require('./Mentor');

// Criando dois mentores via construtores
let assuntos_mentor1 = ["Recuperações Judiciais", "Defesa no STF"];
let assuntos_mentor2 = ["Direito do Consumidor", "Direito Tributário"];
var mentor1 = new MentorModelo("Arlindo", "arlindo@empresa1.com", assuntos_mentor1);
var mentor2 = new MentorModelo("Aurélio Gomes", "aurelio@empresa2.com", assuntos_mentor2);

// Dois objetos 'Aluno', um usando construtor e outro não
var aluno1 = new AlunoModelo("Ana Oliva", "ana@empresa1.com", mentor1, new Date());
var aluno2 = new AlunoModelo();

// A classe 'Aluno' também possui relação de 'é um' com a classe 'Pessoa':
aluno2.setNome('Fernando Atiz');
aluno2.setEmail('fernando@empresa2.com.br');
aluno2.setMentor(mentor2);
aluno2.setDataInicio(new Date());

// Imprimindo
console.log(`Aluno1: ${aluno1.getNome()}, mentorado(a) por: ${aluno1.getMentor().getNome()}`);
console.log(`Aluno2: ${aluno2.getNome()}, mentorado(a) por: ${aluno2.getMentor().getNome()}`);


