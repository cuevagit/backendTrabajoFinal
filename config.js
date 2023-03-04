import dotenv from 'dotenv'
dotenv.config()

export const MYSQL=process.env.MYSQL
export const SQLITE=process.env.SQLITE
export const DBNAME=process.env.DBNAME
export const USERDB=process.env.USERDB
export const FIRESTORE=process.env.FIRESTORE
export const MONGOCONECTION=process.env.MONGOCONECTION
export const MONGODB=process.env.MONGODB
export const MONGOOSE=process.env.MONGOOSE
export const PERSISTENCIAELEGIDA=process.env.PERSISTENCIAELEGIDA
export const SECRETKEY=process.env.SECRETKEY
export const SALTENV=process.env.SALTENV
export const NODE_ENV=process.env.NODE_ENV
export const MODO_POR_DEFECTO=process.env.MODO_POR_DEFECTO
export const PUERTO_POR_DEFECTO=process.env.PUERTO_POR_DEFECTO
export const TIPO_USUARIO_POR_DEFECTO=process.env.TIPO_USUARIO_POR_DEFECTO
export const SERVICEEMAIL=process.env.SERVICEEMAIL
export const PORTEMAIL=process.env.PORTEMAIL
export const EMAILADMIN=process.env.EMAILADMIN
export const PASSWORDADMIN=process.env.PASSWORDADMIN
export const USUARIOADMIN=process.env.USUARIOADMIN
