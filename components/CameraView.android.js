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

class CameraView extends Component {
  constructor(props){
    super(props);
    this.props.onCamImage = this.onGotImage.bind(this);
  }
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
        </Camera>
        <Text style={styles.capture} onPress={this._onCameraButtonPress.bind(this)}>snap{this.props.camName}</Text>

      </View>
    );
  }
  onGotImage(data){
    alert(data);
  }
  _onCameraButtonPress(){
    this.camera.capture().then((data) =>this.onGotImage(data)).catch(err =>alert(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    top:0,
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
//
module.exports = CameraView;
