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
    <h1 className={styles.groupTitle}>Burguer</h1>
    <div className={styles.productsContainer}>
    {products.map((product, index) => {
      return (<div className={styles.card}>
        <img src={product.img_url} alt='avatar' />
        <h2>{product.name}</h2>
        <h4>{product.info}</h4>
        <div className={styles.openProfile}>
          {/* <p>{product.price.toFixed(2).toString()}</p> */}
        </div>
      </div>)
    })}
    </div>  
    </>
  );
};
