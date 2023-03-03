//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());
//TODO: Print no console se a semente deve ser plantada ou se o buraco deve
//avançar ou retroceder X metros
if(id===10)print('Plantar!')
else if(id > 10)print(`O buraco deve retroceder ${id-10} metros`)
else print(`O buraco deve avançar ${10 - id} metros`)