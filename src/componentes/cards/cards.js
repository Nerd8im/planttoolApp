/**import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import estiloCard from './estiloCard.js';


const Cards = ({
  avatarUrl,
  postTitle,
  time,
  text,
  comments = 0,
  onStarPress = () => {},
  onReportPress = () => {},
  onCardPress = () => {}
}) => {
  return (
    <TouchableOpacity style={estiloCard.card} onPress={onCardPress}>
      <Avatar.Image size={48} source={{ uri: avatarUrl }} />

      <View style={estiloCard.content}>
        <View style={estiloCard.header}>
          <Text style={estiloCard.title}>{postTitle}</Text>
          <Text style={estiloCard.dot}>•</Text>
          <Text style={estiloCard.time}>{time}</Text>
        </View>

        <Text style={estiloCard.text}>{text}</Text>

        <View style={estiloCard.actions}>
          <TouchableOpacity style={estiloCard.actionButton}>
            <Feather name="message-circle" size={18} color="gray" />
            <Text style={estiloCard.actionText}>{comments}</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', gap: 18 }}>
            <TouchableOpacity style={estiloCard.actionButton} onPress={onStarPress}>
              <Feather name="star" size={18} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity style={estiloCard.actionButton} onPress={onReportPress}>
              <Feather name="alert-circle" size={18} color={'gray'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
*/


import { View, FlatList, StyleSheet } from 'react-native';
import { View, StyleSheet } from 'react-native';


const ListaDeCards = () => {
  const posts = [
    {
      id: '1',
      avatarUrl: 'https://exemplo.com/avatar1.png',
      postTitle: 'Postagem 1',
      time: '2h',
      text: 'Texto do post 1...',
      comments: 10
    },
    {
      id: '2',
      avatarUrl: 'https://exemplo.com/avatar2.png',
      postTitle: 'Postagem 2',
      time: '5h',
      text: 'Texto do post 2...',
      comments: 4
    },
    // ...mais posts
  ];

  const renderItem = ({ item }) => (
    <Cards
      avatarUrl={item.avatarUrl}
      postTitle={item.postTitle}
      time={item.time}
      text={item.text}
      comments={item.comments}
      onCardPress={() => console.log(`Card ${item.id} pressionado`)}
      onStarPress={() => console.log(`Favoritar ${item.id}`)}
      onReportPress={() => console.log(`Reportar ${item.id}`)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default Cards;