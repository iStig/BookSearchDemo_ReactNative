'use strict';

var React = require('react-native');
var BookList = require('./BookList');
var {
    StyleSheet,
    View,
    Text,
    Component,
    NavigatorIOS,
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Featured extends Component {
    render() {
        return (
  	  <NavigatorIOS
      style = {styles.container}
 initialRoute = {{
  title:'Featured Books',
  component:BookList
}}/ >
        );
    }
}

module.exports = Featured;
