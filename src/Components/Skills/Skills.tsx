// Import Swiper React components
import { Slider, SliderProps, Slide } from "./Slider/Index";



export default function Skills() {
    const settings: SliderProps = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination: {
            clickable: true,
        }
    }

    return (
       <Slider settings={settings}>
            <Slide>
                <h1>Teste 1</h1>
            </Slide>
            <Slide>
                <h1>Teste 2</h1>
            </Slide>
            <Slide>
                <h1>Teste 3</h1>
            </Slide>
            <Slide>
                <h1>Teste 4</h1>
            </Slide>
       </Slider>
    );
  };