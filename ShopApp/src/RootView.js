import React, {Component, useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon, Drawer} from 'native-base';
import {SlideBar} from './components/SlideBar';

export class RootView extends Component {
  state = {
    isShownSlideBar: false,
  }

  onPressMenu = () => {
    const { isShownSlideBar } = this.state;
    if (isShownSlideBar) {
      this.closeDrawer()
      return
    }

    this.openDrawer()
  }

  closeDrawer = () => {
    this.drawer._root.close()
    this.setState({isShownSlideBar: false})
  }

  openDrawer = () => {
    this.drawer._root.open()
    this.setState({isShownSlideBar: true})
  }
  renderHeader = () => {
    return (
      <Header style={[styles.header, styles.backgroundWhite]}>
        <Left style={styles.headerLeft}>
          <TouchableOpacity
            onPress={this.onPressMenu}
          >
            <Image
              source={require("./images/Hamburger_icon.svg.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Left>
        <Body style={styles.headerBody}>
        <Title style={styles.headerTitle}>Магазин</Title>
        </Body>
        <Right style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={require( "./images/buscket.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }

  render() {
    const { isShownSlideBar } = this.state;

    return (
      <Container>
        <Drawer
          ref={drawer => this.drawer = drawer}
          onClose={this.closeDrawer}
          content={<SlideBar/>}
          type="overlay"
          styles={drawerStyles}
        >
          {this.renderHeader()}
        </Drawer>
      </Container>
    );
  }
}

const drawerStyles = StyleSheet.create({
  drawer: {backgroundColor: 'white'},
  mainOverlay: {backgroundColor: 'lightgrey', opacity: .3},
})

const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
  },
  header: {
  },
  headerLeft: {
   flex: 1,
  },
  headerRight: {
   flex: 1,
  },
  headerBody: {
   flex: 2,
  },
  headerTitle: {
    color: 'blue',
    alignSelf: 'center',
  },
  image: {
    height: 30,
    width: 30,
  }
})