interface ICard {
    id: number;
    paragraph: string;
    details: string;
}

export default function Card({ id, paragraph, details }: ICard) {
    return (
        <div>
            <h1>Card</h1>
            <p>{`Parágrafo ${id} ${paragraph} ${details}`}</p>
        </div>
    )
}