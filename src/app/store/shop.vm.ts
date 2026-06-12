import { CartItemVm } from '../components/cart/view-model/cart-item.vm';
import { ProductItemVm } from '../components/items-list/view-model/product-item.vm';

export interface ProductListVm {
  readonly productItems: ProductItemVm[];
}

export interface CartVm {
  // se apri il Cart vedi che queste proprietà sono presenti
  // articoli nel carrello , sub total ,tax e total e
  // se il carrello è visibile o meno

  // questo blocco di dati viene derivato e mai modficato manualmente.
  // viene modficato automaticamente calcolando dallo stato principale
  readonly items: CartItemVm[];

  readonly subTotal: number;

  readonly tax: number;

  readonly total: number;

  readonly itemsCount: number;

  readonly isActive: boolean; // Cart attivo

  readonly isVisible: boolean; // Cart visibile

  readonly canCheckout: boolean;
}
