import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyle } from '../theme/global.style'
import { PrimaryButton } from '../components'
import { v4 as uuidv4 } from 'uuid';



export const HelloWorldScreen = () => {

  const [count, setCount ] = useState("Vacio")


  return (
    <View>
      <Text style={globalStyle.title}>{count}</Text>
                <PrimaryButton
                label='ver número'
                onPress={()=>setCount(uuidv4())}
                onLongPress={()=> setCount("Vacio")}
            />
    </View>
  )
}
