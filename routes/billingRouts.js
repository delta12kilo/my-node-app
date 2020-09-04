const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req,res) => {
        // console.log(req.body);
       

        const charge = await stripe.charges.create({
            description: '$5 for 5 credit',
            shipping: {
                name: req.user.name,
                address: {
                    line1: '510 Townsend St',
                    postal_code: '98140',
                    city: 'San Francisco',
                    state: 'CA',
                    country: 'US',
                },
            },
            amount: 500,
            currency: 'usd',
            source: req.body.id
        });

        // console.log(charge);
        req.user.credits += 5;
        const user = await req.user.save();
        // console.log('credit: ',user);

        res.send(user);
    });
};
