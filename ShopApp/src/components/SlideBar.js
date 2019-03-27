import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const ITEM_NAMES = ['men bags', 'handbags', 'backpacks']

export const SlideBar = (props) => {
    return (
        ITEM_NAMES.map(menuItem => (
          <TouchableOpacity key={menuItem}>
            <Text>{menuItem}</Text>
          </TouchableOpacity>
        ))
    );
}