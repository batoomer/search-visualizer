# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.0.3] - 2023-12-01

### Added
- README.md
- maze_generators: recursiveDivision
- route for the Dijktsra page.
- maze_path_finder: searchDijkstra
- articleDijkstra that contains data for the Dijkstra page
- route for the DFS page
- maze_path_finder: searchDFS
- articleDFS that contains that for the DFS page
- Maze page to route.config.js
- articleBFS that contains data for the BFS page
- button icons
- maze_path_finder: searchBFS
- maze_generators: randomizedDFS, randomMaze, emptyMaze
- maze-utils.py where common functions are implemented
- MazeModel to handle the maze data structure
- MazeVisualizer component and style
- General styles for input range and select elements
- Maze Page and style.

### Changed
- Changed the article list style.
- The general button style
- Moved article seciton style from home.css to index.css. It is now a general style

### Fixed
- The button of the 404 Page. Its style now display correctly

## [0.0.2] - 2023-01-26

### Added
- Home Page 
- Article Component and style. It takes a JSON file containing the data for the article and generates the HTML.
- Additional colors
- 404 Page and Style
- nav.config.js: This file exports arrays of navigation items. Each item in an array represents a navigation item with a name and a path.
- Navigation bar Component and Style
- Header Component and Style
- Footer Component amd Style
- index.js which contains general styles and css variables
- route.config.js: This file contains an array of route configurations. Each route configuration contains the path of the route and the page component associated with that route.
- App.js for binding every part of the application

### Changed
- HashRouter now supports pages with input parameters
- Moved header height from header.css to index.css
- HashRouter now routes to 404 page if a route doesn't exist
- In the HashLink class replaced the anchor textContent with innerHTML

### Fixed
- Resources handlers wouldn't clear the array containing the resources after the removeAllResource method

## [0.0.1] - 2023-01-24

### Added
- Created Page class as an abstract class for creating reusable pages
- Created HashLink class to handle links between pages
- Created HashRouter class to handle client-side routing
- Created EventHandler, PromiseHandler, IntervalHandler and TimeoutHandler classes to handle the resources(eventListeners, promises, intervals, timeouts) of the components
- Created BaseComponent class as an abstract class for creating reusable components
- index.html as the template HTML file
- index.js as the entry point for the application
- Created initial project structure
- Created .gitignore file
- Created webpack.config.js file
- Installed dependencies: css-loader, gh-pages, html-webpack-plugin, mini-css-extract-plugin, webpack, webpack-cli, and webpack-dev-server


