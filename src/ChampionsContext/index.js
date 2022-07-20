import React from "react";

const championsContext = React.createContext();

function ChampionsProvider(props) {
  const URL_CHAMPS =
    "https://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json";

  // let champions = [];
  const [champions, setChampions] = React.useState([]);
  const [victory, setVictory] = React.useState(false);
  const championsToSelect = 15;

  const [championsSelected, setChampionsSelected] = React.useState([]);
  const [points, setPoints] = React.useState(0);

  React.useEffect(() => {
    fetch(URL_CHAMPS)
      .then((response) => response.json())
      .then((json) => initPage(json));
  }, []);

  React.useEffect(()=>{
    if (points===championsToSelect) {
      setVictory(true)
    }
  },[points])

  React.useEffect(() => {
    getRandomChamps(championsToSelect);
  }, [champions]);

  function initPage(json) {
    getChampions(json);
    //getRandomChamps(5);
  }

  function getChampions(json) {
    const listOFChampions = json.data;
    let list = [];
    for (var i in listOFChampions) {
      list.push(listOFChampions[i].id);
    }
    setChampions(list);
  }

  function getRandomChamps(numberOfChamps) {
    if (champions.length !== 0) {
      let result = [];
      while (result.length < numberOfChamps) {
        let randomNumber = Math.floor(Math.random() * champions.length);
        if (isChampionAlready(result, champions[randomNumber]) === false) {
          result.push({
            name: champions[randomNumber],
            url: getUrlsImages(champions[randomNumber]),
          });
        }
      }

      let championsWithCompanions = [];
      let championsWithCompanionsShuffle = [];

      for (let index = 0; index < result.length; index++) {
        championsWithCompanions.push({
          name: result[index].name,
          url: result[index].url,
          id: index,
        });
        championsWithCompanions.push({
          name: result[index].name,
          url: result[index].url,
          id: index + 50,
        });
      }

      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          // Generate random number
          var j = Math.floor(Math.random() * (i + 1));

          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

      championsWithCompanionsShuffle = shuffleArray(championsWithCompanions);

      setChampionsSelected(championsWithCompanionsShuffle);
    }
  }

  function isChampionAlready(arr, name) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].name === name) {
        return true;
      }
    }
    return false;
  }

  function getUrlsImages(name) {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
  }

  function addPoint() {
    setPoints((prevstate) => 
      prevstate+1
    )
  

  }

  return (
    <championsContext.Provider
      value={{
        champions,
        championsSelected,
        addPoint,
        points,
        victory
      }}
    >
      {props.children}
    </championsContext.Provider>
  );
}

export { championsContext, ChampionsProvider };
