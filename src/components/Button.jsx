import React from 'react';
import styled from 'styled-components/native';
import theme from '../theme/theme';

export default function Button({
  title,
  icon,
  onPress,
  variant = 'primary',
  style,
}) {
  return (
    <Btn onPress={onPress} style={{ ...buttons[variant], ...style }}>
      <Txt>{title}</Txt>
      {icon}
    </Btn>
  );
}

const Btn = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 16px;
  justify-content: center;
  border-radius: 8px;
`;

const Txt = styled.Text`
  ${theme.text.b1.medium}
  margin-right:8px;
`;

const buttons = {
  primary: {
    backgroundColor: theme.colors.charizard400,
  },
  secondary: {
    backgroundColor: theme.colors.granita100,
  },
};
