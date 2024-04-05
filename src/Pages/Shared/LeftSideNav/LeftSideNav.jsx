import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((req) => req.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3 className="text-3xl mb-5">All Caterogy</h3>
      <div className="space-y-6">
        <p className="text-2xl font-bold bg-gray-200 text-center p-5">
          National News
        </p>
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} className="block" key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
