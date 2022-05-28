const express = require('express');
const router  = express.Router();
const { Companies } = require('../models');
const obj = require('../return')

router.get('/', async (req,res)=>{
     const companyList =  await Companies.findAll();
     data = new obj.returnType(companyList,null);
    res.json(data);
});

router.post('/',  async (req,res)=>{
    const company = req.body;
    await Companies.create(company);
    res.json(company)
});


module.exports = router;