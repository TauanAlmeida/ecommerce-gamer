import React, { useState } from "react";

import { Actions, ActionLink } from "./styles";
import { GoChevronDown } from "react-icons/go";

const filters = [
  "Mais Populares",
  "Maior Preço",
  "Menor Preço",
  "Ordem Afabética - A a Z",
  "Ordem Afabética - Z a A",
];
function Filter({ oderByScore, orderbyPreco, orderbyAlphabetic }) {
  const [filterSelected, setFilterSelected] = useState("Mais Populares");

  function handleSelectFilter(item) {
    if (item === "Mais Populares") {
      oderByScore();
    } else if (item === "Maior Preço") {
      orderbyPreco(true);
    } else if (item === "Menor Preço") {
      orderbyPreco(false);
    } else if (item === "Ordem Afabética - A a Z") {
      orderbyAlphabetic(true);
    } else if (item === "Ordem Afabética - Z a A") {
      orderbyAlphabetic(false);
    }
    setFilterSelected(item);
  }

  return (
    <Actions>
      <span className="text-white">
        Listado por:
        <span class="ml-2 dropdown">
          <ActionLink
            class="text-white text-uppercase font-weight-bold"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {filterSelected}
            <GoChevronDown size={25} color="#fff" />
          </ActionLink>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {filters.map((item, index) => (
              <span
                class="dropdown-item"
                key={index}
                onClick={() => handleSelectFilter(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </span>
      </span>
    </Actions>
  );
}

export default Filter;
