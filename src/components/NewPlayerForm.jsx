import { useState, useEffect } from 'react';
import { addPlayer } from '../api';

function NewPlayerForm() {

    const [newPlayerName, setNewPlayerName] = useState('');
    const [newPlayerBreed, setNewPlayerBreed] = useState('')
    const [newPlayerImage, setNewPlayerImage] = useState('');
    const [error, setError] = useState(null);

    console.log(newPlayerName);
    console.log(newPlayerBreed);
    console.log(newPlayerImage);



    const newPlayer = {
        name: newPlayerName,
        breed: newPlayerBreed,
        imageUrl: newPlayerImage,
    }

    // console.log(newPlayer);

    // async function postNewPlayer() {
    //     const APIResponse = await addPlayer();
    //     if (APIResponse.success) {
    //         setPlayers(APIResponse.data.player);
    //     } else {
    //         setError(APIResponse.error.message)
    //     }
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        const APIResponse = await addPlayer(newPlayer);
        if (APIResponse){
            console.log(APIResponse)
        }
    }

    

    return ( 

        <div>
        <h2>New Player Form</h2>
        <div>
        <form onSubmit={handleSubmit}>
        Name: <input 
        type="text"
        onChange={(e) => setNewPlayerName(e.target.value)}/> <br />
        Breed: <input 
        type="text"
        onChange={(e) => setNewPlayerBreed(e.target.value)} /> <br />
        Image: <input 
        type="text"
        onChange={(e) => setNewPlayerImage(e.target.value)} /> <br />
        Status: <input type="radio" /><br />
        <button>Submit</button>
        </form>
        </div>
        </div>
     );
}

export default NewPlayerForm