let gets = () => {
    return '10, 75, 98';
}

function print(s){
    console.log(s);
}

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(', ')

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
amostra.forEach(item => {
    if(item>=75) print('Descartar da lista')
    else if(item>=50 && item <75) print('Manter sob observação')
    else print('Isolar e iniciar protocolo de cuidados')
});