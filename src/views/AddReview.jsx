import React from 'react';
import styled from 'styled-components/native';
import { Button, Container, Input } from '../components';
import theme from '../theme/theme';

import { Camera, StarFilled, Star, Close } from '../assets/icons/index';
export default function AddReviewView() {
  const [rate, setRate] = React.useState(1);
  const changeRate = (k) => setRate(k);
  return (
    <Container>
      <Header>
        <Rate>
          {Array(5)
            .fill(0)
            .map((item, key) => {
              return key + 1 <= rate ? (
                <StarFilled
                  fill={theme.colors.charizard400}
                  width="32px"
                  height="32px"
                  onPress={() => changeRate(key + 1)}
                  key={key}
                />
              ) : (
                <Star
                  width="32px"
                  height="32px"
                  fill={theme.colors.charizard400}
                  onPress={() => changeRate(key + 1)}
                  key={key}
                />
              );
            })}
        </Rate>
        {/* <RateText>Nice</RateText> */}
      </Header>
      <Input title="Your review" placeholder="Enter your review" />
      <Photos>
        <AddImage>
          <IconCamera />
        </AddImage>
        <ImageContainer>
          <RemoveImage width="16px" height="16px" />

          <Image source={require('../assets/images/pic.png')} />
        </ImageContainer>
        <ImageContainer>
          <RemoveImage width="16px" height="16px" />
          <Image source={require('../assets/images/pic-1.png')} />
        </ImageContainer>
      </Photos>
      <Button title="Send review" />
    </Container>
  );
}

const Header = styled.View`
  align-items: center;
`;
const Rate = styled.View`
  flex-direction: row;
  margin-top: 24px;
  width: 192px;
  justify-content: space-between;
  margin-bottom: 56px;
`;
const RateText = styled.Text`
  ${theme.text.b1.medium}
  color:${theme.colors.granita500}
  margin-top:8px;
  margin-bottom: 24px;
`;
const Photos = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 24px 0;
`;
const ImageContainer = styled.View`
  position: relative;
  width: 64px;
  height: 64px;
  margin-left: 12px;
`;

const AddImage = styled.TouchableOpacity`
  position: relative;
  width: 64px;
  aspect-ratio: 1;
  background-color: ${theme.colors.granita100};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
const IconCamera = styled(Camera)`
  position: absolute;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
`;
const RemoveImage = styled(Close)`
  position: absolute;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  right: 6px;
  top: 6px;
  border-radius: 2px;
`;
