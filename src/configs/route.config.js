/**
 * This file exports an array of route configurations.
 * Each route configuration contains the path of the route and the page component associated with that route.
 * 
 * @module configs/route.config
*/

import NotFoundPage from "../pages/404page/NotFoundPage";
import HomePage from "../pages/home/HomePage";
import homeArticleData from '../pages/home/home.json';
import MazeVisualizerPage from "../pages/maze/MazePage";


/**
 * @type {Array}
 * @property {Object} path - The path of the route
 * @property {Page} page - The Page associated with the path
 * @property {Object} data: The data associated with the page
 */
const routeConfig = [
    {
        path: '/',
        page: HomePage,
        data: [homeArticleData]
    },

    {
        path: '/breadth-first-search',
        page: MazeVisualizerPage,
        data: [homeArticleData]
    },

    {
        path: '*',
        page: NotFoundPage,
        data: []
    }
];

export default routeConfig;