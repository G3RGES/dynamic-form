import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  console.log(userInfo); //*TESTING

  return (
    <div className="">
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col gap-2 border py-3 px-4">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">
            About You
          </legend>
          <div className="">
            <label className="text-3xl font-semibold">What's Your Name</label>
            <input
              className="border rounded text-lg leading-tight py-3 px-2 mt-4
             focus:outline-indigo-500 w-4/5"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
              onChange={handleInput}
            />

            <input
              className="border rounded text-lg leading-tight py-3 px-2 mb-3 mt-4
             focus:outline-indigo-500 w-4/5"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={handleInput}
            />
          </div>
          <div className="">
            <label className="text-3xl font-semibold">What's Your Email?</label>
            <input
              className="border rounded text-lg leading-tight py-3 px-2 mb-3 mt-4
             focus:outline-indigo-500 w-4/5"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>
          <div className="">
            <label className="text-3xl font-semibold">
              What's Your Birthday?
            </label>
            <input
              className="border rounded text-lg leading-tight py-3 px-2 mb-3 mt-4
             focus:outline-indigo-500 w-4/5"
              type="date"
              id="dob"
              name="dob"
              placeholder="Date of Birth"
              max="2005-01-31"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-3xl font-semibold">What's Your Gender</label>
            <select
              className="border rounded text-lg leading-tight py-3 px-2 mb-3 mt-4
             focus:outline-indigo-500 w-4/5"
              name="gender"
              id="gender"
              placeholder=""
              onChange={handleInput}
            >
              <option className="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
