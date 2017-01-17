import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux'


// Pages/Scenes
import HomeScreen from '../Containers/HomeScreen'
import TimelineScreen from '../Containers/TimelineScreen'
import animationStyle from '../Animations/Animations'





class NavigationRouter extends Component {

    render() {
        return (
            <Router style={{backgroundColor: 'black'}} >
                <Scene key="root" navigationBarStyle={{paddingTop: StatusBar.currentHeight, height: StatusBar.currentHeight + 54 }} >
                    <Scene key='homeScreen' component={HomeScreen} title='Kitchen Timer' sceneStyle={{ paddingTop: StatusBar.currentHeight + 54 }}  />
                    <Scene key='timelineScreen' component={TimelineScreen} title='Timeline' sceneStyle={{ paddingTop: StatusBar.currentHeight + 54 }} />
                </Scene>
            </Router>
            )
    }

}

export default NavigationRouter

