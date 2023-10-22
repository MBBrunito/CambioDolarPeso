import Link from "next/link";
import { contact } from "../../../profile";
import "./Footer.css";

export default function Footer() {
   return (
      <footer>
         <div className="footer">
            <div>
               <img
                  src="https://res.cloudinary.com/daoavxvau/image/upload/v1697171874/MBDevFS_vt13er.png"
                  alt="Logo MarcosBrunoDev"
                  title="MarcosBrunoDev"
               />
            </div>
            <div>
               <h3>&copy; MarcosBrunoDev</h3>
               <p>2023 - {new Date().getFullYear()}</p>
               <p>All rights Reserved.</p>
            </div>
            <div className="redes">
               {contact.map((cont, index) => (
                  <div key={index}>
                     <Link href={cont.contact} target="_blank">
                        <img
                           src={cont.logo}
                           alt={cont.contact}
                           title={cont.red}
                        />
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
}
