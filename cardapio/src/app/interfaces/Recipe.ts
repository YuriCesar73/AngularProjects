import { Ingredient } from './Ingredient';
import { Instruction } from './Instruction';
export interface Recipe {
    id: number,
    name: string,
    image: string,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    difficulty: string,
    rating: number,
    ingredients: Ingredient,
    instructions: Instruction, 
    isFavorite?: boolean
}