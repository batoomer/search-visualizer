/**
 * This file exports arrays of navigation items.
 * Each item in an array represents a navigation item with a name and a path.
 * 
 * @module configs/nav.config
*/

/**
 * @property {Array} uninformedSearchLink - An array of navigation items for uninformed search algorithms
 * @property {string} uninformedSearchLinks[].name - The name of the navigation item
 * @property {string} uninformedSearchLinks[].path - The path of the navigation item
 */
export const uninformedSearchLinks = [
    {
        name: 'Breadth-First Search',
        path: '/breadth-first-search'
    },

    {
        name: 'Depth-First Search',
        path: '/depth-first-search'
    },
];


/**
 * @property {Array} informedSearchLinks - An array of navigation items for informed search algorithms 
 * @property {string} informedSearchLinks[].name - The name of the navigation item
 * @property {string} informedSearchLinks[].path - The path of the navigation item
 */
export const informedSearchLinks = [
    {
        name: "Dijkstra's Algorithm",
        path: '/dijkstra-algorithm'
    },

    {
        name: `A<sup>*</sup> Search`,
        path: "/a-start-search"
    },
];