import { useCartContext } from "@contexts/CartProvider/context";
import { IProduct } from "@interfaces/components";
import { setCartList } from "@contexts/CartProvider/actions";
import { useToast } from "@libs/chakra";
import { DELIVERY_CUST } from "@constants/Cart";

export const useCart = () => {
  const { cartState, cartDispatch } = useCartContext();
  const toast = useToast();

  const saveLocalStorage = (products: Array<IProduct>) => {
    localStorage.setItem("@MaximaTech:products", JSON.stringify(products));
    setCartList(cartDispatch, products);
  };

  const verifyIfComponentHasAlreadyBeenAdded = (product: IProduct) => {
    return cartState.list?.some((item) => item.id === product.id);
  };

  const addProductCart = (product: IProduct) => {
    const copyArr = structuredClone(cartState.list);

    if (!verifyIfComponentHasAlreadyBeenAdded(product)) {
      copyArr?.unshift({ ...product, quantity: 1 });
      saveLocalStorage(copyArr);
      toast({
        position: "top",
        title: "Produto adicionado ao carrinho com sucesso!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "Produto já foi adicionado ao carrinho!",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const removeProductCart = (product: IProduct) => {
    const copyArr = structuredClone(cartState.list);

    copyArr.splice(
      copyArr.findIndex((item) => item.id === product.id),
      1
    );
    toast({
      position: "top",
      title: "Produto removido do carrinho com sucesso!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    saveLocalStorage(copyArr);
  };

  const updateQuantityProduct = (product: IProduct, quantity: number) => {
    const result = cartState.list.map((item) => {
      if (item.id === product.id) {
        item.quantity = Number(quantity);
      }

      return item;
    });

    toast({
      position: "top",
      title: `'${product.name}': quantidade atualizada com sucesso!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    saveLocalStorage(result);
  };

  const calcAmountListProductsFromCart = () => {
    const result =
      cartState.list?.reduce((acc, item: IProduct) => {
        let amount: number = acc;

        amount += item?.promotional_price
          ? item?.promotional_price * (item?.quantity ?? 1)
          : item.price * (item?.quantity ?? 1);

        return amount;
      }, 0) ?? 0;

    return result;
  };

  const finalizePurchase = () => {
    toast({
      position: "top",
      title: `Parabéns você finalizou suas compras com um valor total de R$ ${amountTotal},00!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    saveLocalStorage([]);
  };

  const clearCart = () => {
    toast({
      position: "top",
      title: "Carrinho limpo com sucesso!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    saveLocalStorage([]);
  };

  const loadProductsCart = () => {
    let products = null;
    try {
      products =
        JSON.parse(localStorage.getItem("@MaximaTech:products") as any) ??
        ([] as any);
    } catch {
      products = [];
    }

    setCartList(cartDispatch, products);
  };

  const hasProducts = cartState.list?.length > 0;
  const amountPriceBuySubtotal = calcAmountListProductsFromCart();
  const amountTotal =
    amountPriceBuySubtotal + (hasProducts ? DELIVERY_CUST : 0);

  return {
    cartState,
    addProductCart,
    removeProductCart,
    updateQuantityProduct,
    finalizePurchase,
    clearCart,
    loadProductsCart,
    amountPriceBuySubtotal,
    amountTotal,
    hasProducts,
  };
};
