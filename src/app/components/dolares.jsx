"use client";
import { useState } from "react";

export default function Dolares({ valores }) {
   const [dolar, setDolar] = useState(1);
   const [moneda, setMoneda] = useState("US");
   const [limite, setLimite] = useState(true);
   const [largo, setLargo] = useState(11);
   const [mensajeLargo, setMensajeLargo] = useState("");

   // const formatoNumero = new Intl.NumberFormat("es-AR", { style: "decimal" });
   const formatoNumero = new Intl.NumberFormat("es-AR", {
      maximumFractionDigits: 0,
   });

   const handleChange = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      const cleanedValue = event.target.value.replace(/[^\d]/g, "");
      let inputValue = parseFloat(cleanedValue);

      console.log(event.target.value.length);
      if (moneda === "US") {
         setLargo(10);
         if (isNaN(inputValue) || inputValue < 1 || inputValue > 99999999) {
            setDolar(0);
            setLimite(false);
            setMensajeLargo("El valor debe estar entre 1 y 99.999.999");
         } else {
            setLimite(true);
            setDolar(inputValue);
         }
      } else if (moneda === "AR") {
         setLargo(11);
         if (isNaN(inputValue) || inputValue < 1 || inputValue > 999999999) {
            setDolar(0);
            setLimite(false);
            setMensajeLargo("El valor debe estar entre 1 y 999.999.999");
         } else {
            setLimite(true);
            setDolar(inputValue);
         }
      }
   };

   return (
      <div className="dolares">
         <div className="cambioMoneda">
            <p>Moneda a cotizar: </p>
            <div>
               <select
                  name="cambio"
                  value={moneda}
                  onChange={(event) => {
                     setMoneda(event.target.value);
                  }}
               >
                  <option value="US"> U$S </option>
                  <option value="AR"> $ </option>
               </select>
               <input
                  type="text"
                  placeholder="Valor a convertir"
                  defaultValue="1"
                  value={dolar.toLocaleString("es-AR")}
                  maxLength={largo}
                  onChange={(event) => {
                     handleChange(event);
                  }}
               />
               {!limite && <p className="valorError">{mensajeLargo}</p>}
            </div>
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
                              {!limite ? (
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
                              {!limite ? (
                                 <div className="conversion">
                                    <p>$ ---</p>
                                    <p>U$D ---</p>
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
                     <h3>Fecha Actualización</h3>
                     <p>{valor.fechaActualizacion.slice(0, 10)}</p>
                     <p>{valor.fechaActualizacion.slice(11, -8)}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
