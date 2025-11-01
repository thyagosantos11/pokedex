function buscar(){ // buscar os dados da pokedex
    var entrada = document.getElementById ("entrada").value.toLowerCase() //variável para receber os dados da pokedex e tolowercase deixa tudo minusculo

   var url = "https://pokeapi.co/api/v2/pokemon/" +entrada+"" //variavel para puxar a api

   fetch(url) //fech = buscar 
   .then(response => response.json()) //então se tiver resposta, chama o arquivo json
   .then( data =>{ //então recebemos os dados da api
    var tela = document.getElementById("tela") //puxando o elemento 'tela' do html
    tela.innerHTML = //subistitiuição de alguns atributos do elemento "tela" que é do html, so que no js
    '<h2>'+ data.name + '</h2>'

    + '<img class="pokemon" src="'+ data.sprites.front_default +'">'

    + '<img class="pokemon" src="'+ data.sprites.back_default +'">'

    + '<p> id: '+ data.id +'</p>'

   }) .catch(error =>{
    var tela = document.getElementById ("tela")
    tela.innerHTML =
    '<h2>pokemon não encontrado</h2>'//se der erro, aparece a mensagem: "pokemon não encontrado"
   })    
}