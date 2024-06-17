import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function FlatCards(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cardFlat, styles.backColor1]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.cardFlat, styles.backColor2]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.cardFlat, styles.backColor3]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 10,
    textAlign: 'center',
    color: '#000', // Darker text color for contrast
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%', // Ensures the container takes full width
    paddingHorizontal: 10,
  },
  cardFlat: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10, // Optional: add some rounded corners for better aesthetics
  },
  cardText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backColor1: {
    backgroundColor: '#FF0000', // Red color
  },
  backColor2: {
    backgroundColor: '#0000FF', // Blue color
  },
  backColor3: {
    backgroundColor: '#00FF00', // Green color
  },
});

export default FlatCards;
