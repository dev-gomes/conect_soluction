import { Card } from '../../components/Card';
import './styles.scss';

import database from '../../api/database.json'

export function Home() {
    return(
        <div className='home--container'>
            <h2>Selecionar Categoria</h2>
            <p>Selecione a categoria que você deseja ver suas figurinhas ou adicionar novas figurinhas</p>
            <div className='home--pages'>
                {database.map((page) => {
                    return(
                        <Card name={page.name} description={page.description} id={page.id} />
                    );
                })}
            </div>
        </div>
    );
}