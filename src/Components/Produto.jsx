import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const { id } = useParams();

  return (
    <div className={styles.produto}>
      <h1>Produto</h1>
    </div>
  );
};

export default Produto;
