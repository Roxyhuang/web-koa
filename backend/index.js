const Koa = require('koa');
const app = new Koa();
require('babel-register');

// response
app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

app.listen(3000);