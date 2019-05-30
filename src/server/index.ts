import app from './bootstrap/app';
import ravenode from './ravenode';

const init = async () => {
    app.listen(3000);
    const instance:any = await ravenode.init();
    console.log(instance.gatewayAddr);
    console.log(instance.apiAddr);
    instance.getConfig((err:any, res: any)=>{
        console.log(JSON.stringify(res.API.HTTPHeaders));
    });
    console.log('server runing at port 3000');
}

init();
