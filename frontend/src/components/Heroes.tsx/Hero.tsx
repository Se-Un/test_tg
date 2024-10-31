import React from 'react';
import Image from 'next/image';
import styles from './hero.module.scss';

type HeroProps = {
  image: string;
};

const Hero = ({ image }: HeroProps) => {
  return (
    <div className={styles.imageH}>
      <Image src={image} alt='image' layout='responsive' width={235} height={166} />
    </div>
  );
};

export default Hero;
