import authKeys from './auth.keys';
import blogKeys from './blog.keys';
import cartKeys from './cart.keys';
import commentKeys from './comment.keys';
import commonKeys from './common.keys';
import dashboardKeys from './dashboard.keys';
import landingKeys from './landing.keys';
import partnerKeys from './partner.keys';
import phoneSalesKeys from './phoneSales.keys';
import productKeys from './product.keys';

const ApiKeys = {
    ...authKeys,
    ...blogKeys,
    ...cartKeys,
    ...productKeys,
    ...landingKeys,
    ...phoneSalesKeys,
    ...commonKeys,
    ...commentKeys,
    ...dashboardKeys,
    ...partnerKeys
};

export default ApiKeys;
