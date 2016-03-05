/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

 var React = require('react-native');
 var Featured = require('./Featured');
 var Search = require('./Search');
 var About = require('./About');

 var {
     AppRegistry,
     TabBarIOS,
     Component
    } = React;

 class BookSearchDemo extends Component {

     constructor(props) {
         super(props);
         this.state = {
             selectedTab: 'featured'
         };
     }

     render() {
         return (
             <TabBarIOS selectedTab={this.state.selectedTab}>

                 <TabBarIOS.Item
                     selected={this.state.selectedTab === 'featured'}
                     icon={{uri:'featured'}}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'featured'
                         });
                     }}>
                     <Featured/>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                     selected={this.state.selectedTab === 'search'}
                     icon={{uri:'search'}}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'search'
                         });
                     }}>
                     <Search/>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                 selected={this.state.selectedTab === 'about'}
                 icon={{uri:'more'}}
                 onPress={()=>{
                   this.setState({
                     selectedTab:'about'
                    });
                  }}>
                  <About/>
                 </TabBarIOS.Item>

             </TabBarIOS>
         );
     }
 }

 AppRegistry.registerComponent('BookSearchDemo', () => BookSearchDemo);



// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class BookSearchDemo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('BookSearchDemo', () => BookSearchDemo);
