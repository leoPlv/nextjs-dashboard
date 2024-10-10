'use client'

import { deleteInvoice } from "@/app/lib/server-actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";

export function DeleteInvoice({ id }: { id: string }) {
    const [showConfirm, setShowConfirm] = useState(false)
    return (
        <>
            <button onClick={() => setShowConfirm(true)} className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className='w-5' />
            </button>
            {showConfirm && createPortal(
                <DeleteConfirm id={id} close={() => setShowConfirm(false)} />, document.body
            )}
        </>
    );
}

function DeleteConfirm({ id, close }: { id: string, close: () => void }) {

    const closeOnClickOut = (e: SyntheticEvent) => {
        e.target === e.currentTarget && close();
    }

    return (
        <div className="absolute inset-0 w-screen h-screen flex justify-center items-center backdrop-blur z-20" onClick={closeOnClickOut}>
            <form action={deleteInvoice.bind(null, id)} className="bg-white p-6 rounded-md drop-shadow-2xl text-black flex flex-col gap-4">
                <div className="border-b-2 border-slate-200">
                    <h1 className="text-2xl">Deletion</h1>
                </div>
                <p>Are you sure you want to delete this invoice ?</p>
                <div className="flex justify-end gap-2">
                    <button type="submit" className="rounded-md border p-2 hover:bg-red-100 text-red-600">Delete</button>
                    <button onClick={close} className="rounded-md border p-2 hover:bg-gray-100">Cancel</button>
                </div>
            </form>
        </div>
    )
}