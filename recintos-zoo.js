class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        {
            
            switch (animal.toUpperCase()) {
                case "MACACO":
                    recintos = Math.ceil(quantidade / 2);  // 2 macacos por recinto
                    break;
                case "LEÃO":
                    recintos = quantidade;  // 1 leão por recinto
                    break;
                case "ELEFANTE":
                    recintos = quantidade;  // 1 elefante por recinto
                    break;
                default:
                    console.log("Animal não reconhecido.");
                    return;
    
            return `Para ${quantidade} ${animal}(s), são necessários ${recintos} recintos.`;
        }
    }
    
    export { RecintosZoo as RecintosZoo };
    
    // Exemplo de uso:
    const zoo = new RecintosZoo();
    console.log(zoo.analisaRecintos("macaco", 5));  // Output: Para 5 macacos, são necessários 3 recintos.
    console.log(zoo.analisaRecintos("leão", 3));    // Output: Para 3 leões, são necessários 3 recintos.
    
    }

}

export { RecintosZoo as RecintosZoo };
