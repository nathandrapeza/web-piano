const NOTES = [
  "c", "dflat", "d", "eflat",
  "e", "f", "gflat", "g",
  "aflat", "a", "bflat", "b"
];

const KEY_TO_NOTE = {
  z: 'c',
  s: 'dflat',
  x: 'd',
  d: 'eflat',
  c: 'e',
  v: 'f',
  g: 'gflat',
  b: 'g',
  h: 'aflat',
  n: 'a',
  j: 'bflat',
  m: 'b'
}

const NOTE_TO_KEY = {
  c: 'z',
  dflat: 's',
  d: 'x',
  eflat: 'd',
  e: 'c',
  f: 'v',
  gflat: 'g',
  g: 'b',
  aflat: 'h',
  a: 'n',
  bflat: 'j',
  b: 'm'
}


export { NOTES, KEY_TO_NOTE, NOTE_TO_KEY };