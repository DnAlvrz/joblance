const router = require('express').Router();
const { listOffer, getOffer, addOffer, updateOffer, deleteOffer } = require('../controllers/offer');

router.get('/', listOffer);
router.post('/', addOffer);
router.get('/:offerId', getOffer);
router.put('/:offerId', updateOffer);
router.delete('/:offerId', deleteOffer);




module.exports = router;