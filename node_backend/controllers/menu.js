import { db } from "../db.js"

export const getMenu = (req, res) => {
    const menu_id = req.params.menu_id
    console.log(menu_id)
    const sql = `SELECT menu_id, name FROM menu WHERE menu.menu_id='${menu_id}';`
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