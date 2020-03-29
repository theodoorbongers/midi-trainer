import { tap } from "rxjs/operators";

export const log = (label, mapping = v => v) => tap(v => { console.log(label, mapping(v)); });
