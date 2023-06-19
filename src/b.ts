import { c } from "./c";

export function b(ids: Array<string>) : Array<string> {

    return ids.map((v) => {
        return `Item: '${v}', value: '${c(v)}'`
    }); 
}