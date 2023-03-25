/* Crie uma tabela em um banco de dados com o OMR Sequelize e atualize dados nessa tabela. */


(async()=>{

    const database = require('./db');
    const Aluno = require('./aluno');
    await database.sync();
    

    const alunos = await Aluno.findByPk(3);

    alunos.curso = 'Full Stack';

    alunos.save();


})();