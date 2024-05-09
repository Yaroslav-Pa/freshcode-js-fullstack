import classNames from 'classnames';
import React from 'react';
import { getChat } from '../../../api';
import styles from './ChatItem.module.scss';
import ChatLogo from '../../ChatLogo';
import { getActiveChat } from '../../../redux/slices/chatsSlice';
import { useDispatch } from 'react-redux';

function ChatItem({
  chat: { _id, isPrivate, name, messages, coverImage: imgUrl },
  chatId,
}) {
  const dispatch = useDispatch();
  const lastMsg = messages.slice(-1)[0];
  const {
    author: { firstName, lastName },
    text,
  } = lastMsg || { author: {} };

  const chatItemStyle = classNames(styles.chatItem, {
    [styles.active]: _id === chatId,
  });

  const clickHandler = () => {
    dispatch(getActiveChat(_id));
  };

  return (
    <li
      key={_id}
      className={chatItemStyle}
      onClick={() => {
        clickHandler();
      }}
    >
      <section className={styles.chatInfo}>
        <ChatLogo chat={{ name, imgUrl }} />
        <div>
          <h2 className={styles.chatHeader}>{name}</h2>
          {text && (
            <p className={styles.lastMessage}>
              {firstName} {lastName}: {text}
            </p>
          )}
        </div>
      </section>
    </li>
  );
}

export default ChatItem;
