export default function controller(router:any){
    return router.get('/', async (ctx:any) => {
        ctx.renderHTML('index.html');
    }).get('/register', async (ctx:any)=>{
        ctx.renderHTML('register.html');
    })
    .get('/admin', async (ctx:any)=>{
        ctx.renderHTML('admin.html');
    });
}