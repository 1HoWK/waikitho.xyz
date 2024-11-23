import "./App.css";
import "./index.css";
import  About  from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Educations } from "./components/Educations";


function App() {
  return (
    <div>
      <About />
      <hr className="w-8 mx-auto my-2" />
      <Work />
      <hr className="w-8 mx-auto my-2" />
      <Skills />
      <hr className="w-8 mx-auto my-2" />
      <Educations />
    </div>
  );
}

export default App;
