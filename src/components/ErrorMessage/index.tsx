import { TErrorMessageProps } from "./types";

export const ErrorMessage = ({ message }: TErrorMessageProps) => {
  return (
    <>
      <p>{message}</p>
      <p>Try again later </p>
    </>
  );
};
