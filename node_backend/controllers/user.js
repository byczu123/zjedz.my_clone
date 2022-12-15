import { db } from "../db.js"

export const register = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username
    
    if (password && email) {
        // console.log(username, email, password)
        // const data = {
        //     email: email, 
        //     password: password
        // }
        // const dataJSON = JSON.stringify(data)
        // res.send(dataJSON)

        const sql = `INSERT INTO user (email, username, password_hash) VALUES ('${email}', '${username}', '${password}');`
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
    }
}

export const test = (req, res) => {
    res.send("Siema!")
}