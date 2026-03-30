import express from 'express';
const app=express();
const PORT=3000;
app.use(express.json());

let students=[
    (id:1,name:"John",course:"MCA"),
    (id:2,name:"Jane",course:"BCA")
    
];

app.get('/students',(req,res)=>{{
    res.json(students);
});

app.get('/students/:id',(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));

    app.get('/students/:id',(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));
    if(!student) 
        return res.status(404).json(message:"Student not found");
}

    res.json(student);
});