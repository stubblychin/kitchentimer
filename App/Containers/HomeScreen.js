import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions as NavActions } from 'react-native-router-flux'

class HomeScreen extends Component {

    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={{ textAlign:'center' }}>Home Screen</Text>
                <Button onPress={NavActions.timelineScreen} title="Timeline" />
            </View>
        )
    }

}

export default HomeScreen