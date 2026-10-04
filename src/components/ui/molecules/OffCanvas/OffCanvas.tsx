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
        'fixed top-0 bottom-0 z-[120] flex h-screen flex-col overflow-hidden bg-white px-8 py-5 transition-transform ease-in-out';

    const positionClass = position === 'left' ? 'left-0' : 'right-0';
    // fully removed from the layout when closed — an always-mounted full-screen
    // z-[120] panel (even translated off-screen) can intercept touches and, on
    // some mobile browsers, nudge layout / show up in the a11y + inspector tree
    const stateClass = isOpen ? 'translate-x-0' : 'hidden';

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
                className={clsx(baseClass, positionClass, stateClass, className)}
                style={{
                    width,
                    transitionDuration,
                    backgroundColor,
                    borderRadius,
                    boxShadow
                }}
            >
                {titleSection ?? (
                    <Button className='absolute top-2 left-5!' onClick={onClose} variant='light' color='primary'>
                        <CrossIcon />
                    </Button>
                )}

                <div className='min-h-0 flex-1 overflow-auto'>{children}</div>
            </div>
        </>
    );
};

export default OffCanvas;
