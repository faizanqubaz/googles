const express=require('express');
const app=express();
const handlebars=require('express-handlebars');
const PORT=4000;
//to use a static files
app.use(express.static('public'))
//in order to set a handlebars
app.use('view engine','handlebars');
app.engine('handlebars',handlebars({defaultLayout:'main'}))
///get a routes
app.get('/home',(req,res)=>{
  res.render('login')
})





app.listen(PORT,()=>{
    console.log('app running at port'+PORT)
})