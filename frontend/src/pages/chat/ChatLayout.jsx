import { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ChatContext } from "../../context";

function ChatLayout() {
  const [contacts, setContacts] = useState({});
  const chatContext = useContext(ChatContext);
  const [list, setList] = useState([]);
  const [isSelectedChat, setIsSelectedChat] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (isSelectedChat && state?.id) {
      state?.id && navigate(`./${state.id}`);
    }
    if (state?.id) {
      selectChatById(state.id);
    }
  }, [isSelectedChat, list]);

  useEffect(() => {
    setContacts({ ...chatContext.chatData });
  }, [chatContext]);

  useEffect(() => {
    const addedContact = contacts.chats?.map((chat) => {
      const contact = chat.participants.filter(
        (person) => person.userId !== contacts.userData._id
      );
      const { firstName, lastName } = contact[0];
      return {
        ...chat,
        contact: { firstName: firstName, lastName: lastName },
      };
    });
    // setList(contacts.chats);
    setList(addedContact);
  }, [contacts]);

  useEffect(() => {
    isSelectedChat && selectChatById(isSelectedChat._id);
  }, [list]);

  const addChat = (chat) => {
    setList((curr) => {
      return [...curr, chat];
    });
  };

  const selectChatById = (id) => {
    const chat = list?.filter((chat) => chat._id === id);
    chat && setIsSelectedChat(chat[0]);
  };

  const selectChat = (chat) => {
    setIsSelectedChat(chat);
  };

  return (
    <Outlet
      context={[isSelectedChat, addChat, selectChat, selectChatById, contacts]}
    />
  );
}

export default ChatLayout;
