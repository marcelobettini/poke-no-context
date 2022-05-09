import { Button } from "@mui/material"

// onDetail es un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App).
const PokemonRow = ({ pokemon, onDetail }) => (
    <>
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
            <td>
                <Button variant="outlined" color="secondary" onClick={() => onDetail(pokemon)}>Detail</Button>
            </td>
        </tr>
    </>
);

export default PokemonRow