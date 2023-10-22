import "./globals.css";

export const metadata = {
   title: "Conversor Dolar a Pesos Argentinos",
   description: "Creado por MarcosBrunoDev ©2023",
   keywords: [
      "dolar",
      "pesos",
      "blue",
      "solidario",
      "oficial",
      "bolsa",
      "mayorista",
      "turista",
      "contado",
      "liquidacion",
      "valor",
   ],
   colorScheme: "dark",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
