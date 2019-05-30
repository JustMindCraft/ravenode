import { IError } from "../defination/interface/message";

export default function APIError(message:IError){
    this.code = message.code;
    this.msg = message.msg;
}