import React from 'react'
import { TextField } from "@mui/material";

const PokemonFilter = ({ filter, setFilter }) => {
    return < TextField
        label="Search..." variant="filled"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    />
}

export default PokemonFilter

