import { useState, useEffect } from "react";
import { fetchAllPlayers } from '../api';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import SinglePlayer from "./SinglePlayer";
// import { useDispatch, useSelector} from 'react-redux';
// import { selectPlayer, get } from "../features/players/playersSlice";

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    // const [player, setPlayer] = useState({});
    const navigate = useNavigate();

    console.log(searchParam);

    // const dispatch = useDispatch();
    // const player = useSelector(selectPlayer);
    // const onPlayer = (e) => {
    //     e.preventDefault();
    //     const action = e.nativeEvent.submitter.name;

    //     if (action === 'get') {
    //         return dispatch(get())
    //     } else {return error}

    // }

    useEffect(() => {
        async function getAllPlayers() {
            const APIResponse = await fetchAllPlayers();
            if (APIResponse.success) {
                setPlayers(APIResponse.data.players);
            } else {
                setError(APIResponse.error.message)
            }
        }
        getAllPlayers();
    }, []);

    const playersToDisplay = searchParam 
    ? players.filter((player) => player.name.toLowerCase().includes(searchParam))
    : players;

    return (
        <>
        <br />
            <div>
                Search: <input 
                type="text" 
                placeholder="search"
                onChange={(e) => setSearchParam(e.target.value.toLowerCase())} />
            </div> 
            <div className="grid-container">
            {playersToDisplay.map((player) => {
                return (
                <div key={player.id} className="grid-item">
                    <h3 key={player.id}>{player.name}</h3>
                    <img src={player.imageUrl} alt={player.name} width={250} />
                    <span className="playerButtons">
                    <button onClick={(e) => navigate(`/player/id:${player.id}`, { state: {player}})}>More Details </button>
                    <button>Delete Player</button>
                    </span>
                </div>)
            })}
            </div>
        </>
     );
}


export default AllPlayers;
