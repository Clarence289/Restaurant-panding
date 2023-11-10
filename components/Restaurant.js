import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Restaurant = () => {
  return (
    <View style={styles.restaurant}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good Morning</Text>
        <Icon name="bell" color="black" size={24} style={styles.bellIcon} />
      </View>
      <View style={styles.centeredContent}>
        <View style={styles.card}>
          <Image source={require('../assets/Restaurant1.jpg')} style={styles.cardImage} />
          <View style={styles.detailsContainer}>
            <View style={styles.nameAndRatingContainer}>
              <Text style={styles.restaurantName}>Leicester Square Kitchen</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" color="yellow" size={20} style={styles.starIcon} />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" color="grey" size={16} style={styles.locationIcon} />
              <Text style={styles.locationText}>31-36 Leicester Square, Midrand</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Restaurant2.jpg')} style={styles.cardImage} />
          <View style={styles.detailsContainer}>
            <View style={styles.nameAndRatingContainer}>
              <Text style={styles.restaurantName}>Ormer Mayfair</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" color="yellow" size={20} style={styles.starIcon} />
                <Text style={styles.ratingText}>4.5</Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" color="grey" size={16} style={styles.locationIcon} />
              <Text style={styles.locationText}>31-36 Leicester Square, Midrand</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomNavBar}>
          <Icon name="home" color="white" size={24} />
          <Icon name="heart" color="white" size={24} />
          <Icon name="user" color="white" size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bellIcon: {
    margin: 50,
    color: '#459C97',
  },
  card: {
    width: 300,
    height: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 22,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  nameAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight:5,
    marginTop:-15,
  },
  locationText: {
    fontSize: 12,
    color: 'grey',
    marginTop: -15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: -30,
    color: '#FFD700',
    margin: 40,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    margin: 35,
  },
  bottomNavBar: {
    backgroundColor: '#459C97',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 24,
    position: 'absolute',
    bottom: -5,
    left: 2,
  },
});

export default Restaurant;