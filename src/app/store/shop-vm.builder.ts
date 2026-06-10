import { CartItemVm } from '../components/cart/view-model/cart-item.vm';
import { Product } from '../models/product.model';
import { CartVm, ProductListVm } from './shop.vm';

export function buildProductListVm(
  products: Product[],
  searchWord: string,
  quantities: Record<string, number>,
): ProductListVm {
  return {
    productItems: buildProductItems(),
  };

  function buildProductItems() {
    const word = searchWord.trim().toLowerCase();

    return products
      .filter((product) => product.name.toLowerCase().includes(word))
      .map((product) => ({
        ...product,
        quantity: quantities[product.id] || 0,
      }));
  }
}

export function buildCartVm(
  products: Product[],
  quantities: Record<string, number>,
  taxRate: number,
  cartVisible: boolean,
): CartVm {
  const items = buildCartItems();
  const subTotal = items.reduce((sum, item) => sum + item.total, 0);
  const tax = subTotal * taxRate;
  const total = subTotal + tax;
  const itemsCount = items.length;
  const isActive = itemsCount > 0;
  const isVisible = cartVisible;

  return {
    items,
    subTotal,
    tax,
    total,
    isActive,
    isVisible,
  };

  function buildCartItems(): CartItemVm[] {
    return products
      .filter((product) => quantities[product.id])
      .map((product) => {
        const quantity = quantities[product.id];
        return {
          id: product.id,
          name: product.name,
          price: product.unitPrice,
          quantity,
          total: product.unitPrice * quantity,
        };
      });
  }
}
