import React from "react";

export default function Footer()
{
    return (
        <>
            <footer className="px-4 sm:px-6 py-6 nt-24">
                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Raspel.
                </p>
            </footer>
        </>
    )

}
