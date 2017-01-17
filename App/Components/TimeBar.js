import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'



class TimeBar extends Component {

    render() {
        return(
            <View style={this.props.style.timebar} >
              <Text style={this.props.style.timebarText}>Time</Text>
              <Text style={this.props.style.timebarText}>Time</Text>
              <Text style={this.props.style.timebarText}>Time</Text>
           </View>

        )
    }

}

export default TimeBar