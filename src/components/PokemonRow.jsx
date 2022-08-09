import { Button, TableRow, TableCell } from "@mui/material"



// onDetail es un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App).
const PokemonRow = ({ pokemon, onInfo }) => (
    <TableRow onClick={onInfo}>
        <TableCell>{pokemon.name.english}</TableCell>
        <TableCell>{pokemon.type.join(", ")}</TableCell>        
    </TableRow>
);

export default PokemonRow