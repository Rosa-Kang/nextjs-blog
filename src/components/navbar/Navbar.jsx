'use client';
import Link from 'next/link'
import Image from 'next/image';

import styles from './navbar.module.css';
import logo from '../../../public/logo.png'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id:1,
    title: "Home",
    url:"/",
  },
  {
    id:2,
    title: "Dashboard",
    url:"/dashboard",
  },
  {
    id:3,
    title: "Portfolio",
    url:"/portfolio",
  },
  {
    id:4,
    title: "Blog",
    url:"/blog",
  },
  {
    id:5,
    title: "About",
    url:"/about",
  },
  {
    id:7,
    title: "Contact",
    url:"/contact",
  },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image src={logo} alt='logo' width={90} />
      </Link>

      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
        <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
      ))}

      <button className={styles.logout} onClick={() => console.log('Logged out..')}>Log out</button>
      </div>

    </div>
  )
}

export default Navbar