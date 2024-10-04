import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import styles from "@/app/ui/home.module.scss"

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-300 p-4 md:h-40 text-black text-xl font-semibold"
                href="/"
            >
                <div className={styles.shape} />
                <h1>NextJs tuto</h1>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <div className="hidden md:block text-black">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}