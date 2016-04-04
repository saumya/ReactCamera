/**
 * React Native with Camera
 *
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class ReactWithProfiles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native and React camera.
        </Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.button}> Camera </Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onPressButton(){
    alert('hi');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    top:22,
  },
  button:{
    backgroundColor: '#222222',
    color: '#FFFFFF',
    height:50,
    width: 100,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    marginLeft:20,
    marginTop:20,
  }
});

AppRegistry.registerComponent('ReactWithProfiles', () => ReactWithProfiles);
