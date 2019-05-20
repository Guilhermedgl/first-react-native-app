/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import Shows from './Shows';
import Detail from './Detail';

const AppContainer = createStackNavigator({
  Main,
  Shows,
  Detail,
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#DA552F',
    },
    headerTintColor: '#FFF',
  },
});

export default createAppContainer(AppContainer);
