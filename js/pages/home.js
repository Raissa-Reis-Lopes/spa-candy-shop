import createCustomEvent from "./customEvent.js";

function home(){

    const body = document.querySelector("body");
    const header = document.createElement("header");
    const menuContainer = document.createElement("div");
    const buttonCupcake = document.createElement("button");
    const buttonBrigadeiro = document.createElement("button");
    const buttonDoces = document.createElement("button");
    header.innerHTML = "";
   
    body.appendChild(header);
    header.appendChild(menuContainer);
  

    body.classList.add("body-home")

    menuContainer.appendChild(buttonBrigadeiro);
    menuContainer.appendChild(buttonCupcake);
    menuContainer.appendChild(buttonDoces);

    menuContainer.classList.add("menu-container")

    buttonBrigadeiro.innerText = "Brigadeiros"
    buttonBrigadeiro.classList.add("button");
   
    buttonBrigadeiro.addEventListener("click", function(){
        const customEvent = createCustomEvent('/brigadeiros');
        window.dispatchEvent(customEvent);
        body.classList.remove("body-home");
    })


    buttonCupcake.innerText = "Cupcakes"
    buttonCupcake.classList.add("button");
    buttonCupcake.addEventListener("click", function(){
        const customEvent = createCustomEvent('/cupcakes');
        window.dispatchEvent(customEvent);
    })


    buttonDoces.innerText = "Doces"
    buttonDoces.classList.add("button");
    buttonDoces.addEventListener("click", function(){
        const customEvent = createCustomEvent('/doces');
        window.dispatchEvent(customEvent);
    });
  

    return header;
    
}

export default home;