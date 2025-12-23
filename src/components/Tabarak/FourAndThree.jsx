import ThirdSection from "./page3";
import Page4 from "./page4";
 export default function Home(){
    return(
        <div
        style={{
            margin:0,
            padding:0,
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"stretch"
        }}
        >
            <ThirdSection />
            <Page4 />
        </div>
    );
 }