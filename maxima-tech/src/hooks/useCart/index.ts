import { useCartContext } from "@contexts/CartProvider/context";
import { IProduct } from "@interfaces/components";
import { setCartList } from "@contexts/CartProvider/actions";
export const useCart = () => {
  const { cartState, cartDispatch } = useCartContext();

  const saveLocalStorage = (products: Array<IProduct>) => {
    localStorage.setItem("@MaximaTech:products", JSON.stringify(products));
    setCartList(cartDispatch, products);
  };

  const verifyIfComponentHasAlreadyBeenAdded = (product: IProduct) => {
    return cartState.list.some((item) => item.id === product.id);
  };

  const addProductCart = (product: IProduct) => {
    const copyArr = structuredClone(cartState.list);

    if (!verifyIfComponentHasAlreadyBeenAdded(product)) {
      copyArr.unshift({ ...product, quantity: 1 });
      saveLocalStorage(copyArr);
    }
  };

  const removeProductCart = (product: IProduct) => {
    const copyArr = structuredClone(cartState.list);

    copyArr.splice(
      copyArr.findIndex((item) => item.id === product.id),
      1
    );
    saveLocalStorage(copyArr);
  };

  const updateQuantityProduct = (product: IProduct, quantity: number) => {
    const result = cartState.list.map((item) => {
      if (item.id === product.id) {
        item.quantity = Number(quantity);
      }

      return item;
    });

    saveLocalStorage(result);
  };

  return {
    cartState,
    addProductCart,
    removeProductCart,
    updateQuantityProduct,
  };
};
