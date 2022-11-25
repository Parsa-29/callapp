const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

// middlewares
app.use(json());
app.use(bodyParser());

// routes
router.get('/api', index);

async function index(ctx) {
    ctx.body = require('./data.json');
}

// add router middleware
app.use(router.routes()).use(router.allowedMethods());

// listen
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});