import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>
        <p className="text-3xl">Someting Went Wrong...</p>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </>
  );
};

export default Error;
