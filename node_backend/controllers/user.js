import { db } from "../db.js"
import { hashPassword, correctEmail } from "../utils.js"

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


export const test = (req, res) => {
    res.send("Siema!")
}