import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

const habits = [
  {
    id: '1',
    name: 'Quit Sugar',
    days: 10,
    cravings: 200
  },
  {
    id: '2',
    name: 'Quit Smoking',
    days: 11,
    cravings: 200
  }
];

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  getCard(habit) {
    return (
      <Card title={habit.name} onPress={() => alert("HERE")} key={habit.id}>
        <Button backgroundColor='#03A9F4' buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                onPress={() => {
                  this.props.navigation.navigate('DetailsScreen', {
                    habit
                  });
                }}
                title="View Now"/>
      </Card>
    );
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {habits.map(habit => this.getCard(habit))}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
