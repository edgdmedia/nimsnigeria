import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative bg-nims-dark pt-12 pb-10 px-5 text-[#DFDFDF] z-10 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/images/background-1-scaled.webp')] bg-center bg-cover brightness-25 contrast-125 saturate-100 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/images/civil-engineering-pa6hvqgpaqfw6mgb.webp')] bg-center bg-cover opacity-7 -z-20"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[31%_22%_10%_27%] gap-5 lg:gap-0 justify-between items-start relative z-20">
        {/* Column 1: Brand & Powered By */}
        <div className="flex flex-col">
          <div className="flex flex-row p-3 items-center">
            <a href="https://www.nimsnigeria.org" className="block">
              <Image src="/images/logi.png" alt="NIMS Logo" width={135} height={135} className="w-25 md:w-[135px] h-auto transition-all duration-300" />
            </a>
            <h6 className="font-heading w-1/2 font-semibold tracking-[2.5px] text-[#FCFFFD] text-lg lg:text-[16px] mt-4 ml-4">
              National Industrial Manpower Summit, 2026
            </h6>
          </div>
          <div className="bg-white rounded-[30px] px-2.5 py-1.5 flex flex-col justify-between mt-5 max-w-sm">
            <p className="font-heading text-left text-[10px] font-semibold text-primary mr-2 mb-1">
              Powered by:
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Image src="/images/ggg-1.png" alt="Sponsor 1" width={150} height={50} className="max-w-[44%] h-auto" />
              <Image src="/images/whatsap-image-2025-07-10-at-9-11-03-e2-80-afpm.webp" alt="Sponsor 2" width={150} height={50} className="max-w-[48%] h-auto" />
            </div>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="flex flex-col lg:pl-4">
          <h5 className="text-white text-xl mb-5 mt-8 lg:mt-0">Contact</h5>
          <ul className="flex flex-col gap-2" role="list">
            <li>
              <a href="mailto:registration@nimsnigeria.org" className="flex items-center gap-2.5 text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">
                <svg width="14" height="14" fill="currentColor" className="text-primary shrink-0" viewBox="0 0 512 512">
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                </svg>
                <span className="break-all">registration@nimsnigeria.org<br/>sponsorship@nimsnigeria.org<br/>exhibition@nimsnigeria.org</span>
              </a>
            </li>
            <li>
              <a href="tel:08066065900" className="flex items-center gap-2.5 text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">
                <svg width="14" height="14" fill="currentColor" className="text-primary shrink-0" viewBox="0 0 448 512">
                  <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path>
                </svg>
                <span className="break-all">Dr. Bashir Taiwo: 08066065900<br/>Mohammed Ahmed: 08035870090<br/>Omotola Olateju: 08033525308</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div className="flex flex-col">
          <h5 className="text-white text-xl mb-5 mt-8 lg:mt-0">Links</h5>
          <ul className="flex flex-col gap-2" role="list">
            <li><Link href="/about" className="text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/nims-2025" className="text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">NIMS 2025</Link></li>
            <li><Link href="/gallery" className="text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/programme" className="text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">Programme</Link></li>
            <li><Link href="/partners" className="text-[#C9C9C9] font-heading text-[14px] font-medium py-1.5 hover:text-primary transition-colors">Partners</Link></li>
          </ul>
        </div>

        {/* Column 4: Register & Social */}
        <div className="flex flex-col gap-1">
          <h5 className="font-heading font-semibold tracking-[2.5px] text-[#FCFFFD] text-lg lg:text-xl mt-8 lg:mt-0">
            Register to attend:
          </h5>
          <Link href="/register" className="self-start inline-block bg-primary text-white font-heading font-semibold rounded-[10px] px-7.5 py-[15px] mt-2 hover:-translate-y-px transition-transform">
            Register Now
          </Link>

          <h5 className="font-heading font-semibold tracking-[2.5px] text-[#FCFFFD] text-lg lg:text-xl mt-8 mb-2">
            Follow on Social Media:
          </h5>
          <div className="flex gap-2">
            <a href="https://facebook.com/nimsnigeria" target="_blank" className="flex items-center justify-center w-[35px] h-[35px] border border-white/95 rounded-full text-white hover:bg-primary hover:border-primary transition-colors">
              <svg aria-hidden="true" width="15" height="15" fill="currentColor" viewBox="0 0 320 512"><path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/nimsnigeria" target="_blank" className="flex items-center justify-center w-[35px] h-[35px] border border-white/95 rounded-full text-white hover:bg-primary hover:border-primary transition-colors">
              <svg aria-hidden="true" width="15" height="15" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a href="https://www.instagram.com/nimsnigeria" target="_blank" className="flex items-center justify-center w-[35px] h-[35px] border border-white/95 rounded-full text-white hover:bg-primary hover:border-primary transition-colors">
              <svg aria-hidden="true" width="15" height="15" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="https://x.com/nimsnigeria" target="_blank" className="flex items-center justify-center w-[35px] h-[35px] border border-white/95 rounded-full text-white hover:bg-primary hover:border-primary transition-colors">
              <svg aria-hidden="true" width="15" height="15" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </a>
          </div>
          <p className="font-sans text-[14px] text-[#DFDFDF] mt-6 text-center md:text-left">
            © 2026 National Industrial Manpower Summit
          </p>
        </div>
      </div>
    </footer>
  );
}
