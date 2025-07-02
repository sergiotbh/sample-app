import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const [quantity, setQuantity] = useState(0);

  const handleSubtract = () => setQuantity(quantity-1)

  const handleAdd = () => setQuantity(quantity+1)

  return (
    <View>
      <View>
        <Text>Hi:</Text>
        <TouchableOpacity disabled={quantity<=0} testID='subtract-button' onPress={handleSubtract}><Text>-</Text></TouchableOpacity>
        <Text testID='quantity-text'>{quantity}</Text>
        <TouchableOpacity disabled={quantity>=10} testID='add-button' onPress={handleAdd}><Text>+</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
