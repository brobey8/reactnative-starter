import React, { PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux'
import { Router } from 'react-native-router-flux'
import scenes from '../routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <View>
        <Router scenes={scenes}/>
        <Text>fsdfsdf</Text>
    </View>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  //history: PropTypes.object.isRequired
}

export default Root
