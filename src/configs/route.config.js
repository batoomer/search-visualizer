/**
 * This file exports an array of route configurations.
 * Each route configuration contains the path of the route and the page component associated with that route.
 * 
 * @module configs/route.config
*/

import NotFoundPage from "../pages/404page/NotFoundPage";
import HomePage from "../pages/home/HomePage";
import MazeVisualizerPage from "../pages/maze/MazePage";
import homeArticleData from '../pages/home/home.json';
import articleBFS from "../pages/maze/data/articleBFS.json";
import articleDFS from "../pages/maze/data/articleDFS.json";
import articleDijkstra from "../pages/maze/data/articleDijkstra.json";



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
        data: [articleBFS]
    },

    {
        path: '/depth-first-search',
        page: MazeVisualizerPage,
        data: [articleDFS]
    },

    {
        path: '/dijkstra-algorithm',
        page: MazeVisualizerPage,
        data: [articleDijkstra]
    },

    {
        path: '*',
        page: NotFoundPage,
        data: []
    }
];

export default routeConfig;