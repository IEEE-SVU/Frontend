"use client";

import { useRef, type MouseEvent } from "react";

type LinkItem = {
  label: string;
  href: string;
};

type SocialLink = LinkItem & {
  iconClass: string;
};

export default function Home() {
  const watermarkRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLSpanElement | null>(null);

  const quickLinks: LinkItem[] = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "News & Updates", href: "#" },
    { label: "Competitions & Events", href: "#" },
    { label: "Sponsors and Partners", href: "#" },
    { label: "Join Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const socialLinks: SocialLink[] = [
    { label: "Facebook", href: "#", iconClass: "fa-brands fa-facebook-f" },
    { label: "Twitter", href: "#", iconClass: "fa-brands fa-x-twitter" },
    { label: "Instagram", href: "#", iconClass: "fa-brands fa-instagram" },
    { label: "LinkedIn", href: "#", iconClass: "fa-brands fa-linkedin-in" },
  ];

  const handleFooterMouseMove = (event: MouseEvent<HTMLElement>) => {
    const watermark = watermarkRef.current;
    const reveal = revealRef.current;
    if (!watermark || !reveal) return;
    const rect = watermark.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    reveal.style.setProperty("--reveal-x", `${x}px`);
    reveal.style.setProperty("--reveal-y", `${y}px`);
  };

  const handleFooterMouseLeave = (): void => {
    const reveal = revealRef.current;
    if (!reveal) return;
    reveal.style.setProperty("--reveal-x", "50%");
    reveal.style.setProperty("--reveal-y", "50%");
  };

  return (
    <footer
      className="footer-root relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-[80px] pt-8 sm:pt-10 lg:pt-[40px] pb-8 sm:pb-10 lg:pb-[40px] flex flex-col gap-6 md:gap-8 lg:gap-[4px] lg:h-[566.2000732421875px] bg-[linear-gradient(180deg,#061231_0%,#02040A_100%)] opacity-100 text-white overflow-hidden"
      onMouseMove={handleFooterMouseMove}
      onMouseLeave={handleFooterMouseLeave}
    >
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-[60px]">
        <div>
          <h3 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold leading-[1.15] mb-5 sm:mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[14px] leading-[1.25] text-[#D0D7E8]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold leading-[1.15] mb-5 sm:mb-6">
            Connect With Us
          </h3>
          <div className="space-y-4 text-[14px] text-[#D0D7E8]">
            <div className="flex items-center gap-2.5">
              <svg
                className="h-5 w-5 text-[#2F73FF]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                aria-hidden
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
                <path d="m4.5 7 7.5 5.7L19.5 7" />
              </svg>
              <span className="text-[#E6ECFA] font-medium">Email</span>
            </div>
            <p className="text-[#D8E0F2]">info@example.com</p>
            <div className="SocialLinks flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={social.iconClass} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold leading-[1.15] mb-5 sm:mb-6">
            Stay Updated
          </h3>
          <p className="text-[12px] leading-[1.45] text-[#B8C2DA] mb-5">
            Subscribe to our newsletter for the latest news
            <br />
            and updates
          </p>
          <div className="w-full max-w-full sm:max-w-[360px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[52px] sm:h-[56px] lg:h-[62px] rounded-[10px] lg:rounded-[11px] border border-[#2D3D69] bg-[linear-gradient(90deg,rgba(40,52,83,0.92)_0%,rgba(28,41,73,0.88)_100%)] px-4 sm:px-6 text-[13px] text-white placeholder:text-[#9BA8C7] outline-none"
            />
            <button className="mt-3 sm:mt-4 h-[52px] sm:h-[56px] lg:h-[62px] w-full rounded-[10px] lg:rounded-[12px] bg-[linear-gradient(90deg,#2E73FF_0%,#1D4ED8_100%)] text-[14px] font-medium shadow-[0_8px_28px_rgba(39,93,255,0.45)] hover:brightness-110 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        ref={watermarkRef}
        className="pointer-events-none absolute left-1/2 top-[70%] sm:top-[68%] md:top-[64%] lg:top-[360px] -translate-x-1/2 -translate-y-1/2 select-none z-10"
      >
        <span className="footer-watermark-base">IEEESVU SB</span>
        <span ref={revealRef} className="footer-watermark-reveal" aria-hidden>
          IEEESVU SB
        </span>
      </div>

      <div className="relative z-20 mt-3 sm:mt-auto border-t border-[#223361]/70 pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-[11px] text-[#8E9BBC]">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="flex items-center gap-5 sm:gap-8">
          <span className="hover:text-white transition">Privacy Policy</span>
          <span className="hover:text-white transition">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
