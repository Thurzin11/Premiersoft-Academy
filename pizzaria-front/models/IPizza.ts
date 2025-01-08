interface IPizza{
    id: string
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
    categories: ICategory[];
}