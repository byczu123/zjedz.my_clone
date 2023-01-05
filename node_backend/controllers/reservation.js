import { db } from "../db.js"

export const submitReservation = (req, res) => {
    
    const userId = req.body.userId
    const restaurantId = req.body.restaurantId
    const date = req.body.date
    const hour = req.body.hour
    const price = req.body.price
    const people = req.body.peopleValue

    const sql = `INSERT INTO reservation (user_id, restaurant_id, date, hour, people, price) VALUES ('${userId}', '${restaurantId}', '${date}', '${hour}', '${people}', '${price}');`
    console.log(sql)
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({
                error: true,
                message: 'Wystąpił błąd podczas rezerwacji.'
                
            });
        } else {
            res.send({
                error: false,
                message: 'Rezerwacja zatwierdzona.',
                registered: true
            });
        }   
    })
}