import Image from "next/image";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import RightCard from "./components/RightCard";
import LeftCard1 from "./components/LeftCard1";
import LeftCard2 from "./components/LeftCard2";
import LeftCard3 from "./components/LeftCard3";
import LeftCard4 from "./components/LeftCard4";
import Companies from "./components/companies";
import Contact from "./components/Contact";
import Sorting from "./components/Sorting";
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
          <Sorting />
          <RightCard img={"/logo.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/labore.png"} title={"LABORE RECRUITMENT"} location={" United States"} category1={"Design"} category2={"Education"} category3={"Engineering"} vacancy={"15"}/>
          <RightCard img={"/rect.png"} title={"ZEEVA HIRING CO."} location={" United States"} category1={"Education"} category2={"IT"} category3={"Leisure & Tourism"} vacancy={"1"}/>
          <RightCard img={"/veniam.png"} title={"VENIAM RECRUITERS"} location={"England"} category1={"Legal"} category2={"Public Sector"} vacancy={"2"}/>
          <RightCard img={"/sm.jpg"} title={"SALES & MARKETING JOBS"} location={" United States"}  category1={"Design"} category2={"Educate"} category3={"Graduate"} vacancy={"4"}/>
          <RightCard img={"/mark.jpg"} title={"MARKETING RECRUITERS LTD"} location={"England"} category1={"Banking"} category2={"Digital"} category3={"Engineering"} vacancy={"11"}/>
          <RightCard img={"/Fast.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/pari.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/vn.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/oil.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/ab.png"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
          <RightCard img={"/air.jpg"} title={"IT RECRUITMENT LTD"} location={" United Kingdom"} category1={"Automotive & Repair"} category2={"Design"} category3={"Engineering"} vacancy={"5"}/>
        </div>
      </div>
      <Contact />
    </div>
  );
}
