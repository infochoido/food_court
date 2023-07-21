import Header from "./Component/header";
import Banner from "./Component/banner";
import Checkgroup from "./Component/Checkgroup";
import Range from "./Component/Range";
import CurrentLocation from "./Component/example";
// import FoodJson from "./Component/food";

function App() {
  return (
    <div className="w-[100%]">
      
      <Header title="Title"/>
      <Banner />
      
      <section className="max-w-[1530px] w-[100%] m-auto p-5">
        <CurrentLocation />
        <Checkgroup label="음식"/>
        <Range name="범위"/>
        
      </section>
     
      {/* <FoodJson /> */}
    </div>
  );
}

export default App;
