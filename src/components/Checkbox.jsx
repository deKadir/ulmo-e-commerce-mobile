import React from 'react';
import styled from 'styled-components/native';
import { Checkmark } from '../assets/icons';
import theme from '../theme/theme';

export default function Checkbox({ value }) {
  return <Container value={value}>{value && <Checkmark />}</Container>;
}

const Container = styled.View`
  width: 24px;
  aspect-ratio: 1;
  border-radius: 999px;
  background-color: ${(props) =>
    props.value ? theme.colors.charizard400 : theme.colors.granita100};
`;
