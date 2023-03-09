import { useEffect, useState } from 'react';
import { Group } from './@types';
import styles from './Groupcard.module.css';

export const Groups = ({groups}: any) => {
  
  return (
    <>
      {groups.map((group: Group, index: any) => {
        return <div className={styles.card} key={index}>
          <p>{group.name}</p>
          </div>;
      })}
    </>
  );
};
