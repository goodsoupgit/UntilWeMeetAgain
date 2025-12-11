const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const thoughtRoutes = require("./routes/ThoughtRoutes").default

const app = express()
const PORT = process.env.PORT
const MONGO_URI= process.env.MONGO_URI

app.use(cors())
app.use(express.json())

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected to database:'))
    .catch((e: Error) => {
        console.error(` Database connection failed: ${e.message}`);
    });

app.use('/api/thoughts', thoughtRoutes)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))