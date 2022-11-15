import { CarouselProvider, Slider } from 'pure-react-carousel'
import React from 'react'
import { Header } from 'semantic-ui-react'
import PhotoSlide from './PhotoSlide';
import SliderButtons from './SliderButtons';

function JobPhotoCarousel({text, photos}) {
  return (
    <>
    <Header style={{padding:'10px'}}>{text}</Header>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={photos.length}
      visibleSlides={photos.length}
      style={{ width: '100%' }}
    >
      <Slider>
        {
          photos?.map(photo=> <PhotoSlide src={photo} />)
        }
      </Slider>
      {
        photos.length > 1 ? <SliderButtons /> : <></>
      }

    </CarouselProvider>

    </>
  )
}

export default JobPhotoCarousel