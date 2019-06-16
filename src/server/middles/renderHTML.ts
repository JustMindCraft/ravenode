import * as fs from 'fs';
import { STATIC_PATH } from '../defination/constant/path';
export default function renderHTML(){
    return async (ctx:any, next:any) => {
         ctx.renderHTML = (htmlName:string) => {
             ctx.response.type = 'html';
             ctx.response.body = fs.createReadStream(STATIC_PATH+htmlName);
         }
         await next();
     }
 }