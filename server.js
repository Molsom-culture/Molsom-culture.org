
const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
app.use(express.json());
app.get('/api/health',(req,res)=>res.json({status:'ok'}));
app.post('/api/login',(req,res)=>{
 const token=jwt.sign({user:'admin'},'change_me',{expiresIn:'7d'});
 res.json({token});
});
app.listen(5000);
