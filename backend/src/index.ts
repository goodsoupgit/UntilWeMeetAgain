const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const thoughtRoutes = require("./routes/ThoughtRoutes.ts").default

const app = express()
const PORT = process.env.PORT
const DB_Name = "thoughtsDB"
const MONGO_URL= process.env.MONGO_URI

app.use(cors())
app.use(express.json())

mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB Connected to database:', DB_Name))
    .catch((e: Error) => {
        console.error(` Database connection failed: ${e.message}`);
    });

app.use('/api/thoughts', thoughtRoutes)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))