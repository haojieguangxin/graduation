/**
 * Created by zhang-j on 2018/4/10.
 */
const db = require('./db.js');
const route = require('./route.js');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(route);

server.use(middlewares);
server.use(rewriter);
server.use(router);
server.listen(4000, () => {
    console.log('Json Server is running！');
});