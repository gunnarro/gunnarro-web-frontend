# gunnarro-web-frontend


## React
### First React Application
```
// install node.js
install npm

// check
npm --version
node --version

// update node.js to latest version
npm install -g n

// install latest stable version of node.js
sudo n lts

// create default react app
sudo npm -g install create-react-app
create-react-app --version

// create new react app
create-react-app my-react-app

// or create new react app from template
create-react-app gunnarro-web-frontend --template [template-name]

cd my-react-app
npm start
```

### NPM, NPX and YARN

NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them.3

While NPM fetches packages from the online npm registry for every 'install' command, YARN stores dependencies locally in most cases and fetches packages from a local disk, given that dependency has been installed earlier. This makes YARN considerably faster than NPM when it comes to fetching packages.

#### NPN
Npm is the package manager that comes when installing Node. 

#### NPX
Npx can run a command from a local or remote package. Npx will search node_modules/bin folder for the package, and if its not there, it will download it and run it

#### YARN
Yarn is a package manager that installs dependencies for your project. It’s an alternative to using npm.


### Webpack
Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. Modules are reusable chunks of code built from your app's JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website.

### React Resources
- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [React Templates](https://www.npmjs.com/search?q=cra-template-*)

# Resources
- [Micro Frontend](https://micro-frontends.org/)
- [Micro Frontend state management](https://medium.com/sysco-labs/state-management-in-micro-frontends-ee273830f95f)