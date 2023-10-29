async function Valores() {
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

export default Valores;
