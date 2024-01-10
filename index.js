import express from "express";

const app= express();
const port = 3000;

app.use("/",(req,res)=>{
    const today = new Date();
    const date = today.getDay();

    let type="Its a Weekeday";
    let adv="It's Time to Work Harder";

    if(date === 0 || date === 6)
    {
        type="a Weekend";
        adv ="a Weekend Have a Fun";
    }
    res.render("index.ejs",{datatype: type, advice: adv});
});

app.listen(port,()=>{
    console.log(`Serving on Port ${port}`);
});