import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

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
          return (
            <div className={`page--figure ${figure.have ? 'have' : ''}`} >
              <small>{figure.have ? 'Você tem essa figure :D' : 'Você ainda não possui essa figure, que bad'}</small>
              <h3>{figure.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
