import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {Container} from 'native-base';
import {RootHeader} from './components/RootHeader';


export const RootView = (props) => {
  return (
    <Container>
      <RootHeader onMenuClick={props.onMenuClick}/>
    </Container>
  );
}