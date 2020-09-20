import React from "react";

export interface SearchStuffProps {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
}

const SearchStuff: React.FC<SearchStuffProps> = ({
  change,
  onSubmit,
  value,
}) => (
  <form onSubmit={onSubmit}>
    <label>
      Search here for magic stuff:
      <input type="text" value={value} onChange={change} />
      <input type="submit" value="wat" />
    </label>
  </form>
);

export default SearchStuff;
