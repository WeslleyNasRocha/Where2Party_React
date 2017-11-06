import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from 'native-base';
import EventList from '../Event/EventList';
// Import reducer and actions
import { eventsFetch } from '../../Actions';

class Feed extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#9c27b0' }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon name="menu" size={30} color={'#ffffff'} />
            </Button>
          </Left>
          <Body>
            <Title style={{ alignSelf: 'center', marginLeft: 65 }}>
              Eventos
            </Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.props.eventsFetch();
              }}
            >
              <Icon name="ios-refresh" size={30} color={'#ffffff'} />
            </Button>
            <Button transparent onPress={() => {}}>
              <Icon name="add" size={30} color={'#ffffff'} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <EventList
            events={this.props.events}
            refreshing={this.props.refreshing}
            eventsFetch={() => {
              this.props.eventsFetch();
            }}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ feed }) => {
  const { events, refreshing } = feed;
  //  console.log(events);
  return { events, refreshing };
};

export default connect(mapStateToProps, { eventsFetch })(Feed);
