export type TFilterProps = {
  initialDate: string;
  setInitialDate: React.Dispatch<React.SetStateAction<string>>;
  finalDate: string;
  setFinalDate: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
};
