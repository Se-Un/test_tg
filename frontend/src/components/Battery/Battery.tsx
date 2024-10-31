import React, { useState, useEffect } from 'react';
import styles from './battery.module.scss';

const Battery: React.FC = () => {
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => (prev < 100 ? prev + 1 : prev));
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  const leftPartWidth = energy;
  const rightPartWidth = 100 - energy;

  return (
    <div className={styles.energyBar}>
      <span
        className={styles.leftPart}
        style={{ width: `${leftPartWidth}%` }}
      />
      <span
        className={styles.rightPart}
        style={{ width: `${rightPartWidth}%` }}
      />
      <span className={styles.energyText}>
       +{energy}
      </span>
    </div>
  );
};

export default Battery;
