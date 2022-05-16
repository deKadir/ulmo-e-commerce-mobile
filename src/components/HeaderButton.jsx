import { TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import theme from '../theme/theme';
export default function HeaderButton({ icon, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 999,
        padding: 6,
      }}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
}

export const TextButton = ({ onPress, title }) => {
  return (
    <TxtButton onPress={onPress}>
      <Txt>{title}</Txt>
    </TxtButton>
  );
};

const TxtButton = styled.TouchableOpacity`
  background-color: white;
  justify-content: flex-end;
`;

const Txt = styled.Text`
  ${theme.text.b1.medium}
  margin-top:6px;
`;
