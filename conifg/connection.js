var express=require('express')
var mysql=require('mysql2')

const db=mysql.createConnection(
    {
        host:'localhost',
        user:'Sachin',
        password:'Sachin@2004',
        database:'passportproject'
    }
);

module.exports=db; 
