import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  size?: "small" | "medium";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
  size,
}) => {
  return (
    <TextField
      required={required}
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      size={size}
    />
  );
};

export default InputField;
