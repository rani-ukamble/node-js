// const app = require('./app.js');  

// const PORT = process.env.PORT || 3000; 

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



const app = require("./app.js");

const port = process.env.PORT || 3000; 

app.listen(port, ()=>{
    console.log("server running...")
});


