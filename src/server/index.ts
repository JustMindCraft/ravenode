import app from './bootstrap/app';
import ravenode from './ravenode';

ravenode.start();
app.listen(3000);

console.log('server runing at port 3000');