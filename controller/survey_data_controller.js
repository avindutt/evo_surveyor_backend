const SurveyData = require('../models/surveySchema');

module.exports.index = async (req, res) => {
    try {
        const data = await SurveyData.create(req.body);
        console.log(data);
        return res.status(200).json(data);        
    } catch (error) {
        console.log('Error in creating survey data', error);
        return res.status(400).json({
            message: 'Error in creating survey data',
            error
        });
    }
}

module.exports.getData = async (req, res) => {
    try {
        const data = await SurveyData.find();
        console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error in fetching data', error);
        return res.status(400).json({
            message: 'Error in fetching survey data',
            error
        });
    }
}