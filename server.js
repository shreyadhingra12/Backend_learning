//server ko create karna
const app = require("./src/app")

//listen method hoti h server ko start karne ke liye
app.listen(3000,()=>{
    console.log("server is running on port number 3000");
})//()=>{} yeh callback hoti h jo ki server ko start karne ke liye hoti h

