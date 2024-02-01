
import { Box, Center,} from '@chakra-ui/react'
import { CardSlider} from "../carrousels/CardCarrousel";
import { cards_carrousel } from "./Slider/components-mock.json";
import seta from "../../assets/curved-white-arrow-png-0.png"
import { useRef } from 'react';



export default function Skills() {

    const setaSubirRef = useRef<HTMLImageElement>(null);
  

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });   
      };

    return (
        <article>
            <div id='archor'>
                <h1>Habilidades</h1>
            </div>
            <Center>
                <Box maxW='1280px'>
                    {cards_carrousel && <CardSlider cards={cards_carrousel}/>}
                </Box>
            </Center>

            <div className='seta-subir' style={{ 
                textAlign: 'center', 
                justifyContent: "center", 
                alignItems: "center", 
                display:"flex", 
                marginTop:"50px",
                cursor: "pointer", // Adiciona um indicador de cursor para indicar que é clicável
                transition: "transform 0.2s ease-in-out", // Adiciona uma transição suave ao clicar
                transform: "scale(1)", // Inicia com escala normal
                width: "100%"
                }}
                onMouseOver={() => {
                    if (setaSubirRef.current) {
                      setaSubirRef.current.style.transform = 'scale(1.2)';
                    }
                  }}
                  onMouseOut={() => {
                    if (setaSubirRef.current) {
                      setaSubirRef.current.style.transform = 'scale(1)';
                    }
                  }}

                  onClick={handleClick}
                >

              <img ref={setaSubirRef} className="seta" src={seta} alt="Seta para cima" style={{ 
                width: '50px', 
                height: '50px', 
                transition: "transform 0.2s ease-in-out"
                }}
                />
            </div>
        </article>
    );
  };