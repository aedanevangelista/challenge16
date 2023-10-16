import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";

import bg from "./assets/images/bg-pattern-desktop.svg";

function App() {
  return (
    <>
      <main className="flex flex-row justify-center bg-[#fff9f9] overflow-hidden font-Josefin">
        <div className="flex flex-row justify-center items-center relative w-[1440px] h-[770px]">
          <img
            src={bg}
            alt="bg"
            className="absolute object-cover w-full h-full z-10"
          />
          <LeftAside />
          <RightAside />
        </div>
      </main>
    </>
  );
}

export default App;
