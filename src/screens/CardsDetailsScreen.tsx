import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CardDetailsScreen = ({
  card,
  setCard,
  navigation,
}: {
  card: {title: string; description: string; date: string};
  setCard: (updatedCard: {
    title: string;
    description: string;
    date: string;
  }) => void;
  navigation: any;
}): React.JSX.Element => {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [date, setDate] = useState(new Date(card.date));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate: Date) => {
    hideDatePicker();
    setDate(selectedDate);
  };

  const handleSave = () => {
    setCard({title, description, date: date.toISOString().split('T')[0]});
    navigation.navigate('CardsList');
  };

  return (
    <View style={styles.detailsContainer}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text style={styles.date}>{date.toDateString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={{color: 'white'}}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.discardButton}
        onPress={() => {
          setTitle(card.title);
          setDescription(card.description);
          setDate(new Date(card.date));
          navigation.goBack();
        }}>
        <Text style={{color: 'white'}}>Discard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginBottom: 16,
    borderRadius: 10,
    fontSize: 20,
    color: 'black',
  },
  date: {
    fontSize: 20,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 16,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 20,
  },
  discardButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    marginTop: 10,
    padding: 16,
    borderRadius: 20,
  },
});

export default CardDetailsScreen;
