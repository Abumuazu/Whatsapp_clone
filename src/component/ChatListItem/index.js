import { View, Text, Image } from "react-native";
import { styles } from "./chatlist.style";


const ChatListItem = () => {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg' }}
          style={styles.image}
        />
  
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              Lukas
            </Text>
            <Text style={styles.subTitle}>8:30</Text>
          </View>
  
          <Text numberOfLines={2} style={styles.subTitle}>
            Hello theredsf
          </Text>
        </View>
      </View>
    );
  };

  export default ChatListItem;