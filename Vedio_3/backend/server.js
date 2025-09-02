import express from 'express';

const app=express();



//list of five jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
        id:1,
        title:'A jokes',
        content:'This is a joke A'
    },
    {
        id:2,
        title:'B jokes',
        content:'This is a joke B'
    },
    {
        id:3,
        title:'C jokes',
        content:'This is a joke C'
    },
    {
        id:4,
        title:'D jokes',
        content:'This is a joke D'
    },
    {
        id:5,
        title:'E jokes',
        content:'This is a joke E'
    }
    ]
    res.send(jokes);
});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});