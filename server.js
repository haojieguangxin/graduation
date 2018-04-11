/**
 * Created by zhang-j on 2018/3/19.
 */
const express = require('express');
const next = require('next');
const devProxy = require('./mock/proxy.js');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // server.get('/p/:id', (req, res) => {
    //     const actualPage = '/post';
    //     const queryParams = { id: req.params.id };
    //     app.render(req, res, actualPage, queryParams);
    // });

    // use proxy for mock
    if (dev && devProxy) {
        const proxyMiddleware = require('http-proxy-middleware');
        Object.keys(devProxy).forEach(function (context) {
            server.use(proxyMiddleware(context, devProxy[context]));
        });
    }

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) {
            throw err;
        }
        console.log('> Ready on http://localhost:3000');
    });
}).catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
});