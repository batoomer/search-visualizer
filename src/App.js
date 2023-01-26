import HashRouter from "./base/HashRouter";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import routeConfig from "./configs/route.config";

/**
 * Main class that handles the initialization and running of the application
 */
export default class App{

    /**
     * @constructor
     */
    constructor(){
        /**
         * The router for the application
         *
         * @type {HashRouter}
         */
        this.router = new HashRouter();
        // Register all routes from the route config file
        routeConfig.forEach(route => {
            this.router.registerRoute(route.path, route.page);
        });

        /**
         * The header component of the application
         *
         * @type {Header}
         */
        const header = new Header();
        // Add the header component as the first child of the body of the document
        document.body.insertAdjacentElement('afterbegin', header.create());

        const navbar = new Navbar();
        document.body.firstChild.after(navbar.create());

        /**
         * The footer component of the application
         *
         * @type {Footer}
         */
        const footer = new Footer();
        // Add the footer component as the last child of the body of the document
        document.body.insertAdjacentElement('beforeend', footer.create());   
    };

    /**
     * Runs the application by initializing the router
     *
     * @property {function} run
    */
    run(){
        this.router.init();
    };
};