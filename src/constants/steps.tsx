import { EnteringData } from 'pages/EnteringData';
import { Scoring } from 'pages/Scoring';
import { VerifySMS } from 'pages/VerifySMS';
import { Final } from '../pages/Final';
import { Payments } from '../pages/Payments';

export const STEPS = [<EnteringData />, <VerifySMS />, <Scoring />, <Payments />, <Final />];

export const STEPS_CODE = {
    101: 0,
    104: 1,
    106: 2,
    108: 2,
    109: 3,
    110: 3,
    111: 4,
    112: 4,
    113: 4,
    114: 4,
    115: 4,
};
