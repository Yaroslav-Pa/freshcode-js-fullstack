import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ChatList from '../../components/ChatList';
import ChatArea from '../../components/ChatArea';
import styles from './Chats.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChat, getChats } from '../../redux/slices/chatsSlice';
function ChatsPage() {
  // const [
  //   {
  //     user: { _id: userId },
  //   },
  //   dispatch,
  // ] = useContext(UserContext);

  // const [chats, setChats] = useState([]);
  // const [chat, setChat] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { allChats, activeChat, user } = useSelector((state) => ({
    ...state.chats,
    user: state.user.user,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats(user._id));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.asideMainWrapper}>
        <aside className={styles.chatListWrapper}>
          {/* <button>Add Chat</button> */}
          <ChatList chats={allChats} chatId={activeChat?._id} />
        </aside>
        <main className={styles.chatAreaWrapper}>
          <ChatArea chat={activeChat} userId={user._id} />
        </main>
      </div>
    </>
  );
}

export default ChatsPage;
