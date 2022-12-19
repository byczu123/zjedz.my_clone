import { db } from "../db.js"

export const getRestaurants = (req, res) => {
    const sql = `SELECT restaurant_id, name, menu_id, description FROM restaurant;`
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