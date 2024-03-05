// import { useEffect } from "react";
// import AllPlayers from "./AllPlayers";
// import { fetchAllPlayers } from "../api";
import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
// import { selectPlayer } from "../features/players/playersSlice";
import { Link } from "react-router-dom";


function SinglePlayer() {

    const location = useLocation();
    console.log(location.state.player);
    const player = location.state.player



    return ( 
    <div className="singlePlayer">
    <h3>{player.name}</h3>
    <ul>
        <h5>Details</h5>
        <li>Breed: {player.breed}</li>
        <li>Team ID: {player.teamId}</li>
        <li>Status: {player.status}</li>
    </ul>
    <img src={player.imageUrl} alt={player.name} width={400} />
    <button><Link to="/">Return</Link></button>
    
    </div> );
}

export default SinglePlayer;

// export default function SinglePlayer() {
//     const dispatch = useDispatch();
//     const player = useSelector(selectPlayer);


// }

// function SinglePlayer() {

//     const location = useLocation();
//     const data = location.state;
    
//     console.log(data);
//     return (
//         <>
//         <h3>Dog</h3>
//         </> 

//      );
// }

// export default SinglePlayer;

// function SinglePlayer() {
    
//     useEffect (() => {
//         async function getSinglePlayer() {
//             const player = await player(AllPlayers);
//             if (player.success) {
//                 setPlayer(player)
//             } else {
//                 setError(player.error.message)
//             }
//         }
//         getSinglePlayer();
//     }, []);
    
//     const playerToDisplay = player;
//     return (
//         <>
//         <h3>{player.name}</h3>
//         </>
//     )
//     }


    


    // useEffect(() => { 

        
    //     async function getSinglePlayer() {
    //         const APIResponse = await fetchAllPlayers();
    //         if (APIResponse.success) {
    //             setPlayer(APIResponse.data.player)
    //         } else {
    //             setError(APIResponse.error.message)
    //         }
    //     }
    //     getSinglePlayer();
    // }, []);


//     return ( 
//         <>
//             <div>
//                 {setPlayer((player) => {
//                     return (
//                         <div key={player.id}>
//                             <h3>{player.name}</h3>

//                         </div>
//                     )
//                 })}
//             </div>
        
//         </>
//      );
// }, []);
// }

// export default SinglePlayer;