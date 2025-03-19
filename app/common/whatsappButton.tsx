import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/+542914387530"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
            <FaWhatsapp size={40} />
        </Link>
    );
}
