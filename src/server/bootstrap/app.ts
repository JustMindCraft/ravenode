import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as serve  from 'koa-static';
import { STATIC_PATH } from '../defination/constant/path';
import renderHTML from '../middles/renderHTML';
import controller from '../controllers';
import restify from '../middles/restify';
import ApiSetting from '../config/ApiSetting';
import * as bodyParser from 'koa-bodyparser';



const home   = serve(STATIC_PATH);
const app = new Koa();
const router = new Router();
controller(router);
app.use(home);
app.use(renderHTML());
app.use(bodyParser());
app.use(restify(ApiSetting.BASIC_PATH));
app.use(router.routes());


export default app as any;