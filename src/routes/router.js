const express = require('express');
const router = express.Router();
const pdf_controller = require('../controller/pdf_Controller');


router.get('/pdf-gen', pdf_controller.pdfMethod);



module.exports = router