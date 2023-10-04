# AnimeNav App

This is a Vue 3 application that displays an animes from API

## Overview

The application consists of several Vue components that together form an anime grid with slider functionality.

![Screenshot](./imgs/img.png)
![Screenshot](./imgs/img2.png)

## Features

- Displays an anime grid.
- Allows navigating through animes using left and right arrows.
- Clicking on an anime redirects the user to a details page.
- Watch animes from free-api

## Installation

1. Clone this repository:
2. Cd anime-list
3. npm install
4. npm run serve

## Show animes

1. Create a paste environments with environments.js
2. Add api url ex:
```
export const environment = {
    API_BASE: "https://api.example.com",
    API_META: "url/example"
}
```
3. Enjoy it!

## Contribution
Feel free to contribute improvements or fixes to this application. Just open a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
