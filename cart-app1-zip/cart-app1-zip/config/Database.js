const mongoose = require("mongoose");
const db_url = `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ENDPOINT}`;


let connect_database = () => {
    return new Promise((resolve, reject)=>{
        mongoose.connect(db_url, {useNewUrlParser:true, useUnifiedTopology:true});

        mongoose.connection
        .once("open", ()=>{
            console.log("mongo db database connected successfully.");
            const state = mongoose.connection.readyState;
            resolve(state);
        })
        .on("error", (e)=>{
            console.log("unhandled exception occurred.");
            console.log(JSON.stringify(e, null, 3));
            reject();
        })
    });
}

module.exports.connect_database = connect_database;