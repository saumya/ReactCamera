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

import Camera from 'react-native-camera';

class ReactWithProfiles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native and React camera.
        </Text>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this._onCameraButtonPress.bind(this)}>snap</Text>
        </Camera>


      </View>
    );
  }
  _onCameraButtonPress(){
    //alert('hi');

    this.camera.capture().then((data) =>alert(data)).catch(err =>alert(err));

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    top:22,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  preview:{
    flex:1
  },

});

AppRegistry.registerComponent('ReactWithProfiles', () => ReactWithProfiles);
