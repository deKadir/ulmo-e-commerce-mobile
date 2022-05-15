import React from 'react';

import styled from 'styled-components/native';
import { SearchBar } from '../components';
import theme from '../theme/theme';
import Review from './../components/Review';

export default function ReviewsView() {
  return (
    <Container>
      <SearchBar />
      <Reviews
        data={reviewsData}
        renderItem={({ item }) => <Review {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 0 16px;
`;
const Reviews = styled.FlatList``;

const reviewsData = [
  {
    stars: 4,
    time: 'Today, 12:30 pm',
    userAvatar: require('../assets/images/avatar-1.png'),
    username: 'Erin Mango',
    comment: 'Everything is good. Nice quality',
    reviewImages: [
      {
        image: require('../assets/images/pic-1.png'),
      },
      {
        image: require('../assets/images/pic.png'),
      },
      {
        image: require('../assets/images/pic-2.png'),
      },
    ],
  },
  {
    stars: 3,
    time: '1 month ago',
    userAvatar: require('../assets/images/avatar-2.png'),
    username: 'Corey Rosser',
    comment: 'Could be better :(',
    reviewImages: [],
  },
  {
    stars: 5,
    time: '2 month ago',
    userAvatar: require('../assets/images/avatar-3.png'),
    username: 'Paityn Saris',
    comment:
      'Bought this table 2 months ago and I wanted to say, this is the best bedside table I’ve ever used 😍',
    reviewImages: [],
  },
];
