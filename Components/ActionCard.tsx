import {
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const ActionCard = () => {
    function openWebsite(websiteLink: string) {
      Linking.openURL(websiteLink);
    }
  
    return (
      <View style={styles.safeArea}>
        <Text style={styles.headingText}>Blogs</Text>
        <ScrollView horizontal style={styles.container}>
          <TouchableOpacity
            onPress={() => openWebsite('https://dev.to/ehsaas_chaudhary')}
            activeOpacity={0.9}>
            <View style={styles.card}>
              <Image
                source={{
                  uri: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Dev.to</Text>
                <Text numberOfLines={3} style={styles.cardDesc}>
                  Dev.to is a community of software developers sharing knowledge, ideas, and experiences. Join the conversation and learn from others in the tech industry.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => openWebsite('https://dev.to/ehsaas_chaudhary')}
            activeOpacity={0.9}>
            <View style={styles.card}>
              <Image
                source={{
                  uri: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Dev.to</Text>
                <Text numberOfLines={3}  style={styles.cardDesc}>
                  Dev.to is a community of software developers sharing knowledge, ideas, and experiences. Join the conversation and learn from others in the tech industry.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  
  export default ActionCard;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      padding: 15,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },
    container: {
      flexDirection: 'row',
    },
    card: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      margin: 10,
      width: 300,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    cardContent: {
      padding: 15,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    cardDesc: {
      fontSize: 14,
      color: '#666',
    },
  });
  