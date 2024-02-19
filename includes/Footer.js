import data from "@/data";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const { site, contact } = data;
  return (
    <footer className="mt-8 mb-8 text-gray-300 font-small">
      COPYRIGHT &copy; SANKALAN {site.year}. ALL RIGHTS RESERVED.<br />
      Delhi University Computer Science Society (DUCSS)
      <div className="socials mt-4 text-lg flex gap-8 w-full mx-auto items-center justify-center">
        <a href={contact.instagram.link} target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href={contact.facebook.link} target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>
    </footer>
  );
};
