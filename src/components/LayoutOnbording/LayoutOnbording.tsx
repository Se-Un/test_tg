import styles from './layoutOnbording.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function LayoutOnbording({ children }: Props) {
  return <section className={styles.layout_onbording}>{children}</section>;
}
