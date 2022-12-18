import { db } from "../db.js"

export const getTables = (req, res) => {
    const restaurant_id = req.params.restaurant_id
    console.log(restaurant_id)
    const sql = `SELECT table_id, restaurant_id, table_position, price, number_of_places FROM restaurant_table WHERE restaurant_id='${restaurant_id}';`
    console.log(sql)
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