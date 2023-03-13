import { groupMock } from '@/mocks/@mocks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiTicket } from 'react-icons/gi';
import { Groups } from './components/groupCard';
import { Group } from './components/groupCard/@types';
import { Products } from './components/products';
import { ProfileCard } from './components/profileCard';
import { SearchBar } from './components/searchBar';
import styles from './styles/Order.module.css';
import { IconContext } from "react-icons";

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
              <Link href={'/'}>
                {' '}
                <Image width={80} height={80} src={'/assets/homepage/logo.png'} alt='logo' />
              </Link>
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
              <div className={styles.containerProducts}>
                <Products />
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.promoCards}>
                  <div className={styles.promoCard}>
                    <div className={styles.promoIcon}>
                    <IconContext.Provider value={{color: '#fff', size: '80px'}}>
                    <GiTicket />
                    </IconContext.Provider>
                    </div>
                    <div className={styles.promoText}>
                      <h1>Promo Ticket</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}