import { PartialStateUpdater } from '@ngrx/signals';
import { ShopSlice } from './shop.slice';

export function setSearchWord(
  searchWord: string,
): PartialStateUpdater<ShopSlice> {
  return (state) => ({ searchWord });
}

export function addToCart(productId: string): PartialStateUpdater<ShopSlice> {
  return (state) => {
    const cartQuantities = { ...state.cartQuantities };
    cartQuantities[productId] = cartQuantities[productId] + 1 || 1;
    return { cartQuantities };
  };
}

export function viewCart(): PartialStateUpdater<ShopSlice> {
  return (state) => ({ cartVisible: true });
}

export function hideCart(): PartialStateUpdater<ShopSlice> {
  return (state) => ({ cartVisible: false });
}

export function incrementQuantity(
  productId: string,
): PartialStateUpdater<ShopSlice> {
  return addToCart(productId);
}

export function decrementQuantity(
  productId: string,
): PartialStateUpdater<ShopSlice> {
  return (state) => {
    const cartQuantities = { ...state.cartQuantities };
    if (cartQuantities[productId] > 1) {
      cartQuantities[productId] = cartQuantities[productId] - 1;
    } else {
      delete cartQuantities[productId];
    }
    return { cartQuantities };
  };
}

export function checkoutCart(): PartialStateUpdater<ShopSlice> {
  return (state) => ({
    cartVisible: false,
    cartQuantities: {},
  });
}
