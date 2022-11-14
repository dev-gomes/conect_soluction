import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'

import "./styles.scss";

import database from "../../api/database.json";

export function Page() {
  let { id } = useParams();

  let categorySelectId = Number(id);
  let categorySelect = database.find(
    (category) => category.id === categorySelectId
  );

  return (
    <div className="page--container">
      <h2>{categorySelect?.name}</h2>
      <Link to="/pages">
        <FaArrowAltCircleLeft />
        Retornar
      </Link>
      <a href=""></a>
      <p>Veja quais as figurinhas que você tem nesta categoria</p>
      <div className="page--figures">
        {categorySelect?.figures.map((figure) => {
          if (figure.have) {
            return (
              <div className="page--figure have">
                <a href="#">Clique aqui para ver sua figurinha</a>
                <br />
                <small>
                  Você possui essa figurinha, ela foi analisada e verificada pela plataforma
                  <FaCheckCircle color='#fff' />
                </small>
                <h3>{figure.name}</h3>
              </div>
            );
          } else {
            return (
              <div className="page--figure">
                <input type="file" />
                <small>
                  <b>Anexe a imagem da sua figurinha</b>
                </small>
                <br />
                <small>
                  Você ainda não possui esse player, compre suas figurinhas em
                  um ponto de venda.
                </small>
                <h3>{figure.name}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
