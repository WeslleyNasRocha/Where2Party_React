import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PeopleList extends Component {
  render() {
    return (
      <View>
        <Text>List {this.props.room}</Text>
      </View>
    );
  }
}

export default PeopleList;
