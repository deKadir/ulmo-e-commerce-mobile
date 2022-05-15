import styled from 'styled-components';
import React from 'react';
import theme from '../theme/theme';

export default function Input({ title, placeholder, onChange, value }) {
  return (
    <Container>
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
  padding: 9.5px 16px;
`;
const Title = styled.Text`
  ${theme.text.b2.regular}
  color:${theme.colors.granita500}
`;
const TextInput = styled.TextInput`
  ${theme.text.b1.regular}
  color:${theme.colors.black}
`;
