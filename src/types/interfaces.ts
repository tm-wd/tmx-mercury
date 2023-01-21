import { MouseEventHandler } from "react";

declare interface ICards {
    nome: string;
    sigla: string;
    regiao: string;
    link: MouseEventHandler<HTMLAnchorElement>;
}

declare interface ICity {
    nome: string;
    mesorregiao: string | undefined;
}

export type {
    ICards,
    ICity
}

