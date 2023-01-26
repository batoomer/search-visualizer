/**
 * This file exports an array of route configurations.
 * Each route configuration contains the path of the route and the page component associated with that route.
 * 
 * @module configs/route.config
*/

import HomePage from "../pages/home/HomePage";


/**
 * @type {Array}
 * @property {Object} path - The path of the route
 * @property {Page} page - The Page associated with the path
 */
const routeConfig = [
    {
        path: '/',
        page: HomePage
    },
];

export default routeConfig;