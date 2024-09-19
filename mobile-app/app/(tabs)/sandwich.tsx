import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is the sandwich page 🥪</Text>
        <Link href="/caesar-salad">Take me to the caesar-salad page, please</Link>
    </View>
  )
  
}

//you can name the function anything you want
