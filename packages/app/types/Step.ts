export type Step = {
 //[key: string] : {
    key: string,
    data: string,
    options?: Array<string>,
    next: string | null,
    prev: string | null,
    prompt?: string | null,
// }
}