import styled from 'styled-components';
import React from 'react';
import theme from '../theme/theme';

export default function Input({ title, placeholder, onChange, value, style }) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${theme.colors.granita100};
`;
const Title = styled.Text`
  ${theme.text.b2.regular}
  color:${theme.colors.granita500}
  padding-left:16px;
`;
const TextInput = styled.TextInput`
  ${theme.text.b1.regular}
  color:${theme.colors.black}
  padding-top: 9.5px;
  padding-left: 16px;
  padding-bottom: 9.5px;
`;
