import { View, Text } from 'react-native';
import React from 'react';
import { SafeArea, Button } from '../components';
import styled from 'styled-components/native';
import theme from '../theme/theme';
import SvgBag from '../assets/icons/Bag';

export default function ProductDetailView() {
  return (
    <Container>
      <Image source={require('../assets/images/productDetail.png')} />
      <Detail>
        <Price>$150.00</Price>
        <Caption>
          Wooden bedside table featuring a raised design on the door
        </Caption>
        <Button title="Add to bag" icon={<SvgBag fill="#212121" />} />
      </Detail>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
const Image = styled.Image`
  width: 100%;
`;

const Detail = styled.View`
  padding: 24px 16px;
`;
const Price = styled.Text`
  ${theme.text.h2.semiBold}
`;
const Caption = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
`;
const Colors = styled.View`
  flex-direction: row;
`;

const ColorBrown = styled.View``;
