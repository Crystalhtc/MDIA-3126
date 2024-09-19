import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is the caesar salad page 🥗</Text>
        <Link href="/sandwich">Take me to the sandwich page, please</Link>
    </View>
    
)
  
}

//you can keep the function name as Page, unless you are importing 2 functions with the same name in the same file