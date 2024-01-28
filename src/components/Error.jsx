import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-[100vh] ">
        <p className="text-4xl pb-7">Someting Went Wrong...</p>
        <NavLink to="/" className="back-btn ">
          Go Back
        </NavLink>
      </div>
    </>
  );
};

export default Error;
