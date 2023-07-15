import bcrypt from 'bcryptjs';

// Definición de la interfaz de producto base
interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    platform: ValidPlatforms[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
}

// Definición de la interfaz de producto de arte, que extiende a la de producto base
interface ArtProduct extends SeedProduct {
    subject: string;
    type: 'art';
    size: ValidSizes[]; // Ahora 'size' es un array
}

// Definición del tipo Producto, que puede ser tanto un producto base como un producto de arte
type Product = ArtProduct | SeedProduct ;



interface SeedUser {
    name     : string;
    email    : string;
    password : string;
    role     : 'admin'|'client'
}



// Definición de la interfaz para los datos semilla
interface SeedData {
    users: SeedUser[];
    products: Product[],
}

type ValidPlatforms = 'Game Boy' | 'Game Boy Classic' | 'Retro Console' | 'Sega Game Gear' | 'Sony PSP 2000';
type ValidTypes = 'console' | 'art';
type ValidSizes = 'small' | 'medium' | 'large';

// Definición de los datos semilla
export const initialData: SeedData = {
    users: [
        {
            name: 'Oriol A',
            email: 'alonsoesplugas@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
        {
            name: 'Ada A',
            email: 'la1@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'client'
        },
    ],
    products: [
        {
            description: "La Game Boy de Nintendo es una consola portátil.",
            images: ['consola-1.jpg', 'consola-1-1.jpg'],
            inStock: 7,
            price: 75,
            platform:[ 'Game Boy'],
            slug: "game-boy",
            tags: ['nintendo', 'portable'],
            title: "Game Boy",
            type: 'console',
        },
        {
            description: "La Game Boy Classic de Nintendo es una consola portátil.",
            images: ['consola-2.jpg', 'consola-2-2.jpg'],
            inStock: 5,
            price: 200,
            platform:[ 'Game Boy Classic'],
            slug: "game-boy-classic",
            tags: ['nintendo', 'portable'],
            title: "Game Boy Classic",
            type: 'console',
        },
        {
            description: "Una consola retro con juegos clásicos.",
            images: ['consola-3.jpg', 'consola-3-3.jpg'],
            inStock: 10,
            price: 130,
            platform: ['Retro Console'],
            slug: "consola-retro",
            tags: ['retro'],
            title: "Consola Retro",
            type: 'console',
        },
        {
            description: "Sega Game Gear es una consola portátil de 8 bits.",
            images: ['consola-4.jpg', 'consola-4-4.jpg'],
            inStock: 15,
            price: 35,
            platform:[ 'Sega Game Gear'],
            slug: "sega-game-gear",
            tags: ['sega', 'portable'],
            title: "Sega Game Gear",
            type: 'console',
        },
        {
            description: "Sony PSP 2000 es una consola portátil con gráficos en alta definición.",
            images: ['consola-5.jpg'],
            inStock: 17,
            price: 35,
            platform: ['Sony PSP 2000'],
            slug: "sony-psp-2000",
            tags: ['sony', 'portable'],
            title: "Sony PSP 2000",
            type: 'console',
        },
        {
            description: "Un cuadro con un plano de la Game Boy.",
            images: ['cuadro-1.jpg'],
            inStock: 50,
            price: 45,
            subject: "Game Boy Art",
            platform: ['Game Boy'], 
            slug: "cuadro-de-game-boy",
            tags: ['art', 'nintendo'],
            title: "Cuadro de Game Boy",
            type: 'art',
            size: ['small', 'medium', 'large'], // Aquí incluimos todos los tamaños
        },
        {
            description: "Un cuadro con un diseño del Mario Kart.",
            images: ['cuadro-2.jpg'],
            inStock: 50,
            price: 40,
            subject: "Mario Kart",
            platform: ["Game Boy Classic"],
            slug: "cuadro-de-mario-kart",
            tags: ['art', 'nintendo'],
            title: "Cuadro de Mario Kart",
            type: 'art',
            size: ['small', 'medium', 'large'], // Aquí incluimos todos los tamaños
        },
        {
            description: "Cuadros de mandos de consolas.",
            images: ['cuadro-3.jpg'],
            inStock: 0,
            price: 35,
            subject: "Mandos de Consolas",
            platform: ["Sony PSP 2000"],
            slug: "cuadros-de-mandos-de-consolas",
            tags: ['art'],
            title: "Cuadros de Mandos de Consolas",
            type: 'art',
            size: ['small', 'medium', 'large'], // Aquí incluimos todos los tamaños
        },
    ]
}
