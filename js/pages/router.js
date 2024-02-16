import home from "./home.js";
import brigadeiroPage from "./brigadeiro.js";
import cupcakePage from "./cupcake.js";
import docesPage from "./doces.js";

function createRouter() {
    const routes = {
        '/': home,
        '/brigadeiros': brigadeiroPage,
        '/cupcakes': cupcakePage,
        '/doces': docesPage,
    };

    function getPage(path) {
            return routes[path]();
    }

    return {
        ...routes,
        getPage,
    };
}

export default createRouter;