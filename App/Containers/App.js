import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'

import NavigationRouter from '../Navigation/NavigationRouter'

class RootContainer extends Component {

    render() {
        return(
            <View style={{'flex': 1}}>
                <StatusBar translucent={true} backgroundColor="rgba(0,0,0,.2)"  />
                <NavigationRouter />
            </View>
        )
    }

}

export default RootContainer