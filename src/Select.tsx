import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value?: SelectOption) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  return <div className={styles.container}></div>;
}
