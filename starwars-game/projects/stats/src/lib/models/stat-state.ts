export interface Statistic {
    year: number;
    month: number;
    nbSuccess: number;
    nbFailure: number;
}

export type StatList = Statistic[];