const createPrototype = (properties, displayName, type) => Object.assign(
  Object.create(null, properties), {
    type,
    toString() {
      return `${displayName} MIDI message (${Object.keys(properties).map(propName => `${propName}: ${this[propName]}`).join(', ')})`;
    },
  }
);

export const createMessageDefinition = ({ displayName, properties, matcher }) => {
  const type = Symbol(displayName);
  return ({
    type,
    matches: matcher,
    create: event => Object.create(createPrototype(properties, displayName, type), { event: { value: event, writable: false } }),
  });
};