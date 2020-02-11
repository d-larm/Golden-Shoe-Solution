module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "standard",
    // "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    // "class-property"
  ],
  "rules": {
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error",
      "as-needed",
      {
        "requireForBlockBody": false
      }
    ],
    "computed-property-spacing": [
      "error",
      "always"
    ],
    "func-names": [
      "error",
      "never"
    ],
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": false, 
        "optionalDependencies": false, 
        "peerDependencies": false
        // "packageDir": [
        //   "./",
        //   "../"
        // ]
      }
    ],
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "linebreak-style": 0,
    "no-await-in-loop": 0,
    "no-loop-func": 0,
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-restricted-syntax": 0,
    "no-shadow": 0,
    "no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "prefer-template":2,
    "semi": [
      "error",
      "never"
    ],
    "semi-style": [
      "error",
      "first"
    ],
    "space-in-parens": [
      "error",
      "always",
      {
        "exceptions": [
          "empty"
        ]
      }
    ],
    "valid-jsdoc": [
      "warn",
      {
        "preferType": {
          "array": "Array",
          "boolean": "Boolean",
          "number": "Number",
          "object": "Object",
          "string": "String"
        },
        "requireReturn": false
      }
    ]
  }
}
