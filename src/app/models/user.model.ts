export interface login {
    usuario: string;
    password: string;
}

export interface user {
    ID: string,
    strUsuario: string,
    strPassword: string,
    strNombre: string
}

export interface userCreate {
    usuario:string, 
    password:string, 
    nombre:string
}

export interface userUpdate {
    id:number,
    usuario:string, 
    password:string, 
    nombre:string
}
