import express from "express"
import bodyParser from "body-parser";

const app= express();

app.use(express.static("public"))
const port=3000;
var Task=[];
var workTask=[];
var leng;
var len;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    Task.push(req.body["task"])
    len = Task.length
    res.render("index.ejs",{
        addtask: Task,
        lengthOfList:len
    })
})
app.post("/worksubmit",(req,res)=>{
    workTask.push(req.body["task"])
    leng=workTask.length;
    res.render("work.ejs",{
        Work:workTask,
        Leng:leng,
    })
})

app.get("/index",(req,res)=>{
    res.render("index.ejs",{
        addtask: Task,
        lengthOfList:len
    })
})

app.get("/work",(req,res)=>{
    res.render("work.ejs",{
        Work:workTask,
        Leng:leng,
    })
}
)

app.listen(port,()=>{
    console.log(`listening from port ${port}`)
})