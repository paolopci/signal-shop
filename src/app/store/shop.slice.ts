import { Product } from '../models/product.model';
import { ALL_PRODUCTS } from '../data/all-products';

export interface ShopSlice {
  // elenca tutte le proprietà che arrivano da fuori e che l'utente modifica direttamente
  readonly products: Product[];

  readonly searchWord: string; // stringa per filtrare i prodotti!!

  // mappa l'ID del prodotto string e la q.ta dell'articolo nel
  // carrello
  readonly cartQuantities: Record<string, number>;

  // l'utente cliccando sull'icona del carrello fa si che il carrello
  // sia visibile o meno
  readonly cartVisible: boolean;

  // aliquota fiscale
  readonly taxRate: number; // tassa applicata ai prodotti
}

export type PersistedShopSlice = Pick<ShopSlice, 'cartQuantities'>;

// definisco il mio stato iniziale
export const initialShopSlice: ShopSlice = {
  products: ALL_PRODUCTS,
  searchWord: '',
  cartQuantities: {},
  cartVisible: false,
  taxRate: 0.08,
};
