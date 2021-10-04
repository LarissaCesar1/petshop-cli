const cachorros = require('./database/cachorros.json');

module.exports = {
    listar: function(){
        console.table(cachorros)
    },
    descrever: function(pos){
        if(pos >= cachorros.length || pos < 0){
            console.error("Cachorro inexistente!");
            return;
        }

        let c = cachorros[pos]
        console.log(`Nome: ${c.nome}`);
        console.log(`Sexo: ${c.sexo}`);
        console.log(`Castrado: ${c.castrado}`);
        console.log(`DataDeNascimento: ${c.dataDeNascimento}`);
        console.log(`Peso: ${c.peso}`);
   
        if(c.castrado){
            console.log("Castrado: sim")
        }else{
            console.log("Castrado: não")
        }

        console.log(`Sexo: ${c.sexo}`);

        console.log("Vacinas:")
        console.log(c.vacinas);

        console.log("Serviços:")
        console.table(c.servicos);
    }
}