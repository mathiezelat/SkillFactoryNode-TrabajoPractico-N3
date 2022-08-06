const express = require('express')
const morgan = require('morgan')

const v1UsersRoute = require('./v1/routes/users.js')
const v1CategoriesRoute = require('./v1/routes/categories.js')
const v1PostsRoute = require('./v1/routes/posts.js')

const app = express()

// Variables
const port = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/users', v1UsersRoute)
app.use('/api/v1/categories', v1CategoriesRoute)
app.use('/api/v1/posts', v1PostsRoute)

// Listen
app.listen(port, () => {
	console.log(`🚀 Servidor en el puerto ${port}`)
})
