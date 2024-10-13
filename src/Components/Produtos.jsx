import React from 'react';
import styles from './Produtos.module.css';

const Produtos = () => {
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json()).;
  }, []);
  return (
    <div className={styles.produtos}>
      <h1>Produtos</h1>
    </div>
  );
};

export default Produtos;
