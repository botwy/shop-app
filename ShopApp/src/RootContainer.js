import React, {Component, Fragment, useState} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {RootView} from './RootView';

export default RootContainer = (props) => {
  const [isPanelVisible, changeVisiblePanel] = useState(false);

    return (
      <View>
        <RootView onMenuClick={() => changeVisiblePanel(!isPanelVisible)}/>
        {isPanelVisible &&
        <Modal
          animationType="fade"
          transparent={false}
          visible={isPanelVisible}
          presentationStyle="pageSheet"
        />
        }

      </View>
    );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'blue',
    width: 300,
    height: 1000,
    zIndex: 0,
  }
})