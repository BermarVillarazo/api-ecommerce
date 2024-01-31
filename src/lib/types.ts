type ProductProps = {
    id: number;
    title: string;
    description: string;
    category?: string;
    price: number;
    image: string;
    rating: RatingProps;
};

type RatingProps = {
    rate: number;
    count: number;
};

type UserProps = {
    id: number;
    email: string;
    username: string;
    password: string;
    name: NameProps;
    phone: string;
};

type NameProps = {
    firstname: string;
    lastname: string;
};

type CartProps = {  
    id: number;
    userId?: number;
    date?: string;
    products?: ProductCartProps[];
};

type ProductCartProps = {
    productId?: number;
    quantity?: number;
};
