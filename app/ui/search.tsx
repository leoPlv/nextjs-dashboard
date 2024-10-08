'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";


export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((terms: string) => {
        console.log(`Searching... ${terms}`)
        const params = new URLSearchParams(searchParams)
        params.set('page', '1')
        if (terms) {
            params.set('search', terms)
        } else {
            params.delete('search')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 500)

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-800 placeholder:text-gray-800"
                placeholder={placeholder}
                onChange={evt => handleSearch(evt.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
            />
        </div>
    );
}