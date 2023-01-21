declare type TCard = {
    id: number;
    nome: string;
    sigla: string;
    regiao: {
        nome: string;
    };
};

export type { TCard };
