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
