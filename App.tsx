import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'
import { PaperProvider } from 'react-native-paper'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { configRNCallKeep } from './src/utils/CallKeep'
console.log(configRNCallKeep());

export const App = () => {
  return (
    <PaperProvider 
    settings={{
      icon: (props) => <IonIcon {...props}/>
    }}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#a3d6cf'}}>
        <Text style={{backgroundColor: '#d6a3c2'}}>Hola mundo</Text>
        <HelloWorldScreen/>
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>

  )
}
