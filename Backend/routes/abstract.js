const express=require('express');
const app=express();
const passport=require('passport');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));