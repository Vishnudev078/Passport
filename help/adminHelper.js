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
    },
  
  sumbitDetails:()=>{
    return new Promise(async (resolve, reject) => {
      const query='INSERT INTO details () VALUES()';
      await db.promise().query().then((result)=>{
        resolve(result);
      }).catch((err)=>{
        reject(err);
        console.log("Error while Insertion");  
      })
    })
  }
}