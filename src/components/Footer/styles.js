import styled from "styled-components";

export const Container = styled.footer`
  height: auto;
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .social-work ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  & .navbar-nav > li {
    padding: 0px 20px;
  }
`;

export const Contato = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 200px;
  height: 2px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  margin: 0px auto;
`;
export const FooterTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled.header`
  width: 100%;
  padding-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
