import Header from "./Component/header";
import Banner from "./Component/banner";
import Option from "./Component/Options/Option";

function App() {
  return (
    <div className="w-[100%]">
      
      <Header title="Title"/>
      <Banner />
      
      <section className="max-w-[1530px] w-[100%] m-auto p-5">
        <Option />
      </section>
    </div>
  );
}

export default App;
