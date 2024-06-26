import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import imagenesData from '../json/imagenes.json';

interface Imagen {
  imagen: string;
}

function ControlledCarousel() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number, _e: Record<string, unknown> | null = null): void => {
    setIndex(selectedIndex);
  };

  const imagenes: Imagen[] = imagenesData.imagen;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={4000} controls={false} indicators={false}>
      {imagenes.map((img: Imagen, idx: number) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={img.imagen}
            alt={`Slide ${idx + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;

