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
    this._onToggleButtonPress = this._onToggleButtonPress.bind(this);
    this.state = {};
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
          aspect={Camera.constants.Aspect.fill} type={this.state.camType}>
        </Camera>
        <Text style={styles.capture} onPress={this._onToggleButtonPress.bind(this)}>Front / Back</Text>
        <Text style={styles.capture} onPress={this._onCameraButtonPress.bind(this)}>snap</Text>

      </View>
    );
  }
  onGotImage(data){
    this.props.onCamImage(data);
  }
  _onCameraButtonPress(){
    this.camera.capture().then((data) =>this.onGotImage(data)).catch(err =>alert(err));
  }
  _onToggleButtonPress(){
    //this.camera.type = Camera.constants.Type.front;

    if(this.state.camType===Camera.constants.Type.front){
      this.setState({camType:Camera.constants.Type.back});
    }else{
      this.setState({camType:Camera.constants.Type.front});
    }
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
