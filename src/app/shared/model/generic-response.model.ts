export interface GenericResponse {
    get: string;
    parameters: {[key: string]: string};
    errors: {[key: string]: string};
    results: number;
    paging: {
        current: number,
        total: number
    };
}