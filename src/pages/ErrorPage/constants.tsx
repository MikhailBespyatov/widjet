import { BankIcon } from '../../components/Icons/ErrorIcons/BankIcon';
import { CardIcon } from '../../components/Icons/ErrorIcons/CardIcon';
import { DocumentIcon } from '../../components/Icons/ErrorIcons/DocumentIcon';
import { FolredIcon } from '../../components/Icons/ErrorIcons/FolderIcon';
import { ListIcon } from '../../components/Icons/ErrorIcons/ListIcon';
import { PostIcon } from '../../components/Icons/ErrorIcons/PostIcon';
import { ShieldIcon } from '../../components/Icons/ErrorIcons/ShieldIcon';
import { TicketIcon } from '../../components/Icons/ErrorIcons/TicketIcon';

export const ERROR_CONFIGS = {
    0: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    1: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    2: {
        icon: <PostIcon />,
        title: 'Вы истратили все попытки ввода кода',
        description: 'Попробуйте оформить заказ чуть позже',
    },
    3: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    4: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    5: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    6: {
        icon: <PostIcon />,
        title: 'Вы истратили все попытки ввода кода',
        description: 'Попробуйте оформить заказ чуть позже',
    },
    7: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    8: {
        icon: <DocumentIcon />,
        title: 'Вам нужно обновить удостоверение или паспорт',
        description: 'Перевыпустите документ онлайн в eGov. Оформление займет до двух недель',
    },
    9: {
        icon: <DocumentIcon />,
        title: 'Вам нужно обновить удостоверение или паспорт',
        description: 'Перевыпустите документ онлайн в eGov. Оформление займет до двух недель',
    },
    10: {
        icon: <FolredIcon />,
        title: 'Слишком много запросов проверки ИИН и номера телефона',
        description: 'Попробуйте отправить новый запрос позднее',
    },
    11: {
        icon: <TicketIcon />,
        title: 'К сожалению, Вы не можете воспользоваться этим предложением',
        description: 'Попробуйте выбрать другой способ оплаты',
    },
    12: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    13: {
        icon: <ListIcon />,
        title: 'Недавно Вы оформляли другие заявки',
        description: 'Попробуйте вернуться для оформления новой заявки через несколько недель.',
    },
    14: {
        icon: <ListIcon />,
        title: 'Недавно Вы оформляли другие заявки',
        description: 'Попробуйте вернуться для оформления новой заявки через несколько недель.',
    },
    15: {
        icon: <ListIcon />,
        title: 'Недавно Вы оформляли другие заявки',
        description: 'Попробуйте вернуться для оформления новой заявки через несколько недель.',
    },
    16: {
        icon: <TicketIcon />,
        title: 'К сожалению, Вы не можете воспользоваться этим предложением',
        description: 'Попробуйте выбрать другой способ оплаты',
    },
    17: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    18: {
        icon: <BankIcon />,
        title: 'У Вас есть налоговая задолженность',
        description: 'После погашения обновление информации о задолженности может занять до 2 недель.',
    },
    20: {
        icon: <CardIcon />,
        title: 'Не удалось привязать карту',
        description: 'Проверьте остаток на счёте и попробуйте ещё раз, или воспользуйтесь другой картой для оплаты.',
    },
    21: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    22: {
        icon: <CardIcon />,
        title: 'Слишком много попыток привязки карты',
        description: 'Вы превысили лимит попыток привязать карту. Попробуйте ёще раз позже',
    },
    92: {
        icon: <FolredIcon />,
        title: 'Слишком много запросов проверки ИИН и номера телефона',
        description: 'Попробуйте отправить новый запрос позднее',
    },
    97: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    98: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
    99: { icon: <ShieldIcon />, title: 'Что-то пошло не так', description: 'Попробуйте еще раз оформить покупку.' },
};
