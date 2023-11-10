import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardDetails = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [isHearted, setIsHearted] = useState(false);
  const [cart, setCart] = useState([]);

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  const decrementGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const toggleHeart = () => {
    setIsHearted(!isHearted);
    if (!isHearted) {
      setCart([...cart, { name: 'Leicester Square Kitchen', guestCount }]);
    }
  };

  const generateTimeSlots = () => {
    const timeSlots = [
      'Lunch',
      '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm',
      '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:30 pm',
      'Dinner',
      '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm',
      '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm',
    ];

    return timeSlots.map((time, index) => (
      <TouchableOpacity key={index} style={styles.timeSlot}>
        <Text style={styles.timeText}>{time}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/Restaurant1.jpg')}
        style={styles.cardImage}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle the button press action here
        }}
      >
        <Icon name="cutlery" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <View style={styles.nameAndRatingContainer}>
          <Text style={styles.restaurantName}>Leicester Square Kitchen</Text>
          <TouchableOpacity
            style={styles.heartButton}
            onPress={toggleHeart}
          >
            <Icon name={isHearted ? 'heart' : 'heart-o'} size={20} color={isHearted ? 'red' : '#FF5733'} />
          </TouchableOpacity>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>31-36 Leicester Square, Midrand</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => {
                // Handle the Share button press action here
              }}
            >
              <Icon name="share" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.guestContainer}>
          <View style={styles.guestTextContainer}>
            <Text style={styles.guestText}>Guest: {guestCount}</Text>
          </View>
          <View style={styles.guestOptionsContainer}>
            <TouchableOpacity
              style={styles.guestOptionButton}
              onPress={incrementGuestCount}
            >
              <Icon name="caret-up" size={20} color="#459C97" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.guestOptionButton}
              onPress={decrementGuestCount}
            >
              <Icon name="caret-down" size={20} color="#459C97" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timeContainer}>
          {generateTimeSlots()}
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeading}>About Leicester Square Kitchen</Text>
          <Text style={styles.aboutText}>
            Leicester Square Kitchen is a culinary gem nestled in the heart of Midrand. This vibrant and modern restaurant offers a delightful blend of Mexican and Peruvian flavors, creating a unique and unforgettable dining experience. With a reputation for serving the finest cuisine, Leicester Square Kitchen provides a diverse menu that caters to every palate. From delectable ceviche to mouthwatering tacos, each dish is a work of art, masterfully prepared by our talented chefs. The restaurant's inviting ambiance, combined with its commitment to exceptional service, makes it the perfect destination for an intimate dinner or a memorable gathering with friends and family. Explore the rich tapestry of flavors at Leicester Square Kitchen, where culinary creativity knows no bounds.
          </Text>
        </View>
        <View style={styles.contactContainer}>
          <Text style={styles.contactHeading}>Contact Details</Text>
          <TouchableOpacity style={styles.emailButton} onPress={() => { /* Handle email button press */ }}>
            <Icon name="envelope" size={20} color="#459C97" style={styles.emailIcon} />
            <Text style={styles.emailText}>info@leicestersquarekitchen.com</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialLinks}>
          <SocialIcon name="facebook" color="#1877F2" onPress={() => { /* Handle Facebook link */ }} />
          <SocialIcon name="youtube" color="#FF0000" onPress={() => { /* Handle YouTube link */ }} />
          <SocialIcon name="whatsapp" color="#25D366" onPress={() => { /* Handle WhatsApp link */ }} />
          <SocialIcon name="twitter" color="#1DA1F2" onPress={() => { /* Handle Twitter link */ }} />
          <SocialIcon name="instagram" color="#C13584" onPress={() => { /* Handle Instagram link */ }} />
        </View>
      </View>
    </ScrollView>
  );
};

const SocialIcon = ({ name, color, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.socialIcon}
      onPress={onPress}
    >
      <Icon name={name} size={24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#459C97',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
  },
  nameAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  heartButton: {
    padding: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  locationText: {
    fontSize: 16,
    color: '#777',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  shareButton: {
    marginLeft: 10,
  },
  guestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  guestTextContainer: {
    width: '50%',
  },
  guestText: {
    fontSize: 18,
    color: '#333',
  },
  guestOptionsContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
  },
  guestOptionButton: {
    padding: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  timeSlot: {
    backgroundColor: '#459C97',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  timeText: {
    color: 'white',
  },
  aboutContainer: {
    marginTop: 20,
  },
  aboutHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: '#555',
  },
  contactContainer: {
    marginTop: 20,
    padding: 20,
  },
  contactHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emailButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  socialIcon: {
    alignItems: 'center',
  },
  emailIcon: {
    marginRight: 10,
  },
  emailText: {
    fontSize: 14,
    color: '#459C97',
  },
});

export default CardDetails;
