import { ContinuousCalendar } from "@/components/ContinuousCalendar";
import DemoWrapper from "@/components/DemoWrapper";
import Navbar from "../Navbar/page"
import Footer from "../../Footer/page"


export default function Home() {
  return (

    <div>
        <Navbar/>
      <main className="flex min-h-screen items-center justify-center">
        <div style={{display : "flex" , flexDirection : "column"}}>
          <DemoWrapper />
          
        </div>
        
      </main>
    <Footer/>
    </div>
  );
}
