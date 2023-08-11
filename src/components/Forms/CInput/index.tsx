import { Controller, useForm } from "react-hook-form";
import styles from "./PInput.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorText from "../components/ErrorText";
import LabelText from "../components/LabelText";
import ClearIcon from "@mui/icons-material/Clear";
import { FC } from "react";

interface InputProps {
  control?: any;
  name: string;
  required?: boolean;
  withTrim?: boolean;
  rules?: any;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: "medium" | "small";
  startAdornment?: any;
  endAdorment?: any;
  className?: string;
  isLoading?: boolean;
  isClear?: boolean;
  clearFn?: () => void;
  labelText?: string;
  id?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PInput: FC<InputProps> = ({
  control,
  name = "",
  required = false,
  withTrim = false,
  rules = {},
  defaultValue = "",
  disabled,
  placeholder,
  size = "medium",
  startAdornment,
  endAdorment,
  className = "",
  isLoading = false,
  isClear = false,
  clearFn,
  labelText,
  id,
  handleInputChange = () => {},
  ...restProps
}) => {
  const { control: controlInput } = useForm();

  return (
    <Controller
      control={control || controlInput}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <div className={`${styles.inputBox} ${className}`}>
              <LabelText
                labelText={labelText}
                required={required}
                htmlFor={id}
              />
              {startAdornment && (
                <div className={styles.startAdornment}>{startAdornment}</div>
              )}
              <input
                value={value}
                onChange={(e) => {
                  onChange(withTrim ? e.target.value?.trim() : e.target.value);
                  handleInputChange(e);
                }}
                placeholder={placeholder}
                id={id}
                disabled={disabled}
                className={`${styles.input} ${
                  startAdornment ? styles.withStartAdornment : ""
                } ${endAdorment ? styles.withEndAdornment : ""}
          ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${
                  styles[size]
                }`}
                {...restProps}
              />
              {endAdorment && (
                <div className={styles.endAdorment}>{endAdorment}</div>
              )}
              {isLoading && (
                <div className={styles.loader}>
                  <CircularProgress size={18} />
                </div>
              )}
              {isClear && !isLoading && (
                <div className={styles.clear} onClick={clearFn}>
                  <ClearIcon />
                </div>
              )}

              <ErrorText error={error} />
            </div>
          </>
        );
      }}
    />
  );
};

export default PInput;
