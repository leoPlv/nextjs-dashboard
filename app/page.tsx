import Image from "next/image";
import styles from "@/app/ui/home.module.scss"
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRightEndOnRectangleIcon, ArrowRightIcon, FireIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-1 flex-col p-6 pb-0">
        <div className="flex shrink-0 items-end rounded-lg bg-green-300 p-4 md:h-52 w-full text-black text-xl gap-4">
          <div className={styles.shape} />
          <h1 className="text-3xl">NextJs tuto</h1>
        </div>
        <div className="mt-4 flex flex-1 grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <div className="text-black flex gap-2">
              <FireIcon className="w-5" />
              <span>This is a super tuto</span>
              <FireIcon className="w-5" />
            </div>
            <Link href='/login' className="text-gray-600 border-2 w-20 rounded p-2 ml-auto mt-auto flex justify-between items-center hover:shadow-md hover:text-black">
              <span>Login</span>
              <ArrowRightEndOnRectangleIcon className="w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-1 md:w-3/5 md:px-1 md:py-1">
            <Image
              src="/webwallpaper.png"
              width={2912}
              height={1632}
              className="hidden md:block"
              alt="image of a forest"
            />
            <Image
              src="/phonewallpaper.jpeg"
              width={720}
              height={1280}
              className="md:hidden block"
              alt="image of a forest"
            />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex h-8 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
