import React from 'react';
import styled from 'styled-components';
import SvgStarFilled from './../assets/icons/StarFilled';
import SvgStar from './../assets/icons/Star';
import theme from '../theme/theme';
export default function Review(data) {
  return (
    <Container>
      <Nav>
        <Rating>
          {Array(5)
            .fill(0)
            .map((item, key) => {
              if (key + 1 <= data.stars)
                return (
                  <SvgStarFilled fill={theme.colors.charizard400} key={key} />
                );
              return <SvgStar fill="gray" key={key} />;
            })}
        </Rating>
        <Time>{data.time}</Time>
      </Nav>
      <User>
        <UserAvatar source={data.userAvatar} />
        <Username>{data.username}</Username>
      </User>
      <Caption>{data.comment}</Caption>
      <ReviewImages>
        {data.reviewImages.map((item, key) => {
          return <ReviewImage source={item.image} key={key} index={key} />;
        })}
      </ReviewImages>
    </Container>
  );
}

const Container = styled.View`
  padding: 16px 0;
`;
const Nav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const Rating = styled.View`
  width: 125px;
  flex-direction: row;
  justify-content: space-around;
`;
const Time = styled.Text`
  ${theme.text.b2.regular}
  color:${theme.colors.granita500}
`;
const User = styled.View`
  flex-direction: row;
`;
const UserAvatar = styled.Image`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
`;
const Username = styled.Text`
  ${theme.text.b1.medium}
`;
const Caption = styled.Text`
  ${theme.text.b1.regular}
  color:${theme.colors.granita500}
`;
const ReviewImages = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;
const ReviewImage = styled.Image`
  margin-left: ${(props) => (props.index !== 0 ? '8px' : '0')};
`;
