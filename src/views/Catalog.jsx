import React from 'react';
import { Container } from '../components';
import { SearchBar } from '../components';
import styled from 'styled-components/native';
import SvgDirectionVertical from './../assets/icons/DirectionVertical';
import SvgFilter from './../assets/icons/Filter';
import theme from '../theme/theme';
import SvgHeart from '../assets/icons/Heart';

export default function CatalogView() {
  return (
    <Container>
      <SearchBar />
      <Nav>
        <Button>
          <BtnText>Sort</BtnText>
          <SvgDirectionVertical />
        </Button>
        <Button style={{ marginLeft: 15 }}>
          <BtnText>Filter</BtnText>
          <SvgFilter />
        </Button>
      </Nav>
      <List
        data={products}
        horizontal
        renderItem={({ item }) => {
          return (
            <Product>
              {item.label ? <Plabel>{item.label}</Plabel> : null}
              <Pimg source={item.img} />

              <Pnav>
                <Price>{`$${item.price} `}</Price>
                <SvgHeart fill="black" />
              </Pnav>
              <Caption>{item.caption}</Caption>
            </Product>
          );
        }}
      />
    </Container>
  );
}

const Nav = styled.View`
  margin: 8px 0;
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.granita100};
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  padding: 7.5px 0;
`;
const BtnText = styled.Text`
  ${theme.text.b2.medium}
  margin-right:4px;
`;

const List = styled.FlatList`
  margin: 16px 0;
  flex-wrap: wrap;
`;

const Product = styled.View`
  width: 50%;
  position: relative;
`;
const Pimg = styled.Image`
  width: 100%;
  height: 200px;
`;
const Pnav = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Plabel = styled.Text`
  ${theme.text.b2.medium}
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
  padding: 2px 8px;
  background-color: ${theme.colors.charizard400};
  border-radius: 4px;
`;
const Price = styled.Text``;
const Caption = styled.Text``;

const products = [
  {
    label: 'new',
    img: require('../assets/images/product1.png'),
    price: '150.00',
    caption: 'Wooden bedside table featuring a raised desi...',
  },
  {
    label: '',
    price: '149.99',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product2.png'),
  },
  {
    label: '-40%',
    price: '29.00',
    img: require('../assets/images/product3.png'),
    caption: 'lovely lorem ipsum',
  },
  {
    label: '',
    price: '432.00',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product4.png'),
  },
  {
    label: '-40%',
    price: '29.00',
    img: require('../assets/images/product3.png'),
    caption: 'lovely lorem ipsum',
  },
  {
    label: '',
    price: '432.00',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product4.png'),
  },
  {
    label: '-40%',
    price: '29.00',
    img: require('../assets/images/product3.png'),
    caption: 'lovely lorem ipsum',
  },
  {
    label: '',
    price: '432.00',
    caption: 'Chair made of ash wood sourced from responsib...',
    img: require('../assets/images/product4.png'),
  },
];
