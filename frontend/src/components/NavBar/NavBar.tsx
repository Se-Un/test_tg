'use client'
import styles from './navBar.module.scss';

export type TypeDataLinks = {
  name: string,
  link: string
}

type Props = {
  dataLinks: TypeDataLinks[]; 
};

export default function NavBar({ dataLinks }: Props) {
  
  return (
    <nav className={styles.navbar}>
      {dataLinks.map(({ name, link }) => {
        return (
        <a key={name} className={styles.counteiner} href={link}>
          <span></span>
          <p>{name}</p>
        </a>
      )})}      
    </nav>
  );
}
