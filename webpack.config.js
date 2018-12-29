var webpack = require('webpack');
module.exports = {
    entry:'./script.js',
    output: {filename: 'bundle.js'},
    module:{
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
              test: /\.jsx?$/
            }
        ]
    }
};