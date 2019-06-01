import app from './bootstrap/app';
import ravenode from '../ravenode';

function middle(instance:any){
    console.log(instance.api);
    
}

const init = async () => {
    app.listen(3000);
    const server:any = await ravenode.serve();
    const instance:any = await ravenode.init();
    ravenode.use(instance, middle);
    console.log('server runing at port 3000');
}

init();
