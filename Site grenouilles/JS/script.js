const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
const summoner_name = "Lithosphere";


fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
  .then(response => response.json())
  .then(data => {
    const id = data.id;
    console.log(id); 

    fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));