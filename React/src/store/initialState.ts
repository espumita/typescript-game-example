export interface Store {
    difficulty: Difficulty
    gameState: GameState
    mines: Mine[]
}

export interface Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number
}

export class BeginerDifficulty implements Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number

    constructor(){
        this.minesNumber = 10
        this.boardWidth = 8
        this.boardHeight = 8
    }
}

export enum GameState {
    NotStarted = 0,
    Started = 1
}


export interface Mine {
    position: Position
}

export interface Position {
    x: number
    y: number
}

const initialState: Store = {
    difficulty: new BeginerDifficulty(),
    gameState: GameState.NotStarted,
    mines: []
}

export default initialState