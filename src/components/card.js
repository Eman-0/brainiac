import PlayRound from "../utils/game-utils"

function Card (props) {
    if (props.hero === null) return null;

    return (
        <div onClick={(e) => PlayRound(props)} className="card">
            <img src={props.hero.images.lg} alt="null"/>
            <p>{props.hero.name}</p>
        </div>
    );
}

export default Card;