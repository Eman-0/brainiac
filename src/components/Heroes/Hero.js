import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <li className={classes.hero}>
      <div>
        <img src={props.images.md} alt="null" />
        <p>{props.name}</p>
      </div>
    </li>
  );
};

export default Hero;
