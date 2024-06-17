import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/321px-Colosseo_2020.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardPlaceTitle}>Colosseum</Text>
          <Text style={styles.cardPlaceLocation}>Rome, Italy</Text>
          <Text style={styles.cardPlaceDescription}>
            The Colosseum is an ancient amphitheater in Rome, known for its
            architectural grandeur and historical significance.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardPlaceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPlaceLocation: {
    fontSize: 14,
    color: '#666',
  },
  cardPlaceDescription: {
    fontSize: 12,
    color: '#666',
  },
});
