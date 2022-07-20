import React from "react";
import { championsContext } from "../../ChampionsContext";
import { ChampionTarjet } from "../ChampionTarjet";
import "./Board.css"

function Board(params) {
  const { champions, championsSelected,addPoint} = React.useContext(championsContext);
  const [cardOne, setCardOne] = React.useState(null);
  const [cardTwo, setCardTwo] = React.useState(null);
  const [discoveredCards, setDiscoveredCards] = React.useState([]);
  const [incorrect, setIncorrect] = React.useState(false);
  const [isCards,setIsCards] = React.useState(false);

  React.useEffect(() => {
    let arr = discoveredCards;
    if (cardOne && cardTwo) {
      setIsCards(true)
      if (cardOne === cardTwo) {
        arr.push(cardOne);
        setIncorrect(false);
        setIsCards(false)
        addPoint()
      } else {
        setTimeout(() => {
          setIncorrect(true);
          setIsCards(false)
        }, 700);
      }
      
      setCardOne(null);
      setCardTwo(null);
    }
    setDiscoveredCards(arr);
  }, [cardOne, cardTwo]);



  



    
  return (
    <>
      <div className="Board-Container">
        {championsSelected.map((champion) => (
          <ChampionTarjet
            key={champion.id}
            name={champion.name}
            url={champion.url}
            id={champion.id}
            cardOne={cardOne}
            cardTwo={cardTwo}
            isCards={isCards}
            setCardOne={setCardOne}
            setCardTwo={setCardTwo}
            discoveredCards={discoveredCards}
            incorrect={incorrect}
            setIncorrect={setIncorrect}
          ></ChampionTarjet>
        ))}
      </div>
    </>
  );
}

export { Board };
