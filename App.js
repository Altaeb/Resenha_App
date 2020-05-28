import React from 'react';
import { Modal, View, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import cacheAssetsAsync from './helpers/cacheAssetsAsync';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as Nunito from './assets/fonts/Nunito';
import Resenha from './assets/fonts/Resenha';
import LogoResenha from './assets/Logo-Resenha.png';
import RootNavigator from './navigators';
import firebaseConfig from './config/firebase';
import firebase from 'firebase';
import NavigationService from './helpers/NavigationService';

firebase.initializeApp(firebaseConfig);

const AppNavigatorContainer = createAppContainer(RootNavigator);

class App extends React.Component {
  state = {
    isReady: false,
    modalVisible: false,
    content: null,
    marks: [],
    snapshot: '',
  }

  changeModalVisibility = (modalVisible = false, content) => {
    this.setState({ modalVisible, content });
  }

  storeMarksOnState = (marks, callback) => {
    this.setState({
      marks: marks,
    }, () => callback())
  }

  getMarks = () => this.state.marks;

  clearMarks = () => {
    this.setState({
      marks: [],
    })
  }

  saveSnapshot = uri => {
    this.setState({
      snapshot: uri
    });
  }

  getSnapshot = () => this.state.snapshot

  clearSnapshot = () => {
    this.setState({
      snapshot: ''
    });
  }

  async componentDidMount() {
    await Font.loadAsync(Object.assign(Nunito, { Resenha }));

    await cacheAssetsAsync([
      LogoResenha,
    ], () => { });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <AppNavigatorContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          screenProps={{
            changeModalVisibility: this.changeModalVisibility,
            storeMarksOnState: this.storeMarksOnState,
            getMarks: this.getMarks,
            clearMarks: this.clearMarks,
            saveSnapshot: this.saveSnapshot,
            getSnapshot: this.getSnapshot,
            clearSnapshot: this.clearSnapshot,
          }}
        />
        <Modal
          visible={this.state.modalVisible}
          animationType="fade"
        >
          {this.state.content}
        </Modal>
      </View>
    )
  }
}


export default App;