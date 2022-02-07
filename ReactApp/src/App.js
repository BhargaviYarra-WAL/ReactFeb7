import logo from './logo.svg';
import './App.css';
import Menu from "./Asn1";
import Reg from "./Asn2";
import Footer from "./Asn3";
import Hobbies from "./Asn4";
import Native from "./Asn5";
import Login from './Asn6';
import Counter from "./Asn7"

function App() {
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Menu></Menu>
      <Reg></Reg>
      <Hobbies></Hobbies>
      <Native></Native>
      <Login></Login>
      <Counter></Counter>
      <Footer></Footer>
      
    </div>
  );
}
export default App;
