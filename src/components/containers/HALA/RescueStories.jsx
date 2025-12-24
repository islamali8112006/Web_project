import { useEffect, useState } from "react";
import RescueHero from "./RescueHero";
import RescueItem from "./RescueItem";

const RescueStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/5152bc97-5c0c-42ba-a724-5d08be777c42")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <RescueHero />

      {stories.map((item) => (
        <RescueItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RescueStories;