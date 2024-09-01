import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e6f0f9] py-6 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6 text-[#4d90c7]" />
        <span className="text-lg font-semibold text-[#4d90c7]">Candia</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/mentions-legales" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Mentions légales
        </Link>
        <Link href="/politique-confidentialite" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Politique de confidentialité
        </Link>
        <Link href="/contact" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Nous contacter
        </Link>
      </nav>
    </footer>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
