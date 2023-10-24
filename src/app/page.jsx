import "./Home.css";
import Footer from "./components/Footer";
import Dolares from "./components/dolares";

// async function dolares() {
//    const apiUrl = `${process.env.DOLARAPI}?timestamp=${Date.now()}`;
//    const requestOptions = {
//       method: "GET",
//       headers: {
//          "Cache-Control": "no-store", // Desactiva la caché
//       },
//    };

//    try {
//       const resp = await fetch(apiUrl, requestOptions);
//       const data = await resp.json();
//       return data;
//    } catch (error) {
//       console.error("Error al obtener datos del API de Dólar:", error);
//       throw error;
//    }
// }

async function HomePage() {
   async function dolares() {
      const apiUrl = `${process.env.DOLARAPI}?timestamp=${Date.now()}`;
      const requestOptions = {
         method: "GET",
         headers: {
            "Cache-Control": "no-store", // Desactiva la caché
         },
      };

      try {
         const resp = await fetch(apiUrl, requestOptions);
         const data = await resp.json();
         return data;
      } catch (error) {
         console.error("Error al obtener datos del API de Dólar:", error);
         throw error;
      }
   }

   const valores = await dolares();
   console.log(valores);

   return (
      <div className="dolares">
         <h1>Equivalencia U$S a $ Argentinos</h1>
         <Dolares valores={valores} />
         <Footer />
      </div>
   );
}

export default HomePage;
