/**
 * React Native with Camera
 *
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import Camera from 'react-native-camera';
var CameraView = require('./components/CameraView');

class ReactWithProfiles extends Component {
  constructor(props){
    super(props);
    // ReactJS : does not auto bind now
    // ref: https://github.com/goatslacker/alt/issues/283
    this._onCameraPress = this._onCameraPress.bind(this);
    // defaults
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => this._onCameraPress() }>
          <Text style={ styles.cameraButton }>
              { 'Camera' }
          </Text>
        </TouchableOpacity>
        <CameraView onCamImage={this._onCameraPress} />
        <Image style={styles.preview} source={{uri: this.state.photo}}/>
      </View>
    );
  }
  _onCameraPress(data){
    alert('Camera ! '+data);
    //TODO: render the data / image we got from camera

    this.setState({photo:data});
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
