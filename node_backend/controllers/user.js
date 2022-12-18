import { db } from "../db.js"
import { hashPassword, correctEmail, comparePaswords } from "../utils.js"
import jwt from "jsonwebtoken"

export const register = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username

    if (!(email && password && username)) {
        res.send({message: "Missing fields. Please try again"})
        return
    }
    if (!correctEmail(email)) {
        res.send({message: "Invalid email address. Please try again"})
        return
    }
    if (username && email && password) {
        // const userExists = await usernameExists(username)
        // if(userExists) res.send({message: "Siuu"})
        hashPassword(password)
        .then(hashedPassword => {
            const sql = `INSERT INTO user (email, username, password_hash) VALUES ('${email}', '${username}', '${hashedPassword}');`
            console.log(sql)
            db.query(sql, (error, results) => {
                if (error) {
                    res.send({
                        error: true,
                        message: 'Wystąpił błąd podczas rejestracji użytkownika.'
                    });
                } else {
                    res.send({
                        error: false,
                        message: 'Użytkownik został zarejestrowany pomyślnie.'
                    });
                }   
            })
        })  
    } else {
        res.send({message: "Coś innego. Naura"})
    }

    // console.log(username, email, password)
    // const data = {
    //     email: email, 
    //     password: password
    // }
    // const dataJSON = JSON.stringify(data)
    // res.send(dataJSON)
}

export const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    if (!(email && password)) {
        res.send({message: "Missing data. Please try again"})
        return
    }
    const sql = `SELECT * FROM user WHERE email = '${email}'`
    console.log(sql)
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({message: "Wystąpił błąd"})
            return
        }
        if (results.length === 0) {
            res.send({message: "Dane nieprawidłowe"})
            return
        }
        results.map(result => {
            const hashedPassword = result.password_hash
            // console.log(hashedPassword)
            comparePaswords(password, hashedPassword)
            .then(comparison => {
                if (comparison) {
                    const secret = process.env.JWT_SECRET
                    console.log(secret)
                    const payload = {
                        id: result.id,
                        username: result.username,
                        email: result.email,
                    }
                    const options = {
                        expiresIn: '1h'
                    }
                    const token = jwt.sign(payload, secret, options)
                    res.cookie('token', token) // ustawienie ciasteczka
                    res.send({
                        token: token,
                        username: result.username,
                        email: result.email,
                        message: "Użytkownik zalogowany pomyślnie"
                    })
                }
                else {
                    res.send({message: "Dane nieprawidłowe"})
                }
            })
        })
    })
}
