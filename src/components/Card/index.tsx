import { useNavigate } from 'react-router-dom';

import './styles.scss';

interface CardProps {
    id: number
    name: string,
    description: string,
}

export function Card(props: CardProps) {
    const navigate = useNavigate()

    return(
        <div className='card--container'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button onClick={() => navigate(`/page/${props.id}`)}>Selecionar</button>
        </div>
    );
}