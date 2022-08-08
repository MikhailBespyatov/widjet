export const validateIin = (value: string) => value.length === 12 || 'ИИН должен состоять из 12 цифр';
export const validatePhoneNumber = (value: string) =>
    value.length !== 11
        ? 'Номер телефона должен состоять из 11 цифр'
        : value[0] !== '7' || value[1] !== '7'
        ? 'Первые две цифры номера телефона должены быть 7'
        : true;
