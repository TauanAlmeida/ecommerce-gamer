import React from "react";
import { Container } from "./styles";
import CardMain from "../../components/CardMain";
import UnderScore from "../UnderScore";

function GamesMostRated() {
  return (
    <div>
      <h4 className="text-white">Mais avaliados</h4>
      <UnderScore width={100} />
      <div className="row">
        <div className="col col-md-6">
          <div className={"news-main"}>
            <CardMain
            /*  title={item.title}
          data={item}
          thumbnail={base_url + item.thumbnail} */
            />
          </div>
        </div>

        <div className="col col-md-6">
          <div className={"news-maker"}>
            <CardMain
            /*  title={item.title}
          data={item}
          thumbnail={base_url + item.thumbnail} */
            />
          </div>
          <div className={"news-maker"}>
            <CardMain
            /*  title={item.title}
          data={item}
          thumbnail={base_url + item.thumbnail} */
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesMostRated;
