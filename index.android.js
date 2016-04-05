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
var CameraView = require('./components/CameraView');

class ReactWithProfiles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => this._onCameraPress() }>
          <Text style={ styles.cameraButton }>
              { 'Camera' }
          </Text>
        </TouchableOpacity>
        <CameraView onCamImage={this._onCameraPress} />
      </View>
    );
  }
  _onCameraPress(){
    //alert('Camera !');
    //alert(idCam);
  }
  _onGotCamImage(){
    alert('_onGotCamImage');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    top:0,
  },
  cameraButton: {
    fontSize: 40,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 4,
    textAlign: "center",
    fontSize: 20,
  },
  preview:{
    flex:1
  },

});

AppRegistry.registerComponent('ReactWithProfiles', () => ReactWithProfiles);
