import styles from "./styles.module.scss";
import { FC } from "react";

interface ErrorProps {
  error: {
    type?: string;
    message?: string;
  };
}

const ErrorText: FC<ErrorProps> = ({ error }) => {
  return (
    <div className={styles.error}>
      {error && error?.type === "required" ? (
        <span>This is required field</span>
      ) : (
        error && <span>{error && error?.message}</span>
      )}
    </div>
  );
};

export default ErrorText;
