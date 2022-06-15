export const logo_image = './Assets/logo/NS-header-logo.png';

export const homeHash = 'home';

export const menu = [
    {
        name: 'Здоровье',
        hash: 'health'
    },
    {
        name: 'Товары',
        hash: 'goods'
    },
    {
        name: 'О нас',
        hash: 'personal'
    }
];

export const blogName = 'Блог о здоровом питании';

export const sale_info_text = 'Оформите дисконтный номер и пользуйтесь \
                        продукцией NSP без 40% розничной наценки';

export const advantages = [
    'оформите бесплатно дисконтный номер NSP',
    'экономьте 40% на покупках',
    'возвращайте до 30% от суммы покупок'
];

export const menu_footer = [
    {
        network: 'Telegram',
        icon_src: './Assets/tg.png',
        href: '#'
    },
    {
        network: 'VK',
        icon_src: './Assets/premium-icon-vk-2504953.png',
        href: '#'
    },
    {
        network: 'Instagramm',
        icon_src: './Assets/free-icon-instagram-2111463.png',
        href: '#'
    }
];

export const alph = () => {
    let str = ''
    for(let i = 10; i < 36; i++){
        str += i.toString(36);
    };
    for(let i = 0; i <= 9; i++){
        str += i;
    }
    return str;
}

export const passLength = 8;