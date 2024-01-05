export interface TeamStats {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
        for: number,
        against: number
    }
}