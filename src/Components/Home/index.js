import { Link } from "react-router";

const Home = () => (
  <div className="bg-black h-screen p-8 flex flex-col justify-center  font-mono">
    <div className="bg-black/75 backdrop-blur-[5px] border-none border-[1px] border-purple-500 rounded-md h-full flex flex-col justify-center p-8 items-center">
      <img
        className="h-40 w-40 rounded-xl"
        src="https://static.vecteezy.com/system/resources/previews/019/519/243/non_2x/to-do-list-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
        alt="logo"
      />
      <div className="text-white p-8 flex flex-col justify-center items-center ">
        <h1 className=" text-center text-3xl font-bold pb-5">TodoList</h1>
        <p>
          New User?{" "}
          <Link className="text-purple-500 font-bold underline" to="/register">
            SignUp
          </Link>
        </p>
        <p>
          Existing User?{" "}
          <Link className="text-purple-500 font-bold underline" to="/Login">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Home;
