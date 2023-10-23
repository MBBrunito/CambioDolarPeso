import "./Home.css";
import Footer from "./components/Footer";
import Dolares from "./components/dolares";

async function dolares() {
   const apiUrl = `${process.env.DOLARAPI}?timestamp=${Date.now()}`;
   const resp = await fetch(apiUrl);
   const data = await resp.json();
   return data;
}

async function HomePage() {
   const valores = await dolares();

   return (
      <div className="dolares">
         <h1>Equivalencia U$S a $ Argentinos</h1>
         <Dolares valores={valores} />
         <Footer />
      </div>
   );
}

export default HomePage;
