import * as fs from 'fs';
import { STATIC_PATH } from '../defination/constant/path';
export default function renderHTML(){
    return async (ctx:any, next:any) => {
        console.log(STATIC_PATH);
        
         ctx.renderHTML = (htmlName:string) => {
             console.log(htmlName);
             
             ctx.response.type = 'html';
             console.log(STATIC_PATH+htmlName);
             
             ctx.response.body = fs.createReadStream(STATIC_PATH+htmlName);
         }
         await next();
     }
 }