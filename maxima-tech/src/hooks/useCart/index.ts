import { useCartContext } from "@contexts/CartProvider/context";
import { IProduct } from "@interfaces/components";
import { setCartList } from "@contexts/CartProvider/actions";
import { useToast } from "@libs/chakra";

export const useCart = () => {
  const { cartState, cartDispatch } = useCartContext();
  const toast = useToast();

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

  return {
    cartState,
    addProductCart,
    removeProductCart,
    updateQuantityProduct,
  };
};
