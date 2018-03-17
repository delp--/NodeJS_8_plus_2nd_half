var path = require('path');

var plugins = [];

module.exports = {
    entry: './src/index.ts',
    target: 'node',  /*  In this example, using node webpack
    will compile for usage in a Node.js-like environment
    (uses Node.js require to load chunks and not touch any built
     in modules like fs or path).  */
    devtool: 'source-map',
    externals: [
        /^[a-z\-0-9]+$/  //ignores node_modules folder
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'build'),
        libraryTarget: "commonjs", //How your library is exposed
    },
    plugins: plugins,
    resolve: {
        extensions: ['.webpack.js', '.ts', '.tsx', '.js'],
        modules: [
            './node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    typeCheck: true, // enables type checked rules
                    failOnHint: true,  //Fails the build if it doesn't like you code
                    fix: true // Auto fix linting errors
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader', //TypeScript loader for webpack
                    }
                ]
            }]
    }
};
