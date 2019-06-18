import app from './bootstrap/app';
import  ravenode  from '../ravenode';

function middle(instance:any){
    // console.log(instance.api);
    if(instance.api){
        console.log("ipfs is runner");
    }
    
}

const init = async () => {
    const server:any = await ravenode.serve();
    const instance:any = await ravenode.init();
    ravenode.use(instance, middle);
    app.listen(3000);
    console.log('server runing at port 3000');
}

init();
