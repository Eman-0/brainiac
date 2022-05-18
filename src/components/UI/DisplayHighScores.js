import { useEffect } from "react";
import { useState } from "react";
import classes from "./DisplayHighScores.module.scss";
import ScoreItem from "./ScoreItem";
import Card from "./Card";
import Modal from "./Modal";

const DisplayHighScores = (props) => {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await fetch(
        "https://di9jfw8rpd.execute-api.us-east-2.amazonaws.com/scores"
      );
      if (!response.ok) {
        throw new Error("Something went wrong on our end");
      }
      const data = await response.json();
      const loadedScores = [];

      for (let i = 0; i < data.Count; i++) {
        loadedScores.push({
          id: data.Items[i].id,
          name: data.Items[i].name,
          score: data.Items[i].score,
        });
      }

      setScores(loadedScores);
      setIsLoading(false);
    };

    fetchScores().catch((e) => {
      setIsLoading(false);
      setHttpError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const scoreList = scores.map((user) => (
    <ScoreItem key={user.id} id={user.id} name={user.name} score={user.score} />
  ));

  scoreList.sort(function (user1, user2) {
    return user2.props.score - user1.props.score;
  });

  return (
    <Modal onClose={props.hideHighScore}>
      <section className={classes.section}>
        <div className={classes["place-holder"]}>
          <span>High Scores</span>
        </div>
        <Card>
          <ul>{scoreList}</ul>
        </Card>
        <button onClick={props.hideHighScore}>Close</button>
      </section>
    </Modal>
  );
};

export default DisplayHighScores;
