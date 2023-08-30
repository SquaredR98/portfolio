import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="h-screen flex flex-col dark:bg-slate-950">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
