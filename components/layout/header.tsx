import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";

export const Header = ({ data }) => {
  const theme = useTheme();

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
  };

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  React.useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  return (
    <div className={`bg-gradient-to-b ${headerColorCss}`}>
      <div className=" bg-[#313AC4] text-white pb-2">
      <Container
        size="custom"
        className="py-0 relative z-10 max-w-8xl bg-[#313AC4] text-white"
      >
          <Link href="/" passHref>
            <a className="flex items-center justify-evenly">
              <Icon
                parentColor={data.color}
                data={{
                  name: data.icon.name,
                  color: data.icon.color,
                  style: data.icon.style,
                }}
                className="inline-block h-auto w-1/5 mr-10"
              />
              <div className="text-center font-maiandra">
                <h1 className="select-none text-5xl font-bold tracking-tight my-1 transition duration-150 ease-out transform">
                  AMIKA
                </h1>
                <h2 className="select-none text-3xl font-bold tracking-tight mb-2 transition duration-150 ease-out transform">
                  COUNCIL OF ARBITRATION AND MEDIATION
                </h2>
                <h2 className="select-none text-base font-bold tracking-tight my-1 transition duration-150 ease-out transform">
                  Under the agies of AMIKA, A society for Alternative Dispute Resolution
                </h2>
                <h2 className="select-none text-base font-bold tracking-tight my-1 transition duration-150 ease-out transform">
                  Reg.No 416/2021{" "}
                </h2>
                <h3 className="select-none text-base font-bold tracking-tight my-1 transition duration-150 ease-out transform">
                  (Registered under Section 3 of Societies Registration Act 2001
                  of Govt. of Telangana)
                </h3>
              </div>
            </a>
          </Link>
      </Container>
      </div>
      <div className="bg-[#4EAC5B] text-white">
      <Container
        size="custom"
        className="py-0 relative z-10 max-w-8xl "
      >
        <div className="flex items-center justify-center">
          <ul className="flex gap-6 sm:gap-8 lg:gap-10">
            {data.nav &&
              data.nav.map((item, i) => {
                const activeItem =
                  item.href === ""
                    ? typeof location !== "undefined" &&
                      location.pathname == "/"
                    : windowUrl.includes(item.href);
                return (
                  <li
                    key={`${item.label}-${i}`}
                    className={activeItem ? activeItemClasses[theme.color] : ""}
                  >
                    <Link href={`${prefix}/${item.href}`} passHref>
                      <a className="select-none	text-base inline-block tracking-wide font-regular transition duration-150 ease-out opacity-70 hover:opacity-100 py-4">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        />
      </Container></div>
    </div>
  );
};
