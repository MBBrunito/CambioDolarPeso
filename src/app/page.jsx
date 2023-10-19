import "./Home.css";
import Dolares from "./components/dolares";

async function dolares() {
   const resp = await fetch(process.env.DOLARAPI);
   const data = await resp.json();
   return data;
}

async function HomePage() {
   const valores = await dolares();

   return (
      <div className="dolares">
         <h1>Equivalencia U$S a $ Argentinos</h1>
         <Dolares valores={valores} />
      </div>
   );
}

export default HomePage;
