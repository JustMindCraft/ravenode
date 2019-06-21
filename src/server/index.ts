import app from './bootstrap/app';
import  ravenode  from '../ravenode';
import initMongo from './bootstrap/mongo';
import { initUsers } from './config/seed';

function middle(instance:any){
    if(instance.api){
        console.log("ipfs is runner");
    }
    
}

const init = async () => {
    try {
        initMongo();
        await initUsers();
    } catch (error) {
        throw error;
    }
    const server:any = await ravenode.serve();
    const instance:any = await ravenode.init();
    ravenode.use(instance, middle);
    app.listen(3000);
    console.log('server runing at port 3000');
}

init();
