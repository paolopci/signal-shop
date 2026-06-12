import { initialShopSlice, ShopSlice } from './shop.slice';
import { checkoutCart } from './shop.updaters';

describe('shop updaters', () => {
  describe('checkoutCart', () => {
    it('clears cart quantities and hides the cart', () => {
      const state: ShopSlice = {
        ...initialShopSlice,
        cartVisible: true,
        cartQuantities: {
          'signal-booster': 2,
          'signal-splicer': 3,
        },
      };

      expect(checkoutCart()(state)).toEqual({
        cartVisible: false,
        cartQuantities: {},
      });
    });
  });
});
