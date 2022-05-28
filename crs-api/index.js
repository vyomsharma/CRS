const express = require('express');
const app = express();
app.use(express.json());
const db = require('./models');

// Routers

const companyRouter = require('./routes/Companies');
app.use('/companies',companyRouter)

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log('server started on port 3001');
    });
})



