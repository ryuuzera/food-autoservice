import { useOrder } from '@/context/here-or-go-context/hereorgo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CardImg = (props: any) => {
  const imgSizeDef = {
    default: 150,
    mouseOver: 150 + 150 * (30 / 100),
  };
  const [imgSize, setImgSize] = useState<number>(imgSizeDef.default);
  return (
    <>
      <Image
        style={{ transition: 'all 0.3s' }}
        onMouseEnter={() => {
          setImgSize(imgSizeDef.mouseOver);
        }}
        onMouseLeave={() => setImgSize(imgSizeDef.default)}
        src={props.src}
        height={imgSize}
        width={imgSize}
        alt='dine-in'
        onClick={props.onClick}
      />
    </>
  );
};
const HereOrGo = () => {
  const dineInImg = '/assets/here-or-go/dine-in.png';
  const toGoImg = '/assets/here-or-go/takeaway.png';
  const order = useOrder();
  const router = useRouter();

  return (
    <>
      <div className='main'>
        <div className='container'>
          <div className='select'>
            <div className='title'>
              <h1>How would you like to enjoy your meal?</h1>
            </div>
            <div className='options'>
              <div className='card'>
                <CardImg
                  src={dineInImg}
                  onClick={() => {
                    order.setOrderTypeAndPersist('dine-in');
                    router.push('/order');
                  }}
                />
                <h2>Dine-in</h2>
              </div>
              <div className='card'>
                <CardImg
                  src={toGoImg}
                  onClick={() => {
                    order.setOrderTypeAndPersist('take-out');
                    router.push('/order');
                  }}
                />
                <h2>To go</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 2em;
            font-family: 'Poppins', sans-serif;
          }
          h2 {
            font-size: 1.5em;
            font-weight: 500;
          }
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            font-family: 'Roboto', sans-serif;
            background: #fff;
          }
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1080px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.2);
            height: 100%;
          }
          .select {
            width: 80%;
            height: 40%;
            {/* background: rgba(25, 25, 150, 0.2); */}
            text-align: center;
            border-radius: 18px;
           
          }
          .title {
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .options {
             {
              /* background: rgba(150, 25, 25, 0.2); */
            }
            height: 90%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
          }
          .card {
            height: 70%;
            width: 45%;
            background: rgb(249, 249, 249);
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            border: 1px solid white;
            -webkit-box-shadow: 10px 22px 43px -22px rgba(0, 0, 0, 0.37);
            -moz-box-shadow: 10px 22px 43px -22px rgba(0, 0, 0, 0.37);
            box-shadow: 10px 22px 43px -22px rgba(0, 0, 0, 0.37);
            transition: all 0.3s;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default HereOrGo;
