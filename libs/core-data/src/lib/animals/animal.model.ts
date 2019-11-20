export interface Animal {
    id: number,
    height: string,
    mass: number,
    name: string,
    continent: string
}

export const emptyAnimal: Animal = {
    id: null,
    height: '',
    mass: null,
    name: '',
    continent: ''
}
