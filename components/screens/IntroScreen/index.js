import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from './IntroCommonButton';

export default class IntroScreen extends Component {
  constructor() {
    super();
    this.state = {
      mainActive: 1,
    };

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    this.setState({
      mainActive: this.state.mainActive == 1 ? 2 : 1,
    });
  }

  render() {
    console.log('App > render() > this.state :: ', this.state);

    const mainImage =
      this.state.mainActive == 1
        ? require('../../../assets/images/intro/intro_1.jpg')
        : require('../../../assets/images/intro/intro_2.jpg');

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>header</Text>
        </View>
        <View style={styles.title}>
          <Text style={{ fontSize: 35, color: 'white' }}>
            {'씨붕아, 어디야 !!'}
          </Text>
        </View>
        <View style={styles.content}>
          <Image
            style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
            source={mainImage}
          />
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#444'}
            title={'회원가입'}
            onPress={() => alert('회원가입 버튼')}
          />
          <CustomButton
            buttonColor={'#023e73'}
            title={'로그인'}
            onPress={this.changeImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    height: '5%',
    backgroundColor: '#ff9a9a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: 'black',
  },
  footer: {
    width: '100%',
    height: '20%',
    //backgroundColor: '#1ad657',
  },
});
