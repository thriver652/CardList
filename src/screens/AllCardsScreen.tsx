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
          <Text style={{color: 'white'}}>Filter by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={handleFilterByAddition}>
          <Text style={{color: 'white'}}>Filter by Addition</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={savedCards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />

      {/* <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'black'}}>Go Back</Text>
      </TouchableOpacity> */}
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
    marginTop: 16,
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
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
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
