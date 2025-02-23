import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="my-40 max-w-4xl mx-auto p-6 text-center">
            {/* Contact Heading */}
            <h2 className="text-5xl font-bold text-green-700 mb-10">Get in Touch</h2>
            
            {/* Contact Information */}
            <div className="p-8 w-full">
                <h3 className="text-2xl font-semibold text-green-700 mb-6">Contact Information</h3>
                <p className="text-gray-700 text-lg mb-4">
                    <span className="font-bold">Phone:</span> +1 (971)-447-8204
                </p>
                <hr className="my-4 border-t border-gray-300" />
                <p className="text-gray-700 text-lg mb-4">
                    <span className="font-bold">Email:</span> saisharath092@gmail.com
                </p>
                <hr className="my-4 border-t border-gray-300" />
                <p className="text-gray-700 text-lg">
                    <span className="font-bold">Location:</span> USA
                </p>
            </div>
        </section>
    );
}
