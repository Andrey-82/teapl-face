// server.js
// With express
const express = require('express');
const next = require('next');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const nextI18next = require('./i18n');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    server.use(nextI18NextMiddleware(nextI18next));
    server.use(handler).listen(3000);
});
