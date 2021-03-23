const express = require('express');
const router = express.Router();
const User = require('../db/models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/insert', async function (req, res, next) {
  try {
    console.log(req.body.laptop_checkbox)
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      laptop_checkbox: req.body.laptop_checkbox,
      pc_checkbox: req.body.pc_checkbox,
      printer_checkbox: req.body.printer_checkbox,
      laptop_text: req.body.laptop_text,
      pc_text: req.body.pc_text,
      printer_text: req.body.printer_text,
      code: req.body.code,
      percent_revenue: req.body.percent_revenue,
      percent_product: req.body.percent_product,
      price_checkbox: req.body.price_checkbox,
      quality_checkbox: req.body.quality_checkbox,
      other_checkbox: req.body.other_checkbox
    })

    console.log(user)

    await user.save()
    res.redirect('/?success=true');
  } catch (error) {
    console.log(error);
    res.redirect('/?success=false');
  }
}, (err, req, res, next) => res.status(404).send({ error: err }))

module.exports = router;
