module.exports = {
    "verbose": true,
    "transform": {
        ".*": "<rootDir>/node_modules/babel-jest"
    },
    "moduleFileExtensions": [
        "js",
        "json",
        "jsx"
    ],
    "moduleNameMapper": {
        "^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS)$": "EmptyModule"
    },
    "transformIgnorePatterns": [
        "/node_modules/"
    ],
    "unmockedModulePathPatterns": [
        "<rootDir>/node_modules/react",
        "<rootDir>/node_modules/react-dom",
        "<rootDir>/node_modules/react-addons-test-utils",
        "<rootDir>/EmptyModule.js"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>/enzyme.config.js"
    ]
}