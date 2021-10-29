const express = require('express')
const app = express()
const port = 8080
const mongoose=require('mongoose')
require('dotenv/config')
const bodyParser=require('body-parser')
const cors=require('cors')


//Import routers
// const controllersRouters=require('./routers/controllers');
const usersRouters=require('./routers/users');
const bitsRouters=require('./routers/bits');
const systemsRouters=require('./routers/systems');


//Middlewares
app.use(cors())
app.use(bodyParser.json())
// app.use('/controllers',controllersRouters);
app.use('/users',usersRouters);
app.use('/bits',bitsRouters);
app.use('/systems',systemsRouters);

//Routes
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
  

//DB conect
mongoose.connect(process.env.DB_CONNECTION
,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('mongodb connections!'))
.catch((err)=>console.log('mongodb conections Error :',err));


  //app start
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})