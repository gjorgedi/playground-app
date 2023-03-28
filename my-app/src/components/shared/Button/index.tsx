import { LoadingSpinner } from "../Loader";

export interface ButtonProps {
  bgColor: string;
  label: string;
  disabled: boolean;
  isLoading?: boolean;
}

export const Button = ({
  bgColor,
  label,
  disabled,
  isLoading = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${bgColor} shadow-lg w-28 flex justify-center	 hover:shadow-indigo-500/50 disabled:opacity-50 disabled:hover:shadow-none disabled:shadow-none text-white  py-2 px-4 rounded`}
    >
      {isLoading ? <LoadingSpinner /> : label}
    </button>
  );
};
