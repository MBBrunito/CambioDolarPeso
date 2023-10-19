"use client";

export default function Dolares({ valores }) {
   const handleChange = (event) => {
      event.preventDefault();
   };

   return (
      <div className="dolares">
         <div className="cambioMoneda">
            <p>Moneda a cotizar: </p>
            <select name="cambio">
               <option value="dolar">U$S</option>
               <option value="pesos">$</option>
            </select>
            <input
               type="number"
               placeholder="Valor a convertir"
               defaultValue={1}
               min={1}
               onChange={(event) => {
                  handleChange;
               }}
            />
         </div>
         <div className="listaDolar">
            {valores.map((valor, index) => (
               <div key={index} className="dolarCard">
                  <div className="tituloDolar">
                     <h3>Casa de Cambio </h3>
                     <p>{valor.nombre}</p>
                  </div>
                  <hr />
                  <div className="valorDolar">
                     <h3>Valor Compra</h3>
                     <p>$ {valor.compra}</p>
                     <h3>Valor Venta</h3>
                     <p>$ {valor.venta}</p>
                  </div>
                  <hr />
                  <div className="fechaHora">
                     <h3>Fecha Atcualización</h3>
                     <p>{valor.fechaActualizacion.slice(0, 10)}</p>
                     <p>{valor.fechaActualizacion.slice(11, -8)}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
