import { useEffect, useState } from "react";
import { GithubUser } from "../../@types";
import axios from "axios";
import styles from './Products.module.css';
import { productMock } from "@/mocks/@mocks";

interface Product {
  id: number;
  groupId: string;
  name: string;
  img_url: string;
  info: string;
  price: number;
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([{}] as Product[]);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await productMock();
        setProducts(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <> 
    <div className={styles.container}>
    <div className={styles.groupTitle}><p>Burguer</p></div>
    <div className={styles.productsContainer}>
    {products.map((product, index) => {
      return (<div key={index} className={styles.card}>
        <img src={product.img_url} alt='avatar' />
        <h2>{product.name}</h2>
        <h4>{product.info}</h4>
        <div className={styles.priceCard}>
          <p>{formatter.format(product.price)}</p>
        </div>
      </div>)
    })}
    </div> 
    </div>
     
    </>
  );
};
