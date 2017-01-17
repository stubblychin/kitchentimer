import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Timeline from '../Components/Timeline'

class TimelineScreen extends Component {

    render() {
        return(
            <View>
                <Text style={{ textAlign:'center' }}>Timeline</Text>
                <Timeline />
            </View>
        )
    }

}

export default TimelineScreen