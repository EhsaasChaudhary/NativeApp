import { SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import FancyCard from './Components/FancyCard'
import CardScroll from './Components/CardScroll'
import ActionCard from './Components/ActionCard'

export default function AppPro() {
  return (
    <SafeAreaView style={styles.appback}>
    <ScrollView>
      <FlatCards />
      <CardScroll/>
      <FancyCard />
      <ActionCard/>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    appback:{
        backgroundColor:'#97f4f7',
        padding:2
    }
})