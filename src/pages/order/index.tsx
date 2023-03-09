import Image from 'next/image';
import { Groups } from './components/groupCard';
import { ProfileCard } from './components/profileCard';
import styles from './styles/Order.module.css';
import { SearchBar } from './components/searchBar';
import { useEffect, useState } from 'react';
import { Group } from './components/groupCard/@types';
import { groupMock } from '@/mocks/@mocks';
import { Products } from './components/products';
import Link from 'next/link';

export default function OrderPage() {
  const [groups, setGroups] = useState<Group[]>([{}] as Group[]);
  useEffect(() => {
    (async () => {
      try {
        const response: Group[] = await groupMock();
        setGroups(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.containerTop}>
            <div className={styles.logoImg}>
              <Link href={'/'}>  <Image width={80} height={80} src={'/assets/homepage/logo.png'} alt='logo' /></Link>
            </div>
            <div className={styles.bar}>
              <SearchBar />
            </div>
          </div>
          <div className={styles.containerMain}>
            <div className={styles.containerLeft}>
              <div className={styles.groupButtons}>
                <Groups groups={groups} />
              </div>
              <div className={styles.aboutBottom}>
                <ProfileCard />
              </div>
            </div>
            <div className={styles.containerRight}>
              <Products  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
