import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import bodyParser from 'body-parser';

import HEXRoutes from './routes/HEXRoutes.js'
import WEXRoutes from './routes/WEXRoutes.js'
import BlogRoutes from './routes/BlogRoutes.js'
import PSCRoutes from './routes/PSCRoutes.js'
import TCFRoutes from './routes/TCFRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json({
    limit: '50mb'
}));
app.use(bodyParser.json({
    limit: '50mb'
})); // application/json
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 1000000,
}));

app.use('/api/HEX', HEXRoutes);
app.use('/api/WEX', WEXRoutes);
app.use('/api/Blog', BlogRoutes);
app.use('/api/PSC', PSCRoutes);
app.use('/api/TCF', TCFRoutes);
    /* app.use('/api/users', userRoutes)
    app.use('/api/orders', orderRoutes)
    app.use('/api/upload', uploadRoutes)
     */


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)