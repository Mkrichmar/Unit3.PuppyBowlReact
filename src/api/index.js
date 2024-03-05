
const cohortName = "2311-FSA-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result;
    } catch(error) {
        console.error(error);
    }
}

export async function addPlayer(newPlayer) {
    console.log(newPlayer);
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPlayer),
          });
    } catch(error) {
        console.error(error);
    }
}

// export async function deletePlayer() {
//     try {

//     }
// }