import Link from 'next/link';

const FooterLinks = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
    <div>
        <h4 className='text-body2-bold mb-4 text-gray-800'>{title}</h4>

        <ul className='space-y-3'>
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        className='text-md hover:text-primary-500 font-normal transition delay-25 ease-in'
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterLinks;
