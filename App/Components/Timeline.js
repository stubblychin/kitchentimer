import React, { Component } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

import TimeBar from './TimeBar'

class Timeline extends Component {

    render() {
        return(
            <View style={styles.container}>
               <TimeBar style={styles} />
               <View style={styles.timelinebody}>
                    <Text>Timeline Body</Text>
               </View>
           </View>

        )
    }

}

var styles = StyleSheet.create({

    container : {
        flexDirection: 'row',
        height: 300,
    },
    timebar: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    timebarText : {
        textAlign: 'center',
    },
    timelinebody: {
        flex: 5,
        backgroundColor: 'red',

    }


});

export default Timeline