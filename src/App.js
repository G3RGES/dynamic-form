function App() {
  const handleInput = () => {};

  return (
    <div className="">
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col border py-3 px-4">
          <legend className="text-2xl font-semibold">About You</legend>
          <label className="text-3xl font-semibold">What's Your Name</label>
          <input
            className="border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-500"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={handleInput}
          />
          <input
            className="border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-500"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={handleInput}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
