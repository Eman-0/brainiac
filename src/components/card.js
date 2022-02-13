
function Card (props) {
    return (
        <div className="card">
            <img src={props.heroImg} alt="null"/>
            <p>{props.heroName}</p>
        </div>
    );
}

export default Card;