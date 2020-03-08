import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const Hour = styled(RectButton)`
  background: ${props => (props.enabled ? '#fff' : '#f64c45')};
  border-radius: 4px;
  padding: 20px;
  flex: 1;

  align-items: center;
  margin: 0 10px 20px;
`;

export const DateWeekday = styled.Text`
  margin: -20px 0 20px;
  align-self: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;