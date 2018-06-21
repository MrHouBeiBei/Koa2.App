const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    console.log(666)
    ctx.body = 'Hello World';

});

app.listen(3000);