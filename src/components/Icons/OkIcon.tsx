import { SVGProps } from 'react';

export const OkIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="18.5" cy="18" r="18" fill="#2FC26E" />
            <path
                d="M10.3184 18L16.5365 24.2182L27.3365 12.4363"
                stroke="white"
                stroke-width="5"
                stroke-linejoin="round"
            />
        </svg>
    );
};
