import React, { KeyboardEventHandler } from 'react';
interface SearchProps {
    search: KeyboardEventHandler<HTMLInputElement> | undefined;
}

const Search: React.FC<SearchProps> = ({ search }): JSX.Element => {
    return (
        <input
            type="text"
            onKeyUp={search}
            className="form-control form-control-lg mb-4"
            placeholder="Digite o nome de um estado aqui..."
        />
    );
};

export { Search };
