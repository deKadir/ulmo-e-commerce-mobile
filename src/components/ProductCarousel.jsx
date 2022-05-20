import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export default function ProductCarousel({ data }) {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  return (
    <Container>
      <CarouselWrapper
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        carouselVerticalPadding={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination>
        {data?.map((item, key) =>
          index === key ? <DotActive key={key} /> : <Dot key={key} />
        )}
      </Pagination>
    </Container>
  );
}
const Container = styled.View`
  position: relative;
`;

const CarouselCardItem = ({ item, index }) => {
  return <CarouselImage source={item.imgUrl} />;
};
const CarouselWrapper = styled(Carousel)`
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const CarouselImage = styled.Image`
  width: 100%;
  height: 300px;
`;
const Pagination = styled.View`
  position: absolute;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.6);
  bottom: 15px;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Dot = styled.View`
  width: 5px;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 2.5px;
  margin: 4px;
`;
const DotActive = styled.View`
  background-color: #212121;
  width: 10px;
  height: 5px;
  margin: 8px;
  border-radius: 5px;
`;
const SLIDER_WIDTH = Dimensions.get('window').width;
