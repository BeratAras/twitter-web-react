import React from 'react'

import NavButton from './navigation-button'
import {Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More} from './icons'

import styles from './navigation.module.css'


export default function Navigation({selectedStatus}) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedStatus === 'home'}>
        <Home />
        <span>Home</span>
      </NavButton>

      <NavButton selected={selectedStatus === 'explore'}>
        <Explore />
        <span>Explore</span>
      </NavButton>

      <NavButton notify={99} selected={selectedStatus === 'notification'}>
        <Notification />
        <span>Notification</span>
      </NavButton>

      <NavButton selected={selectedStatus === 'messages'}>
        <Messages />
        <span>Messages</span>
      </NavButton>

      <NavButton selected={selectedStatus === 'bookmark'}>
        <Bookmark />
        <span>Bookmark</span>
      </NavButton>

      <NavButton selected={selectedStatus === 'lists'}>
        <Lists />
        <span>Lists</span>
      </NavButton>

      <NavButton selected={selectedStatus === 'profile'}>
        <Profile />
        <span>Profile</span>
      </NavButton>

      <NavButton selected={selectedStatus === 'more'}>
        <More />
        <span>More</span>
      </NavButton>
    </nav>
  );
}
