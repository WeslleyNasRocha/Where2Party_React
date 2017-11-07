import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base';

class ChatScreen extends Component {
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button
              transparent
              rounded
              onPress={() => {
                Actions.pop();
              }}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ flexDirection: 'row', marginRight: 10 }}>{this.props.Titulo}</Title>
          </Body>
          <Right>
            <Button
              transparent
              rounded
              onPress={() => {
                Actions.PeopleList({ room: this.props.room });
              }}
            >
              <Icon name="ios-people" />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}

export default ChatScreen;
