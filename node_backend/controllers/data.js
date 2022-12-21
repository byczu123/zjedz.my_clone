import { db } from "../db.js"

export const getHomeFormData = (req, res) => {
    const sql = `SELECT DISTINCT location FROM restaurant`
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({message: "Wystąpił błąd"})
            return
        }
        res.send(JSON.stringify(results))
        return
    })
}