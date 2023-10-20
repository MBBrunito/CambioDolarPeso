"use client";
import { useState } from "react";

export default function Dolares({ valores }) {
   const [dolar, setDolar] = useState(1);
   const [moneda, setMoneda] = useState("US");

   const formatoNumero = new Intl.NumberFormat("es-AR", { style: "decimal" });

   const handleChange = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      setDolar(event.target.value);
      console.log(dolar);
   };

   return (
      <div className="dolares">
         <div className="cambioMoneda">
            <p>Moneda a cotizar: </p>
            <select
               name="cambio"
               value={moneda}
               onChange={(event) => {
                  setMoneda(event.target.value);
               }}
            >
               <option value="US">U$S</option>
               <option value="AR">$</option>
            </select>
            <input
               type="number"
               placeholder="Valor a convertir"
               defaultValue={1}
               min={1}
               onChange={(event) => {
                  handleChange(event);
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
                     <div>
                        {moneda === "US" ? (
                           <div>
                              {valor.compra < 1 ? (
                                 <div className="conversion">
                                    <p>$ ---</p>
                                    <p>U$D ---</p>
                                 </div>
                              ) : (
                                 <div className="conversion">
                                    <p>
                                       ${" "}
                                       {formatoNumero.format(
                                          valor.compra * dolar
                                       )}
                                    </p>
                                    <p>U$D {formatoNumero.format(dolar)}</p>
                                 </div>
                              )}
                           </div>
                        ) : (
                           <div>
                              {valor.compra < 1 ? (
                                 <div className="conversion">
                                    <p>U$D ---</p>
                                    <p>$ ---</p>
                                 </div>
                              ) : (
                                 <div className="conversion">
                                    <p>
                                       U$D{" "}
                                       {formatoNumero.format(
                                          dolar / valor.compra
                                       )}
                                    </p>
                                    <p>$ {formatoNumero.format(dolar)}</p>
                                 </div>
                              )}
                           </div>
                        )}
                     </div>
                     <h3>Valor Venta</h3>
                     <div>
                        {moneda === "US" ? (
                           <div className="conversion">
                              <p>
                                 $ {formatoNumero.format(valor.venta * dolar)}
                              </p>
                              <p>U$D {formatoNumero.format(dolar)}</p>
                           </div>
                        ) : (
                           <div className="conversion">
                              <p>
                                 U$D {formatoNumero.format(dolar / valor.venta)}
                              </p>
                              <p>$ {formatoNumero.format(dolar)}</p>
                           </div>
                        )}
                     </div>
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
