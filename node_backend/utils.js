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

export const correctPasswords = (password, confirmPassword) => {
    return password === confirmPassword
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

export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
export function deleteRows() {
    let today = new Date();
    const ftoday = formatDate(today)
    const sql = `CALL deleteExpiredRows('${ftoday}');`
    console.log(sql)
    db.query(sql)
}