import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/office-girl.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description:
      'Lorem Ipsum dahsieed Ipsum Lorem Ipsum dahsieed IpsumLorem Ipsum dahsieed IpsumLorem Ipsum dahsieed IpsumLorem Ipsum dahsieed Ipsum',
    image: require('../assets/office-girl.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));

    // Delete from the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log('tapped')}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description:
                'Lorem Ipsum dahsieed Ipsum Lorem Ipsum dahsieed IpsumLorem Ipsum dahsieed IpsumLorem Ipsum dahsieed IpsumLorem Ipsum dahsieed Ipsum ',
              image: require('../assets/office-girl.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
