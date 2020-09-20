import React from "react";

const SearchStuff = ({ change, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <label>
      Search here for magic stuff:
      <input type="text" value={value} onChange={change} />
      <input type="submit" value="wat" />
    </label>
  </form>
);

export default SearchStuff;
