const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

// Users
router.get('/users/:email', controllers.Users.getUserByEmail);

// Info
router.get('/info/:userId', controllers.Info.getInfoByUserId);

// Orders
router.get('/orders/:orderId', controllers.Orders.getOrderById);
router.get('/orders/user/:userId', controllers.Orders.getOrdersByUserId);

//CC
router.get('/cc/user/:userId', controllers.PaymentInfo.getCardsByUserId);

// Meals
router.get('/meals', controllers.Meals.getMeals);

// Auth
router.post('/auth/register', controllers.Auth.registerUser);

router.all('*', async (req, res) => {
  try {
    res.status(404).send({
      timestamp: Date.now,
      msg: 'No route matches your request',
    });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
