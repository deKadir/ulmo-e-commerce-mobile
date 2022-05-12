import { SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  margin-top: ${Platform.OS === 'android' ? '25px' : '0'};
  background-color: white;
  flex: 1;
`;
export default SafeArea;
