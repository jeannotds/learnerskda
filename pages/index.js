/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Mains from "../components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Mains />
    </>
  );
}
