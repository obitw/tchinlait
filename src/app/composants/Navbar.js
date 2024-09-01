import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#e6f0f9] py-4 px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-8 w-8 text-[#4d90c7]" />
        <span className="text-xl font-semibold text-[#4d90c7]">Candia</span>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <Link href="/apropos" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          À propos
        </Link>
        <Link href="/produits" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Nos produits
        </Link>
        <Link href="/nutrition" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Nutrition
        </Link>
        <Link href="/media" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Media
        </Link>
        <Link href="/contact" className="text-[#4d90c7] hover:text-[#3a7198] transition-colors" prefetch={false}>
          Contact
        </Link>
      </div>
      <button className="hidden md:inline-flex">Découvrir</button>
    </nav>
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
