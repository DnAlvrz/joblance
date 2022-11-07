import { CarouselProvider, Slider } from 'pure-react-carousel'
import React from 'react'
import { Header } from 'semantic-ui-react'
import CustomCardSlide from './CustomCardSlide'
import SliderButtons from './SliderButtons'

function Carousel({text}) {
  return (
    <>
    <Header style={{padding:'10px'}}>{text}</Header>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={7}
      visibleSlides={3.25}
      style={{ width: '100%' }}
    >
      <Slider>
        <CustomCardSlide />
        <CustomCardSlide />
        <CustomCardSlide />
        <CustomCardSlide />
        <CustomCardSlide />
        <CustomCardSlide />
        <CustomCardSlide />
      </Slider>
      <SliderButtons />
    </CarouselProvider>
    </>
  )
}

export default Carousel