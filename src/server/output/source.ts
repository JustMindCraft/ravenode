import { SOURCE_NOT_FOUND } from "./constants";

export default async function sourceMsg(
  msg: any
)
{
    // console.log({msg});
    
    switch (msg) {
        case SOURCE_NOT_FOUND:
            return {
                httpStatus: 404,
                code: SOURCE_NOT_FOUND,
                type: "source" 
            }
        default:
            return msg;
    }

}