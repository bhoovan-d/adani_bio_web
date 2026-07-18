import styles from "./LedgerNote.module.css";

type LedgerNoteProps = {
  /** The figure or fact — a year, a sum, a named asset. */
  value: string;
  /** What the figure is. */
  label: string;
  /** Optional short gloss. */
  detail?: string;
};

/**
 * The Dossier's signature device. A margin annotation that surfaces the
 * numbers and named assets alongside the prose. Floats into the right
 * margin on wide screens; folds inline as a bordered callout on narrow ones.
 */
export function LedgerNote({ value, label, detail }: LedgerNoteProps) {
  return (
    <aside className={styles.note} aria-label={`${label}: ${value}`}>
      <span className={styles.rule} aria-hidden="true" />
      <span className={`${styles.value} tnum`}>{value}</span>
      <span className={styles.label}>{label}</span>
      {detail && <span className={styles.detail}>{detail}</span>}
    </aside>
  );
}
