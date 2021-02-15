import styled from "styled-components";
import { RiShoppingCartLine } from "react-icons/ri";

export const CartContainer = styled.div`
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  // background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartItem = styled.div`
  display: flex;
`;
export const NumberOfProducts = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  font-size: 12px;
  right: -2px;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const CartIcon = styled(RiShoppingCartLine)``;

export const MyButton = styled.button`
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 14px;
  width: 250px;
`;

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CartImage = styled.img`
  width: 60px;
`;

export const ClearCart = styled.span`
  cursor: pointer;
`;
