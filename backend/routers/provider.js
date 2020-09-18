/**
 * @description Express router for provider specifc data.
 * @author Jithin Zacharia
 */

const router = require('express').Router();
const  getProviderController = require('../controllers/provider/getProvidersController');
const getProviderDetailsController = require('../controllers/provider/getProviderDetailsController')
const getProviderCityController = require('../controllers/provider/getProviderDetailsByCityController')
const getAllProvidersController = require('../controllers/provider/getAllProvidersDetailsController')

router.get('/all', getProviderController.getAllProvider);
router.get('/:partnerId',getProviderDetailsController.getProviderDetails)
router.get('/city/:city',getProviderCityController.getProviderDetailsByCity)
router.get('',getAllProvidersController.getAllProviders)

module.exports = router;
