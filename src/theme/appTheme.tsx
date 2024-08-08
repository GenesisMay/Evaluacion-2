import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 50,
},

title:{
    color:'#345f87',
    fontWeight:'bold',
    fontSize: 50,
    marginBottom: 40,
    alignSelf:'center'
},


text:{
    color:'blue',
    fontWeight:'bold',
    fontSize: 20,
    marginBottom: 4,
},

image:{
    width: 320,
    height: 330,
    alignSelf: 'center'
},

button1:{
    width:150,
    height:150,
    borderRadius: 5,
    alignSelf: 'center',
},

button: {
    width:100,
    backgroundColor:'#CCCCCC',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center'
},

input: {
    height: 35,
    margin: 20,
    borderWidth: 0.8,
    padding: 10,
    marginBottom: 20,
},
})