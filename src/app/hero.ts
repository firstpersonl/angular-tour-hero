export interface Hero {
    id: number;
    name: string
}

export const HEROES: Hero[] = [
    {
        id: 9,
        name: '雷神托尔'
    },
    {
        id: 10,
        name: '钢铁侠'
    },
    {
        id: 11,
        name: '美国队长'
    },
    {
        id: 12,
        name: '猎鹰'
    },
    {
        id: 13,
        name: '女武神'
    },
    {
        id: 14,
        name: '红女巫'
    },
    {
        id: 15,
        name: '绿巨人'
    },
    {
        id: 16,
        name: '蚁人'
    }
]

export class HeroPower {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ){}
}