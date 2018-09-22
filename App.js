import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
export default class App extends React.Component {
constructor(props){
super(props);
this.state = {colorname:'#e3e3e3'}
}
render() {
return (
<Container>
<Header></Header>
<Content>
<Text style={{textAlign:'center',fontSize:30, marginTop:20, marginBottom:20}}>Press Button</Text>
<Button block success
onPress={this.getcolor.bind(this)}
>
<Text>Click Me</Text>
</Button>
<View style={{flex:1, paddingTop:100, paddingBottom:100, backgroundColor:this.state.colorname, marginTop:30}}>
<Text style={{
color:'#ffffff',
textAlign:'center',
fontSize:20,
textShadowColor: 'rgba(0, 0, 0, 0.75)',
textShadowOffset: {width: -1, height: 1},
textShadowRadius: 10}}>
Output Here
</Text>
</View>
</Content>
</Container>
);
}
getcolor(){
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
this.setState({colorname:ColorCode});
}
}