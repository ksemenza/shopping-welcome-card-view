import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  // console.log(props);
  const history = useHistory();
  console.log("history", history);

  const routeToShop = () => {
    console.log("Submiting");
    setTimeout(() => {
      history.push("/item-list");
    }, 3000);
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}

export default Home;
