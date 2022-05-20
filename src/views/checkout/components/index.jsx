import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from '../../../assets/icons';
import theme from '../../../theme/theme';

const Option = ({ left, title, caption, right, onPress }) => {
  return (
    <OptionContainer onPress={onPress}>
      {left}
      <OptionBody>
        <OptionTitle>{title}</OptionTitle>
        {caption ? <OptionCaption>{caption}</OptionCaption> : null}
      </OptionBody>
      {right}
    </OptionContainer>
  );
};

const Header = ({ title, content, navigation }) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </TouchableOpacity>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderLabel>{content}</HeaderLabel>
      </HeaderContent>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 56px;
`;
const HeaderContent = styled.View`
  margin: 0 auto;
`;
const HeaderTitle = styled.Text`
  ${theme.text.b1.medium}
  text-align:center;
`;
const HeaderLabel = styled.Text`
  ${theme.text.b3.medium}
  color:${theme.colors.granita500}
  text-align:center;
`;
const OptionContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 19px;
`;
const OptionBody = styled.View`
  margin-right: auto;
  margin-left: 16px;
  justify-content: center;
`;

const OptionTitle = styled.Text`
  ${theme.text.b1.regular}
`;
const OptionCaption = styled.Text`
  ${theme.text.b2.regular}
  color:${theme.colors.granita500}
`;

export { Option, Header };
