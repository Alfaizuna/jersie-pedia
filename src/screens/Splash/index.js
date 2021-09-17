import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Logo, Ilustrasi } from '../../assets'

export default class Splash extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.replace('Home')
        }, 3000)
    }npm install @react-navigation/bottom-tabs

    render() {
        return (
            <View style={styles.screen}>
                <Logo/>
                <View style={styles.ilustrasi}>
                    <Ilustrasi/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    ilustrasi:{
        position:'absolute',
        bottom:0,
        right:0
    }
})
