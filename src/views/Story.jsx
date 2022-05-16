import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

export default function StoryView({ navigation }) {
  return (
    <Container source={require('../assets/images/story-img.png')}>
      <Title>glass storage jar with golden lid</Title>
      <Caption>
        Hermetic storage jar. Made of glass with a raised slogan detail and a
        golden screw-on lid. Available in three sizes.
      </Caption>
      <Timeline>
        <Line active="true" style={{ marginLeft: 0 }} />
        <Line />
        <Line />
      </Timeline>
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  padding: 16px;
  justify-content: flex-end;
`;

const Title = styled.Text`
  ${theme.text.h2.semiBold}
  color:white;
`;
const Caption = styled.Text`
  ${theme.text.b1.regular}
  color:white;
  margin-top: 8px;
`;
const Timeline = styled.View`
  flex-direction: row;
  margin-top: 32px;
  margin-bottom: 16px;
`;
const Line = styled.View`
  height: 2px;
  background-color: white;
  margin-left: 8px;
  flex: 1;
  border-radius: 2px;
  opacity: ${(props) => (props.active ? '1' : '0.5')};
`;
