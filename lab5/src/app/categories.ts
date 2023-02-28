export interface Category {
    id: number;
    name: string;
    img: string;
}

export const categories = [
    {
        id: 1, 
        name: 'Phones',
        img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png'
    },
    {
        id:2,
        name: 'Computers',
        img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png'
    },
    {
        id: 3,
        name: 'TV, Audio, Video',
        img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png'
    },
    {
        id: 4,
        name: 'Appliances',
        img: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home%20App.png'
    }
]