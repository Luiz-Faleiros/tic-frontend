export interface LoginRequest {
    email: string,
    password: string,
}

export interface CreateUser {
    name: string,
    email: string,
    password: string,
    is_adm?: string,
}

export interface ListUsers {
    name: string;
    email: string;
    hash: string;
    is_adm: boolean;
    created_at: string;
}
