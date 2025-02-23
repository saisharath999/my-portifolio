import React from "react";

export default function Footer() {
    return (
        <footer className="p-6 bg-gray-200 text-gray-700 flex justify-center shadow-md rounded-t-lg">
            <p className="font-semibold text-lg tracking-wide">
                &copy; {new Date().getFullYear()} Sai Sharath Ganta. All Rights Reserved.
            </p>
        </footer>
    );
}
