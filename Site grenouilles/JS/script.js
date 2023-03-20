// const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// const summoner_name_input = document.querySelector("#summoner-name-input");
// const search_button = document.querySelector("#search-button");
// const results_table = document.querySelector("#results-table");
// const sort_button = document.querySelector("#sort-button");
// const csv_file_input = document.querySelector("#csv-file-input");
// const upload_button = document.querySelector("#upload-button");
// const csv_results_table = document.querySelector("#csv-results-table");

// let players = [];

// // Function to search for a summoner
// function searchSummoner() {
//   const summoner_name = summoner_name_input.value;
//   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
//     .then(response => response.json())
//     .then(data => {
//       const id = data.id;
//       fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
//         .then(response => response.json())
//         .then(data => {
//           const ranked_solo = data.find(queue => queue.queueType === "RANKED_SOLO_5x5");
//           if (ranked_solo) {
//             const lp = ranked_solo.leaguePoints;
//             const player = {
//               name: summoner_name,
//               lp: lp
//             };
//             players.push(player);
//             const row = results_table.insertRow();
//             const nameCell = row.insertCell();
//             const lpCell = row.insertCell();
//             nameCell.textContent = summoner_name;
//             lpCell.textContent = lp;
//           } else {
//             console.error("Summoner is not ranked in Solo Queue");
//           }
//         })
//         .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));
// }

// // Function to sort the players array
// function sortPlayers() {
//   players.sort((a, b) => b.lp - a.lp);
//   results_table.innerHTML = "<thead><tr><th>Pseudo</th><th>LP</th></tr></thead><tbody></tbody>";
//   for (let i = 0; i < players.length; i++) {
//     const row = results_table.insertRow();
//     const nameCell = row.insertCell();
//     const lpCell = row.insertCell();
//     nameCell.textContent = players[i].name;
//     lpCell.textContent = players[i].lp;
//   }
// }

// // Add event listener to search button
// search_button.addEventListener("click", searchSummoner);

// // Add event listener to sort button
// sort_button.addEventListener("click", sortPlayers);

// // Function to parse the CSV file
// function handleFileSelect(event) {
//   const file = event.target.files[0];
//   Papa.parse(file, {
//   header: true,
//   complete: function(results) {
//   const playersFromCSV = results.data;
//   const playersToUpdate = players.filter(player => playersFromCSV.includes(player.name));
//   csv_results_table.innerHTML = "<thead><tr><th>Pseudo</th><th>LP</th></tr></thead><tbody></tbody>";
//   for (let i = 0; i < playersToUpdate.length; i++) {
//   const row = csv_results_table.insertRow();
//   const nameCell = row.insertCell();
//   const lpCell = row.insertCell();
//   nameCell.textContent = playersToUpdate[i].name;
//   lpCell.textContent = playersToUpdate[i].lp;
//   }
//   }
//   });
//   }
  
//   // Add event listener to upload button
//   upload_button.addEventListener("change", handleFileSelect);






// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// // const summoner_name_input = document.querySelector("#summoner-name-input");
// // const search_button = document.querySelector("#search-button");
// // const results_table = document.querySelector("#results-table");
// // const sort_button = document.querySelector("#sort-button");
// // const csv_file_input = document.querySelector("#csv-file-input");
// // const upload_button = document.querySelector("#upload-button");
// // const csv_results_table = document.querySelector("#csv-results-table");

// // let players = [];

// // // Function to search for a summoner
// // function searchSummoner() {
// //   const summoner_name = summoner_name_input.value;
// //   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const id = data.id;
// //       fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
// //         .then(response => response.json())
// //         .then(data => {
// //           const ranked_solo = data.find(queue => queue.queueType === "RANKED_SOLO_5x5");
// //           if (ranked_solo) {
// //             const lp = ranked_solo.leaguePoints;
// //             const player = {
// //               name: summoner_name,
// //               lp: lp
// //             };
// //             players.push(player);
// //             const row = results_table.insertRow();
// //             const nameCell = row.insertCell();
// //             const lpCell = row.insertCell();
// //             nameCell.textContent = summoner_name;
// //             lpCell.textContent = lp;
// //           } else {
// //             console.error("Summoner is not ranked in Solo Queue");
// //           }
// //         })
// //         .catch(error => console.error(error));
// //     })
// //     .catch(error => console.error(error));
// // }

// // // Function to sort the players array










// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// // const summoner_name_input = document.querySelector("#summoner-name-input");
// // const search_button = document.querySelector("#search-button");
// // const results_table = document.querySelector("#results-table");
// // const sort_button = document.querySelector("#sort-button");
// // const download_button = document.querySelector("#download-button");

// // let players = [];

// // Papa.parse("players.csv", {
// //   download: true,
// //   header: true,
// //   complete: function(results) {
// //     players = results.data;
// //   }
// // });

// // search_button.addEventListener("click", () => {
// //   const summoner_name = summoner_name_input.value;
// //   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const id = data.id;
// //       fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
// //         .then(response => response.json())
// //         .then(data => {
// //           const filteredData = data.filter(entry => entry.queueType === "RANKED_SOLO_5x5");
// //           const lp = filteredData[0].leaguePoints;
// //           const row = results_table.insertRow();
// //           const nameCell = row.insertCell();
// //           const lpCell = row.insertCell();
// //           nameCell.textContent = summoner_name;
// //           lpCell.textContent = lp;
// //           players.push({
// //             name: summoner_name,
// //             lp: lp
// //           });
// //         })
// //         .catch(error => console.error(error));
// //     })
// //     .catch(error => console.error(error));
// // });

// // sort_button.addEventListener("click", () => {
// //   players.sort((a, b) => b.lp - a.lp);
// //   results_table.innerHTML = "<thead><tr><th>Pseudo</th><th>LP</th></tr></thead><tbody></tbody>";
// //   for (let i = 0; i < players.length; i++) {
// //     const row = results_table.insertRow();
// //     const nameCell = row.insertCell();
// //     const lpCell = row.insertCell();
// //     nameCell.textContent = players[i].name;
// //     lpCell.textContent = players[i].lp;
// //   }
// // });

// // download_button.addEventListener("click", () => {
// //   let csv = "Pseudo,LP\n";
// //   for (let i = 0; i < players.length; i++) {
// //     csv += `${players[i].name},${players[i].lp}\n`;
// //   }
// //   const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
// //   const link = document.createElement("a");
// //   const url = URL.createObjectURL(csvData);
// //   link.setAttribute("href", url);
// //   link.setAttribute("download", "players.csv");
// //   link.style.visibility = "hidden";
// //   document.body.appendChild(link);
// //   link.click();
// //   document.body.removeChild(link);
// // });





// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// // const summoner_name_input = document.querySelector("#summoner-name-input");
// // const search_button = document.querySelector("#search-button");
// // const sort_button = document.querySelector("#sort-button");
// // const results_table = document.querySelector("#results-table");
// // let results = [];

// // search_button.addEventListener("click", () => {
// //   const summoner_name = summoner_name_input.value;
// //   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const id = data.id;
// //       fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
// //         .then(response => response.json())
// //         .then(data => {
// //           const lp = data[0].leaguePoints;
// //           const result = {
// //             name: summoner_name,
// //             id: id,
// //             lp: lp
// //           };
// //           results.push(result);
// //           displayResults();
// //         })
// //         .catch(error => console.error(error));
// //     })
// //     .catch(error => console.error(error));
// // });

// // sort_button.addEventListener("click", () => {
// //   results.sort((a, b) => b.lp - a.lp);
// //   displayResults();
// // });

// // function displayResults() {
// //   const tbody = results_table.querySelector("tbody");
// //   tbody.innerHTML = "";
// //   for (const result of results) {
// //     const row = tbody.insertRow();
// //     const nameCell = row.insertCell();
// //     const idCell = row.insertCell();
// //     const lpCell = row.insertCell();
// //     nameCell.textContent = result.name;
// //     idCell.textContent = result.id;
// //     lpCell.textContent = result.lp;
// //   }
// // }




// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// // const summoner_name_input = document.querySelector("#summoner-name-input");
// // const search_button = document.querySelector("#search-button");
// // const results_table = document.querySelector("#results-table");
// // const players = [];

// // search_button.addEventListener("click", () => {
// //   const summoner_name = summoner_name_input.value;
// //   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const id = data.id;
// //       fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
// //         .then(response => response.json())
// //         .then(data => {
// //           const lp = data[0].leaguePoints;
// //           const player = { name: summoner_name, id: id, lp: lp };
// //           players.push(player);
// //           const row = results_table.insertRow();
// //           const nameCell = row.insertCell();
// //           const idCell = row.insertCell();
// //           const lpCell = row.insertCell();
// //           nameCell.textContent = summoner_name;
// //           idCell.textContent = id;
// //           lpCell.textContent = lp;
// //         })
// //         .catch(error => console.error(error));
// //     })
// //     .catch(error => console.error(error));
// // });















// const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// const summoner_name_input = document.querySelector("#summoner-name-input");
// const search_button = document.querySelector("#search-button");
// const results_table = document.querySelector("#results-table");

// search_button.addEventListener("click", () => {
//   const summoner_name = summoner_name_input.value;
//   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
//     .then(response => response.json())
//     .then(data => {
//       const id = data.id;
//       fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
//         .then(response => response.json())
//         .then(data => {
//           const lp = data[0].leaguePoints;
//           const row = results_table.insertRow();
//           const nameCell = row.insertCell();
//           const idCell = row.insertCell();
//           const lpCell = row.insertCell();
//           nameCell.textContent = summoner_name;
//           idCell.textContent = id;
//           lpCell.textContent = lp;
//         })
//         .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));
// });








// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// //       const searchButton = document.getElementById('search-button');
// //       const summonerNameInput = document.getElementById('summoner-name-input');
// //       const resultTableBody = document.getElementById('result-table-body');

// //       function fetchSummonerData(summonerName) {
// //         // Première requête pour récupérer l'ID du joueur
// //         return fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`)
// //           .then(response => response.json())
// //           .then(data => {
// //             const id = data.id;
// //             return id;
// //           })
// //           .catch(error => console.error(error));
// //       }

// //       searchButton.addEventListener('click', () => {
// //         const summonerName = summonerNameInput.value.trim();

// //         if (!summonerName) {
// //           alert('Veuillez entrer un nom d\'utilisateur');
// //           return;
// //         }

// //         fetchSummonerData(summonerName)
// //           .then(id => {
// //             const newRow = resultTableBody.insertRow();
// //             const userNameCell = newRow.insertCell();
// //             const idCell = newRow.insertCell();
// //             userNameCell.innerHTML = summonerName;
// //             idCell.innerHTML = id;
// //           })
// //           .catch(error => console.error(error));
// //       });

















// // const table = document.querySelector('table');

// // function ajouterJoueur(nom, id) {
// //   const row = table.insertRow();
// //   const nomCell = row.insertCell();
// //   const idCell = row.insertCell();

// //   nomCell.textContent = nom;
// //   idCell.textContent = id;
// // }

// // function rechercherJoueur(nom) {
// //   const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";

// //   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nom}?api_key=${api_key}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const id = data.id;
// //       ajouterJoueur(nom, id);
// //     })
// //     .catch(error => console.error(error));
// // }

// // rechercherJoueur("Lithosphere");



















// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";

// // const searchButton = document.getElementById("search-button");
// // const summonerNameInput = document.getElementById("summoner-name-input");
// // const idResult = document.getElementById("id-result");

// // searchButton.addEventListener("click", () => {
// //   const summonerName = summonerNameInput.value;
  
// //   // Recherche de l'ID du joueur
// //   fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const id = data.id;
      
// //       // Affichage du résultat
// //       idResult.innerHTML = `ID du joueur ${summonerName} : ${id}`;
// //     })
// //     .catch(error => console.error(error));
// // });



















// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// // const summoner_name = "Lithosphere";

// // // Première requête pour récupérer l'ID du joueur
// // fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const id = data.id;
// //     console.log(id); // Affiche l'ID du joueur Lithosphere dans la console
    
// //     // Ajoutez le résultat à l'élément HTML
// //     document.getElementById("id-result").innerHTML = `ID du joueur : ${id}`;
// //   })
// //   .catch(error => console.error(error));


















// // const api_key = "RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a";
// // const summoner_name = "Lithosphere";


// // fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const id = data.id;
// //     console.log(id); 
// //     document.getElementById("id-result").innerHTML = `ID du joueur : ${id}`;

//   //   fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       console.log(data);
//   //     })
//   //     .catch(error => console.error(error));
//   // })
//   // .catch(error => console.error(error));