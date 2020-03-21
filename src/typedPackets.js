import { map, filter } from "rxjs/operators";

export const packType = type => map(value => ({ type, value }));

export const unpackOfType = type => observable$ => observable$.pipe(
  filter(p => p.type === type),
  map(p => p.value),
);
