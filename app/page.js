import Image from "next/image";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import RightCard from "./components/RightCard";
import LeftCard1 from "./components/LeftCard1";
import LeftCard2 from "./components/LeftCard2";
import LeftCard3 from "./components/LeftCard3";
import LeftCard4 from "./components/LeftCard4";
import Companies from "./components/companies";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Companies/>
      <div style={{backgroundColor:"white"}} className="flex">
        <div className="w-5/12">
          <LeftCard1 />
          <LeftCard2 />
          <LeftCard3 />
          <LeftCard4 />
        </div>
        <div className="w-full ">
          <RightCard img={"/logo.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/labore.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/rect.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/veniam.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/sm.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/mark.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/Fast.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/pari.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/vn.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/oil.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/ab.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/air.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
        </div>
      </div>
    </div>
  );
}
