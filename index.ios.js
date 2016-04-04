/**
 * React Native with Camera
 *
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactWithProfiles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native and React camera.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    top:22,
  },
});

AppRegistry.registerComponent('ReactWithProfiles', () => ReactWithProfiles);
