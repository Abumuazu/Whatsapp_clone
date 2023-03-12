import { FlatList } from "react-native";
import ChatListItem from "../../Component/ChatListItem";
import chats from "../../../assets/data/chats.json";


const ChatsScreen = () => {
    const _renderItem = ({item}) => <ChatListItem chat={item} />
  return (
    <FlatList
      data={chats}
      renderItem={_renderItem}
    />
  );
};

export default ChatsScreen;