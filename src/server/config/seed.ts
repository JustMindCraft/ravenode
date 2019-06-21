import User from "../mongoose/User";
import * as uuid from 'uuid'

const seed =  {
    db: "mongodb://localhost:27017/ravenode",
    superAdmin: {
        email: "simontaosim@protonmail.com",
        username: "simontaosim",
        password: "admin2019best"
    }
}


export async function  initUsers(){
    const adminCount  = await User.countDocuments({username: seed.superAdmin.username});
    console.log(adminCount);
    
    if(adminCount === 0){
        await User.createByPassword(seed.superAdmin as any);
    }
    for (let index = 0; index < 12; index++) {
        const username = "testuser"+index.toString();
        const usernameCount = await User.countDocuments({username});

        if(usernameCount!==0){
            continue;
        }
        const password = "testuser"+index.toString()+"password";
        const email = "testuser@"+index.toString()+".xx.com";
        const mobile = "unset_"+ uuid.v4();
        const wechat = "unset_"+ uuid.v4();
        const qq = "unset_"+ uuid.v4();
        try {
            await User.createByPassword({
                username, password, email, mobile,wechat, qq
            })
        } catch (error) {
            throw error;
            
        }
       
        
    }
}

export async function initRoles(){

}


export async function initPermissions(){

}

export async function initUserGroups(){

}

export async function  initACLS(){

}


export default seed;