export interface IError {
    code: string,
    msg: string,
}

export interface DBHandler{
    tableName: string,
    query: string,
    condition: object,
}