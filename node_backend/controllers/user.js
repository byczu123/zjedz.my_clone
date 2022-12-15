export const register = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    if (password && email) {
        console.log(email, password)
        const data = {
            email: email, 
            password: password
        }
        const dataJSON = JSON.stringify(data)
        res.send(dataJSON)
    }
}

export const test = (req, res) => {
    res.send("Siema!")
}