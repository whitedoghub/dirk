import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class IntroCommonButton extends Component {
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    onPress: () => null,
  };

  constructor(props) {
    super(props);
    console.log('CustomButton > constructor() > props :: ', props);
  }

  render() {
    console.log(
      'CustomButton > render() > this.props.onPress :: ',
      this.props.onPress,
    );
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.buttonColor }]}
        onPress={this.props.onPress}>
        <Text style={[styles.title, { color: this.props.titleColor }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
  },
});
