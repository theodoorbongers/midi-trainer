import { first } from "rxjs/operators";

export const toggleBehaviorSubject = behaviorSubject => behaviorSubject.pipe(first()).subscribe(current => behaviorSubject.next(!current));
