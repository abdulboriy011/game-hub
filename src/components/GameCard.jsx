import {Card, CardBody, Heading, Image} from "@chakra-ui/react"

const GameCard = ({ game }) => {
    return (
        <Card overflow={"hidden"}>
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
    </Card>
    )
}

export default GameCard;
