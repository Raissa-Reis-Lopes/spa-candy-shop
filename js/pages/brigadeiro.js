import createCustomEvent from "./customEvent.js";

function brigadeiroPage(){

    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const menuContainer = document.createElement("div");
    const buttonVoltar = document.createElement("button");
    const divInfo = document.createElement("div");
    header.innerHTML = "";
    
    body.appendChild(header);
    body.appendChild(divInfo);
    header.appendChild(menuContainer);

    body.classList.add("body-brigadeiro")

    menuContainer.appendChild(buttonVoltar);

    menuContainer.classList.add("menu-container")

    buttonVoltar.innerText = "Voltar"
    buttonVoltar.classList.add("button");
    buttonVoltar.addEventListener("click", function(){
        const customEvent = createCustomEvent('/');
        window.dispatchEvent(customEvent);  
        header.remove();
        divInfo.remove();
        body.classList.remove("body-brigadeiro");
    })

    divInfo.innerText = "Essa página será utilizada para criar uma seção só para os brigadeiros";
    divInfo.classList.add("div-info");
    body.appendChild(divInfo);

    return header;
}

export default brigadeiroPage;