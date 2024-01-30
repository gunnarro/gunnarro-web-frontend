[![Node.js CI](https://github.com/gunnarro/gunnarro-web-frontend/actions/workflows/node.js.yml/badge.svg)](https://github.com/gunnarro/gunnarro-web-frontend/actions/workflows/node.js.yml)

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
- npm install react-router-dom
- npm install bootstrap react-bootstrap-icons reactstrap
- npm install material-table @material-ui/core
- npm install @material-ui/icons
- npm install axios

## uninstall module
npm uninstall material-table


## Axios Call Rest API
ref [Axios](https://www.npmjs.com/package/axios)


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


const data = [
{ status: "", inventar: "Vaskemaskin", handling: "19", person1: "", person2: "", person3: "", action: "" },
{ status: "", inventar: "Kjøleskap", handling: "19", person1: "", person2: "", person3: "", action: "" },
{ status: "", inventar: "Oppvaskmaskin", handling: "19", person1: "", person2: "", person3: "", action: "" },
{ status: "", inventar: "Kjøleskap - kjeller", handling: "19", person1: "", person2: "", person3: "", action: "" },
{ status: "", inventar: "Oppvaskmaskin - kjeller", handling: "19", person1: "", person2: "", person3: "", action: "" },

{ status: "", inventar: "sofa - kjeller", handling: "eies av", person1: "", person2: "", person3: true, action: "" },
{ status: "", inventar: "sofa - kjeller", handling: "eies av", person1: "", person2: "", person3: true, action: "" },
]

  <tr>
                    <th scope="row">Vaskemaskin</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Kjøleskap</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Oppvaskmaskin</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Kjøleskap - kjeller</th>
                    <td colspan="1"></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Oppvaskmaskin - kjeller</th>
                    <td colspan="1"></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Sofa - kjeller</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                </tr>
                <tr>
                    <th scope="row">Kjøkkenbord - kjeller</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                </tr>
                <tr>
                    <th scope="row">Trampoline</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                </tr>
                <tr>
                    <th scope="row">Gressklipper</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                </tr>
                <tr>
                    <th scope="row">Bordtennisbord</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td><input class="form-check-input" type="checkbox" value="" checked/></td>
                </tr>
                <tr>
                    <th scope="row">Sofa stue</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Kjøkkenbord stue</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Gulvteppe(r) stue</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">TV stue</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Spisesalong, bord, sjenk, stoler, skap</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Sølvtøy</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Glass krystall</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Kjøkken kjøkkenglass & kopper</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Kjøkken bestikk</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Kjøkken kaseroller</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Håndverktøy</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Motorsag</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Vippesag</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">el verktøy øvrig</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Hageredskap</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Bokhyller garasje</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Arkivskap garasje</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Seng hovedsoverrom</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Seng lillerom</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Seng 2.etg høyre</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Skap 2.etg høyre</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Skrivebord 2.etg høyre</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Seng 2. etg venstre</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Smykker</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Bilder kunst</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Knivsamling pappas</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Arkivskap 2. etg kott</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Tegninger i arkivskap 2. etg kott</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Bokhylle stue</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Bøker bokhylle stue</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Familiealbum i bokhylle sture</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Pyntegjenstander i bokhylle sture</th>
                    <td colspan="1"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>