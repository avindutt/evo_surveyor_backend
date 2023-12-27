const express = require('express');

const router = express.Router();

const surveyDataController = require('../controller/survey_data_controller');

router.post('/survey-data', surveyDataController.index);
router.get('/get-submissions', surveyDataController.getData);
router.use('/user', require('./user'));

module.exports = router;