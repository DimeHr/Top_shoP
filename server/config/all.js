'use strict';

module.exports = {
    app: {
        title: 'Top shoP',
        description: 'Full-Stack Javascript with MongoDB, Redis, Express, Node.js, and React',
        keywords: 'MongoDB, Redis, Express, Node.js, API'
    },
    env: process.env.NODE_ENV,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    url:  process.env.URL  || '//' + (process.env.HOST || 'localhost') + ((process.env.PORT && process.env.PORT !== 80) ? (':' + process.env.PORT) : '' ),
    templateEngine: 'handlebars'
};
