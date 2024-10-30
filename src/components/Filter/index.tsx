import { useState } from "react";
import { TFilterProps } from "./types";

export const Filter = ({
  initialDate,
  setInitialDate,
  finalDate,
  setFinalDate,
  handleFilter,
}: TFilterProps) => {
  return (
    <div className="ml-[10%] w-full text-start mb-10 text-sm">
      <p>search for transactions between dates</p>
      <div className="flex mt-4 w-1/4 items-center justify-between">
        <p className="font-bold">initial date:</p>
        <input
          value={initialDate}
          onChange={(e) => setInitialDate(e.target.value)}
          type="date"
          className="ml-2 h-8 rounded-md w-36 text-black px-2"
        />
      </div>
      <div className="flex mt-4 w-1/4 items-center justify-between">
        <p className="font-bold">final date:</p>
        <input
          value={finalDate}
          onChange={(e) => setFinalDate(e.target.value)}
          type="date"
          className="ml-2 h-8 rounded-md w-36 text-black px-2"
        />
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Filter
      </button>
    </div>
  );
};
