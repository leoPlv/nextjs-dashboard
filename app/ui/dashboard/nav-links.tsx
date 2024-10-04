// Map of links to display in the side navigation.
'use client'
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard' },
    {
        name: 'Invoices',
        href: '/dashboard/invoices'
    },
    { name: 'Customers', href: '/dashboard/customers' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                // const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-black hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            { 'bg-green-100 text-green-600 shadow-inner shadow-green-600': pathname === link.href }
                        )}
                    >
                        {/* <LinkIcon className="w-6" /> */}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}