const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({
        "siema": [
            "siema1", "siema2", "siema3"
        ]
    })
})

app.listen(5000, () => console.log('Server has started (port 5000)'))