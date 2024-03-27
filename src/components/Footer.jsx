import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="scree-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store </span>
            or <span className="underline text-blue"> other retailers </span>
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 0800-0800-14
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All Rights Reserved.
          </p>
          <div className="flex gap-2">
            {footerLinks.map((link) => (
              <p className="font-semibold text-gray text-xs">{link}</p>
            ))}
          </div>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex justify-center items-center">
          <a
            href="https://adityakumarpatel.xyz/"
            target="_blank"
            className="font-semibold text-blue text-xs underline cursor-pointer"
          >
            {" "}
            Made By Aditya
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
