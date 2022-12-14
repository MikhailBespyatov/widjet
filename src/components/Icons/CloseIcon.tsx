import { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M8.003 8.717L15.213 15.927L15.927 15.213L8.717 8.003L16 0.72L15.28 0L7.997 7.283L0.787 0.073L0.073 0.787L7.283 7.997L0 15.28L0.72 16L8.003 8.717Z"
                fill="#0B1F35"
            />
        </svg>
    );
};
