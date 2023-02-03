import { db } from "../db.js"

export const getRestaurants = (req, res) => {
    const currentDate = req.body.currentDate
    const currentHour = req.body.currentHour
    const currentPeople = req.body.currentPeople
    const currentLocation = req.body.currentLocation
    const sql = `SELECT DISTINCT r.restaurant_id, r.name, r.location, r.link
    FROM restaurant r
    JOIN reservation res 
    ON r.restaurant_id = res.restaurant_id
    ${currentLocation !== "Wszystkie miasta" ? "WHERE r.location = '" + currentLocation + "'" : ""}
    AND res.hour = '${currentHour}' AND res.date = '${currentDate}' AND res.people = '${currentPeople}' AND res.user_id IS NULL`
    console.log(sql)
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({message: "Wystąpił błąd"})
            return
        }
        console.log(results)
        res.send(JSON.stringify(results))
        return
    })
}

export const getAllRestaurants = (req, res) => {
    const sql = `SELECT * from restaurant`
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({message: "Wystąpił błąd"})
            return
        }
        console.log(results)
        res.send(JSON.stringify(results))
        return
    })
}

export const getRestaurant = (req, res) => {
    const restaurant_id = req.params.restaurant_id
    const sql = `SELECT restaurant_id, name, location, menu_id, description, link FROM restaurant WHERE restaurant_id='${restaurant_id}';`
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