import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import { Clear, Minus, Plus } from '../../assets/icons';
import theme from '../../theme/theme';
export default function Product(props) {
  return (
    <Container>
      <Row>
        <ProductImage source={props.img} />
        <ProductInfo>
          <Price>${props.price}</Price>
          <Caption numberOfLines={2}>{props.caption}</Caption>
          <AmountContainer>
            <Btn>
              <Minus />
            </Btn>
            <Amount>{props.count}</Amount>
            <Btn>
              <Plus />
            </Btn>
          </AmountContainer>
        </ProductInfo>
        <Btn>
          <Clear fill="gray" />
        </Btn>
      </Row>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 24px;
`;
const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;

const ProductImage = styled.Image`
  border-radius: 8px;
  margin-right: 16px;
  width: 100px;
  height: auto;
`;

const ProductInfo = styled.View`
  flex: 1;
`;
const Price = styled.Text`
  ${theme.text.b1.medium}
`;
const Caption = styled.Text`
  ${theme.text.b3.regular}
  color:${theme.colors.granita500}
`;
const AmountContainer = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.granita100};
  margin-right: auto;
  align-items: center;
`;
const Btn = styled.TouchableOpacity`
  padding: 8px;
`;
const Amount = styled.Text`
  margin: 0 10px;
  ${theme.text.b2.medium}
`;
