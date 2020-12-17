const express = require("express");
const router = express.Router();
const Person = require("../Models/person");

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (e) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
    favoriteFoods: req.body.favoriteFoods,
  });
  console.log(person);
  try{
 const savedPerson= await person.save();
 res.status(200).json(savedPerson);
  }
  catch(err){
    res.status(404).json({message:err})

  }
});

router.post("/", async (req, res) => {
  try {
    const arrayofp = await Person.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
    res.status(200).json(arrayofp);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.get('/:name',(req,res)=>{
  Person.find({name:req.params.name},(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
      res.status(200).json(data);
    }
  })
})

router.get('/:name',(req,res)=>{
  Person.findOne({name:req.params.name},(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
      res.status(200).json(data);
    }
  })
})

router.get('/:id',(req,res)=>{
  Person.findById(req.params.id,(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
      res.status(200).json(data);
    }
  })
})

router.post ('/:id',async(req,res)=>{
  await Person.findById(req.params.id,(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
      data.favoriteFoods.push('Hamburger');
      data.save();
    res.status(200).json(data)
    }
  })
})

router.post ('/:name',async(req,res)=>{
  await Person.findOneAndUpdate({name:req.params.name},{age:20},{new:true},(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
    res.status(200).json(data)
    }
  })
})

router.delete('/:id',(req,res)=>{
  Person.findByIdAndRemove(req.params.id,(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
    res.status(200).json(data)
    }
  })
})

router.delete('/',(req,res)=>{
  Person.remove({age:{$gt:20}},(err,data)=>{
    if (err){
      console.log(err)
    }
    else{
    res.status(200).json(data)
    }
  })
})

router.get('/',(req,res)=>{
  Person.find({favoriteFoods:{$all:['djej']}}).sort('name').limit(2).select('-age').exec((err,data)=>{
    if (err){
      console.log(err)
    }
    else{
    res.status(200).json(data)
    }
  })
})
module.exports = router;
