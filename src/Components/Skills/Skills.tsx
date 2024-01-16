
import { Box, Center,} from '@chakra-ui/react'
import { CardSlider} from "../carrousels/CardCarrousel";
import { cards_carrousel } from "./Slider/components-mock.json";



export default function Skills() {
    return (
        <article>
            <h1>Habilidades</h1>
            <Center>
                <Box maxW='1280px'>
                    {cards_carrousel && <CardSlider cards={cards_carrousel}/>}
                </Box>
            </Center>
        </article>
    );
  };