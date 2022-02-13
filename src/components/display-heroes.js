import Card from "./card";

function DisplayHeroes (props) {
    if (props.hero === null) return null;

    return (
        <Card heroName={props.hero.name} heroImg={props.hero.images.sm}/> 
    )   
} 

export default DisplayHeroes;