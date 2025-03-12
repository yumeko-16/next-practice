import styles from '@/styles/hero.module.css';
import Image from 'next/image';
import cube from '@/images/cube.jpg';
import { useState } from 'react';

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

export default function Hero({ title, subtitle, imageOn = false }: Props) {
  // Alternative to `placeholder="blur"`
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
            onLoad={() => setIsImageLoaded(true)}
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
          />
        </figure>
      )}
    </div>
  );
}
