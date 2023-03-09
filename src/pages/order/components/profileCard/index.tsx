import { useEffect, useState } from "react";
import { GithubUser } from "../../@types";
import axios from "axios";
import styles from './profileCard.module.css';

export const ProfileCard = () => {
  const [user, setUser] = useState<GithubUser>({} as GithubUser);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://api.github.com/users/ryuuzera');
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <div className={styles.card}>
        <img src={user.avatar_url} alt='avatar' />
        <h2>{user.name}</h2>
        <h4>{user.bio}</h4>
        <div className={styles.openProfile} onClick={() => window.open(user.html_url, '_ blank')}>
          <p>Open Profile</p>
        </div>
      </div>
    </>
  );
};
