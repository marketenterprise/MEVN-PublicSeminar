import { PrismaClient } from '@prisma/client'

export const _W = (DB_URL?: string): any => {
  const dbUrl = DB_URL || _DB_URL_W()
  if (!global?._wr_write) {
    global._wr_write = new PrismaClient({datasources: {db: {url: dbUrl}}}) as any
  } 

  return global._wr_write 
}

export const _R = (DB_URL?: string): any => {
  const dbUrl = DB_URL || _DB_URL_R()
  if (!global?._wr_read) {
    global._wr_read = new PrismaClient({datasources: {db: {url: dbUrl}}})
  } 

  return global._wr_read 
}

const _DB_URL_W = (): string => {
  const DB_CONNECTION = process.env?.DB_CONNECTION || "mysql"
  const DB_HOST = process.env?.DB_W_HOST || process.env?.DB_HOST || ""
  const DB_PORT = process.env?.DB_W_PORT || process.env?.DB_PORT || "3306"
  const DB_USERNAME = process.env?.DB_W_USERNAME || process.env?.DB_USERNAME || ""
  const DB_PASSWORD = process.env?.DB_W_PASSWORD || process.env?.DB_PASSWORD || "3306"

  return _DB_URL(DB_CONNECTION, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD)
}

const _DB_URL_R = (): string => {
  const DB_CONNECTION = process.env?.DB_CONNECTION || "mysql"
  const DB_HOST = process.env?.DB_R_HOST || process.env?.DB_HOST || ""
  const DB_PORT = process.env?.DB_R_PORT || process.env?.DB_PORT || "3306"
  const DB_USERNAME = process.env?.DB_R_USERNAME || process.env?.DB_USERNAME || ""
  const DB_PASSWORD = process.env?.DB_R_PASSWORD || process.env?.DB_PASSWORD || "3306"

  return _DB_URL(DB_CONNECTION, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD)
}

const _DB_URL = (DB_CONNECTION: string, DB_HOST: string, DB_PORT: string, DB_USERNAME: string, DB_PASSWORD: string): string => {
  return `${DB_CONNECTION}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
}