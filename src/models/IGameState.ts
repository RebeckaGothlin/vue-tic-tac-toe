export interface IGameState {
    gameboard: string[];
    showScores: boolean;
    users: {
        nameO: string;
        nameX: string;
    };
    scores: {
        scoresO: number,
        scoresX: number,
    };
    isXturn: boolean;
    gameOver: boolean;
}