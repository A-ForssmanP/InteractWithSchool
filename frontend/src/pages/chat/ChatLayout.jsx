import { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ChatContext } from "../../context";

function ChatLayout() {
  const [contacts, setContacts] = useState({});
  const chatContext = useContext(ChatContext);
  const [list, setList] = useState([]);
  const [isSelectedChat, setIsSelectedChat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setContacts({ ...chatContext.chatData });
  }, [chatContext]);
  console.log(isSelectedChat);
  useEffect(() => {
    isSelectedChat && navigate(`./${isSelectedChat._id}`);
  }, [isSelectedChat]);

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
    // console.log(list);
    // console.log("KAFFE!!!!");
    // console.log(isSelectedChat._id);
    isSelectedChat && selectChatById(isSelectedChat._id);
  }, [list]);
  // console.log(list);
  // console.log(contacts);
  // console.log(chatContext);
  // console.log(isSelectedChat);
  // console.log("AAAAAAAAAAAAAAAAAAAA");

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
