import { useEffect, useState } from "react";
import RescHero from "./RescueHero";
import RescueItem from "./RescueItem";

const API_URL = "https://mocki.io/v1/30988352-2472-4526-84f0-ea513b0c2415";

function RescueStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const storedStories = localStorage.getItem("rescueStories");

    if (storedStories) {
      setStories(JSON.parse(storedStories));
    } else {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("rescueStories", JSON.stringify(data));
          setStories(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div style={{ background: "white", padding: "20px" }}>
      <RescHero />

      {stories.map((item) => (
        <RescueItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default RescueStories;
