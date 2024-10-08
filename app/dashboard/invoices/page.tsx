import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { bebas } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeleton';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page({ searchParams }: { searchParams?: { search?: string, page?: number } }) {
    const params = await searchParams

    const search = params?.search || ''
    const currentPage = Number(params?.page) || 1

    const totalPages = await fetchInvoicesPages(search)

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${bebas.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateInvoice />
            </div>
            <Suspense key={search + currentPage} fallback={<InvoicesTableSkeleton />}>
                <Table query={search} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}