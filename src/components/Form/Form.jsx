import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { mealSearch } from "../../helpers";

export const Form = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(mealSearch(search));
    setSearch("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="Form">
      <form className="Form-form" onSubmit={handleSubmit}>
        <CiSearch size={20} className="Form-svg" />
        <input className="Form-input" placeholder="Search" type="text" value={search} onChange={handleSearch} />
      </form>
    </div>
  );
};
