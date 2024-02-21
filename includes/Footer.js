import data from "@/data";
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  const { site, contact } = data;
  return (
    <footer className="mt-8 mb-8 text-white text-sm">
      <p className="mb-4">
        <Link href="/contact">
          Contact Us
        </Link>
        &nbsp;&middot;&nbsp;
        <Link href={"/terms#privacy-policy"}>
          Privacy Policy
        </Link>
      </p>
      COPYRIGHT &copy; SANKALAN {site.year}<br />
      Delhi University Computer Science Society
      <div className="socials mt-6 text-lg flex gap-8 w-full mx-auto items-center justify-center">
        <a href={contact.instagram.link} target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href={contact.facebook.link} target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
         <a href={contact.linkedin.link} target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>
    </footer>
  );
};
