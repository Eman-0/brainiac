import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        props.onClick(props.id);
      }}
      className={classes.hero}
    >
      <img src={props.images.sm} alt="null" />
      <p>{props.name}</p>
    </div>
  );
};

export default Hero;
