import { BaseEntity } from './../../shared';

export const enum Language {
    'FRENCH',
    'ENGLISH',
    'SPANISH'
}

export class Book implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public language?: Language,
    ) {
    }
}
