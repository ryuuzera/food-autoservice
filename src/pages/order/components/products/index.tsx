import { productMock } from '@/mocks/@mocks';
import { useEffect, useState } from 'react';
import styles from './Products.module.css';

interface Product {
  id: number;
  groupId: string;
  name: string;
  img_url: string;
  info: string;
  price: number;
}

export const Products = () => {
  const [cssController, setCssController] = useState<any>({
    fullCard: 'full-card-inactve',
    frontCard: 'front-card-inactive',
  });

  const handleCssChange = () => {
    setCssController((current: any) => ({
      fullCard: current.fullCard === 'full-card' ? 'full-card-inactive' : 'full-card',
      frontCard: current.frontCard === 'front-card' ? 'front-card-inactive' : 'front-card',
    }));
  };

  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantity = (event: any, mode: 'inc' | 'dec') => {
    if (mode === 'inc' && quantity >= 1) {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const [products, setProducts] = useState<Product[]>([{}] as Product[]);
  const [currentProduct, setCurrentProduct] = useState<Product>({
    img_url: '/assets/burguer.png',
  } as Product);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await productMock();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.groupTitle}>
          <p>Burger</p>
        </div>
        <div className={styles.productsContainer}>
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className={styles.card}
                onClick={() => {
                  setCurrentProduct(product);
                  handleCssChange();
                }}>
                <img src={product.img_url} alt='avatar' />
                <h2>{product.name}</h2>
                <h4>{product.info}</h4>
                <div className={styles.priceCard}>
                  <p>{formatter.format(product.price)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={cssController.fullCard} onClick={handleCssChange}></div>
      <div className={cssController.frontCard}>
        <img src={currentProduct.img_url} alt='avatar' />
        <div className='productContainer'>
          <div className='productTitle'>
            <h1>{currentProduct.name}</h1>
            <h2>{formatter.format(currentProduct.price)}</h2>
          </div>
          <div className='productInformation'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div className='productObs'>
            <h1>Observation (Optional)</h1>
            <textarea placeholder='extra information'></textarea>
          </div>
          <div className='productControl'>
            <div className='quantityControl'>
              <div className='container'>
                <div className='minus' onClick={(e) => handleQuantity(e, 'dec')}>
                  <i>-</i>
                </div>
                <div className='quantity'>{quantity}</div>
                <div className='plus' onClick={(e) => handleQuantity(e, 'inc')}>
                  <i>+</i>
                </div>
              </div>
            </div>
            <div className='chartControl'>
              <button className='addChar'>
                <p>Add to Orderlist</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .full-card {
          overflow: hidden;
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgb(216, 0, 7, 0.98);
          width: 100%;
          height: 100%;
          transition: opacity 0.3s;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 1080px;
          
        }
        .front-card-inactive {
          background: #fff;
          overflow: hidden;
          position: absolute;
          bottom: 0;
          left: 50%;
          max-width: 1080px;
          transform: translateX(-50%);
          height: 0%;
        }
        .front-card-inactive img {
          z-index: 10;
          position: absolute;
          height: 0%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -160%);
        }
        .front-card img {
          z-index: 10;
          position: absolute;
          height: 60%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -160%);
          pointer-events: none;
        }
        .front-card {
          background: #fff;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60%;
          border-radius: 50px 50px 0px 0px;
          transition: height 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          left: 50%;
          transform: translateX(-50%);
          max-width: 1080px;
        }
        .front-card .productContainer {
          width: 90%;
          height: 90%;
          display: flex;
          padding: 8% 0 0 0;
          flex-direction: column;
        }
        .front-card .productTitle {
          width: 100%;
          height: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .front-card .productTitle h1 {
          font-size: 3.2rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: rgb(41, 41, 41);
        }
        .front-card .productTitle h2 {
          font-size: 2.7rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: #fec648;
        }

        .front-card .productInformation {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .front-card .productInformation p {
          text-align: center;
          font-size: 1.3rem;
          font-weight: 400;
        }

        .front-card .productObs {
          width: 100%;
          height: 25%;
          color: rgb(41, 41, 41);
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .front-card .productObs h1 {
          font-size: 1.3rem;
        }
        .front-card .productObs textarea {
          font-size: 15px;
          resize: none;
          background-color: #eeeeee;
          border: 1px solid rgb(199, 199, 199);
          border-radius: 8px;
          box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
          padding: 12px 20px;
        }
        .front-card .productObs textarea:focus {
          outline: none;
        }

        .front-card .productControl {
          width: 100%;
          height: 30%;
          {/* background: gray; */}
          display: flex;
          flex-direction: column;
          padding: 0px 10px;
        }
        .front-card .productControl .quantityControl {
          width: 100%;
          height: 44%;

          display: flex;
          justify-content: center;
        }
        .quantityControl .container {
          width: 45%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .quantityControl .container .quantity {
          height: 50px;
          width: 80px;
          font-family: 'Poppins', sans-serif;
          font-size: 34px;
          background: #eeeeee;
          color: rgb(41, 41, 41);
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        .quantityControl .container .plus,
        .minus {
          height: 50px;
          width: 50px;
          font-size: 32px;
          background: rgb(216, 0, 7, 0.98);
          border-radius: 8px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .quantityControl .container i {
          pointer-events: none;
        }
        .quantityControl .container .minus:hover {
          background: rgb(246, 50, 57, 1);
        }
        .quantityControl .container .plus:hover {
          background: rgb(246, 50, 57, 1);
        }
        .productControl .chartControl {
          {/* background: lightgray; */}
          height: 56%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .productControl .chartControl button {
          height: 56%;
          width: 80%;
          background: rgb(246, 0, 7, 0.98);
          border-radius: 18px;
          color:#fff;
          transition: all 0.3s ease-in-out;
          border: none;
          cursor: pointer;
        }
        .productControl .chartControl button:hover {
          background: rgb(246, 50, 57, 1);
          font-size: 20px;
        }
        .productControl .chartControl .addChar {
          font-size: 18px;
        }
      `}</style>
    </>
  );
};
