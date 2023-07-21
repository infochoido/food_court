import Header from "./Component/header";
import Banner from "./Component/banner";
import Location from "./Component/location";
import Checkgroup from "./Component/Checkgroup";
// import FoodJson from "./Component/food";

function App() {
  return (
    <div className="w-[100%]">
      <Header title="Title"/>
      <Banner />
      
      <section className="max-w-[1530px] w-[100%] m-auto p-5">
        <Location /> 
        <Checkgroup label="음식"/>
      </section>
     
      {/* <FoodJson /> */}
    </div>
  );
}

export default App;
