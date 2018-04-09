const withSass = require('@zeit/next-sass');
module.exports = withSass({
    webpack: config => {
        config.module.rules.push(
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: ['url-loader']
            }
        );
        return config;
    }
});