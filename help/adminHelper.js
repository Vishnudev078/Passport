var express=require('express');
const db=require('../conifg/connection');

module.exports={
    checkLogin:(username,password)=>{
         return new Promise(async (resolve, reject) => {
            await db.promise().query('SELECT * FROM users WHERE username=?',[username]).then(([rows])=>{
              if(rows.length>0)
              {
                var user=rows[0];
                if(user.password===password)
                {
                    resolve(true);
                }else{
                    reject('Invalid');
                }
              }else{
                reject('Invalid');
              }
            }).catch((err)=>{
                reject(err);
            })
         })
    }
}