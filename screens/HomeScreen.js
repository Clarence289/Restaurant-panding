// HomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Categories</Text>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('ArticleList', { category: 'sports' })}
      >
        <Text style={styles.categoryText}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('ArticleList', { category: 'business' })}
      >
        <Text style={styles.categoryText}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate('ArticleList', { category: 'technology' })}
      >
        <Text style={styles.categoryText}>Technology</Text>
      </TouchableOpacity>
      {/* Add more categories as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: 200,
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
