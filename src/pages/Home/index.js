import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import {
  Container,
  Section,
  ImgBanner,
  MyButton,
  Commerce,
  Market,
  CardText,
  Price,
  Title,
} from "./styles";
import Navbar from "../../components/Navbar";
import Games from "../../assets/games.png";
import Products from "../../services/api";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import { useCart } from "../../context/cart";

import $ from "jquery";

function Home() {
  const [games, setGames] = useState([...Products]);
  const [backup, setBackup] = useState([]);

  const { cartItems, setCarts, loading } = useCart();

  function oderByScore() {
    const items = games.sort((a, b) => {
      if (a.score < b.score) return 1;
      if (a.score > b.score) return -1;
      return 0;
    });
    setBackup([...items]);
    setGames([...items]);
  }

  function orderbyPreco(IsbiggestPrice = true) {
    const items = games.sort((a, b) => {
      if (IsbiggestPrice) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      } else {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      }
    });
    setBackup([...items]);
    setGames([...items]);
  }

  function orderbyAlphabetic(IsbiggestLetter = true) {
    const items = games.sort((a, b) => {
      if (IsbiggestLetter) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      } else {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      }
    });
    setBackup([...items]);
    setGames([...items]);
  }

  function handleSearch(e) {
    const inputValue = e.target.value.toLowerCase();
    if (inputValue === "") {
      setGames([...backup]);
      return;
    }

    const items = games.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setGames(items);
  }

  useEffect(() => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    oderByScore();
  }, []);

  return loading ? (
    "Teste"
  ) : (
    <Container>
      <Navbar handleSearch={handleSearch} />
      <Section>
        <h1 className="text-white">O MELHOR DOS JOGOS PARA VOCÊ!</h1>
        <h4 className="text-white">FRETE GRÁTIS ACIMA DE R$ 250,00.</h4>
        <ImgBanner src={Games} />
        <MyButton className="btn btn-lg btn-dark">Comprar agora</MyButton>
      </Section>
      <Commerce className="container">
        <Filter
          oderByScore={oderByScore}
          orderbyPreco={orderbyPreco}
          orderbyAlphabetic={orderbyAlphabetic}
        />
        <Market>
          <div className="row">
            {games.map((product, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                <div
                  className="card card-height"
                  onClick={() => setCarts(product)}
                >
                  <img
                    src={require(`../../assets/${product.image}`).default}
                    className="card-img-top image"
                    alt={product.name}
                  />
                  <MyButton
                    className="btn btn-dark conferir"
                    style={{ width: "180px" }}
                  >
                    Comprar
                  </MyButton>
                  <div className="card-body">
                    <Title className="card-title text-dark">
                      {product.name}
                    </Title>

                    <CardText className="card-text">
                      <Price>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
                      </Price>
                    </CardText>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Market>
      </Commerce>
      <Footer />
    </Container>
  );
}

export default Home;
