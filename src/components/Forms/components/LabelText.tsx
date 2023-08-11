import { FC } from "react";
import styles from "./styles.module.scss";

interface LabelProps {
  labelText?: string;
  required?: boolean;
}

const LabelText: FC<LabelProps> = ({ labelText, required, ...restProps }) => {
  return (
    <>
      {labelText && (
        <label className={styles.label} {...restProps}>
          {labelText} {required ? "*" : ""}
        </label>
      )}
    </>
  );
};

export default LabelText;
