# Node.js API + React: Commit Viewer


## Compile
In order to run this project we first need to have Node.js installed
[node.js](https://nodejs.org/es/download/)

Also install NPM to be able to download project dependencies
``` bash
npm install -g npm
```
We need to install [Git](https://git-scm.com) to clone the repository and generate a   [Github Token](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) from your [Github](https://github.com) account.

Once we've installed Git, we can clone the repository
``` bash
git clone https://github.com/Miunmn/node.js-api.git
```
Enter dev folder inside the repository

``` bash
cd node.js-api/dev
```

Create an .env file where we specify the GITHUB_TOKEN
``` bash
GITHUB_TOKEN="<token>"

```
Let's install  the project dependencies 
``` bash
npm install
```

Run the project

```bash
npm run dev
```
