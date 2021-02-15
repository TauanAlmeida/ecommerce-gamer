import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";

export const Container = styled.div``;

export const Nav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const IconSearch = styled(HiOutlineSearch)`
  position: absolute;
  right: 15px;
  top: 4px;
`;

export const Search = styled.input`
  background-color: ${(props) => props.theme.colors.background} !important;
  width: 300px;
  height: auto;
  border-radius: 3px;
  border: 0;
  box-shadow: none;
  padding: 5px 10px;
  &:focus {
    border-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 0 0.1rem #f9826c;
  }
`;
