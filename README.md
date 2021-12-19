# Repofinder 3000

This is a project to find repositories on GitHub and filter them by a search term.

## Installation

1. clone this repository to your local machine.
2. run `npm install` in the root directory.
3. run `npm start` in the root directory.

## Build the project

Run `npm run build` in the root directory.

## Instructions to deploy in GH Pages

1. Create a .env file in the root directory of the project.
2. Add the PUBLIC_URL variable to the .env file with your GitHub Pages URL.
  i.e. PUBLIC_URL=https://ggangix.github.io/repofinder
3. Run `npm run build-deploy` to build the project and deploy to GitHub Pages.


# Future improvements

Planned features:

- [ ] Add multilingual support
- [ ] Check and show a warning about the GitHub API rate limit
- [ ] Add multipage results
- [ ] Improve the UI
  - [ ] Loading Spinner
- [ ] Add more test cases


## General feedback about current implementation  

I am trying to use this project to show my knowledge in different areas using hooks, and with a clear user structure. Could be that in general we can do this better and of course more simpler, but I wanted to make it with strong bases to grow up.

The logic is simple, the user enter to the home page and search for an user and then is redirected to the user page and you can see the repositories and filter them by a search term. 

# Checkout the project deployed

https://ggangix.github.io/repofinder