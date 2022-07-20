import React from "react";

import "./ChampionTarjet.css";

function ChampionTarjet(props) {
  const [isclicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (props.discoveredCards.some((card) => card === props.name)) {
      setIsClicked(true);
    } else if (props.incorrect) {
      setIsClicked(false);
      props.setIncorrect(false);
    }
  }, [props.discoveredCards, props.incorrect]);

  function onCLick() {
    if (props.isCards === false) {
      if (!props.cardOne) {
        props.setCardOne(props.name);
      } else {
        props.setCardTwo(props.name);
      }
      setIsClicked((prevstate) => !prevstate);
    }
  }
  //primera version--sin animacion--mirar css
  // return (
  //   <div className="Champion--Tarjet">
  //     {!isclicked && (
  //       <div
  //         className="Champion--Tarjet--button"
  //         onClick={onCLick}
  //         disabled={props.discoveredCards.some((card) => card === props.name)}
  //       >
  //         <img src="/assets\lol-logo.png"></img>
  //       </div>
  //     )}
  //     {isclicked && <img className="Champion--Tarjet--img" src={props.url} />}
  //   </div>
  // );

  return (
    <div className={`Champion--Tarjet ${isclicked ? "flipped":""} `}>
      <div className="Champion--Tarjet--inner">
        <div
          className={`Champion--Tarjet--button ${isclicked && "flipped"}`}
          onClick={onCLick}
          disabled={props.discoveredCards.some((card) => card === props.name)}
        >
          <img src="/assets\lol-logo.png"></img>
        </div>
        <img className="Champion--Tarjet--img" src={props.url} />
      </div>
    </div>
  );
}

export { ChampionTarjet };
