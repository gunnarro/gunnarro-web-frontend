const react = require('eslint-plugin-react');

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // react-in-jsx-scope rule is turned off, so ESLint won’t throw errors when you fail to import React.
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        }
}
