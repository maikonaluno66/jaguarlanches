var carrinho = 0;


function mostrarCombos() {
   var combosContainer = 
   document.querySelector(".combosContainer");

   combosContainer.innerHTML="";

   for (i = 0; i < combos.length; i++) {
    // console.log("Descrição: ", combos[i].descricao);
     //console.log("Preço: ", combos[i].descricao);

       var Combo = document.createElement("div");
       Combo.classList.add("combo");

       Combo.innerHTML= `
       <img src="${combos[i].url}">
       <p>${combos[i].descricao}</p>
       <h2>${combos[i].preco}</h2>
       `;
      
       var btn = document.createElement("button");
       btn.innerHTML = "comprar";
       btn.addEventListener("click",efetuarComprar);

       Combo.appendChild(btn);

       combosContainer.appendChild(Combo);

   }
}


function efetuarComprar(event) {
    var pai = event.target.parentElement;



   var valor = Number( pai.children[2].innerHTML);

   carrinho = carrinho + valor;
   alert("valor total:" + carrinho.toFixed(2));
}




mostrarCombos();