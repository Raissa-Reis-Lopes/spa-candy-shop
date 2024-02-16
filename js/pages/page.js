import routes from "./router.js";


function page(){
    const root = document.getElementById("root");


    function renderPage(path) {
        const route = routes[path];
        if (route) {
            const page = route();
            root.innerHTML = ""; // Limpa o conteúdo existente no root
            root.appendChild(page);
        }
    }

    window.addEventListener('popstate', (event) => {
        const path = window.location.pathname;
        renderPage(path);
    });

    renderPage(window.location.pathname);

    return root;

}

export default page();
