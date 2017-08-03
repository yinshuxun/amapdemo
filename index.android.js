/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  NativeAppEventEmitter,
  TouchableHighlight,
  ListView,
  Dimensions,
  Alert,
  ToastAndroid,
  Platform,
  AppRegistry
} from 'react-native'

import AMap from 'react-native-smart-amap'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

class AMapDemo extends Component {
  constructor(props) {
    super(props)
    this._amap = null
    this.num = 1
  }

  render() {
    //console.log(`amap-alone render...`)
    return (
      <AMap
        ref={component => {
          this._amap = component
          console.log(this._amap)
        }}
        style={{ flex: 1 }}
        options={{
          frame: {
            width: deviceWidth,
            height: deviceHeight
          },
          showsUserLocation: false,
          userTrackingMode: Platform.OS == 'ios' ? AMap.constants.userTrackingMode.none : null,
          centerCoordinate: {
            latitude: 32.168098,
            longitude: 118.703891
          },
          zoomLevel: 10,
          centerMarker: Platform.OS == 'ios' ? 'icon_location' : 'poi_marker',
        }}
        onDidMoveByUser={this._onDidMoveByUser}
        onClickMarker={this._onClickMarker.bind(this)}
      />
    )
  }

  _onClickMarker(opt) {
    ToastAndroid.show('点击了 marker', ToastAndroid.SHORT);
    this._amap.showMarker({
      latitude: 32.168098,
      longitude: 118.706173
    }, "坐标一号")
    this._amap.showMarker({
      latitude: 32.167808,
      longitude: 118.708293
    }, "坐标二号")
    this._amap.showMarker({
      latitude: 32.16767,
      longitude: 118.711329
    }, "坐标三号")
  }

  _onDidMoveByUser() {
    // this._amap.showMarker({
    //   latitude: 32.168098,
    //   longitude: 118.703891
    // })
  }
}

AppRegistry.registerComponent('amapdemo', () => AMapDemo);
