import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "./components/providers";
import { Modals } from "./components";
import "./globals.css";


const metadataInfo: Metadata = {
  title: "Messenger",
  description: "A web chat application",
  icons: {
    icon: "/icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    capable: true,
    title: "Messenger",
    startupImage: [],
    statusBarStyle: "black",
  },
};

const metadata: Metadata = metadataInfo;


interface IRootLayout {
  children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body className="select-none">
        <Providers>
          <Modals />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };