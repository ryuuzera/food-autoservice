import styles from '@/styles/Home.module.css';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
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
    const diasSemana = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const data = new Date();
    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
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
            <Link href='/order' style={{ textDecoration: 'none' }}>
              <div className={styles.startButtonlabel}>
                <Typography variant='h4' color='#fff'>
                  Toque para iniciar
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
