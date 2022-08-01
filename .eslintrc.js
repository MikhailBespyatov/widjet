/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/extensions': 0,
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 0,
        'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/self-closing-comp': 0,
        'react/sort-comp': 0,
        'react/jsx-sort-props': 2,
        'react/no-did-update-set-state': 0,
        'react/static-property-placement': 0,
        'react/display-name': 0,
        'react/prop-types': 0,

        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': 0,
        'react/prefer-stateless-function': 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-undef': 'off',
        curly: ['error', 'all'],
        'no-unused-expressions': 'error',
    },
    env: {
        browser: true,
        node: true,
    },
    globals: {
        dataLayer: true,
    },
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
        react: {
            version: 'detect',
        },
    },
};
