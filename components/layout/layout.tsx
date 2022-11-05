import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import { Theme } from "./theme";
import Script from "next/script";

export const Layout = ({ rawData = {}, data = layoutData, children }) => {
  return (
    <>
      <Head>
        <title>Tina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {data.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        <title>AMIKA - A Society for Alternative Dispute Resolution</title>
        <link rel="canonical" href="https://www.amikaadr.com/"/>
        <meta name="description"
            content="We are certified experts providing mediation in disputes relating to Business, Matrimony, etc. where outside the court settlement is possible and permissible.." />
        <meta name="keywords"
            content="AMIKA, amika, alternative dispute resolution, dispute resolution, outside the court settlement, out of court settlement, law, court, courts, india, resolution, alternative, judge, dispute, disputes, dispute resolution, advocates, law experts, senior bureaucrats" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="AMIKA - A Society for Alternative Dispute Resolution" />
        <meta name="og:description"
            content="We are certified experts providing mediation in disputes relating to Business, Matrimony, etc. where outside the court settlement is possible and permissible." />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:url" content="https://www.amikaadr.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:site" content="@amikaadr" />
        <meta name="twitter:title" content="AMIKA - A Society for Alternative Dispute Resolution" />
        <meta name="twitter:description"
            content="We are certified experts providing mediation in disputes relating to Business, Matrimony, etc. where outside the court settlement is possible and permissible." />
        <meta name="next-head-count" content="10" />
        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
            "@context" : "http://schema.org",
            "@type" : "LocalBusiness",
            "name" : "AMIKA",
            "image" : "https://www.amikaadr.com/assets/logo.png",
            "telephone" : [ "+91 9676875789", "+91 8096600333" ],
            "email" : "registrar@amikaadr.com",
            "address" : {
                "@type" : "PostalAddress",
                "streetAddress" : "AMIKA 101, Manya Apartments Ganeshnagar, Vanasthalipuram Road",
                "addressLocality" : "Hyderabad",
                "postalCode" : "500070"
            },
            "url" : "https://www.amikaadr.com/"
            })}}>
        </Script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KC6X2EN84W"></script>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-KC6X2EN84W');`}}>
        </Script>
    
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col ${
            data.theme.font === "nunito" && "font-nunito"
          } ${data.theme.font === "lato" && "font-lato"} ${
            data.theme.font === "sans" && "font-sans"
          }`}
        >
          <Header data={data?.header} />
          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex flex-col">
            {children}
          </div>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};
