import React from 'react';
import { View, Text, Image } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View>
      <Text>{article.title}</Text>
      <Image source={{ uri: article.urlToImage }} style={{ width: 200, height: 200 }} />
      <Text>{article.description}</Text>
      <Text>{article.author}</Text>
      <Text>{article.publishedAt}</Text>
      <Text>{article.content}</Text>
    </View>
  );
};

export default ArticleDetailScreen;
