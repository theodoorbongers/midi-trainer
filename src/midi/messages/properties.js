export const status = ({
  get() {
    return this.event.data[0];
  },
});

export const data1 = ({
  get() {
    return this.event.data[1];
  },
});

export const data2 = ({
  get() {
    return this.event.data[2];
  },
});

export const channel = ({
  get() {
    return (this.event.data[0] & 0b00001111) + 1;
  },
});

export const key = ({
  get() {
    return this.event.data[1] & 0b01111111;
  },
});

export const velocity = ({
  get() {
    return this.event.data[2] & 0b01111111;
  },
});

export const controller = ({
  get() {
    return this.event.data[1] & 0b01111111;
  },
});

export const value = ({
  get() {
    return this.event.data[2] & 0b01111111;
  },
});

export const patch = ({
  get() {
    return this.event.data[1] & 0b01111111;
  },
});

export const pitchBendValue = ({
  get() {
    return (this.event.data[1] & 0b01111111) | ((this.event.data[2] & 0b01111111) << 7);
  },
});
