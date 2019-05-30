export default function controller(router:any){
    return router.get('/', async (ctx:any) => {
        ctx.renderHTML('about.html');
    });
}