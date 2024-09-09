import style from "./app.module.css";

// Import the module you are working with here to see something in your browser
// import Exercise from "./exercises/exercise01";

function App() {
  return (
    <>
      <h1 className={style.title}>
        <div className={style.container}>IGNE Studio day - TS</div>
      </h1>
      <main className={style.container}>
        <p>Lets get rockin&apos;!</p>
        {/* <Exercise /> */}
      </main>
    </>
  );
}

export default App;
