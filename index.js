const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
const mongoose=require('mongoose')
const blogpost=require('./schema')
app.use(express.json());
app.use(express.static('static'));

const mongoURL='mongodb+srv://VYashasvi:Anurams2262@yashasvi.scepo.mongodb.net/Schema2'
const connection=mongoose.connect(mongoURL)

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.post('/create', async(req, res)=>{
  let payload=req.body
  console.log(payload)
  try{
    let new_blog=new blogpost(payload)
    await new_blog.save()
    res.send({"message":"Hurray! New blog saved to Database successfully"})
  }catch(error){
    console.log(error)
    res.send({"message":"Could'nt save the new blog to database",error:error.message})
  }
})

app.listen(port, async() => {
  try {
    await connection;
    console.log('Successfully connected to mongoDB')
  } catch (error) {
    console.log('error')
  }
  console.log(`Server is running on http://localhost:${port}`)
});
