import React, { Component } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import axios from 'axios';
import PostCard from '../components/PostCard';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

async function getTokenFromStore() {
  return 'k3hk3g3kj4gk34g34khj34g3k4hg';
}

axios.interceptors.request.use(async config => {
  const token = await getTokenFromStore();
  config.headers.Authentication = `Bearer ${token}`;
  return config;
});

//criado um contante para não criar no loop da lista só cria um avez
const keyExtractor = photo => String(photo.id);

export default class PostsScreen extends Component {
  state = {
    fetching: false,
    photos: [],
    page: 1,
    fetchingPage: false,
  };

  componentDidMount() {
    this.getFirstPage();
  }

  onEndReached = () => {
    const { fetching, fetchingPage, page } = this.state;
    if (fetching || fetchingPage || page > 500) return;

    this.getNextPage();
  };

  getNextPage = async () => {
    this.setState({ fetchingPage: true });
    try {
      const { page } = this.state;
      await this.requestPhotos(page + 1);
    } finally {
      this.setState({ fetchingPage: false });
    }
  };

  getFirstPage = async () => {
    this.setState({ fetching: true });
    try {
      await this.requestPhotos(1);
    } finally {
      this.setState({ fetching: false });
    }
  };

  requestPhotos = async page => {
    try {
      const response = await axios.get('/photos', {
        //parametros da URL
        params: {
          _limit: 10,
          _page: page,
        },
      });
      const { photos } = this.state;
      const newPhotos =
        page === 1 ? response.data : [...photos, ...response.data];
      this.setState({
        photos: newPhotos,
        page,
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderItem = record => {
    const { item: photo, index } = record;
    return <PostCard photo={photo} />;
  };

  render() {
    const { photos, fetching } = this.state;
    return (
      <View>
        <FlatList
          data={photos}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              colors={['red', 'green', 'blue']}
              refreshing={fetching}
              onRefresh={this.getFirstPage}
            />
          }
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}
