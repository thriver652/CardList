import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const AllCardsScreen = ({
  savedCards,
}: {
  savedCards: Array<{title: string; description: string; date: string}>;
  navigation: any;
}): React.JSX.Element => {
  const [sortBy, setSortBy] = useState<'date' | 'addition'>('addition');

  const handleFilterByDate = () => {
    setSortBy('date');
  };

  const handleFilterByAddition = () => {
    setSortBy('addition');
  };

  const sortedCards = [...savedCards];

  if (sortBy === 'date') {
    sortedCards.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={
            sortBy === 'date' ? styles.activeFilterButton : styles.filterButton
          }
          onPress={handleFilterByDate}>
          <Text style={{color: 'black', fontSize: 17}}>Filter by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            sortBy === 'addition'
              ? styles.activeFilterButton
              : styles.additionButton
          }
          onPress={handleFilterByAddition}>
          <Text style={{color: 'black', fontSize: 17}}>Filter by Addition</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sortedCards}
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
    backgroundColor: 'rgba(215, 244, 232, 1)',
    //  borderWidth: 1,
    padding: 16,
    
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  activeFilterButton: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(215, 244, 232, 1)',
    borderWidth: 1,
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
    backgroundColor: 'rgba(215, 244, 232, 1)',
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
});

export default AllCardsScreen;
