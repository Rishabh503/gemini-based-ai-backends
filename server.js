require('dotenv').config()

const app=require('./src/app.js')

app.listen( process.env.PORT || 4000 ,()=>{
    console.log("server is running ?? yes it is")
})

