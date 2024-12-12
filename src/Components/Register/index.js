import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  return (
    <div className="bg-black h-screen p-8 flex flex-col justify-center  font-mono">
      <div className="bg-black/75 backdrop-blur-[5px] border-none border-[1px] border-purple-500 rounded-md h-full flex flex-col justify-center p-8 items-center">
        <img
          className="h-40 w-40 rounded-xl"
          src="https://static.vecteezy.com/system/resources/previews/019/519/243/non_2x/to-do-list-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
          alt="logo"
        />
        <div className="text-white p-8 flex flex-col justify-center items-center ">
          <h1 className=" text-center text-3xl font-bold pb-5">TodoList</h1>
          <label htmlFor="un" className="self-start text-purple-500 pt-4">
            USERNAME{" "}
          </label>
          <input
            className="text-black outline-none p-2"
            type="text"
            onChange={onChangeUsername}
            id="un"
            value={username}
          ></input>
          <label htmlFor="password" className="self-start text-purple-500 pt-4">
            PASSWORD{" "}
          </label>
          <input
            onChange={onChangePassword}
            className="text-black outline-none p-2"
            type="password"
            id="un"
            value={password}
          ></input>
          <button
            type="button"
            className="bg-purple-500 text-white p-2  rounded-md mt-8 w-full"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
