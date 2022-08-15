import { SVGProps } from 'react';

export const NurbankIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0891 12.6252L10.4054 4.35986L5.72223 12.6252H15.0891Z"
                fill="#FECC04"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 16L15.0877 12.6251H5.72223L10.405 4.36133L8.5 1L0 16H17Z"
                fill="#0066B3"
            />
        </svg>
    );
};
