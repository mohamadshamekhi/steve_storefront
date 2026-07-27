'use client'

import Link from 'next/link'
import { ManualBreadcrumbProps } from './types'
import SlashIcon from '@/components/icons/SlashIcon'

const ManualBreadcrumb = ({
    items,
    className = '',
    labelClassName = '',
    activeLabelClassName = '',
    iconClassName = ''
}: ManualBreadcrumbProps) => {
    return (
        <nav aria-label='breadcrumb' className={`text-sm text-gray-500 pt-8 pb-4 ${className}`}>
            <ol className='flex items-center space-x-1 space-x-reverse'>
                {items.map((item, index) => (
                    <li key={`${item.href}-href`} className='flex items-center'>
                        {index > 0 && <SlashIcon className={`mx-2 text-gray-300 ${iconClassName}`} />}

                        {item.isCurrent ? (
                            <span aria-current='page' className={`font-normal text-gray-800 ${activeLabelClassName}`}>
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} className={`hover:underline ${labelClassName}`}>
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default ManualBreadcrumb

