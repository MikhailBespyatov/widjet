export interface IMask {
    phone: (RegExp | string)[];
    iin: (RegExp | string)[];
    cardNumber: (RegExp | string)[];
    cvv: (RegExp | string)[];
    date: (RegExp | string)[];
}

export interface IPlaceholders {
    phone: string;
    iin: string;
    cardNumber: string;
    name: string;
    cvv: string;
    date: string;
}

export interface IAgreementProps {
    title: string;
    linkUrl: string;
    linkedText: string;
    check: (isChecked: boolean) => void;
    checked: boolean;
    dataTestId?: string;
}

export interface IUserCard {
    abonentId: string;
    approved: string;
    cardMask: string;
}

export interface ICardData {
    card_name: string;
    card_no_bin: string;
    exp_month: string;
    exp_year: string;
    sec_cvv2: string;
}

export interface ICardDataErrors {
    cardNameError: boolean;
    cardNoBinError: boolean;
    dateError: boolean;
    secCvv2Error: boolean;
}
