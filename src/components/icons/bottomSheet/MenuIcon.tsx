function MenuIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width='20'
            height='14'
            viewBox='0 0 20 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1 7H19M1 1H19M1 13H19'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default MenuIcon;
