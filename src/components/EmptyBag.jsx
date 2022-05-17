import React from 'react';
import styled from 'styled-components/native';
import theme from '../theme/theme';
import { Image } from 'react-native';
import Button from './Button';
import SafeArea from './SafeArea';

export default function EmptyBag() {
  return (
    <Container>
      <Title>Bag</Title>
      <Image
        source={require('../assets/images/surprised.png')}
        style={{ alignSelf: 'center' }}
      />
      <Subtitle>your bag is empty</Subtitle>
      <Caption>
        items remain in your bag for 1 hour, and then they’re moved to your
        Saved items
      </Caption>
      <Button title="Start shopping" style={{ marginTop: 'auto' }} />
    </Container>
  );
}

const Container = styled(SafeArea)`
  padding: 16px;
  padding-top: 56px;
  flex: 1;
`;
const Title = styled.Text`
  ${theme.text.h1.semiBold}
  align-self:flex-start;
  text-align: center;
`;
const Subtitle = styled.Text`
  margin-top: 16px;
  ${theme.text.h2.semiBold}
  text-align:center;
`;
const Caption = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
  text-align:center;
`;
