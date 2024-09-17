import { Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-white shadow-md text-black p-10">
      <aside>
        <Image
          src="/img/logo/aqm_logo.png"
          width={500}
          height={500}
          alt="AQM Parts Logo"
          className="object-scale-down h-24 w-24"
        />
        <p className="font-bold">
          <strong>AQM Parts</strong>
          <br />
          You can do it their way, or do it the right way
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Image
              src="/img/svg/facebook.svg"
              width={36}
              height={36}
              alt="Facebook"
            />
          </a>
          <a>
            <Image
              src="/img/svg/discord-alt.svg"
              width={36}
              height={36}
              alt="Discord"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}
