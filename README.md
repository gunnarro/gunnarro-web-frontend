[![Node.js CI](https://github.com/gunnarro/gunnarro-web-frontend/actions/workflows/node.js.yml/badge.svg)](https://github.com/gunnarro/gunnarro-web-frontend/actions/workflows/node.js.yml)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=gunnarro_gunnarro-web-frontend)](https://sonarcloud.io/summary/new_code?id=gunnarro_gunnarro-web-frontend)
[![Known Vulnerabilities](https://snyk.io/test/github/gunnarro/gunnarro-web-frontend/badge.svg)](https://snyk.io/test/github/gunnarro/gunnarro-web-frontend)
[![build and deploy image to docker.hub](https://github.com/gunnarro/gunnarro-web-frontend/actions/workflows/deploy-docker-hub.yml/badge.svg)](https://github.com/gunnarro/gunnarro-web-frontend/actions/workflows/deploy-docker-hub.yml)


# gunnarro-web-frontend
## Installed
npm install react-table

## eslint

[eslint-plugin-react#configuration](https://github.com/jsx-eslint/eslint-plugin-react#configuration)
Run from commandline:
```
npx eslint src/components/Footer.js
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies
    NodeJs 21.6.1
    React JS 18.2.0
    i18next 22.4.9
    TypeScript 4.9.5
    Bootstrap 5.3.1

## installed modules
- npm install react-i18next
- npm install i18next-http-backend
- npm install react-router-dom
- npm install bootstrap react-bootstrap-icons reactstrap
- npm install material-table @material-ui/core
- npm install @material-ui/icons
- npm install axios
- npm install react-hook-form
- npm install @types/react @types/react-dom
- npm install moment # for date formation
  - usage: import moment from 'moment'; let formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a'); 

- npm install -g npm-check-updates

## Upgrade dependencies
First install
```
npm install -g npm-check-updates
```
Then run
```
ncu
```
that for example will output following:
```
 axios                           ^1.6.7  →     ^1.6.8
 bootstrap                       ^5.3.2  →     ^5.3.3
 eslint                         ^8.56.0  →    ^8.57.0
 eslint-plugin-react            ^7.33.2  →    ^7.34.1
 i18next                        ^23.8.0  →   ^23.10.1
 react-bootstrap                ^2.10.0  →    ^2.10.2
```

In order to upgrade  all suggestion, you ca run:
```
ncu -u
npm install
```
or that a lock at the documentation, there isa bunch of options in order to select what to upgrade

## Tools
### OpenAPI Generator
Resources: 
- [openapi-generator github](https://github.com/OpenAPITools/openapi-generator)
- [openapi-generator tech](https://openapi-generator.tech/)
- [how-to-use-oas-generator](https://hmos.dev/en/how-to-use-oas-generator)
- [typescript](https://openapi-generator.tech/docs/generators/typescript/)

Install the latest version of the cli: 
```
npm install @openapitools/openapi-generator-cli -g
``` 
Generate Api client from the rest service yaml file:
```
openapi-generator-cli generate -i docs/api/todo-service-api.yaml -g typescript-axios -o src/api
```

Run code generation from npm:
Create a 'codegen' option under the script section in the package.json file
```
"scripts": {
  "codegen": "openapi-generator-cli generate -i docs/api/todo-service-api.yaml -g typescript-axios -o src/generated --additional-properties=npmName=todo-service-client,apiPackage=todoservice/api,modelPackage=todoservice/model",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```
the you can simply generate code by running:
```
npm run codegen
```

Where to place the generated code:
- create a library
- have a dedicated folder, not under the src directory

list config options for a generator:
```
openapi-generator-cli config-help -g typescript-axios
```

Generator-specific options should be passed as --additional-properties:
```
--additional-properties=key1=value1,key2=value2
```

can also use a configuration file, openapi-generator-config-todo-service.yaml, as follows:
```
generatorName: typescript-axios
outputDir: src/api
cleanupOutput: true
inputSpec: docs/api/todo-service-api.yaml
additionalProperties:
supportsES6: true
```

debug generation:
--global-property=debugModels,debugOperations

#### Use generated code example
```
import { TodoServiceApiFactory } from "../api";

const todoApi = TodoServiceApiFactory();
```

## uninstall module
npm uninstall material-table


## Axios Call Rest API
ref [Axios](https://www.npmjs.com/package/axios)

## CI/CD
- run github action build script, snyk security scan, sonarqube, build, test.
- run github action push image to docker hub
- run github action deploy image to azure
- 
## Docker
### Build docker image
```
```

### Push to docker hub
```
docker push gunnarro/gunnarro-web-frontend:latest
```


### Run docker image

Docker run creates a new container of an image. We can create as many clones of the same image as possible. 
On the other hand, docker start launches a previously stopped container.

```
docker run -d -p 3000:3000 --name gunnarro-web-frontend gunnarro-web-frontend:latest
```
where 'name' is the container name, if omitted, docker wil generate a container name.

or get docker image from docker hub (deployed by the project github action).
By default, docker pull pulls images from Docker Hub.
```
docker pull gunnarro/gunnarro-web-frontend:latest
# or dockerhub (use docker.io)
docker image pull docker.io/gunnarro/gunnarro-web-frontend
# then run
docker run -d -p 8080:3000 --name gunnarro-web-frontend gunnarro-web-frontend:latest
```
### Start docker image
```
docker start gunnarro-web-frontend
```

### Stop docker image
```
docker stop gunnarro-web-frontend
```

### remove docker image/container
```
docker rmi gunnarro-web-frontend:latest
docker container rm <container-id>
```

### docker clean up
```
docker system prune
```

## Resources
- [React libraries](https://www.robinwieruch.de/react-libraries/)
  - [React form](https://www.robinwieruch.de/react-form/)
- [axios-with-react-hooks](https://blog.openreplay.com/integrating-axios-with-react-hooks/) 
- [axios - github](https://github.com/axios/axios)
- [typescript](https://react.dev/learn/typescript)
- [github action deploy](https://akoskm.com/how-to-publish-docker-images-to-docker-hub-with-github-actions)
- [react docker examples](https://docs.docker.com/samples/react/)
- [best-practices-to-containerize-nodejs](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
- [azure secure n-tier app](https://learn.microsoft.com/en-us/azure/app-service/tutorial-secure-ntier-app)
- [docker desktop on ubuntu](https://docs.docker.com/desktop/install/ubuntu/)

## React
install npm

check
npm --version
node --version

### update node.js to latest version
npm install -g n

### install latest stable version of node.js
sudo n lts

### create default react app
sudo npm -g install create-react-app
create-react-app --version

create-react-app my-react-app
cd my-react-app
npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
