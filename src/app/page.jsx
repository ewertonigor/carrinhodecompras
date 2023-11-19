import styles from './page.module.css';
import PrimaryContent from '@/components/Content/PrimaryContent/PrimaryContent';

export default function Home() {
  return (
    <section className={styles.content}>
      <section>
        <PrimaryContent />
      </section>
    </section>
  );
}
