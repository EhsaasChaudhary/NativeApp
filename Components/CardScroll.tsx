import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardScroll = () => {
  return (
    <View style={styles.cardbody}>
        <Text style={styles.headingtext}>Scroll</Text>
    <ScrollView horizontal style={styles.scroll}>
      <View style={[styles.flatcard, styles.backcolor1]}>
        <Text style={styles.cardtext}>Card 1</Text>
      </View>
      <View style={[styles.flatcard, styles.backcolor2]}>
        <Text style={styles.cardtext}>Card 2</Text>
      </View>
      <View style={[styles.flatcard, styles.backcolor3]}>
        <Text style={styles.cardtext}>Card 3</Text>
      </View>
      <View style={[styles.flatcard, styles.backcolor4]}>
        <Text style={styles.cardtext}>Card 4</Text>
      </View>
      <View style={[styles.flatcard, styles.backcolor5]}>
        <Text style={styles.cardtext}>Card 5</Text>
      </View>
      <View style={[styles.flatcard, styles.backcolor6]}>
        <Text style={styles.cardtext}>Card 6</Text>
      </View>
    </ScrollView>
    </View>
  );
};

export default CardScroll;

const styles = StyleSheet.create({
    cardbody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 10,
    },
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:10,
        textAlign:'center',
        color:'#000'
    },
  scroll: {
    flex: 1,
    paddingHorizontal: 10, // Add some padding to the horizontal scroll
    paddingTop: 10, // Add top padding
  },
  flatcard: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  cardtext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backcolor1: {
    backgroundColor: '#FF6347', // Tomato
  },
  backcolor2: {
    backgroundColor: '#FF69B4', // Hot Pink
  },
  backcolor3: {
    backgroundColor: '#FFD700', // Gold
  },
  backcolor4: {
    backgroundColor: '#ADFF2F', // Green Yellow
  },
  backcolor5: {
    backgroundColor: '#1E90FF', // Dodger Blue
  },
  backcolor6: {
    backgroundColor: '#FF4500', // Orange Red
  },
});
