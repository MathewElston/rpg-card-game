export interface Character {
    id: number;
    image?: string;
    name: string;
    level: number;
    attack: number;
    health: number;
    speed: number;
    mana?: number;
    type: string;
}