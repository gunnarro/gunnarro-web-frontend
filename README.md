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


# create react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
