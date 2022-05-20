# Node.js API + React: Commit Viewer


## Compilación
Para ejecutar este proyecto primero necesitamos instalar Node.js
[node.js](https://nodejs.org/es/download/)

Instalar npm 
``` bash
npm install -g npm
```

Tener instalado git [Git](https://git-scm.com)

Tener una token de Github, que para eso se necesita una cuenta de Github 
[Github](https://github.com) y el ACCESS_TOKEN [obtener token](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Clonar repositorio 
``` bash
git clone https://github.com/Miunmn/node.js-api.git
```
Entrar al repositorio y al directorio dev

``` bash
cd node.js-api/dev
```

Crear un .env file donde se guarde el access token de Github
``` bash
GITHUB_TOKEN="<token>"

```
Instalar dependencias 
``` bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

