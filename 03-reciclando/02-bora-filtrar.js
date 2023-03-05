/* 🌱 Sobre o Desafio

A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles liberam durante a extração de óleo. Alguns desses gases são extremamente prejudiciais para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO.

Durante a extração os gases saem misturados. Crie um código que, de acordo com a lista, verifique se há pelo menos UM desses gases. Se não houver, imprima que deverá passar por um Filtro Simples. Se houver, imprima no console que deverá passar por um Filtro Especial e especifique qual gás.
🏭 Entradas e Saídas 

A entrada será uma lista de listas com as moléculas que devem ser analisadas. A saída deve ser qual filtro deve ser utilizado para filtrar. Caso tenha uma dessas moléculas prejudiciais, a saída deve ser um filtro específico para a molécula X.

Nesse nosso desafio se houver a molécula prejudicial na entrada será apenas UMA.
🌳 Exemplo 
Entrada          	  Saída 
CO2, OH
Br2, NH3
HCl, HCN, O2 	Filtro Simples
CO2, CO
NH3, Cl2 	Filtro Específico para a Molécula CO */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

/* let gets = () => {
    return 'HNO3FOH, H3O, FOH3, CO';
} */

function print(s){
    console.log(s);
}

let lista1 = 'ClO2, B2H6, C2H4O, F2'.split(', ');
let lista2 = 'CO, HCN'.split(', ');
let lista3 =  'HCl, SO, O2'.split(', ');

let arr = [lista1, lista2, lista3];

let qualFiltro = false;
let qualMolecula = ['NO2', 'SO2', 'CO', 'FHO'];

/* arr.forEach(list => {
    list.forEach(molecula => {
        if(qualMolecula.indexOf(molecula)>0){
            qualFiltro=true
        }
    });
}); */
//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais
//avaliadas no teste.

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(qualMolecula.indexOf(arr[i][j])>0){
            qualFiltro=true
            print(`Filtro Específico para a Molécula ${arr[i][j]}`)
        }
    }
}


if(qualFiltro===false) print('Filtro Simples')