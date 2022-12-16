// Tu znajdują się funckje pomocnicze 

import bcrypt from "bcrypt"

export const hashPassword = (password) => {
    const salt = 10
    const hashedPassword = bcrypt.hash(password, salt)
    return hashedPassword
}

export const correctEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email)
}