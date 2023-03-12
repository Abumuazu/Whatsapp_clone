import { View, Text, Image } from "react-native";
import { styles } from "./chatlist.style";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
    return (
      <View style={styles.container}>
        {/* User Avatar */}
        <Image source={{ uri: chat.user.image }} style={styles.image} />
  
        {/* content */}
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              {chat.user.name}
            </Text>
  
            <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
            </Text>
          </View>
  
          <Text style={styles.subTitle} numberOfLines={2}>
            {chat.lastMessage.text}
          </Text>
        </View>
      </View>
    );
  };

  export default ChatListItem;