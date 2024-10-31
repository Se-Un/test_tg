import React from 'react';
import Hero from './Hero';
import styles from './profile.module.scss';
import { HEROES } from '@/constants/HEROES';

interface Props {
  gender: string;
  prof: 'product' | 'frontend' | 'backend';
}

const Profile = ({ gender, prof }: Props) => {
  const profile = HEROES.filter((i) => i.gender == gender && i.prof == prof);

  return (
    <div className={styles.imageBoy}>
      <Hero image={profile[0].img} />
    </div>
  );
};

export default Profile;
