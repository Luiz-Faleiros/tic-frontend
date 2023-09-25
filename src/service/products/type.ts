export interface CreateProduct {
    categoryId: number,
    controlId?: number,
    originId: number,
    roomId: number,
    name: string,
    sku: string,
    brokenAt?: boolean,
};

export interface ListProduct {
    category: string,
    controlId: number,
    origin: string,
    room: string,
    name: string,
    sku: string,
    hash: string,
    brokenAt: Date,
}