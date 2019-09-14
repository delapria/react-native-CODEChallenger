import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';

import defaultStyles from '../styles';

function getColorContrastYIQ(hexcolor) {
  let color;
  switch (hexcolor.length) {
    case 7: // #ff00ff
      color = hexcolor.substr(1);
      break;
    case 4: // #f0f
      color =
        hexcolor.substr(1, 1).repeat(2) +
        hexcolor.substr(2, 1).repeat(2) +
        hexcolor.substr(3, 1).repeat(2);
      break;
    default:
      return '#ffffff';
  }
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    overflow: 'hidden', //corta os filhos que estrapolar as margens
  },
  content: {
    padding: 16,
  },
  image: {
    height: 250,
    resizeMode: 'cover',
  },
  avatarContainer: {
    height: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: 8,
  },
  avatarPhoto: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContent: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  avatarName: {
    color: 'rgb(0,0,0)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  avatarDate: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 12,
  },
  avatarInitials: {
    color: '#FFF',
    fontSize: 22,
  },
});

const cardStyle = [defaultStyles.card, styles.card];

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <View style={styles.avatarPhoto}>
      <Text style={styles.avatarInitials} numberOfLines={2}>
        DD
      </Text>
    </View>
    <View style={styles.avatarContent}>
      <Text style={styles.avatarName}>Douglas Delapria</Text>
      <Text style={styles.avatarDate}>há 5 dias atrás</Text>
    </View>
  </View>
);

const PostCard = ({ photo }) => (
  <View style={cardStyle}>
    <View style={styles.content}>
      <Avatar />
      <Text>{photo.title}</Text>
    </View>
    <TouchableOpacity onPress={() => Linking.openURL(photo.url)}>
      <Image style={styles.image} source={{ uri: photo.url }} />
    </TouchableOpacity>
  </View>
);

export default PostCard;
