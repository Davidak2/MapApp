import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { firebase } from '../firebaseConfig'

const SignupScreen = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  registerUser = async (email,password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    }catch (error){
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontweight:'bold', fontSize:23}}>
        Register Here!
      </Text>
      <View style={{marginTop:30}}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          onChange={(fullName) => setFullName(fullName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          onChange={(email) => setEmail(email)}
          autoCorrect={false}

        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          onChange={(password) => setPassword(password)}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
          onPress={() => registerUser(email, password, fullName)}
          style={styles.button}
        >
          <Text style={{fontweight:'bold', fontSize:18}}>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  conatiner: {
    flex:1,
    alignItems:'center',
    marginTop:100,
  },
  TextInput: {
    paddingTop:20,
    paddingBottom:10,
    width:400,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:"#000",
    marginBottom:10,
    textAlign:'center'
  },
  button: {
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'026efd',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    
  }
})