import { db } from "../db.js"

export const submitReservation = (req, res) => {
    const userId = req.body.userId;
    const restaurantId = req.body.restaurantId;
    const date = req.body.date;
    const hour = req.body.hour;
    const price = req.body.price;
    const people = req.body.peopleValue;
  
    const checkSql = `SELECT * FROM reservation WHERE restaurant_id='${restaurantId}' AND date='${date}' AND hour='${hour}' AND price='${price}' AND people='${people}' AND user_id IS NOT NULL`;
  
    db.query(checkSql, (error, results) => {
      if (error) {
        console.log(error);
        res.send({
          error: true,
          message: "Wystąpił błąd podczas sprawdzania rezerwacji."
        });
      } else {
        if (results.length > 0) {
          res.send({
            error: true,
            message: "Rezerwacja nie jest już dostepna."
          });
        } else {
          const updateSql = `UPDATE reservation
          SET user_id='${userId}'
          WHERE restaurant_id='${restaurantId}' AND date='${date}' AND hour='${hour}' AND price='${price}' AND people='${people}'`;
  
          db.query(updateSql, (error, results) => {
            if (error) {
              console.log(error);
              res.send({
                error: true,
                message: "Wystąpił błąd podczas rezerwacji."
              });
            } else {
              console.log(results);
              res.send({
                error: false,
                message: "Rezerwacja zatwierdzona.",
                registered: true
              });
            }
          });
        }
      }
    });
  };

export const getFirstHours = (req, res) => {
    const restaurantId = req.body.restaurantId
    const currentDate = req.body.currentDate
    const currentPeople = req.body.currentPeople
    const sql = `SELECT DISTINCT hour FROM reservation 
    WHERE restaurant_id = '${restaurantId}' AND date = '${currentDate}' AND people = '${currentPeople}' AND user_id IS NULL 
    ORDER BY hour ASC 
    LIMIT 4`
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({
                error: true,
                message: `Wystąpił błąd podczas wybierania godzin dla ${restaurantId}.`
                
            });
        } else {
            console.log(results)
            res.send({
                error: false,
                message: 'Godziny pobrane.',
                hours: results,
                registered: true
            });
        }   
    })
}

export const getPossibleHours = (req, res) => {
    const restaurantId = req.body.restaurantId
    const currentDate = req.body.currentDate
    const currentPeople = req.body.currentPeople
    const sql = `SELECT hour FROM reservation 
    WHERE restaurant_id = '${restaurantId}' AND date = '${currentDate}' AND people = '${currentPeople}' AND user_id IS NULL 
    ORDER BY hour ASC`
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.send({
                error: true,
                message: `Wystąpił błąd podczas wybierania godzin dla ${restaurantId}.`
                
            });
        } else {
            console.log(results)
            res.send({
                error: false,
                message: 'Godziny pobrane.',
                hours: results,
                registered: true
            });
        }   
    })
}