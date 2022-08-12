import { SVGProps } from 'react';

export const ListIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_1234_53758)">
                <rect x="19.5" y="10.5" width="61" height="85" rx="10" fill="#AEC1B3" />
                <rect x="19.5" y="5" width="61" height="85" rx="10" fill="#BADDC2" />
                <path d="M26.5 24.5V29.5H73.5V24.5H26.5Z" fill="#7F8C8D" />
                <path
                    d="M26.5 34.5V39.5H73.5V34.5H26.5ZM26.5 44.5V49.5H73.5V44.5H26.5ZM26.5 54.5V59.5H73.5V54.5H26.5Z"
                    fill="#7F8C8D"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M65.5 86C70.7467 86 75 81.7467 75 76.5C75 71.2533 70.7467 67 65.5 67C60.2533 67 56 71.2533 56 76.5C56 81.7467 60.2533 86 65.5 86ZM65.5 84.6429C69.9972 84.6429 73.6429 80.9972 73.6429 76.5C73.6429 72.0028 69.9972 68.3571 65.5 68.3571C61.0028 68.3571 57.3571 72.0028 57.3571 76.5C57.3571 80.9972 61.0028 84.6429 65.5 84.6429Z"
                    fill="#F7BF75"
                />
            </g>
            <defs>
                <clipPath id="clip0_1234_53758">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
