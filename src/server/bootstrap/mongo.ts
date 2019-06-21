import seed from '../config/seed';
import * as  mongoose from 'mongoose';
export default function initMongo(){
    mongoose.connect(seed.db, {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("数据库链接成功");
    });  
}