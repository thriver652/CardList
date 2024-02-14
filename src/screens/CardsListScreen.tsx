// screens/CardsListScreen.tsx

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CardsListScreen = ({
  cards,
  setCards,
  navigation,
}: {
  cards: Array<{title: string; description: string; date: string}>;
  setCards: React.Dispatch<
    React.SetStateAction<
      Array<{title: string; description: string; date: string}>
    >
  >;
  navigation: any;
}): React.JSX.Element => {
  const [saved, setSaved] = useState<boolean>(false);

  const isSaveButtonEnabled = cards.every(
    card => card.title && card.description && card.date,
  );

  const handleSave = () => {
    setSaved(true);
    navigation.navigate('AllCards');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {saved ? (
        <View style={styles.filtersContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => console.log('Filter by Date pressed')}>
            <Text style={{color: 'white'}}>Filter by Date</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => console.log('Filter by Addition pressed')}>
            <Text style={{color: 'white'}}>Filter by Addition</Text>
          </TouchableOpacity>
        </View>
      ) : null} */}

      <ScrollView contentContainerStyle={styles.scrollView}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('CardDetails', {cardIndex: index})
            }>
            <View style={styles.card}>
              <Text>{card.title}</Text>
              <Text>{card.description}</Text>
              <Text>{card.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {saved ? null : (
        <TouchableOpacity
          style={[
            styles.saveButton,
            {backgroundColor: isSaveButtonEnabled ? 'green' : 'gray'},
          ]}
          disabled={!isSaveButtonEnabled}
          onPress={() => handleSave()}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    marginBottom: 16,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 16,
    marginBottom: 8,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  filterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
    marginHorizontal: 8,
  },
});

export default CardsListScreen;
