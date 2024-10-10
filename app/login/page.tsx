import styles from "@/app/ui/home.module.scss"
import LoginForm from "../ui/login-form";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <Link href="/" className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-300 p-4 md:h-40 text-black text-xl font-semibold gap-2">
                    <div className="w-32 text-black md:w-36 flex">
                        <div className={styles.shape} />
                        <h1>NextJs tuto</h1>
                    </div>
                </Link>
                <LoginForm />
            </div>
        </main>
    );
}