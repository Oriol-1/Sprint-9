import React, { ReactNode } from 'react';
import styles from './DarkLayout.module.css';

interface DarkLayoutProps {
  children: ReactNode;  // Definición del tipo de las props que espera recibir este componente.
}

const DarkLayout: React.FC<DarkLayoutProps> = ({ children }) => {  // Definición del componente en sí.
  return (
    <div className={styles.darkLayout__fondo}>
      <h3>mira</h3>
      <div>
      {/* Renderiza lo que se pasa como children cuando este componente se utiliza. */}
        {children} 
      </div>
    </div>
  );
};

export default DarkLayout;
