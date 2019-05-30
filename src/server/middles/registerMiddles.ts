import APIError from "./APIError";
import restify from "./restify";

export default function registerMiddles(app:any){
    app.use(APIError);
    app.use(restify);
}