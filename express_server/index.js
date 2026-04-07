import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.get("/",(req, res)=>{
    res.send("<h1>My Home page<h1>");

});

app.get("/about", (req, res)=>{
    res.send("<h3>About me page</h3>");
});

app.get("/contact",(req, res)=>{
    res.send("<h3>Contact Us</h3>");
})

app.get("/info",(req, res)=>{
    res.send("<h3>Info page</h3>");
})

app.listen(port,"127.0.0.1",()=>{
    res.send("<h3>Contact Us</h3>");
})