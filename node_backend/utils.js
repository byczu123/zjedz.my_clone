// Tu znajdują się funckje pomocnicze 

import bcrypt from "bcrypt"
import { db } from "./db.js"

export const hashPassword = (password) => {
    const salt = 10
    const hashedPassword = bcrypt.hash(password, salt)
    return hashedPassword
}

export const comparePaswords = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}

export const correctEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email)
}

export const usernameExists = (username) => {
    const sql = `SELECT * FROM user WHERE username = '${username}'`
    const res = null
    db.query(sql, (error, results) => {
        if (error) throw error
        return results.length > 0;
    })
}