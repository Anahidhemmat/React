const Home = () => {
  const handleClick = () => {
    console.log("HELLO");
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain("Nana", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
