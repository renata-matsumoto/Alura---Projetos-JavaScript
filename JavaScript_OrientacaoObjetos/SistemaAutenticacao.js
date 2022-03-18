/*
Ser autenticavel significa ter o método autenticar.
Ducky Type é um tipo de dados que permite que você defina um tipo de dado
Polimorfismo é a capacidade de um objeto poder ser instanciado como vários tipos diferentes
Encapuslamento é a forma de encapsular um objeto dentro de outro objeto
getters e setters são métodos que permitem acessar e modificar atributos de um objeto
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;
}

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }    
}