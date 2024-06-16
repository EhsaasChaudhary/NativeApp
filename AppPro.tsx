import React, { isValidElement } from "react";

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
  return (
  
        <View style = {styles.container}>
            <Text style= {isDarkMode ? styles.textmodedark:styles.textmodewhite}>Hello</Text>
            <Text>app</Text>
            <Text>app</Text>
            <Text>app</Text>
            <Text>app</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    textmodewhite:{
        color:'#FFFFFF'
    },
    textmodedark:{
        color:'#000000'
    }


})

export default AppPro;