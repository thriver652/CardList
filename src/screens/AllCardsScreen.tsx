import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const AllCardsScreen = ({
  savedCards,
  navigation,
}: {
  savedCards: Array<{title: string; description: string; date: string}>;
  navigation: any;
}): React.JSX.Element => {
  const handleFilterByDate = () => {
    console.log('Date');
  };

  const handleFilterByAddition = () => {
    console.log('Addition');
  };

  return (
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={handleFilterByDate}>
          <Text style={{color: 'white', fontSize: 17}}>Filter by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.additionButton}
          onPress={handleFilterByAddition}>
          <Text style={{color: 'black', fontSize: 17}}>Filter by Addition</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={savedCards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>Title : {item.title}</Text>
            <Text style={styles.desc}>Description : {item.description}</Text>
            <Text style={styles.date}>Date : {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  filterButton: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 16,
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  desc: {
    fontSize: 20,
    color: 'black',
  },
  date: {
    fontSize: 20,
    color: 'black',
  },
  additionButton: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddf',
    color: 'black',
    padding: 16,
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  goBackButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 16,
    marginTop: 16,
  },
});

export default AllCardsScreen;
