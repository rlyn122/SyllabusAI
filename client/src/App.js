import "./App.css";
import SyllabusUploader from "./components/SyllabusUploader.js"
import MyButton from "./components/button.js"


const App = () => {

  const handleClick = ()=>{
    alert("Button clicked!");
  }

  return (
  
  <div>
      <h1>Syllabus Ai</h1>
      <h2>upload syllabus:</h2>
      <MyButton text="click me" onClick={handleClick}/>
      <MyButton text="quack quack" onClick={handleClick}/>
      <MyButton text="moo moo" onClick={handleClick}/>
  </div>

  );
}

export default App;