import { map } from "rxjs/operators";
import messageTypes from './messages';

export const parse = () => map(event => messageTypes.find(type => type.matches(event)).create(event));
