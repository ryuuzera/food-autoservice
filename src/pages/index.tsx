import styles from '@/styles/Home.module.css';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const logo = '/assets/homepage/logo.png';
const backgroundFolder = 'assets/homepage/';
const backgroundImgs = ['hamburguer.png', 'icecream.png'];

export default function Home() {
  const [clock, setClock] = useState<string>('00 : 00');
  const [date, setDate] = useState<string>('');
  const [startImg, setStartImg] = useState(`${backgroundFolder}hamburguer.png`);
  const imgRefresh = () => {
    let count = 0;
    setInterval(() => {
      if (count === backgroundImgs.length - 1) {
        count = 0;
      } else {
        count += 1;
      }
      setStartImg(`${backgroundFolder}${backgroundImgs[count]}`);
    }, 5000);
  };
  const clockRefresh = () => {
    setInterval(() => {
      let hour = new Date().getHours().toString();
      let minutes = new Date().getMinutes().toString();
      let seconds = new Date().getSeconds().toString();

      if (parseInt(hour) < 10) {
        hour = `0${hour}`;
      }
      if (parseInt(minutes) < 10) {
        minutes = `0${minutes}`;
      }
      if (parseInt(seconds) < 10) {
        seconds = `0${seconds}`;
      }
      setClock(`${hour} : ${minutes} `);
    }, 1000);
  };
  const getDate = (): string => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date();
    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${weekday}, ${day} ${month} ${year}`;
  };
  useEffect(() => {
    clockRefresh();
    setDate(getDate());
    imgRefresh();
  }, []);
  return (
    <>
      <Head>
        <title>FetchFood</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.main}>
        <div className={styles.brandLogo}>
          <img src={logo}></img>
        </div>
        <div className={styles.container}>
          <div className='startImg'>
            <div className={styles.clock}>
              <div className={styles.clockAndDate}>
                <h3 className={styles.clockHour}>{clock}</h3>
                <h3 className={styles.clockDate}>{date}</h3>
              </div>
            </div>
          </div>
          <div className={styles.startButton}>
            <Link href='/here-or-go' style={{ textDecoration: 'none' }}>
              <div className={styles.startButtonlabel}>
                <Typography variant='h4' color='#fff'>
                  Touch to Start
                </Typography>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          body {
            background: #fff;
          }
        `}
      </style>
      <style jsx>
        {`
          .startImg {
            height: 100%;
            width: 100%;
            background: url(${startImg});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            transition: background-image 0.5s ease;
          }
        `}
      </style>
    </>
  );
}
