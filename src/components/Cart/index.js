import React from "react";

import {
  CartFooter,
  ClearCart,
  CartContainer,
  NumberOfProducts,
  CartIcon,
  CartItem,
  CartImage,
  MyButton,
} from "./styles";

import { useCart } from "../../context/cart";

function Cart() {
  const { cartItems, clearCart, loading } = useCart();

  function sumTotalItems() {
    if (!cartItems.length) return 0;

    const totalItems = cartItems.reduce((total, currentElement) => {
      return {
        price: Number(total.price) + Number(currentElement.price),
      };
    });

    if (totalItems.price > 250) {
      return totalItems.price;
    }
    const frete = cartItems.length * 10;

    return totalItems.price + frete;
  }

  function handleFrete() {
    const totalItems = sumTotalItems();

    const frete = cartItems.length * 10;

    if (totalItems > 250) {
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(0);
    }

    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(frete);
  }

  return (
    <>
      <div
        className="nav-border mr-3 ml-3"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <CartContainer className="mr-2 ml-2">
          <NumberOfProducts>{cartItems.length}</NumberOfProducts>
          <CartIcon size={25} color="#fff" />
        </CartContainer>
      </div>
      <div class="dropdown-menu dropdown-menu-right cart-menu p-4">
        {!cartItems.length && (
          <span className="py-3">Ops! Seu carrinho está vazio.</span>
        )}
        {cartItems.map((item) => (
          <>
            <CartItem>
              <div>
                <CartImage
                  src={require(`../../assets/${item.image}`).default}
                  alt={item.name}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="text-dark">{item.name}</div>
                <div className="text-dark">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price)}
                </div>
              </div>
            </CartItem>
            <div className="dropdown-divider"></div>
          </>
        ))}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="font-weight-bold">Frete</span>
          <span>{handleFrete()}</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="font-weight-bold">Total</span>
          <span>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(sumTotalItems())}
          </span>
        </div>
        <MyButton className="btn btn-success mt-2">Finalizar Compra</MyButton>
        <div className="dropdown-divider mt-2"></div>
        {cartItems.length > 0 && (
          <CartFooter>
            <ClearCart
              className="text-center text-primary"
              onClick={() => clearCart()}
            >
              Limpar Carrinho
            </ClearCart>
          </CartFooter>
        )}
      </div>
    </>
  );
}

export default Cart;
