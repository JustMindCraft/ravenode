import User from "./User";

export interface IMongooseModel<T, U> {
    (model: T, fetchParams: U) : T,
} 
export default [
    User,
]