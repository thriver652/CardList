import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardsListScreen from './screens/CardsListScreen';
import CardDetailsScreen from './screens/CardsDetailsScreen';
import AllCardsScreen from './screens/AllCardsScreen';

export type RootStackParamList = {
  CardsList: undefined;
  CardDetails: {cardIndex: number};
  AllCards: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  const [cards, setCards] = useState<
    Array<{title: string; description: string; date: string}>
  >(new Array(3).fill({title: '', description: '', date: ''}));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardsList">
        <Stack.Screen
          name="CardsList"
          options={{title: 'Add your Data'}}
          component={({navigation}) => (
            <CardsListScreen
              cards={cards}
              setCards={setCards}
              navigation={navigation}
            />
          )}
        />
        <Stack.Screen
          name="CardDetails"
          options={{title: 'Card Details'}}
          component={({route, navigation}) => (
            <CardDetailsScreen
              card={cards[route.params.cardIndex]}
              setCard={updatedCard => {
                const updatedCards = [...cards];
                updatedCards[route.params.cardIndex] = updatedCard;
                setCards(updatedCards);
              }}
              navigation={navigation}
            />
          )}
        />
        <Stack.Screen
          name="AllCards"
          options={{title: 'All Cards'}}
          component={({navigation}) => (
            <AllCardsScreen savedCards={cards} navigation={navigation} />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
