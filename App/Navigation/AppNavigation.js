import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import BadgesScreen from '../Containers/BadgesScreen'
import CravingsScreen from '../Containers/CravingsScreen'
import SummaryScreen from '../Containers/SummaryScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const TabNav = createBottomTabNavigator({
  SummaryScreen: { screen: SummaryScreen },
  CravingsScreen: { screen: CravingsScreen },
  BadgesScreen: { screen: BadgesScreen }
}, {
  // headerMode: 'none',
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DetailsScreen: { screen : TabNav },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
