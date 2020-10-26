import React from 'react'
import { View, Text} from 'react-native'

interface Props {
    name: string
}

const SplashScreen: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>Nguyen Cuong ANh</Text>
        </View>
    )
}
export default SplashScreen