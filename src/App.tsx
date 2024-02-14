// App.tsx

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {cardIndex: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  const [cards, setCards] = useState<
    Array<{title: string; description: string; date: string}>
  >(new Array(2).fill({title: '', description: '', date: ''}));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{title: 'Cards'}}
          component={({navigation}) => (
            <HomeScreen
              cards={cards}
              setCards={setCards}
              navigation={navigation}
            />
          )}
        />
        <Stack.Screen
          name="Details"
          options={{title: 'Card Details'}}
          component={({route, navigation}) => (
            <DetailsScreen
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
