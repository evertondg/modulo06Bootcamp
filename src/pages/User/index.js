import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Avatar,
  Name,
  Bio,
  Header,
  Stars,
  Starred,
  Author,
  Info,
  OwnerAvatar,
  Title,
  EmptyContent,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    // eslint-disable-next-line react/no-unused-state
    stars: [],
    loading: false,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    this.setState({
      loading: true,
    });
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      stars: response.data,
      loading: false,
    });
  }

  render() {
    const { navigation } = this.props;
    const { stars, loading } = this.state;

    const user = navigation.getParam('user');
    return (
      <Container loading={loading}>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <EmptyContent>
            <ActivityIndicator size="large" color="#715" />
          </EmptyContent>
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>
                    {item.name} - {String(loading)}
                  </Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
