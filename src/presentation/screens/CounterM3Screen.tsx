import { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyle } from '../theme/global.style'
import { FAB } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { PrimaryButton } from '../components'


export const CounterM3Screen = () => {

    const [count, setCount ] = useState(10)

    return (
        <View style={globalStyle.centerContainer}>
            <Text style={globalStyle.title}>{count}</Text>
                <PrimaryButton
                label='sum and reset'
                onPress={()=>setCount(count + 1)}
                onLongPress={()=> setCount(0)}
            />
        <FAB
            icon="add"
            onPress={()=> setCount(count+1)}
            onLongPress={()=> setCount(0)}
            style={globalStyle.fab}
            />
        </View>
      )
}
