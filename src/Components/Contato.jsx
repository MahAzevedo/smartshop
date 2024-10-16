import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animaLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div className={styles.dados}>
        <h1>Entre em contato</h1>
        <ul>
          <li>madi@origamid</li>
          <li>999999-999999</li>
          <li>Rua Alí Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
