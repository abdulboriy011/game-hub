import {  SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import GameCard from "./GameCard"
const GameGrid = () => {
    const [games, setGames] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        apiClient.get("/games").then((res) => setGames(res.data.results)) .catch((err) => setError(err.message))
    }, [])
    if (error) {
        return (
            <Text color={"red"} fontWeight={"bold"}>{error}</Text>
        )
    }
    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4,}} spacing={6} padding={10}>
            {games.map((game) => {
                return (
                   <GameCard key={game.id} game={game}/>
                )
            })}
        </SimpleGrid>
    )
}

export default GameGrid