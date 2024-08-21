import React from "react";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "./library.js/libraryTime";

//include images into your bundle

//create your first component
const Home = ({ counter }) => {
  return (
    <div className="text-center">
      <SimpleCounter
        hundredThousands={calculateSeconds(counter, 100000)}
        tenThousands={calculateSeconds(counter, 10000)}
        thousands={calculateSeconds(counter, 1000)}
        hundreds={calculateSeconds(counter, 100)}
        tens={calculateSeconds(counter, 10)}
        ones={calculateSeconds(counter, 1)}
      />
    </div>
  );
};

export default Home;
