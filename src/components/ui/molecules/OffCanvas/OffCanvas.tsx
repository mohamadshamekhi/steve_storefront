import CrossIcon from '@/components/icons/CrossIcon';
import clsx from 'clsx';
import Button from '../../atoms/Button/Button';
import IOffcanvasProps from './offcanvas-types';

const OffCanvas = ({
    isOpen,
    onClose,
    position = 'right',
    children,
    width = '320px',
    overlayColor = '#000000b3',
    transitionDuration = '0.4s',
    borderRadius = '0px',
    backgroundColor = '#fff',
    boxShadow = '0 4px 10px #0000001a',
    titleSection,
    className = ''
}: IOffcanvasProps) => {
    const baseClass =
        ' overflow-auto h-screen fixed top-0 bottom-0 z-[120] overflow-auto py-5 px-8 transition-transform ease-in-out bg-white';

    const positionClass = position === 'left' ? 'left-0' : 'right-0';
    const translateClass =
        position === 'left'
            ? isOpen
                ? 'translate-x-0'
                : '-translate-x-full'
            : isOpen
              ? 'translate-x-0'
              : 'translate-x-full';

    return (
        <>
            {/* //TODO - change to backdrop component */}
            {isOpen && (
                <div
                    className='fixed top-0 right-0 bottom-0 left-0 z-[119] mb-0'
                    style={{ backgroundColor: overlayColor }}
                    onClick={onClose}
                ></div>
            )}

            <div
                className={clsx(baseClass, positionClass, translateClass, className)}
                style={{
                    width,
                    transitionDuration,
                    backgroundColor,
                    borderRadius,
                    boxShadow
                }}
            >
                {titleSection ?? (
                    <Button className='absolute left-5!' onClick={onClose} variant='light' color='primary'>
                        <CrossIcon />
                    </Button>
                )}

                <div>{children}</div>
            </div>
        </>
    );
};

export default OffCanvas;
