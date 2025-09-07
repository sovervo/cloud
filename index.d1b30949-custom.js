(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
class ol {
  #e = {};
  #t = {};
  #n = {};
  on = (e, t) => {
    (this.#e[e] || (this.#e[e] = []), this.#e[e].push(t));
  };
  off = (e, t) => {
    if (e in this.#t && this.#t[e] > 0) {
      e in this.#n ? this.#n[e].push(t) : (this.#n[e] = [t]);
      return;
    }
    this.#i(e, t);
  };
  #i = (e, t) => {
    const n = this.#e[e];
    if (n) {
      let r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    }
  };
  dispatch = (e, t) => {
    (e in this.#t ? this.#t[e]++ : (this.#t[e] = 1),
      this.#e[e] && this.#e[e].forEach((n) => n(t)),
      this.#t[e]--,
      this.#t[e] == 0 &&
        e in this.#n &&
        this.#n[e].length > 0 &&
        (this.#n[e].forEach((n) => this.#i(e, n)), delete this.#n[e]));
  };
}
const Se = new ol();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Js = "169",
  ll = 0,
  Sa = 1,
  cl = 2,
  xo = 1,
  hl = 2,
  rn = 3,
  yn = 0,
  Tt = 1,
  an = 2,
  En = 0,
  ii = 1,
  Ea = 2,
  ya = 3,
  Ta = 4,
  ul = 5,
  In = 100,
  dl = 101,
  fl = 102,
  pl = 103,
  ml = 104,
  gl = 200,
  _l = 201,
  vl = 202,
  xl = 203,
  cs = 204,
  hs = 205,
  Ml = 206,
  Sl = 207,
  El = 208,
  yl = 209,
  Tl = 210,
  Al = 211,
  bl = 212,
  wl = 213,
  Rl = 214,
  us = 0,
  ds = 1,
  fs = 2,
  hi = 3,
  ps = 4,
  ms = 5,
  gs = 6,
  _s = 7,
  Mo = 0,
  Cl = 1,
  Pl = 2,
  cn = 0,
  Dl = 1,
  Ll = 2,
  Ul = 3,
  Il = 4,
  Nl = 5,
  Fl = 6,
  Ol = 7,
  So = 300,
  ui = 301,
  di = 302,
  vs = 303,
  xs = 304,
  vr = 306,
  Ms = 1e3,
  Wt = 1001,
  Ss = 1002,
  _t = 1003,
  Bl = 1004,
  Oi = 1005,
  dt = 1006,
  Pr = 1007,
  Fn = 1008,
  zl = 1008,
  hn = 1009,
  Eo = 1010,
  yo = 1011,
  Ai = 1012,
  Qs = 1013,
  Bn = 1014,
  on = 1015,
  Tn = 1016,
  ea = 1017,
  ta = 1018,
  fi = 1020,
  To = 35902,
  Ao = 1021,
  bo = 1022,
  ft = 1023,
  wo = 1024,
  Ro = 1025,
  ri = 1026,
  pi = 1027,
  Co = 1028,
  na = 1029,
  ia = 1030,
  ra = 1031,
  sa = 1033,
  sr = 33776,
  ar = 33777,
  or = 33778,
  lr = 33779,
  Es = 35840,
  ys = 35841,
  Ts = 35842,
  As = 35843,
  bs = 36196,
  ws = 37492,
  Rs = 37496,
  Cs = 37808,
  Ps = 37809,
  Ds = 37810,
  Ls = 37811,
  Us = 37812,
  Is = 37813,
  Ns = 37814,
  Fs = 37815,
  Os = 37816,
  Bs = 37817,
  zs = 37818,
  Hs = 37819,
  Gs = 37820,
  Vs = 37821,
  cr = 36492,
  ks = 36494,
  Ws = 36495,
  Po = 36283,
  Xs = 36284,
  qs = 36285,
  Ys = 36286,
  Hl = 3200,
  Gl = 3201,
  Vl = 0,
  kl = 1,
  Mn = "",
  Pt = "srgb",
  Xt = "srgb-linear",
  aa = "display-p3",
  xr = "display-p3-linear",
  dr = "linear",
  Qe = "srgb",
  fr = "rec709",
  pr = "p3",
  Gn = 7680,
  Aa = 519,
  Wl = 512,
  Xl = 513,
  ql = 514,
  Do = 515,
  Yl = 516,
  $l = 517,
  Kl = 518,
  Zl = 519,
  ba = 35044,
  bi = "300 es",
  ln = 2e3,
  mr = 2001;
class gi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const mt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Dr = Math.PI / 180,
  $s = 180 / Math.PI;
function Ci() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    mt[i & 255] +
    mt[(i >> 8) & 255] +
    mt[(i >> 16) & 255] +
    mt[(i >> 24) & 255] +
    "-" +
    mt[e & 255] +
    mt[(e >> 8) & 255] +
    "-" +
    mt[((e >> 16) & 15) | 64] +
    mt[(e >> 24) & 255] +
    "-" +
    mt[(t & 63) | 128] +
    mt[(t >> 8) & 255] +
    "-" +
    mt[(t >> 16) & 255] +
    mt[(t >> 24) & 255] +
    mt[n & 255] +
    mt[(n >> 8) & 255] +
    mt[(n >> 16) & 255] +
    mt[(n >> 24) & 255]
  ).toLowerCase();
}
function yt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function jl(i, e) {
  return ((i % e) + e) % e;
}
function Lr(i, e, t) {
  return (1 - t) * i + t * e;
}
function vi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Et(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ue {
  constructor(e = 0, t = 0) {
    ((Ue.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (
      (this.x = s * n - a * r + e.x),
      (this.y = s * r + a * n + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Le {
  constructor(e, t, n, r, s, a, o, l, c) {
    ((Le.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, l, c));
  }
  set(e, t, n, r, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = o),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = a),
      (u[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      f = n[7],
      p = n[2],
      m = n[5],
      x = n[8],
      S = r[0],
      d = r[3],
      h = r[6],
      T = r[1],
      E = r[4],
      A = r[7],
      O = r[2],
      P = r[5],
      b = r[8];
    return (
      (s[0] = a * S + o * T + l * O),
      (s[3] = a * d + o * E + l * P),
      (s[6] = a * h + o * A + l * b),
      (s[1] = c * S + u * T + f * O),
      (s[4] = c * d + u * E + f * P),
      (s[7] = c * h + u * A + f * b),
      (s[2] = p * S + m * T + x * O),
      (s[5] = p * d + m * E + x * P),
      (s[8] = p * h + m * A + x * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * a * u - t * o * c - n * s * u + n * o * l + r * s * c - r * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = u * a - o * c,
      p = o * l - u * s,
      m = c * s - a * l,
      x = t * f + n * p + r * m;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / x;
    return (
      (e[0] = f * S),
      (e[1] = (r * c - u * n) * S),
      (e[2] = (o * n - r * a) * S),
      (e[3] = p * S),
      (e[4] = (u * t - r * l) * S),
      (e[5] = (r * s - o * t) * S),
      (e[6] = m * S),
      (e[7] = (n * l - c * t) * S),
      (e[8] = (a * t - n * s) * S),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -r * c,
        r * l,
        -r * (-c * a + l * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(Ur.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(Ur.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(Ur.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ur = new Le();
function Lo(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function wi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Jl() {
  const i = wi("canvas");
  return ((i.style.display = "block"), i);
}
const wa = {};
function hr(i) {
  i in wa || ((wa[i] = !0), console.warn(i));
}
function Ql(i, e, t) {
  return new Promise(function (n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function ec(i) {
  const e = i.elements;
  ((e[2] = 0.5 * e[2] + 0.5 * e[3]),
    (e[6] = 0.5 * e[6] + 0.5 * e[7]),
    (e[10] = 0.5 * e[10] + 0.5 * e[11]),
    (e[14] = 0.5 * e[14] + 0.5 * e[15]));
}
function tc(i) {
  const e = i.elements;
  e[11] === -1
    ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
    : ((e[10] = -e[10]), (e[14] = -e[14] + 1));
}
const Ra = new Le().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199,
  ),
  Ca = new Le().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735,
  ),
  xi = {
    [Xt]: {
      transfer: dr,
      primaries: fr,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (i) => i,
      fromReference: (i) => i,
    },
    [Pt]: {
      transfer: Qe,
      primaries: fr,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (i) => i.convertSRGBToLinear(),
      fromReference: (i) => i.convertLinearToSRGB(),
    },
    [xr]: {
      transfer: dr,
      primaries: pr,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (i) => i.applyMatrix3(Ca),
      fromReference: (i) => i.applyMatrix3(Ra),
    },
    [aa]: {
      transfer: Qe,
      primaries: pr,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Ca),
      fromReference: (i) => i.applyMatrix3(Ra).convertLinearToSRGB(),
    },
  },
  nc = new Set([Xt, xr]),
  Xe = {
    enabled: !0,
    _workingColorSpace: Xt,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(i) {
      if (!nc.has(i))
        throw new Error(`Unsupported working color space, "${i}".`);
      this._workingColorSpace = i;
    },
    convert: function (i, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return i;
      const n = xi[e].toReference,
        r = xi[t].fromReference;
      return r(n(i));
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this._workingColorSpace);
    },
    getPrimaries: function (i) {
      return xi[i].primaries;
    },
    getTransfer: function (i) {
      return i === Mn ? dr : xi[i].transfer;
    },
    getLuminanceCoefficients: function (i, e = this._workingColorSpace) {
      return i.fromArray(xi[e].luminanceCoefficients);
    },
  };
function si(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ir(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Vn;
class ic {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      (Vn === void 0 && (Vn = wi("canvas")),
        (Vn.width = e.width),
        (Vn.height = e.height));
      const n = Vn.getContext("2d");
      (e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Vn));
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e,
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = wi("canvas");
      ((t.width = e.width), (t.height = e.height));
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = si(s[a] / 255) * 255;
      return (n.putImageData(r, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(si(t[n] / 255) * 255))
          : (t[n] = si(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let rc = 0;
class Uo {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: rc++ }),
      (this.uuid = Ci()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Nr(r[a].image)) : s.push(Nr(r[a]));
      } else s = Nr(r);
      n.url = s;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
}
function Nr(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? ic.getDataURL(i)
    : i.data
      ? {
          data: Array.from(i.data),
          width: i.width,
          height: i.height,
          type: i.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let sc = 0;
class pt extends gi {
  constructor(
    e = pt.DEFAULT_IMAGE,
    t = pt.DEFAULT_MAPPING,
    n = Wt,
    r = Wt,
    s = dt,
    a = Fn,
    o = ft,
    l = hn,
    c = pt.DEFAULT_ANISOTROPY,
    u = Mn,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: sc++ }),
      (this.uuid = Ci()),
      (this.name = ""),
      (this.source = new Uo(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Ue(0, 0)),
      (this.repeat = new Ue(1, 1)),
      (this.center = new Ue(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Le()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0));
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== So) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ms:
          e.x = e.x - Math.floor(e.x);
          break;
        case Wt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ms:
          e.y = e.y - Math.floor(e.y);
          break;
        case Wt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = So;
pt.DEFAULT_ANISOTROPY = 1;
class tt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((tt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      f = l[8],
      p = l[1],
      m = l[5],
      x = l[9],
      S = l[2],
      d = l[6],
      h = l[10];
    if (
      Math.abs(u - p) < 0.01 &&
      Math.abs(f - S) < 0.01 &&
      Math.abs(x - d) < 0.01
    ) {
      if (
        Math.abs(u + p) < 0.1 &&
        Math.abs(f + S) < 0.1 &&
        Math.abs(x + d) < 0.1 &&
        Math.abs(c + m + h - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const E = (c + 1) / 2,
        A = (m + 1) / 2,
        O = (h + 1) / 2,
        P = (u + p) / 4,
        b = (f + S) / 4,
        F = (x + d) / 4;
      return (
        E > A && E > O
          ? E < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(E)), (r = P / n), (s = b / n))
          : A > O
            ? A < 0.01
              ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
              : ((r = Math.sqrt(A)), (n = P / r), (s = F / r))
            : O < 0.01
              ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
              : ((s = Math.sqrt(O)), (n = b / s), (r = F / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let T = Math.sqrt(
      (d - x) * (d - x) + (f - S) * (f - S) + (p - u) * (p - u),
    );
    return (
      Math.abs(T) < 0.001 && (T = 1),
      (this.x = (d - x) / T),
      (this.y = (f - S) / T),
      (this.z = (p - u) / T),
      (this.w = Math.acos((c + m + h - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class ac extends gi {
  constructor(e = 1, t = 1, n = {}) {
    (super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new tt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new tt(0, 0, e, t)));
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: dt,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n,
    );
    const s = new pt(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace,
    );
    ((s.flipY = !1),
      (s.generateMipmaps = n.generateMipmaps),
      (s.internalFormat = n.internalFormat),
      (this.textures = []));
    const a = n.count;
    for (let o = 0; o < a; o++)
      ((this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0));
    ((this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples));
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let r = 0, s = this.textures.length; r < s; r++)
        ((this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n));
      this.dispose();
    }
    (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0));
    for (let n = 0, r = e.textures.length; n < r; n++)
      ((this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0));
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Uo(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class qt extends ac {
  constructor(e = 1, t = 1, n = {}) {
    (super(e, t, n), (this.isWebGLRenderTarget = !0));
  }
}
class Io extends pt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = _t),
      (this.minFilter = _t),
      (this.wrapR = Wt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class oc extends pt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = _t),
      (this.minFilter = _t),
      (this.wrapR = Wt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Pi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r));
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      f = n[r + 3];
    const p = s[a + 0],
      m = s[a + 1],
      x = s[a + 2],
      S = s[a + 3];
    if (o === 0) {
      ((e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f));
      return;
    }
    if (o === 1) {
      ((e[t + 0] = p), (e[t + 1] = m), (e[t + 2] = x), (e[t + 3] = S));
      return;
    }
    if (f !== S || l !== p || c !== m || u !== x) {
      let d = 1 - o;
      const h = l * p + c * m + u * x + f * S,
        T = h >= 0 ? 1 : -1,
        E = 1 - h * h;
      if (E > Number.EPSILON) {
        const O = Math.sqrt(E),
          P = Math.atan2(O, h * T);
        ((d = Math.sin(d * P) / O), (o = Math.sin(o * P) / O));
      }
      const A = o * T;
      if (
        ((l = l * d + p * A),
        (c = c * d + m * A),
        (u = u * d + x * A),
        (f = f * d + S * A),
        d === 1 - o)
      ) {
        const O = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        ((l *= O), (c *= O), (u *= O), (f *= O));
      }
    }
    ((e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f));
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      f = s[a],
      p = s[a + 1],
      m = s[a + 2],
      x = s[a + 3];
    return (
      (e[t] = o * x + u * f + l * m - c * p),
      (e[t + 1] = l * x + u * p + c * f - o * m),
      (e[t + 2] = c * x + u * m + o * p - l * f),
      (e[t + 3] = u * x - o * f - l * p - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      u = o(r / 2),
      f = o(s / 2),
      p = l(n / 2),
      m = l(r / 2),
      x = l(s / 2);
    switch (a) {
      case "XYZ":
        ((this._x = p * u * f + c * m * x),
          (this._y = c * m * f - p * u * x),
          (this._z = c * u * x + p * m * f),
          (this._w = c * u * f - p * m * x));
        break;
      case "YXZ":
        ((this._x = p * u * f + c * m * x),
          (this._y = c * m * f - p * u * x),
          (this._z = c * u * x - p * m * f),
          (this._w = c * u * f + p * m * x));
        break;
      case "ZXY":
        ((this._x = p * u * f - c * m * x),
          (this._y = c * m * f + p * u * x),
          (this._z = c * u * x + p * m * f),
          (this._w = c * u * f - p * m * x));
        break;
      case "ZYX":
        ((this._x = p * u * f - c * m * x),
          (this._y = c * m * f + p * u * x),
          (this._z = c * u * x - p * m * f),
          (this._w = c * u * f + p * m * x));
        break;
      case "YZX":
        ((this._x = p * u * f + c * m * x),
          (this._y = c * m * f + p * u * x),
          (this._z = c * u * x - p * m * f),
          (this._w = c * u * f - p * m * x));
        break;
      case "XZY":
        ((this._x = p * u * f - c * m * x),
          (this._y = c * m * f - p * u * x),
          (this._z = c * u * x + p * m * f),
          (this._w = c * u * f + p * m * x));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            a,
        );
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      p = n + o + f;
    if (p > 0) {
      const m = 0.5 / Math.sqrt(p + 1);
      ((this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (a - r) * m));
    } else if (n > o && n > f) {
      const m = 2 * Math.sqrt(1 + n - o - f);
      ((this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + a) / m),
        (this._z = (s + c) / m));
    } else if (o > f) {
      const m = 2 * Math.sqrt(1 + o - n - f);
      ((this._w = (s - c) / m),
        (this._x = (r + a) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m));
    } else {
      const m = 2 * Math.sqrt(1 + f - n - o);
      ((this._w = (a - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return (this.slerp(e, r), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + r * c - s * l),
      (this._y = r * u + a * l + s * o - n * c),
      (this._z = s * u + a * c + n * l - r * o),
      (this._w = a * u - n * o - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return ((this._w = a), (this._x = n), (this._y = r), (this._z = s), this);
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      f = Math.sin((1 - t) * u) / c,
      p = Math.sin(t * u) / c;
    return (
      (this._w = a * f + this._w * p),
      (this._x = n * f + this._x * p),
      (this._y = r * f + this._y * p),
      (this._z = s * f + this._z * p),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class N {
  constructor(e = 0, t = 0, n = 0) {
    ((N.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Pa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Pa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * r - o * n),
      u = 2 * (o * t - s * r),
      f = 2 * (s * n - a * t);
    return (
      (this.x = t + l * c + a * f - o * u),
      (this.y = n + l * u + o * c - s * f),
      (this.z = r + l * f + s * u - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (Fr.copy(this).projectOnVector(e), this.sub(Fr));
  }
  reflect(e) {
    return this.sub(Fr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = r), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = t),
      (this.z = n * Math.sin(e)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const Fr = new N(),
  Pa = new Pi();
class Di {
  constructor(
    e = new N(1 / 0, 1 / 0, 1 / 0),
    t = new N(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(zt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(zt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = zt.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          (e.isMesh === !0
            ? e.getVertexPosition(a, zt)
            : zt.fromBufferAttribute(s, a),
            zt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(zt));
      else
        (e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Bi.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Bi.copy(n.boundingBox)),
          Bi.applyMatrix4(e.matrixWorld),
          this.union(Bi));
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, zt),
      zt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(Mi),
      zi.subVectors(this.max, Mi),
      kn.subVectors(e.a, Mi),
      Wn.subVectors(e.b, Mi),
      Xn.subVectors(e.c, Mi),
      pn.subVectors(Wn, kn),
      mn.subVectors(Xn, Wn),
      bn.subVectors(kn, Xn));
    let t = [
      0,
      -pn.z,
      pn.y,
      0,
      -mn.z,
      mn.y,
      0,
      -bn.z,
      bn.y,
      pn.z,
      0,
      -pn.x,
      mn.z,
      0,
      -mn.x,
      bn.z,
      0,
      -bn.x,
      -pn.y,
      pn.x,
      0,
      -mn.y,
      mn.x,
      0,
      -bn.y,
      bn.x,
      0,
    ];
    return !Or(t, kn, Wn, Xn, zi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Or(t, kn, Wn, Xn, zi))
      ? !1
      : (Hi.crossVectors(pn, mn),
        (t = [Hi.x, Hi.y, Hi.z]),
        Or(t, kn, Wn, Xn, zi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, zt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(zt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Jt),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Jt = [
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
  ],
  zt = new N(),
  Bi = new Di(),
  kn = new N(),
  Wn = new N(),
  Xn = new N(),
  pn = new N(),
  mn = new N(),
  bn = new N(),
  Mi = new N(),
  zi = new N(),
  Hi = new N(),
  wn = new N();
function Or(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    wn.fromArray(i, s);
    const o =
        r.x * Math.abs(wn.x) + r.y * Math.abs(wn.y) + r.z * Math.abs(wn.z),
      l = e.dot(wn),
      c = t.dot(wn),
      u = n.dot(wn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const lc = new Di(),
  Si = new N(),
  Br = new N();
class oa {
  constructor(e = new N(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : lc.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return ((this.radius = Math.sqrt(r)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    Si.subVectors(e, this.center);
    const t = Si.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      (this.center.addScaledVector(Si, r / n), (this.radius += r));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (Br.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Si.copy(e.center).add(Br)),
              this.expandByPoint(Si.copy(e.center).sub(Br))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qt = new N(),
  zr = new N(),
  Gi = new N(),
  gn = new N(),
  Hr = new N(),
  Vi = new N(),
  Gr = new N();
class No {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, Qt)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Qt.copy(this.origin).addScaledVector(this.direction, t),
        Qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    (zr.copy(e).add(t).multiplyScalar(0.5),
      Gi.copy(t).sub(e).normalize(),
      gn.copy(this.origin).sub(zr));
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Gi),
      o = gn.dot(this.direction),
      l = -gn.dot(Gi),
      c = gn.lengthSq(),
      u = Math.abs(1 - a * a);
    let f, p, m, x;
    if (u > 0)
      if (((f = a * l - o), (p = a * o - l), (x = s * u), f >= 0))
        if (p >= -x)
          if (p <= x) {
            const S = 1 / u;
            ((f *= S),
              (p *= S),
              (m = f * (f + a * p + 2 * o) + p * (a * f + p + 2 * l) + c));
          } else
            ((p = s),
              (f = Math.max(0, -(a * p + o))),
              (m = -f * f + p * (p + 2 * l) + c));
        else
          ((p = -s),
            (f = Math.max(0, -(a * p + o))),
            (m = -f * f + p * (p + 2 * l) + c));
      else
        p <= -x
          ? ((f = Math.max(0, -(-a * s + o))),
            (p = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -f * f + p * (p + 2 * l) + c))
          : p <= x
            ? ((f = 0),
              (p = Math.min(Math.max(-s, -l), s)),
              (m = p * (p + 2 * l) + c))
            : ((f = Math.max(0, -(a * s + o))),
              (p = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
              (m = -f * f + p * (p + 2 * l) + c));
    else
      ((p = a > 0 ? -s : s),
        (f = Math.max(0, -(a * p + o))),
        (m = -f * f + p * (p + 2 * l) + c));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(zr).addScaledVector(Gi, p),
      m
    );
  }
  intersectSphere(e, t) {
    Qt.subVectors(e.center, this.origin);
    const n = Qt.dot(this.direction),
      r = Qt.dot(Qt) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      p = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - p.x) * c), (r = (e.max.x - p.x) * c))
        : ((n = (e.max.x - p.x) * c), (r = (e.min.x - p.x) * c)),
      u >= 0
        ? ((s = (e.min.y - p.y) * u), (a = (e.max.y - p.y) * u))
        : ((s = (e.max.y - p.y) * u), (a = (e.min.y - p.y) * u)),
      n > a ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (a < r || isNaN(r)) && (r = a),
      f >= 0
        ? ((o = (e.min.z - p.z) * f), (l = (e.max.z - p.z) * f))
        : ((o = (e.max.z - p.z) * f), (l = (e.min.z - p.z) * f)),
      n > l || o > r) ||
      ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Qt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    (Hr.subVectors(t, e), Vi.subVectors(n, e), Gr.crossVectors(Hr, Vi));
    let a = this.direction.dot(Gr),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) ((o = -1), (a = -a));
    else return null;
    gn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Vi.crossVectors(gn, Vi));
    if (l < 0) return null;
    const c = o * this.direction.dot(Hr.cross(gn));
    if (c < 0 || l + c > a) return null;
    const u = -o * gn.dot(Gr);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class it {
  constructor(e, t, n, r, s, a, o, l, c, u, f, p, m, x, S, d) {
    ((it.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, u, f, p, m, x, S, d));
  }
  set(e, t, n, r, s, a, o, l, c, u, f, p, m, x, S, d) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = n),
      (h[12] = r),
      (h[1] = s),
      (h[5] = a),
      (h[9] = o),
      (h[13] = l),
      (h[2] = c),
      (h[6] = u),
      (h[10] = f),
      (h[14] = p),
      (h[3] = m),
      (h[7] = x),
      (h[11] = S),
      (h[15] = d),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new it().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / qn.setFromMatrixColumn(e, 0).length(),
      s = 1 / qn.setFromMatrixColumn(e, 1).length(),
      a = 1 / qn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const p = a * u,
        m = a * f,
        x = o * u,
        S = o * f;
      ((t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = m + x * c),
        (t[5] = p - S * c),
        (t[9] = -o * l),
        (t[2] = S - p * c),
        (t[6] = x + m * c),
        (t[10] = a * l));
    } else if (e.order === "YXZ") {
      const p = l * u,
        m = l * f,
        x = c * u,
        S = c * f;
      ((t[0] = p + S * o),
        (t[4] = x * o - m),
        (t[8] = a * c),
        (t[1] = a * f),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = m * o - x),
        (t[6] = S + p * o),
        (t[10] = a * l));
    } else if (e.order === "ZXY") {
      const p = l * u,
        m = l * f,
        x = c * u,
        S = c * f;
      ((t[0] = p - S * o),
        (t[4] = -a * f),
        (t[8] = x + m * o),
        (t[1] = m + x * o),
        (t[5] = a * u),
        (t[9] = S - p * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l));
    } else if (e.order === "ZYX") {
      const p = a * u,
        m = a * f,
        x = o * u,
        S = o * f;
      ((t[0] = l * u),
        (t[4] = x * c - m),
        (t[8] = p * c + S),
        (t[1] = l * f),
        (t[5] = S * c + p),
        (t[9] = m * c - x),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l));
    } else if (e.order === "YZX") {
      const p = a * l,
        m = a * c,
        x = o * l,
        S = o * c;
      ((t[0] = l * u),
        (t[4] = S - p * f),
        (t[8] = x * f + m),
        (t[1] = f),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = m * f + x),
        (t[10] = p - S * f));
    } else if (e.order === "XZY") {
      const p = a * l,
        m = a * c,
        x = o * l,
        S = o * c;
      ((t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = p * f + S),
        (t[5] = a * u),
        (t[9] = m * f - x),
        (t[2] = x * f - m),
        (t[6] = o * u),
        (t[10] = S * f + p));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(cc, e, hc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Rt.subVectors(e, t),
      Rt.lengthSq() === 0 && (Rt.z = 1),
      Rt.normalize(),
      _n.crossVectors(n, Rt),
      _n.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Rt.x += 1e-4) : (Rt.z += 1e-4),
        Rt.normalize(),
        _n.crossVectors(n, Rt)),
      _n.normalize(),
      ki.crossVectors(Rt, _n),
      (r[0] = _n.x),
      (r[4] = ki.x),
      (r[8] = Rt.x),
      (r[1] = _n.y),
      (r[5] = ki.y),
      (r[9] = Rt.y),
      (r[2] = _n.z),
      (r[6] = ki.z),
      (r[10] = Rt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      f = n[5],
      p = n[9],
      m = n[13],
      x = n[2],
      S = n[6],
      d = n[10],
      h = n[14],
      T = n[3],
      E = n[7],
      A = n[11],
      O = n[15],
      P = r[0],
      b = r[4],
      F = r[8],
      te = r[12],
      g = r[1],
      M = r[5],
      V = r[9],
      z = r[13],
      q = r[2],
      K = r[6],
      G = r[10],
      $ = r[14],
      H = r[3],
      le = r[7],
      ce = r[11],
      _e = r[15];
    return (
      (s[0] = a * P + o * g + l * q + c * H),
      (s[4] = a * b + o * M + l * K + c * le),
      (s[8] = a * F + o * V + l * G + c * ce),
      (s[12] = a * te + o * z + l * $ + c * _e),
      (s[1] = u * P + f * g + p * q + m * H),
      (s[5] = u * b + f * M + p * K + m * le),
      (s[9] = u * F + f * V + p * G + m * ce),
      (s[13] = u * te + f * z + p * $ + m * _e),
      (s[2] = x * P + S * g + d * q + h * H),
      (s[6] = x * b + S * M + d * K + h * le),
      (s[10] = x * F + S * V + d * G + h * ce),
      (s[14] = x * te + S * z + d * $ + h * _e),
      (s[3] = T * P + E * g + A * q + O * H),
      (s[7] = T * b + E * M + A * K + O * le),
      (s[11] = T * F + E * V + A * G + O * ce),
      (s[15] = T * te + E * z + A * $ + O * _e),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      f = e[6],
      p = e[10],
      m = e[14],
      x = e[3],
      S = e[7],
      d = e[11],
      h = e[15];
    return (
      x *
        (+s * l * f -
          r * c * f -
          s * o * p +
          n * c * p +
          r * o * m -
          n * l * m) +
      S *
        (+t * l * m -
          t * c * p +
          s * a * p -
          r * a * m +
          r * c * u -
          s * l * u) +
      d *
        (+t * c * f -
          t * o * m -
          s * a * f +
          n * a * m +
          s * o * u -
          n * c * u) +
      h *
        (-r * o * u - t * l * f + t * o * p + r * a * f - n * a * p + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = e[9],
      p = e[10],
      m = e[11],
      x = e[12],
      S = e[13],
      d = e[14],
      h = e[15],
      T = f * d * c - S * p * c + S * l * m - o * d * m - f * l * h + o * p * h,
      E = x * p * c - u * d * c - x * l * m + a * d * m + u * l * h - a * p * h,
      A = u * S * c - x * f * c + x * o * m - a * S * m - u * o * h + a * f * h,
      O = x * f * l - u * S * l - x * o * p + a * S * p + u * o * d - a * f * d,
      P = t * T + n * E + r * A + s * O;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / P;
    return (
      (e[0] = T * b),
      (e[1] =
        (S * p * s -
          f * d * s -
          S * r * m +
          n * d * m +
          f * r * h -
          n * p * h) *
        b),
      (e[2] =
        (o * d * s -
          S * l * s +
          S * r * c -
          n * d * c -
          o * r * h +
          n * l * h) *
        b),
      (e[3] =
        (f * l * s -
          o * p * s -
          f * r * c +
          n * p * c +
          o * r * m -
          n * l * m) *
        b),
      (e[4] = E * b),
      (e[5] =
        (u * d * s -
          x * p * s +
          x * r * m -
          t * d * m -
          u * r * h +
          t * p * h) *
        b),
      (e[6] =
        (x * l * s -
          a * d * s -
          x * r * c +
          t * d * c +
          a * r * h -
          t * l * h) *
        b),
      (e[7] =
        (a * p * s -
          u * l * s +
          u * r * c -
          t * p * c -
          a * r * m +
          t * l * m) *
        b),
      (e[8] = A * b),
      (e[9] =
        (x * f * s -
          u * S * s -
          x * n * m +
          t * S * m +
          u * n * h -
          t * f * h) *
        b),
      (e[10] =
        (a * S * s -
          x * o * s +
          x * n * c -
          t * S * c -
          a * n * h +
          t * o * h) *
        b),
      (e[11] =
        (u * o * s -
          a * f * s -
          u * n * c +
          t * f * c +
          a * n * m -
          t * o * m) *
        b),
      (e[12] = O * b),
      (e[13] =
        (u * S * r -
          x * f * r +
          x * n * p -
          t * S * p -
          u * n * d +
          t * f * d) *
        b),
      (e[14] =
        (x * o * r -
          a * S * r -
          x * n * l +
          t * S * l +
          a * n * d -
          t * o * d) *
        b),
      (e[15] =
        (a * f * r -
          u * o * r +
          u * n * l -
          t * f * l -
          a * n * p +
          t * o * p) *
        b),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + n,
        c * o - r * l,
        c * l + r * o,
        0,
        c * o + r * l,
        u * o + n,
        u * l - r * a,
        0,
        c * l - r * o,
        u * l + r * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, n, r, s, a) {
    return (this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      u = a + a,
      f = o + o,
      p = s * c,
      m = s * u,
      x = s * f,
      S = a * u,
      d = a * f,
      h = o * f,
      T = l * c,
      E = l * u,
      A = l * f,
      O = n.x,
      P = n.y,
      b = n.z;
    return (
      (r[0] = (1 - (S + h)) * O),
      (r[1] = (m + A) * O),
      (r[2] = (x - E) * O),
      (r[3] = 0),
      (r[4] = (m - A) * P),
      (r[5] = (1 - (p + h)) * P),
      (r[6] = (d + T) * P),
      (r[7] = 0),
      (r[8] = (x + E) * b),
      (r[9] = (d - T) * b),
      (r[10] = (1 - (p + S)) * b),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = qn.set(r[0], r[1], r[2]).length();
    const a = qn.set(r[4], r[5], r[6]).length(),
      o = qn.set(r[8], r[9], r[10]).length();
    (this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      Ht.copy(this));
    const c = 1 / s,
      u = 1 / a,
      f = 1 / o;
    return (
      (Ht.elements[0] *= c),
      (Ht.elements[1] *= c),
      (Ht.elements[2] *= c),
      (Ht.elements[4] *= u),
      (Ht.elements[5] *= u),
      (Ht.elements[6] *= u),
      (Ht.elements[8] *= f),
      (Ht.elements[9] *= f),
      (Ht.elements[10] *= f),
      t.setFromRotationMatrix(Ht),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, r, s, a, o = ln) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - r),
      f = (t + e) / (t - e),
      p = (n + r) / (n - r);
    let m, x;
    if (o === ln) ((m = -(a + s) / (a - s)), (x = (-2 * a * s) / (a - s)));
    else if (o === mr) ((m = -a / (a - s)), (x = (-a * s) / (a - s)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = p),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = x),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, a, o = ln) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - r),
      f = 1 / (a - s),
      p = (t + e) * c,
      m = (n + r) * u;
    let x, S;
    if (o === ln) ((x = (a + s) * f), (S = -2 * f));
    else if (o === mr) ((x = s * f), (S = -1 * f));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -p),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = S),
      (l[14] = -x),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const qn = new N(),
  Ht = new it(),
  cc = new N(0, 0, 0),
  hc = new N(1, 1, 1),
  _n = new N(),
  ki = new N(),
  Rt = new N(),
  Da = new it(),
  La = new Pi();
class un {
  constructor(e = 0, t = 0, n = 0, r = un.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      f = r[2],
      p = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(yt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(p, c)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-yt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(yt(p, -1, 1))),
          Math.abs(p) < 0.9999999
            ? ((this._y = Math.atan2(-f, m)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-yt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(p, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c))));
        break;
      case "YZX":
        ((this._z = Math.asin(yt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, m))));
        break;
      case "XZY":
        ((this._z = Math.asin(-yt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(p, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      Da.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(Da, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (La.setFromEuler(this), this.setFromQuaternion(La, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
un.DEFAULT_ORDER = "XYZ";
class la {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let uc = 0;
const Ua = new N(),
  Yn = new Pi(),
  en = new it(),
  Wi = new N(),
  Ei = new N(),
  dc = new N(),
  fc = new Pi(),
  Ia = new N(1, 0, 0),
  Na = new N(0, 1, 0),
  Fa = new N(0, 0, 1),
  Oa = { type: "added" },
  pc = { type: "removed" },
  $n = { type: "childadded", child: null },
  Vr = { type: "childremoved", child: null };
class Ut extends gi {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: uc++ }),
      (this.uuid = Ci()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Ut.DEFAULT_UP.clone()));
    const e = new N(),
      t = new un(),
      n = new Pi(),
      r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    (t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new it() },
        normalMatrix: { value: new Le() },
      }),
      (this.matrix = new it()),
      (this.matrixWorld = new it()),
      (this.matrixAutoUpdate = Ut.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new la()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (Yn.setFromAxisAngle(e, t), this.quaternion.multiply(Yn), this);
  }
  rotateOnWorldAxis(e, t) {
    return (Yn.setFromAxisAngle(e, t), this.quaternion.premultiply(Yn), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(Ia, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Na, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Fa, e);
  }
  translateOnAxis(e, t) {
    return (
      Ua.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ua.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ia, e);
  }
  translateY(e) {
    return this.translateOnAxis(Na, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Fa, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(en.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Wi.copy(e) : Wi.set(e, t, n);
    const r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Ei.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? en.lookAt(Ei, Wi, this.up)
        : en.lookAt(Wi, Ei, this.up),
      this.quaternion.setFromRotationMatrix(en),
      r &&
        (en.extractRotation(r.matrixWorld),
        Yn.setFromRotationMatrix(en),
        this.quaternion.premultiply(Yn.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Oa),
            ($n.child = e),
            this.dispatchEvent($n),
            ($n.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(pc),
        (Vr.child = e),
        this.dispatchEvent(Vr),
        (Vr.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      en.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), en.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(en),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Oa),
      ($n.child = e),
      this.dispatchEvent($n),
      ($n.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ei, e, dc),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ei, fc, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    ((r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          })));
    function s(o, l) {
      return (o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        u = a(e.images),
        f = a(e.shapes),
        p = a(e.skeletons),
        m = a(e.animations),
        x = a(e.nodes);
      (o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        f.length > 0 && (n.shapes = f),
        p.length > 0 && (n.skeletons = p),
        m.length > 0 && (n.animations = m),
        x.length > 0 && (n.nodes = x));
    }
    return ((n.object = r), n);
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        (delete u.metadata, l.push(u));
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Ut.DEFAULT_UP = new N(0, 1, 0);
Ut.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Gt = new N(),
  tn = new N(),
  kr = new N(),
  nn = new N(),
  Kn = new N(),
  Zn = new N(),
  Ba = new N(),
  Wr = new N(),
  Xr = new N(),
  qr = new N(),
  Yr = new tt(),
  $r = new tt(),
  Kr = new tt();
class kt {
  constructor(e = new N(), t = new N(), n = new N()) {
    ((this.a = e), (this.b = t), (this.c = n));
  }
  static getNormal(e, t, n, r) {
    (r.subVectors(n, t), Gt.subVectors(e, t), r.cross(Gt));
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    (Gt.subVectors(r, t), tn.subVectors(n, t), kr.subVectors(e, t));
    const a = Gt.dot(Gt),
      o = Gt.dot(tn),
      l = Gt.dot(kr),
      c = tn.dot(tn),
      u = tn.dot(kr),
      f = a * c - o * o;
    if (f === 0) return (s.set(0, 0, 0), null);
    const p = 1 / f,
      m = (c * l - o * u) * p,
      x = (a * u - o * l) * p;
    return s.set(1 - m - x, x, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, nn) === null
      ? !1
      : nn.x >= 0 && nn.y >= 0 && nn.x + nn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, nn) === null
      ? ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, nn.x),
        l.addScaledVector(a, nn.y),
        l.addScaledVector(o, nn.z),
        l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return (
      Yr.setScalar(0),
      $r.setScalar(0),
      Kr.setScalar(0),
      Yr.fromBufferAttribute(e, t),
      $r.fromBufferAttribute(e, n),
      Kr.fromBufferAttribute(e, r),
      a.setScalar(0),
      a.addScaledVector(Yr, s.x),
      a.addScaledVector($r, s.y),
      a.addScaledVector(Kr, s.z),
      a
    );
  }
  static isFrontFacing(e, t, n, r) {
    return (Gt.subVectors(n, t), tn.subVectors(e, t), Gt.cross(tn).dot(r) < 0);
  }
  set(e, t, n) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
  }
  setFromPointsAndIndices(e, t, n, r) {
    return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      Gt.subVectors(this.c, this.b),
      tn.subVectors(this.a, this.b),
      Gt.cross(tn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return kt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    (Kn.subVectors(r, n), Zn.subVectors(s, n), Wr.subVectors(e, n));
    const l = Kn.dot(Wr),
      c = Zn.dot(Wr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Xr.subVectors(e, r);
    const u = Kn.dot(Xr),
      f = Zn.dot(Xr);
    if (u >= 0 && f <= u) return t.copy(r);
    const p = l * f - u * c;
    if (p <= 0 && l >= 0 && u <= 0)
      return ((a = l / (l - u)), t.copy(n).addScaledVector(Kn, a));
    qr.subVectors(e, s);
    const m = Kn.dot(qr),
      x = Zn.dot(qr);
    if (x >= 0 && m <= x) return t.copy(s);
    const S = m * c - l * x;
    if (S <= 0 && c >= 0 && x <= 0)
      return ((o = c / (c - x)), t.copy(n).addScaledVector(Zn, o));
    const d = u * x - m * f;
    if (d <= 0 && f - u >= 0 && m - x >= 0)
      return (
        Ba.subVectors(s, r),
        (o = (f - u) / (f - u + (m - x))),
        t.copy(r).addScaledVector(Ba, o)
      );
    const h = 1 / (d + S + p);
    return (
      (a = S * h),
      (o = p * h),
      t.copy(n).addScaledVector(Kn, a).addScaledVector(Zn, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Fo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  vn = { h: 0, s: 0, l: 0 },
  Xi = { h: 0, s: 0, l: 0 };
function Zr(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? i + (e - i) * 6 * (2 / 3 - t)
          : i
  );
}
class qe {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
          ? this.setHex(r)
          : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = Pt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Xe.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = Xe.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Xe.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = Xe.workingColorSpace) {
    if (((e = jl(e, 1)), (t = yt(t, 0, 1)), (n = yt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      ((this.r = Zr(a, s, e + 1 / 3)),
        (this.g = Zr(a, s, e)),
        (this.b = Zr(a, s, e - 1 / 3)));
    }
    return (Xe.toWorkingColorSpace(this, r), this);
  }
  setStyle(e, t = Pt) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t,
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Pt) {
    const n = Fo[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = si(e.r)), (this.g = si(e.g)), (this.b = si(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = Ir(e.r)), (this.g = Ir(e.g)), (this.b = Ir(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = Pt) {
    return (
      Xe.fromWorkingColorSpace(gt.copy(this), e),
      Math.round(yt(gt.r * 255, 0, 255)) * 65536 +
        Math.round(yt(gt.g * 255, 0, 255)) * 256 +
        Math.round(yt(gt.b * 255, 0, 255))
    );
  }
  getHexString(e = Pt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(gt.copy(this), t);
    const n = gt.r,
      r = gt.g,
      s = gt.b,
      a = Math.max(n, r, s),
      o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) ((l = 0), (c = 0));
    else {
      const f = a - o;
      switch (((c = u <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return ((e.h = l), (e.s = c), (e.l = u), e);
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return (
      Xe.fromWorkingColorSpace(gt.copy(this), t),
      (e.r = gt.r),
      (e.g = gt.g),
      (e.b = gt.b),
      e
    );
  }
  getStyle(e = Pt) {
    Xe.fromWorkingColorSpace(gt.copy(this), e);
    const t = gt.r,
      n = gt.g,
      r = gt.b;
    return e !== Pt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(vn), this.setHSL(vn.h + e, vn.s + t, vn.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(vn), e.getHSL(Xi));
    const n = Lr(vn.h, Xi.h, t),
      r = Lr(vn.s, Xi.s, t),
      s = Lr(vn.l, Xi.l, t);
    return (this.setHSL(n, r, s), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const gt = new qe();
qe.NAMES = Fo;
let mc = 0;
class Mr extends gi {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: mc++ }),
      (this.uuid = Ci()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = ii),
      (this.side = yn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = cs),
      (this.blendDst = hs),
      (this.blendEquation = In),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new qe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = hi),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Aa),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Gn),
      (this.stencilZFail = Gn),
      (this.stencilZPass = Gn),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
            ? r.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ii && (n.blending = this.blending),
      this.side !== yn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== cs && (n.blendSrc = this.blendSrc),
      this.blendDst !== hs && (n.blendDst = this.blendDst),
      this.blendEquation !== In && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== hi && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Aa && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Gn && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Gn && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Gn && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        (delete l.metadata, a.push(l));
      }
      return a;
    }
    if (t) {
      const s = r(e.textures),
        a = r(e.images);
      (s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class ca extends Mr {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new un()),
      (this.combine = Mo),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const st = new N(),
  qi = new Ue();
class $t {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = ba),
      (this.updateRanges = []),
      (this.gpuType = on),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.itemSize), (n *= t.itemSize));
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        (qi.fromBufferAttribute(this, t),
          qi.applyMatrix3(e),
          this.setXY(t, qi.x, qi.y));
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        (st.fromBufferAttribute(this, t),
          st.applyMatrix3(e),
          this.setXYZ(t, st.x, st.y, st.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (st.fromBufferAttribute(this, t),
        st.applyMatrix4(e),
        this.setXYZ(t, st.x, st.y, st.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (st.fromBufferAttribute(this, t),
        st.applyNormalMatrix(e),
        this.setXYZ(t, st.x, st.y, st.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (st.fromBufferAttribute(this, t),
        st.transformDirection(e),
        this.setXYZ(t, st.x, st.y, st.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return (this.normalized && (n = vi(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Et(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = vi(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = vi(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = vi(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = vi(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Et(t, this.array)), (n = Et(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Et(t, this.array)),
        (n = Et(n, this.array)),
        (r = Et(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Et(t, this.array)),
        (n = Et(n, this.array)),
        (r = Et(r, this.array)),
        (s = Et(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== ba && (e.usage = this.usage),
      e
    );
  }
}
class Oo extends $t {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Bo extends $t {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class On extends $t {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let gc = 0;
const Nt = new it(),
  jr = new Ut(),
  jn = new N(),
  Ct = new Di(),
  yi = new Di(),
  ht = new N();
class zn extends gi {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: gc++ }),
      (this.uuid = Ci()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Lo(e) ? Bo : Oo)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Le().getNormalMatrix(e);
      (n.applyNormalMatrix(s), (n.needsUpdate = !0));
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this);
  }
  rotateX(e) {
    return (Nt.makeRotationX(e), this.applyMatrix4(Nt), this);
  }
  rotateY(e) {
    return (Nt.makeRotationY(e), this.applyMatrix4(Nt), this);
  }
  rotateZ(e) {
    return (Nt.makeRotationZ(e), this.applyMatrix4(Nt), this);
  }
  translate(e, t, n) {
    return (Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this);
  }
  scale(e, t, n) {
    return (Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this);
  }
  lookAt(e) {
    return (
      jr.lookAt(e),
      jr.updateMatrix(),
      this.applyMatrix4(jr.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(jn).negate(),
      this.translate(jn.x, jn.y, jn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return (this.setAttribute("position", new On(t, 3)), this);
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Di());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new N(-1 / 0, -1 / 0, -1 / 0),
          new N(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          (Ct.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (ht.addVectors(this.boundingBox.min, Ct.min),
                this.boundingBox.expandByPoint(ht),
                ht.addVectors(this.boundingBox.max, Ct.max),
                this.boundingBox.expandByPoint(ht))
              : (this.boundingBox.expandByPoint(Ct.min),
                this.boundingBox.expandByPoint(Ct.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new oa());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new N(), 1 / 0));
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Ct.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          (yi.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (ht.addVectors(Ct.min, yi.min),
                Ct.expandByPoint(ht),
                ht.addVectors(Ct.max, yi.max),
                Ct.expandByPoint(ht))
              : (Ct.expandByPoint(yi.min), Ct.expandByPoint(yi.max)));
        }
      Ct.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        (ht.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(ht))));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            (ht.fromBufferAttribute(o, c),
              l && (jn.fromBufferAttribute(e, c), ht.add(jn)),
              (r = Math.max(r, n.distanceToSquared(ht))));
        }
      ((this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      s = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new $t(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      l = [];
    for (let F = 0; F < n.count; F++) ((o[F] = new N()), (l[F] = new N()));
    const c = new N(),
      u = new N(),
      f = new N(),
      p = new Ue(),
      m = new Ue(),
      x = new Ue(),
      S = new N(),
      d = new N();
    function h(F, te, g) {
      (c.fromBufferAttribute(n, F),
        u.fromBufferAttribute(n, te),
        f.fromBufferAttribute(n, g),
        p.fromBufferAttribute(s, F),
        m.fromBufferAttribute(s, te),
        x.fromBufferAttribute(s, g),
        u.sub(c),
        f.sub(c),
        m.sub(p),
        x.sub(p));
      const M = 1 / (m.x * x.y - x.x * m.y);
      !isFinite(M) ||
        (S.copy(u)
          .multiplyScalar(x.y)
          .addScaledVector(f, -m.y)
          .multiplyScalar(M),
        d
          .copy(f)
          .multiplyScalar(m.x)
          .addScaledVector(u, -x.x)
          .multiplyScalar(M),
        o[F].add(S),
        o[te].add(S),
        o[g].add(S),
        l[F].add(d),
        l[te].add(d),
        l[g].add(d));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let F = 0, te = T.length; F < te; ++F) {
      const g = T[F],
        M = g.start,
        V = g.count;
      for (let z = M, q = M + V; z < q; z += 3)
        h(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2));
    }
    const E = new N(),
      A = new N(),
      O = new N(),
      P = new N();
    function b(F) {
      (O.fromBufferAttribute(r, F), P.copy(O));
      const te = o[F];
      (E.copy(te),
        E.sub(O.multiplyScalar(O.dot(te))).normalize(),
        A.crossVectors(P, te));
      const M = A.dot(l[F]) < 0 ? -1 : 1;
      a.setXYZW(F, E.x, E.y, E.z, M);
    }
    for (let F = 0, te = T.length; F < te; ++F) {
      const g = T[F],
        M = g.start,
        V = g.count;
      for (let z = M, q = M + V; z < q; z += 3)
        (b(e.getX(z + 0)), b(e.getX(z + 1)), b(e.getX(z + 2)));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new $t(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let p = 0, m = n.count; p < m; p++) n.setXYZ(p, 0, 0, 0);
      const r = new N(),
        s = new N(),
        a = new N(),
        o = new N(),
        l = new N(),
        c = new N(),
        u = new N(),
        f = new N();
      if (e)
        for (let p = 0, m = e.count; p < m; p += 3) {
          const x = e.getX(p + 0),
            S = e.getX(p + 1),
            d = e.getX(p + 2);
          (r.fromBufferAttribute(t, x),
            s.fromBufferAttribute(t, S),
            a.fromBufferAttribute(t, d),
            u.subVectors(a, s),
            f.subVectors(r, s),
            u.cross(f),
            o.fromBufferAttribute(n, x),
            l.fromBufferAttribute(n, S),
            c.fromBufferAttribute(n, d),
            o.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(x, o.x, o.y, o.z),
            n.setXYZ(S, l.x, l.y, l.z),
            n.setXYZ(d, c.x, c.y, c.z));
        }
      else
        for (let p = 0, m = t.count; p < m; p += 3)
          (r.fromBufferAttribute(t, p + 0),
            s.fromBufferAttribute(t, p + 1),
            a.fromBufferAttribute(t, p + 2),
            u.subVectors(a, s),
            f.subVectors(r, s),
            u.cross(f),
            n.setXYZ(p + 0, u.x, u.y, u.z),
            n.setXYZ(p + 1, u.x, u.y, u.z),
            n.setXYZ(p + 2, u.x, u.y, u.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (ht.fromBufferAttribute(e, t),
        ht.normalize(),
        e.setXYZ(t, ht.x, ht.y, ht.z));
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        u = o.itemSize,
        f = o.normalized,
        p = new c.constructor(l.length * u);
      let m = 0,
        x = 0;
      for (let S = 0, d = l.length; S < d; S++) {
        o.isInterleavedBufferAttribute
          ? (m = l[S] * o.data.stride + o.offset)
          : (m = l[S] * u);
        for (let h = 0; h < u; h++) p[x++] = c[m++];
      }
      return new $t(p, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new zn(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const l = r[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, f = c.length; u < f; u++) {
        const p = c[u],
          m = e(p, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let f = 0, p = c.length; f < p; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        f = s[c];
      for (let p = 0, m = f.length; p < m; p++) u.push(f[p].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const za = new it(),
  Rn = new No(),
  Yi = new oa(),
  Ha = new N(),
  $i = new N(),
  Ki = new N(),
  Zi = new N(),
  Jr = new N(),
  ji = new N(),
  Ga = new N(),
  Ji = new N();
class Lt extends Ut {
  constructor(e = new zn(), t = new ca()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ji.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l],
          f = s[l];
        u !== 0 &&
          (Jr.fromBufferAttribute(f, e),
          a ? ji.addScaledVector(Jr, u) : ji.addScaledVector(Jr.sub(t), u));
      }
      t.add(ji);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Yi.copy(n.boundingSphere),
      Yi.applyMatrix4(s),
      Rn.copy(e.ray).recast(e.near),
      !(
        Yi.containsPoint(Rn.origin) === !1 &&
        (Rn.intersectSphere(Yi, Ha) === null ||
          Rn.origin.distanceToSquared(Ha) > (e.far - e.near) ** 2)
      ) &&
        (za.copy(s).invert(),
        Rn.copy(e.ray).applyMatrix4(za),
        !(n.boundingBox !== null && Rn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Rn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      f = s.attributes.normal,
      p = s.groups,
      m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let x = 0, S = p.length; x < S; x++) {
          const d = p[x],
            h = a[d.materialIndex],
            T = Math.max(d.start, m.start),
            E = Math.min(
              o.count,
              Math.min(d.start + d.count, m.start + m.count),
            );
          for (let A = T, O = E; A < O; A += 3) {
            const P = o.getX(A),
              b = o.getX(A + 1),
              F = o.getX(A + 2);
            ((r = Qi(this, h, e, n, c, u, f, P, b, F)),
              r &&
                ((r.faceIndex = Math.floor(A / 3)),
                (r.face.materialIndex = d.materialIndex),
                t.push(r)));
          }
        }
      else {
        const x = Math.max(0, m.start),
          S = Math.min(o.count, m.start + m.count);
        for (let d = x, h = S; d < h; d += 3) {
          const T = o.getX(d),
            E = o.getX(d + 1),
            A = o.getX(d + 2);
          ((r = Qi(this, a, e, n, c, u, f, T, E, A)),
            r && ((r.faceIndex = Math.floor(d / 3)), t.push(r)));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let x = 0, S = p.length; x < S; x++) {
          const d = p[x],
            h = a[d.materialIndex],
            T = Math.max(d.start, m.start),
            E = Math.min(
              l.count,
              Math.min(d.start + d.count, m.start + m.count),
            );
          for (let A = T, O = E; A < O; A += 3) {
            const P = A,
              b = A + 1,
              F = A + 2;
            ((r = Qi(this, h, e, n, c, u, f, P, b, F)),
              r &&
                ((r.faceIndex = Math.floor(A / 3)),
                (r.face.materialIndex = d.materialIndex),
                t.push(r)));
          }
        }
      else {
        const x = Math.max(0, m.start),
          S = Math.min(l.count, m.start + m.count);
        for (let d = x, h = S; d < h; d += 3) {
          const T = d,
            E = d + 1,
            A = d + 2;
          ((r = Qi(this, a, e, n, c, u, f, T, E, A)),
            r && ((r.faceIndex = Math.floor(d / 3)), t.push(r)));
        }
      }
  }
}
function _c(i, e, t, n, r, s, a, o) {
  let l;
  if (
    (e.side === Tt
      ? (l = n.intersectTriangle(a, s, r, !0, o))
      : (l = n.intersectTriangle(r, s, a, e.side === yn, o)),
    l === null)
  )
    return null;
  (Ji.copy(o), Ji.applyMatrix4(i.matrixWorld));
  const c = t.ray.origin.distanceTo(Ji);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Ji.clone(), object: i };
}
function Qi(i, e, t, n, r, s, a, o, l, c) {
  (i.getVertexPosition(o, $i),
    i.getVertexPosition(l, Ki),
    i.getVertexPosition(c, Zi));
  const u = _c(i, e, t, n, $i, Ki, Zi, Ga);
  if (u) {
    const f = new N();
    (kt.getBarycoord(Ga, $i, Ki, Zi, f),
      r && (u.uv = kt.getInterpolatedAttribute(r, o, l, c, f, new Ue())),
      s && (u.uv1 = kt.getInterpolatedAttribute(s, o, l, c, f, new Ue())),
      a &&
        ((u.normal = kt.getInterpolatedAttribute(a, o, l, c, f, new N())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1)));
    const p = { a: o, b: l, c, normal: new N(), materialIndex: 0 };
    (kt.getNormal($i, Ki, Zi, p.normal), (u.face = p), (u.barycoord = f));
  }
  return u;
}
class Li extends zn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      }));
    const o = this;
    ((r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a)));
    const l = [],
      c = [],
      u = [],
      f = [];
    let p = 0,
      m = 0;
    (x("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      x("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      x("x", "z", "y", 1, 1, e, n, t, r, a, 2),
      x("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
      x("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      x("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new On(c, 3)),
      this.setAttribute("normal", new On(u, 3)),
      this.setAttribute("uv", new On(f, 2)));
    function x(S, d, h, T, E, A, O, P, b, F, te) {
      const g = A / b,
        M = O / F,
        V = A / 2,
        z = O / 2,
        q = P / 2,
        K = b + 1,
        G = F + 1;
      let $ = 0,
        H = 0;
      const le = new N();
      for (let ce = 0; ce < G; ce++) {
        const _e = ce * M - z;
        for (let Ge = 0; Ge < K; Ge++) {
          const Ye = Ge * g - V;
          ((le[S] = Ye * T),
            (le[d] = _e * E),
            (le[h] = q),
            c.push(le.x, le.y, le.z),
            (le[S] = 0),
            (le[d] = 0),
            (le[h] = P > 0 ? 1 : -1),
            u.push(le.x, le.y, le.z),
            f.push(Ge / b),
            f.push(1 - ce / F),
            ($ += 1));
        }
      }
      for (let ce = 0; ce < F; ce++)
        for (let _e = 0; _e < b; _e++) {
          const Ge = p + _e + K * ce,
            Ye = p + _e + K * (ce + 1),
            k = p + (_e + 1) + K * (ce + 1),
            J = p + (_e + 1) + K * ce;
          (l.push(Ge, Ye, J), l.push(Ye, k, J), (H += 6));
        }
      (o.addGroup(m, H, te), (m += H), (p += $));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Li(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function mi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
          ? (e[t][n] = r.slice())
          : (e[t][n] = r);
    }
  }
  return e;
}
function vt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = mi(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function vc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function zo(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : Xe.workingColorSpace;
}
const xc = { clone: mi, merge: vt };
var Mc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Sc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ot extends Mr {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Mc),
      (this.fragmentShader = Sc),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = mi(e.uniforms)),
      (this.uniformsGroups = vc(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
          ? (t.uniforms[r] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (t.uniforms[r] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (t.uniforms[r] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (t.uniforms[r] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (t.uniforms[r] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (t.uniforms[r] = { type: "m4", value: a.toArray() })
                    : (t.uniforms[r] = { value: a });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return (Object.keys(n).length > 0 && (t.extensions = n), t);
  }
}
class Ho extends Ut {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new it()),
      (this.projectionMatrix = new it()),
      (this.projectionMatrixInverse = new it()),
      (this.coordinateSystem = ln));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const xn = new N(),
  Va = new Ue(),
  ka = new Ue();
class Ft extends Ho {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = $s * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(Dr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return $s * 2 * Math.atan(Math.tan(Dr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    (xn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(xn.x, xn.y).multiplyScalar(-e / xn.z),
      xn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(xn.x, xn.y).multiplyScalar(-e / xn.z));
  }
  getViewSize(e, t) {
    return (this.getViewBounds(e, Va, ka), t.subVectors(ka, Va));
  }
  setViewOffset(e, t, n, r, s, a) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Dr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      ((s += (a.offsetX * r) / l),
        (t -= (a.offsetY * n) / c),
        (r *= a.width / l),
        (n *= a.height / c));
    }
    const o = this.filmOffset;
    (o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Jn = -90,
  Qn = 1;
class Ec extends Ut {
  constructor(e, t, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const r = new Ft(Jn, Qn, e, t);
    ((r.layers = this.layers), this.add(r));
    const s = new Ft(Jn, Qn, e, t);
    ((s.layers = this.layers), this.add(s));
    const a = new Ft(Jn, Qn, e, t);
    ((a.layers = this.layers), this.add(a));
    const o = new Ft(Jn, Qn, e, t);
    ((o.layers = this.layers), this.add(o));
    const l = new Ft(Jn, Qn, e, t);
    ((l.layers = this.layers), this.add(l));
    const c = new Ft(Jn, Qn, e, t);
    ((c.layers = this.layers), this.add(c));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === ln)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1));
    else if (e === mr)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const c of t) (this.add(c), c.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children,
      f = e.getRenderTarget(),
      p = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      x = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, s),
      e.setRenderTarget(n, 1, r),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      e.render(t, l),
      e.setRenderTarget(n, 4, r),
      e.render(t, c),
      (n.texture.generateMipmaps = S),
      e.setRenderTarget(n, 5, r),
      e.render(t, u),
      e.setRenderTarget(f, p, m),
      (e.xr.enabled = x),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class Go extends pt {
  constructor(e, t, n, r, s, a, o, l, c, u) {
    ((e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : ui),
      super(e, t, n, r, s, a, o, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class yc extends qt {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    ((this.texture = new Go(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : dt));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Li(5, 5, 5),
      s = new Ot({
        name: "CubemapFromEquirect",
        uniforms: mi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Tt,
        blending: En,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Lt(r, s),
      o = t.minFilter;
    return (
      t.minFilter === Fn && (t.minFilter = dt),
      new Ec(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) (e.setRenderTarget(this, a), e.clear(t, n, r));
    e.setRenderTarget(s);
  }
}
const Qr = new N(),
  Tc = new N(),
  Ac = new Le();
class Ln {
  constructor(e = new N(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, r) {
    return (this.normal.set(e, t, n), (this.constant = r), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Qr.subVectors(n, t).cross(Tc.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(r, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Qr),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Ac.getNormalMatrix(e),
      r = this.coplanarPoint(Qr).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -r.dot(s)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cn = new oa(),
  er = new N();
class Vo {
  constructor(
    e = new Ln(),
    t = new Ln(),
    n = new Ln(),
    r = new Ln(),
    s = new Ln(),
    a = new Ln(),
  ) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = ln) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      a = r[1],
      o = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      f = r[6],
      p = r[7],
      m = r[8],
      x = r[9],
      S = r[10],
      d = r[11],
      h = r[12],
      T = r[13],
      E = r[14],
      A = r[15];
    if (
      (n[0].setComponents(l - s, p - c, d - m, A - h).normalize(),
      n[1].setComponents(l + s, p + c, d + m, A + h).normalize(),
      n[2].setComponents(l + a, p + u, d + x, A + T).normalize(),
      n[3].setComponents(l - a, p - u, d - x, A - T).normalize(),
      n[4].setComponents(l - o, p - f, d - S, A - E).normalize(),
      t === ln)
    )
      n[5].setComponents(l + o, p + f, d + S, A + E).normalize();
    else if (t === mr) n[5].setComponents(o, f, S, E).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere(Cn);
  }
  intersectsSprite(e) {
    return (
      Cn.center.set(0, 0, 0),
      (Cn.radius = 0.7071067811865476),
      Cn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Cn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((er.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (er.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (er.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(er) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ko() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, a) {
    (t(s, a), (n = i.requestAnimationFrame(r)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      (i.cancelAnimationFrame(n), (e = !1));
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function bc(i) {
  const e = new WeakMap();
  function t(o, l) {
    const c = o.array,
      u = o.usage,
      f = c.byteLength,
      p = i.createBuffer();
    (i.bindBuffer(l, p), i.bufferData(l, c, u), o.onUploadCallback());
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (m = i.HALF_FLOAT) : (m = i.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + c,
      );
    return {
      buffer: p,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f,
    };
  }
  function n(o, l, c) {
    const u = l.array,
      f = l.updateRanges;
    if ((i.bindBuffer(c, o), f.length === 0)) i.bufferSubData(c, 0, u);
    else {
      f.sort((m, x) => m.start - x.start);
      let p = 0;
      for (let m = 1; m < f.length; m++) {
        const x = f[p],
          S = f[m];
        S.start <= x.start + x.count + 1
          ? (x.count = Math.max(x.count, S.start + S.count - x.start))
          : (++p, (f[p] = S));
      }
      f.length = p + 1;
      for (let m = 0, x = f.length; m < x; m++) {
        const S = f[m];
        i.bufferSubData(c, S.start * u.BYTES_PER_ELEMENT, u, S.start, S.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return (o.isInterleavedBufferAttribute && (o = o.data), e.get(o));
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(c.buffer, o, l), (c.version = o.version));
    }
  }
  return { get: r, remove: s, update: a };
}
class Zt extends zn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      }));
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(r),
      c = o + 1,
      u = l + 1,
      f = e / o,
      p = t / l,
      m = [],
      x = [],
      S = [],
      d = [];
    for (let h = 0; h < u; h++) {
      const T = h * p - a;
      for (let E = 0; E < c; E++) {
        const A = E * f - s;
        (x.push(A, -T, 0), S.push(0, 0, 1), d.push(E / o), d.push(1 - h / l));
      }
    }
    for (let h = 0; h < l; h++)
      for (let T = 0; T < o; T++) {
        const E = T + c * h,
          A = T + c * (h + 1),
          O = T + 1 + c * (h + 1),
          P = T + 1 + c * h;
        (m.push(E, A, P), m.push(A, O, P));
      }
    (this.setIndex(m),
      this.setAttribute("position", new On(x, 3)),
      this.setAttribute("normal", new On(S, 3)),
      this.setAttribute("uv", new On(d, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Zt(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var wc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Rc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Cc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Pc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Dc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Lc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Uc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Ic = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Nc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  Fc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Oc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Bc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  zc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Hc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Gc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Vc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  kc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Wc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Xc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  qc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Yc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  $c = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  Kc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  Zc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  jc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Jc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Qc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  eh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  th = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  nh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  ih = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  rh = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  sh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  ah = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  oh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  lh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  ch = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  hh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  uh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  dh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  ph = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  mh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  gh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  _h = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  vh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  xh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Mh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Sh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Eh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  yh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Th = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Ah = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  bh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  wh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Rh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Ch = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Ph = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Dh = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Lh = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Uh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Ih = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Nh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Fh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Oh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Bh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  zh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Hh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Gh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Vh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  kh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Wh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Xh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  qh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Yh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  $h = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Kh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Zh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  jh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Jh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Qh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  eu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  tu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  nu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  iu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  ru = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  su = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  au = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  ou = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  lu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  cu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  hu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  uu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  du = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  fu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  pu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  mu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  gu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  _u = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  vu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  xu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Mu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Su = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Eu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  yu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Tu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Au = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  wu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Ru = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Cu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Pu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Du = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Lu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Uu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Iu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Nu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Fu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Ou = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Bu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  zu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Hu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Gu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Vu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ku = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Wu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Xu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  qu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Yu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  $u = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ku = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Zu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  ju = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ju = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Qu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ed = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  td = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  nd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  id = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  rd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  sd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  De = {
    alphahash_fragment: wc,
    alphahash_pars_fragment: Rc,
    alphamap_fragment: Cc,
    alphamap_pars_fragment: Pc,
    alphatest_fragment: Dc,
    alphatest_pars_fragment: Lc,
    aomap_fragment: Uc,
    aomap_pars_fragment: Ic,
    batching_pars_vertex: Nc,
    batching_vertex: Fc,
    begin_vertex: Oc,
    beginnormal_vertex: Bc,
    bsdfs: zc,
    iridescence_fragment: Hc,
    bumpmap_pars_fragment: Gc,
    clipping_planes_fragment: Vc,
    clipping_planes_pars_fragment: kc,
    clipping_planes_pars_vertex: Wc,
    clipping_planes_vertex: Xc,
    color_fragment: qc,
    color_pars_fragment: Yc,
    color_pars_vertex: $c,
    color_vertex: Kc,
    common: Zc,
    cube_uv_reflection_fragment: jc,
    defaultnormal_vertex: Jc,
    displacementmap_pars_vertex: Qc,
    displacementmap_vertex: eh,
    emissivemap_fragment: th,
    emissivemap_pars_fragment: nh,
    colorspace_fragment: ih,
    colorspace_pars_fragment: rh,
    envmap_fragment: sh,
    envmap_common_pars_fragment: ah,
    envmap_pars_fragment: oh,
    envmap_pars_vertex: lh,
    envmap_physical_pars_fragment: xh,
    envmap_vertex: ch,
    fog_vertex: hh,
    fog_pars_vertex: uh,
    fog_fragment: dh,
    fog_pars_fragment: fh,
    gradientmap_pars_fragment: ph,
    lightmap_pars_fragment: mh,
    lights_lambert_fragment: gh,
    lights_lambert_pars_fragment: _h,
    lights_pars_begin: vh,
    lights_toon_fragment: Mh,
    lights_toon_pars_fragment: Sh,
    lights_phong_fragment: Eh,
    lights_phong_pars_fragment: yh,
    lights_physical_fragment: Th,
    lights_physical_pars_fragment: Ah,
    lights_fragment_begin: bh,
    lights_fragment_maps: wh,
    lights_fragment_end: Rh,
    logdepthbuf_fragment: Ch,
    logdepthbuf_pars_fragment: Ph,
    logdepthbuf_pars_vertex: Dh,
    logdepthbuf_vertex: Lh,
    map_fragment: Uh,
    map_pars_fragment: Ih,
    map_particle_fragment: Nh,
    map_particle_pars_fragment: Fh,
    metalnessmap_fragment: Oh,
    metalnessmap_pars_fragment: Bh,
    morphinstance_vertex: zh,
    morphcolor_vertex: Hh,
    morphnormal_vertex: Gh,
    morphtarget_pars_vertex: Vh,
    morphtarget_vertex: kh,
    normal_fragment_begin: Wh,
    normal_fragment_maps: Xh,
    normal_pars_fragment: qh,
    normal_pars_vertex: Yh,
    normal_vertex: $h,
    normalmap_pars_fragment: Kh,
    clearcoat_normal_fragment_begin: Zh,
    clearcoat_normal_fragment_maps: jh,
    clearcoat_pars_fragment: Jh,
    iridescence_pars_fragment: Qh,
    opaque_fragment: eu,
    packing: tu,
    premultiplied_alpha_fragment: nu,
    project_vertex: iu,
    dithering_fragment: ru,
    dithering_pars_fragment: su,
    roughnessmap_fragment: au,
    roughnessmap_pars_fragment: ou,
    shadowmap_pars_fragment: lu,
    shadowmap_pars_vertex: cu,
    shadowmap_vertex: hu,
    shadowmask_pars_fragment: uu,
    skinbase_vertex: du,
    skinning_pars_vertex: fu,
    skinning_vertex: pu,
    skinnormal_vertex: mu,
    specularmap_fragment: gu,
    specularmap_pars_fragment: _u,
    tonemapping_fragment: vu,
    tonemapping_pars_fragment: xu,
    transmission_fragment: Mu,
    transmission_pars_fragment: Su,
    uv_pars_fragment: Eu,
    uv_pars_vertex: yu,
    uv_vertex: Tu,
    worldpos_vertex: Au,
    background_vert: bu,
    background_frag: wu,
    backgroundCube_vert: Ru,
    backgroundCube_frag: Cu,
    cube_vert: Pu,
    cube_frag: Du,
    depth_vert: Lu,
    depth_frag: Uu,
    distanceRGBA_vert: Iu,
    distanceRGBA_frag: Nu,
    equirect_vert: Fu,
    equirect_frag: Ou,
    linedashed_vert: Bu,
    linedashed_frag: zu,
    meshbasic_vert: Hu,
    meshbasic_frag: Gu,
    meshlambert_vert: Vu,
    meshlambert_frag: ku,
    meshmatcap_vert: Wu,
    meshmatcap_frag: Xu,
    meshnormal_vert: qu,
    meshnormal_frag: Yu,
    meshphong_vert: $u,
    meshphong_frag: Ku,
    meshphysical_vert: Zu,
    meshphysical_frag: ju,
    meshtoon_vert: Ju,
    meshtoon_frag: Qu,
    points_vert: ed,
    points_frag: td,
    shadow_vert: nd,
    shadow_frag: id,
    sprite_vert: rd,
    sprite_frag: sd,
  },
  ne = {
    common: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Le() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Le() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Le() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Le() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Le() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Le() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Le() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Le() },
      normalScale: { value: new Ue(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Le() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Le() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Le() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Le() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new qe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Le() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Le() },
    },
    sprite: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      center: { value: new Ue(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Le() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Le() },
      alphaTest: { value: 0 },
    },
  },
  Yt = {
    basic: {
      uniforms: vt([
        ne.common,
        ne.specularmap,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.fog,
      ]),
      vertexShader: De.meshbasic_vert,
      fragmentShader: De.meshbasic_frag,
    },
    lambert: {
      uniforms: vt([
        ne.common,
        ne.specularmap,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.fog,
        ne.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: De.meshlambert_vert,
      fragmentShader: De.meshlambert_frag,
    },
    phong: {
      uniforms: vt([
        ne.common,
        ne.specularmap,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.fog,
        ne.lights,
        {
          emissive: { value: new qe(0) },
          specular: { value: new qe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: De.meshphong_vert,
      fragmentShader: De.meshphong_frag,
    },
    standard: {
      uniforms: vt([
        ne.common,
        ne.envmap,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.roughnessmap,
        ne.metalnessmap,
        ne.fog,
        ne.lights,
        {
          emissive: { value: new qe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: De.meshphysical_vert,
      fragmentShader: De.meshphysical_frag,
    },
    toon: {
      uniforms: vt([
        ne.common,
        ne.aomap,
        ne.lightmap,
        ne.emissivemap,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.gradientmap,
        ne.fog,
        ne.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: De.meshtoon_vert,
      fragmentShader: De.meshtoon_frag,
    },
    matcap: {
      uniforms: vt([
        ne.common,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        ne.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: De.meshmatcap_vert,
      fragmentShader: De.meshmatcap_frag,
    },
    points: {
      uniforms: vt([ne.points, ne.fog]),
      vertexShader: De.points_vert,
      fragmentShader: De.points_frag,
    },
    dashed: {
      uniforms: vt([
        ne.common,
        ne.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: De.linedashed_vert,
      fragmentShader: De.linedashed_frag,
    },
    depth: {
      uniforms: vt([ne.common, ne.displacementmap]),
      vertexShader: De.depth_vert,
      fragmentShader: De.depth_frag,
    },
    normal: {
      uniforms: vt([
        ne.common,
        ne.bumpmap,
        ne.normalmap,
        ne.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: De.meshnormal_vert,
      fragmentShader: De.meshnormal_frag,
    },
    sprite: {
      uniforms: vt([ne.sprite, ne.fog]),
      vertexShader: De.sprite_vert,
      fragmentShader: De.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Le() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: De.background_vert,
      fragmentShader: De.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Le() },
      },
      vertexShader: De.backgroundCube_vert,
      fragmentShader: De.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: De.cube_vert,
      fragmentShader: De.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: De.equirect_vert,
      fragmentShader: De.equirect_frag,
    },
    distanceRGBA: {
      uniforms: vt([
        ne.common,
        ne.displacementmap,
        {
          referencePosition: { value: new N() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: De.distanceRGBA_vert,
      fragmentShader: De.distanceRGBA_frag,
    },
    shadow: {
      uniforms: vt([
        ne.lights,
        ne.fog,
        { color: { value: new qe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: De.shadow_vert,
      fragmentShader: De.shadow_frag,
    },
  };
Yt.physical = {
  uniforms: vt([
    Yt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Le() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Le() },
      clearcoatNormalScale: { value: new Ue(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Le() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Le() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Le() },
      sheen: { value: 0 },
      sheenColor: { value: new qe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Le() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Le() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Le() },
      transmissionSamplerSize: { value: new Ue() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Le() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new qe(0) },
      specularColor: { value: new qe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Le() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Le() },
      anisotropyVector: { value: new Ue() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Le() },
    },
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag,
};
const tr = { r: 0, b: 0, g: 0 },
  Pn = new un(),
  ad = new it();
function od(i, e, t, n, r, s, a) {
  const o = new qe(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    p = 0,
    m = null;
  function x(T) {
    let E = T.isScene === !0 ? T.background : null;
    return (
      E && E.isTexture && (E = (T.backgroundBlurriness > 0 ? t : e).get(E)),
      E
    );
  }
  function S(T) {
    let E = !1;
    const A = x(T);
    A === null ? h(o, l) : A && A.isColor && (h(A, 1), (E = !0));
    const O = i.xr.getEnvironmentBlendMode();
    (O === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : O === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || E) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)));
  }
  function d(T, E) {
    const A = x(E);
    A && (A.isCubeTexture || A.mapping === vr)
      ? (u === void 0 &&
          ((u = new Lt(
            new Li(1, 1, 1),
            new Ot({
              name: "BackgroundCubeMaterial",
              uniforms: mi(Yt.backgroundCube.uniforms),
              vertexShader: Yt.backgroundCube.vertexShader,
              fragmentShader: Yt.backgroundCube.fragmentShader,
              side: Tt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (O, P, b) {
            this.matrixWorld.copyPosition(b.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(u)),
        Pn.copy(E.backgroundRotation),
        (Pn.x *= -1),
        (Pn.y *= -1),
        (Pn.z *= -1),
        A.isCubeTexture &&
          A.isRenderTargetTexture === !1 &&
          ((Pn.y *= -1), (Pn.z *= -1)),
        (u.material.uniforms.envMap.value = A),
        (u.material.uniforms.flipEnvMap.value =
          A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          E.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          ad.makeRotationFromEuler(Pn),
        ),
        (u.material.toneMapped = Xe.getTransfer(A.colorSpace) !== Qe),
        (f !== A || p !== A.version || m !== i.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (f = A),
          (p = A.version),
          (m = i.toneMapping)),
        u.layers.enableAll(),
        T.unshift(u, u.geometry, u.material, 0, 0, null))
      : A &&
        A.isTexture &&
        (c === void 0 &&
          ((c = new Lt(
            new Zt(2, 2),
            new Ot({
              name: "BackgroundMaterial",
              uniforms: mi(Yt.background.uniforms),
              vertexShader: Yt.background.vertexShader,
              fragmentShader: Yt.background.fragmentShader,
              side: yn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = A),
        (c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity),
        (c.material.toneMapped = Xe.getTransfer(A.colorSpace) !== Qe),
        A.matrixAutoUpdate === !0 && A.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(A.matrix),
        (f !== A || p !== A.version || m !== i.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (f = A),
          (p = A.version),
          (m = i.toneMapping)),
        c.layers.enableAll(),
        T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(T, E) {
    (T.getRGB(tr, zo(i)), n.buffers.color.setClear(tr.r, tr.g, tr.b, E, a));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (T, E = 1) {
      (o.set(T), (l = E), h(o, l));
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (T) {
      ((l = T), h(o, l));
    },
    render: S,
    addToRenderList: d,
  };
}
function ld(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = p(null);
  let s = r,
    a = !1;
  function o(g, M, V, z, q) {
    let K = !1;
    const G = f(z, V, M);
    (s !== G && ((s = G), c(s.object)),
      (K = m(g, z, V, q)),
      K && x(g, z, V, q),
      q !== null && e.update(q, i.ELEMENT_ARRAY_BUFFER),
      (K || a) &&
        ((a = !1),
        A(g, M, V, z),
        q !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(q).buffer)));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function u(g) {
    return i.deleteVertexArray(g);
  }
  function f(g, M, V) {
    const z = V.wireframe === !0;
    let q = n[g.id];
    q === void 0 && ((q = {}), (n[g.id] = q));
    let K = q[M.id];
    K === void 0 && ((K = {}), (q[M.id] = K));
    let G = K[z];
    return (G === void 0 && ((G = p(l())), (K[z] = G)), G);
  }
  function p(g) {
    const M = [],
      V = [],
      z = [];
    for (let q = 0; q < t; q++) ((M[q] = 0), (V[q] = 0), (z[q] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: M,
      enabledAttributes: V,
      attributeDivisors: z,
      object: g,
      attributes: {},
      index: null,
    };
  }
  function m(g, M, V, z) {
    const q = s.attributes,
      K = M.attributes;
    let G = 0;
    const $ = V.getAttributes();
    for (const H in $)
      if ($[H].location >= 0) {
        const ce = q[H];
        let _e = K[H];
        if (
          (_e === void 0 &&
            (H === "instanceMatrix" &&
              g.instanceMatrix &&
              (_e = g.instanceMatrix),
            H === "instanceColor" && g.instanceColor && (_e = g.instanceColor)),
          ce === void 0 || ce.attribute !== _e || (_e && ce.data !== _e.data))
        )
          return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== z;
  }
  function x(g, M, V, z) {
    const q = {},
      K = M.attributes;
    let G = 0;
    const $ = V.getAttributes();
    for (const H in $)
      if ($[H].location >= 0) {
        let ce = K[H];
        ce === void 0 &&
          (H === "instanceMatrix" &&
            g.instanceMatrix &&
            (ce = g.instanceMatrix),
          H === "instanceColor" && g.instanceColor && (ce = g.instanceColor));
        const _e = {};
        ((_e.attribute = ce),
          ce && ce.data && (_e.data = ce.data),
          (q[H] = _e),
          G++);
      }
    ((s.attributes = q), (s.attributesNum = G), (s.index = z));
  }
  function S() {
    const g = s.newAttributes;
    for (let M = 0, V = g.length; M < V; M++) g[M] = 0;
  }
  function d(g) {
    h(g, 0);
  }
  function h(g, M) {
    const V = s.newAttributes,
      z = s.enabledAttributes,
      q = s.attributeDivisors;
    ((V[g] = 1),
      z[g] === 0 && (i.enableVertexAttribArray(g), (z[g] = 1)),
      q[g] !== M && (i.vertexAttribDivisor(g, M), (q[g] = M)));
  }
  function T() {
    const g = s.newAttributes,
      M = s.enabledAttributes;
    for (let V = 0, z = M.length; V < z; V++)
      M[V] !== g[V] && (i.disableVertexAttribArray(V), (M[V] = 0));
  }
  function E(g, M, V, z, q, K, G) {
    G === !0
      ? i.vertexAttribIPointer(g, M, V, q, K)
      : i.vertexAttribPointer(g, M, V, z, q, K);
  }
  function A(g, M, V, z) {
    S();
    const q = z.attributes,
      K = V.getAttributes(),
      G = M.defaultAttributeValues;
    for (const $ in K) {
      const H = K[$];
      if (H.location >= 0) {
        let le = q[$];
        if (
          (le === void 0 &&
            ($ === "instanceMatrix" &&
              g.instanceMatrix &&
              (le = g.instanceMatrix),
            $ === "instanceColor" && g.instanceColor && (le = g.instanceColor)),
          le !== void 0)
        ) {
          const ce = le.normalized,
            _e = le.itemSize,
            Ge = e.get(le);
          if (Ge === void 0) continue;
          const Ye = Ge.buffer,
            k = Ge.type,
            J = Ge.bytesPerElement,
            me = k === i.INT || k === i.UNSIGNED_INT || le.gpuType === Qs;
          if (le.isInterleavedBufferAttribute) {
            const he = le.data,
              Ce = he.stride,
              ye = le.offset;
            if (he.isInstancedInterleavedBuffer) {
              for (let Fe = 0; Fe < H.locationSize; Fe++)
                h(H.location + Fe, he.meshPerAttribute);
              g.isInstancedMesh !== !0 &&
                z._maxInstanceCount === void 0 &&
                (z._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let Fe = 0; Fe < H.locationSize; Fe++) d(H.location + Fe);
            i.bindBuffer(i.ARRAY_BUFFER, Ye);
            for (let Fe = 0; Fe < H.locationSize; Fe++)
              E(
                H.location + Fe,
                _e / H.locationSize,
                k,
                ce,
                Ce * J,
                (ye + (_e / H.locationSize) * Fe) * J,
                me,
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let he = 0; he < H.locationSize; he++)
                h(H.location + he, le.meshPerAttribute);
              g.isInstancedMesh !== !0 &&
                z._maxInstanceCount === void 0 &&
                (z._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let he = 0; he < H.locationSize; he++) d(H.location + he);
            i.bindBuffer(i.ARRAY_BUFFER, Ye);
            for (let he = 0; he < H.locationSize; he++)
              E(
                H.location + he,
                _e / H.locationSize,
                k,
                ce,
                _e * J,
                (_e / H.locationSize) * he * J,
                me,
              );
          }
        } else if (G !== void 0) {
          const ce = G[$];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                i.vertexAttrib2fv(H.location, ce);
                break;
              case 3:
                i.vertexAttrib3fv(H.location, ce);
                break;
              case 4:
                i.vertexAttrib4fv(H.location, ce);
                break;
              default:
                i.vertexAttrib1fv(H.location, ce);
            }
        }
      }
    }
    T();
  }
  function O() {
    F();
    for (const g in n) {
      const M = n[g];
      for (const V in M) {
        const z = M[V];
        for (const q in z) (u(z[q].object), delete z[q]);
        delete M[V];
      }
      delete n[g];
    }
  }
  function P(g) {
    if (n[g.id] === void 0) return;
    const M = n[g.id];
    for (const V in M) {
      const z = M[V];
      for (const q in z) (u(z[q].object), delete z[q]);
      delete M[V];
    }
    delete n[g.id];
  }
  function b(g) {
    for (const M in n) {
      const V = n[M];
      if (V[g.id] === void 0) continue;
      const z = V[g.id];
      for (const q in z) (u(z[q].object), delete z[q]);
      delete V[g.id];
    }
  }
  function F() {
    (te(), (a = !0), s !== r && ((s = r), c(s.object)));
  }
  function te() {
    ((r.geometry = null), (r.program = null), (r.wireframe = !1));
  }
  return {
    setup: o,
    reset: F,
    resetDefaultState: te,
    dispose: O,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: b,
    initAttributes: S,
    enableAttribute: d,
    disableUnusedAttributes: T,
  };
}
function cd(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    (i.drawArrays(n, c, u), t.update(u, n, 1));
  }
  function a(c, u, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, u, f), t.update(u, n, f));
  }
  function o(c, u, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, f);
    let m = 0;
    for (let x = 0; x < f; x++) m += u[x];
    t.update(m, n, 1);
  }
  function l(c, u, f, p) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let x = 0; x < c.length; x++) a(c[x], u[x], p[x]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, p, 0, f);
      let x = 0;
      for (let S = 0; S < f; S++) x += u[S];
      for (let S = 0; S < p.length; S++) t.update(x, n, p[S]);
    }
  }
  ((this.setMode = r),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = l));
}
function hd(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(b) {
    return !(
      b !== ft &&
      n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(b) {
    const F =
      b === Tn &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      b !== hn &&
      n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      b !== on &&
      !F
    );
  }
  function l(b) {
    if (b === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      b = "mediump";
    }
    return b === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c &&
    (console.warn(
      "THREE.WebGLRenderer:",
      c,
      "not supported, using",
      u,
      "instead.",
    ),
    (c = u));
  const f = t.logarithmicDepthBuffer === !0,
    p = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (p === !0) {
    const b = e.get("EXT_clip_control");
    b.clipControlEXT(b.LOWER_LEFT_EXT, b.ZERO_TO_ONE_EXT);
  }
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    x = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    S = i.getParameter(i.MAX_TEXTURE_SIZE),
    d = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    h = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    E = i.getParameter(i.MAX_VARYING_VECTORS),
    A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    O = x > 0,
    P = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: p,
    maxTextures: m,
    maxVertexTextures: x,
    maxTextureSize: S,
    maxCubemapSize: d,
    maxAttributes: h,
    maxVertexUniforms: T,
    maxVaryings: E,
    maxFragmentUniforms: A,
    vertexTextures: O,
    maxSamples: P,
  };
}
function ud(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new Ln(),
    o = new Le(),
    l = { value: null, needsUpdate: !1 };
  ((this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, p) {
      const m = f.length !== 0 || p || n !== 0 || r;
      return ((r = p), (n = f.length), m);
    }),
    (this.beginShadows = function () {
      ((s = !0), u(null));
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, p) {
      t = u(f, p, 0);
    }),
    (this.setState = function (f, p, m) {
      const x = f.clippingPlanes,
        S = f.clipIntersection,
        d = f.clipShadows,
        h = i.get(f);
      if (!r || x === null || x.length === 0 || (s && !d)) s ? u(null) : c();
      else {
        const T = s ? 0 : n,
          E = T * 4;
        let A = h.clippingState || null;
        ((l.value = A), (A = u(x, p, E, m)));
        for (let O = 0; O !== E; ++O) A[O] = t[O];
        ((h.clippingState = A),
          (this.numIntersection = S ? this.numPlanes : 0),
          (this.numPlanes += T));
      }
    }));
  function c() {
    (l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0));
  }
  function u(f, p, m, x) {
    const S = f !== null ? f.length : 0;
    let d = null;
    if (S !== 0) {
      if (((d = l.value), x !== !0 || d === null)) {
        const h = m + S * 4,
          T = p.matrixWorldInverse;
        (o.getNormalMatrix(T),
          (d === null || d.length < h) && (d = new Float32Array(h)));
        for (let E = 0, A = m; E !== S; ++E, A += 4)
          (a.copy(f[E]).applyMatrix4(T, o),
            a.normal.toArray(d, A),
            (d[A + 3] = a.constant));
      }
      ((l.value = d), (l.needsUpdate = !0));
    }
    return ((e.numPlanes = S), (e.numIntersection = 0), d);
  }
}
function dd(i) {
  let e = new WeakMap();
  function t(a, o) {
    return (o === vs ? (a.mapping = ui) : o === xs && (a.mapping = di), a);
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === vs || o === xs)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new yc(l.height);
            return (
              c.fromEquirectangularTexture(i, a),
              e.set(a, c),
              a.addEventListener("dispose", r),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class Wo extends Ho {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const ni = 4,
  Wa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Nn = 20,
  es = new Wo(),
  Xa = new qe();
let ts = null,
  ns = 0,
  is = 0,
  rs = !1;
const Un = (1 + Math.sqrt(5)) / 2,
  ei = 1 / Un,
  qa = [
    new N(-Un, ei, 0),
    new N(Un, ei, 0),
    new N(-ei, 0, Un),
    new N(ei, 0, Un),
    new N(0, Un, -ei),
    new N(0, Un, ei),
    new N(-1, 1, -1),
    new N(1, 1, -1),
    new N(-1, 1, 1),
    new N(1, 1, 1),
  ];
class Ya {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial));
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    ((ts = this._renderer.getRenderTarget()),
      (ns = this._renderer.getActiveCubeFace()),
      (is = this._renderer.getActiveMipmapLevel()),
      (rs = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256));
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Za()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Ka()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose());
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(ts, ns, is),
      (this._renderer.xr.enabled = rs),
      (e.scissorTest = !1),
      nr(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === ui || e.mapping === di
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (ts = this._renderer.getRenderTarget()),
      (ns = this._renderer.getActiveCubeFace()),
      (is = this._renderer.getActiveMipmapLevel()),
      (rs = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: dt,
        minFilter: dt,
        generateMipmaps: !1,
        type: Tn,
        format: ft,
        colorSpace: Xt,
        depthBuffer: !1,
      },
      r = $a(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = $a(e, t, n)));
      const { _lodMax: s } = this;
      (({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = fd(s)),
        (this._blurMaterial = pd(s, e, t)));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Lt(this._lodPlanes[0], e);
    this._renderer.compile(t, es);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Ft(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      p = u.toneMapping;
    (u.getClearColor(Xa), (u.toneMapping = cn), (u.autoClear = !1));
    const m = new ca({
        name: "PMREM.Background",
        side: Tt,
        depthWrite: !1,
        depthTest: !1,
      }),
      x = new Lt(new Li(), m);
    let S = !1;
    const d = e.background;
    d
      ? d.isColor && (m.color.copy(d), (e.background = null), (S = !0))
      : (m.color.copy(Xa), (S = !0));
    for (let h = 0; h < 6; h++) {
      const T = h % 3;
      T === 0
        ? (o.up.set(0, l[h], 0), o.lookAt(c[h], 0, 0))
        : T === 1
          ? (o.up.set(0, 0, l[h]), o.lookAt(0, c[h], 0))
          : (o.up.set(0, l[h], 0), o.lookAt(0, 0, c[h]));
      const E = this._cubeSize;
      (nr(r, T * E, h > 2 ? E : 0, E, E),
        u.setRenderTarget(r),
        S && u.render(x, o),
        u.render(e, o));
    }
    (x.geometry.dispose(),
      x.material.dispose(),
      (u.toneMapping = p),
      (u.autoClear = f),
      (e.background = d));
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === ui || e.mapping === di;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Za()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Ka());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new Lt(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    (nr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, es));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1],
        ),
        o = qa[(r - s - 1) % qa.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    (this._halfBlur(e, a, t, n, r, "latitudinal", s),
      this._halfBlur(a, e, n, n, r, "longitudinal", s));
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const u = 3,
      f = new Lt(this._lodPlanes[r], c),
      p = c.uniforms,
      m = this._sizeLods[n] - 1,
      x = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Nn - 1),
      S = s / x,
      d = isFinite(s) ? 1 + Math.floor(u * S) : Nn;
    d > Nn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Nn}`,
      );
    const h = [];
    let T = 0;
    for (let b = 0; b < Nn; ++b) {
      const F = b / S,
        te = Math.exp((-F * F) / 2);
      (h.push(te), b === 0 ? (T += te) : b < d && (T += 2 * te));
    }
    for (let b = 0; b < h.length; b++) h[b] = h[b] / T;
    ((p.envMap.value = e.texture),
      (p.samples.value = d),
      (p.weights.value = h),
      (p.latitudinal.value = a === "latitudinal"),
      o && (p.poleAxis.value = o));
    const { _lodMax: E } = this;
    ((p.dTheta.value = x), (p.mipInt.value = E - n));
    const A = this._sizeLods[r],
      O = 3 * A * (r > E - ni ? r - E + ni : 0),
      P = 4 * (this._cubeSize - A);
    (nr(t, O, P, 3 * A, 2 * A), l.setRenderTarget(t), l.render(f, es));
  }
}
function fd(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - ni + 1 + Wa.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    (a > i - ni ? (l = Wa[a - i + ni - 1]) : a === 0 && (l = 0), n.push(l));
    const c = 1 / (o - 2),
      u = -c,
      f = 1 + c,
      p = [u, u, f, u, f, f, u, u, f, f, u, f],
      m = 6,
      x = 6,
      S = 3,
      d = 2,
      h = 1,
      T = new Float32Array(S * x * m),
      E = new Float32Array(d * x * m),
      A = new Float32Array(h * x * m);
    for (let P = 0; P < m; P++) {
      const b = ((P % 3) * 2) / 3 - 1,
        F = P > 2 ? 0 : -1,
        te = [
          b,
          F,
          0,
          b + 2 / 3,
          F,
          0,
          b + 2 / 3,
          F + 1,
          0,
          b,
          F,
          0,
          b + 2 / 3,
          F + 1,
          0,
          b,
          F + 1,
          0,
        ];
      (T.set(te, S * x * P), E.set(p, d * x * P));
      const g = [P, P, P, P, P, P];
      A.set(g, h * x * P);
    }
    const O = new zn();
    (O.setAttribute("position", new $t(T, S)),
      O.setAttribute("uv", new $t(E, d)),
      O.setAttribute("faceIndex", new $t(A, h)),
      e.push(O),
      r > ni && r--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function $a(i, e, t) {
  const n = new qt(i, e, t);
  return (
    (n.texture.mapping = vr),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function nr(i, e, t, n, r) {
  (i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r));
}
function pd(i, e, t) {
  const n = new Float32Array(Nn),
    r = new N(0, 1, 0);
  return new Ot({
    name: "SphericalGaussianBlur",
    defines: {
      n: Nn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: ha(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ka() {
  return new Ot({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: ha(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Za() {
  return new Ot({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: ha(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ha() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function md(i) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === vs || l === xs,
        u = l === ui || l === di;
      if (c || u) {
        let f = e.get(o);
        const p = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== p)
          return (
            t === null && (t = new Ya(i)),
            (f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f)),
            (f.texture.pmremVersion = o.pmremVersion),
            e.set(o, f),
            f.texture
          );
        if (f !== void 0) return f.texture;
        {
          const m = o.image;
          return (c && m && m.height > 0) || (u && m && r(m))
            ? (t === null && (t = new Ya(i)),
              (f = c ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (f.texture.pmremVersion = o.pmremVersion),
              e.set(o, f),
              o.addEventListener("dispose", s),
              f.texture)
            : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: n, dispose: a };
}
function gd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return ((e[n] = r), r);
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      (t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          hr("THREE.WebGLRenderer: " + n + " extension not supported."),
        r
      );
    },
  };
}
function _d(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function a(f) {
    const p = f.target;
    p.index !== null && e.remove(p.index);
    for (const x in p.attributes) e.remove(p.attributes[x]);
    for (const x in p.morphAttributes) {
      const S = p.morphAttributes[x];
      for (let d = 0, h = S.length; d < h; d++) e.remove(S[d]);
    }
    (p.removeEventListener("dispose", a), delete r[p.id]);
    const m = s.get(p);
    (m && (e.remove(m), s.delete(p)),
      n.releaseStatesOfGeometry(p),
      p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount,
      t.memory.geometries--);
  }
  function o(f, p) {
    return (
      r[p.id] === !0 ||
        (p.addEventListener("dispose", a),
        (r[p.id] = !0),
        t.memory.geometries++),
      p
    );
  }
  function l(f) {
    const p = f.attributes;
    for (const x in p) e.update(p[x], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const x in m) {
      const S = m[x];
      for (let d = 0, h = S.length; d < h; d++) e.update(S[d], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const p = [],
      m = f.index,
      x = f.attributes.position;
    let S = 0;
    if (m !== null) {
      const T = m.array;
      S = m.version;
      for (let E = 0, A = T.length; E < A; E += 3) {
        const O = T[E + 0],
          P = T[E + 1],
          b = T[E + 2];
        p.push(O, P, P, b, b, O);
      }
    } else if (x !== void 0) {
      const T = x.array;
      S = x.version;
      for (let E = 0, A = T.length / 3 - 1; E < A; E += 3) {
        const O = E + 0,
          P = E + 1,
          b = E + 2;
        p.push(O, P, P, b, b, O);
      }
    } else return;
    const d = new (Lo(p) ? Bo : Oo)(p, 1);
    d.version = S;
    const h = s.get(f);
    (h && e.remove(h), s.set(f, d));
  }
  function u(f) {
    const p = s.get(f);
    if (p) {
      const m = f.index;
      m !== null && p.version < m.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function vd(i, e, t) {
  let n;
  function r(p) {
    n = p;
  }
  let s, a;
  function o(p) {
    ((s = p.type), (a = p.bytesPerElement));
  }
  function l(p, m) {
    (i.drawElements(n, m, s, p * a), t.update(m, n, 1));
  }
  function c(p, m, x) {
    x !== 0 && (i.drawElementsInstanced(n, m, s, p * a, x), t.update(m, n, x));
  }
  function u(p, m, x) {
    if (x === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, p, 0, x);
    let d = 0;
    for (let h = 0; h < x; h++) d += m[h];
    t.update(d, n, 1);
  }
  function f(p, m, x, S) {
    if (x === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let h = 0; h < p.length; h++) c(p[h] / a, m[h], S[h]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, s, p, 0, S, 0, x);
      let h = 0;
      for (let T = 0; T < x; T++) h += m[T];
      for (let T = 0; T < S.length; T++) t.update(h, n, S[T]);
    }
  }
  ((this.setMode = r),
    (this.setIndex = o),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = f));
}
function xd(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Md(i, e, t) {
  const n = new WeakMap(),
    r = new tt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      f = u !== void 0 ? u.length : 0;
    let p = n.get(o);
    if (p === void 0 || p.count !== f) {
      let g = function () {
        (F.dispose(), n.delete(o), o.removeEventListener("dispose", g));
      };
      var m = g;
      p !== void 0 && p.texture.dispose();
      const x = o.morphAttributes.position !== void 0,
        S = o.morphAttributes.normal !== void 0,
        d = o.morphAttributes.color !== void 0,
        h = o.morphAttributes.position || [],
        T = o.morphAttributes.normal || [],
        E = o.morphAttributes.color || [];
      let A = 0;
      (x === !0 && (A = 1), S === !0 && (A = 2), d === !0 && (A = 3));
      let O = o.attributes.position.count * A,
        P = 1;
      O > e.maxTextureSize &&
        ((P = Math.ceil(O / e.maxTextureSize)), (O = e.maxTextureSize));
      const b = new Float32Array(O * P * 4 * f),
        F = new Io(b, O, P, f);
      ((F.type = on), (F.needsUpdate = !0));
      const te = A * 4;
      for (let M = 0; M < f; M++) {
        const V = h[M],
          z = T[M],
          q = E[M],
          K = O * P * 4 * M;
        for (let G = 0; G < V.count; G++) {
          const $ = G * te;
          (x === !0 &&
            (r.fromBufferAttribute(V, G),
            (b[K + $ + 0] = r.x),
            (b[K + $ + 1] = r.y),
            (b[K + $ + 2] = r.z),
            (b[K + $ + 3] = 0)),
            S === !0 &&
              (r.fromBufferAttribute(z, G),
              (b[K + $ + 4] = r.x),
              (b[K + $ + 5] = r.y),
              (b[K + $ + 6] = r.z),
              (b[K + $ + 7] = 0)),
            d === !0 &&
              (r.fromBufferAttribute(q, G),
              (b[K + $ + 8] = r.x),
              (b[K + $ + 9] = r.y),
              (b[K + $ + 10] = r.z),
              (b[K + $ + 11] = q.itemSize === 4 ? r.w : 1)));
        }
      }
      ((p = { count: f, texture: F, size: new Ue(O, P) }),
        n.set(o, p),
        o.addEventListener("dispose", g));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let x = 0;
      for (let d = 0; d < c.length; d++) x += c[d];
      const S = o.morphTargetsRelative ? 1 : 1 - x;
      (l.getUniforms().setValue(i, "morphTargetBaseInfluence", S),
        l.getUniforms().setValue(i, "morphTargetInfluences", c));
    }
    (l.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t),
      l.getUniforms().setValue(i, "morphTargetsTextureSize", p.size));
  }
  return { update: s };
}
function Sd(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      f = e.get(l, u);
    if (
      (r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const p = l.skeleton;
      r.get(p) !== c && (p.update(), r.set(p, c));
    }
    return f;
  }
  function a() {
    r = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    (c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor));
  }
  return { update: s, dispose: a };
}
class Xo extends pt {
  constructor(e, t, n, r, s, a, o, l, c, u = ri) {
    if (u !== ri && u !== pi)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    (n === void 0 && u === ri && (n = Bn),
      n === void 0 && u === pi && (n = fi),
      super(null, r, s, a, o, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : _t),
      (this.minFilter = l !== void 0 ? l : _t),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (super.copy(e), (this.compareFunction = e.compareFunction), this);
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const qo = new pt(),
  ja = new Xo(1, 1),
  Yo = new Io(),
  $o = new oc(),
  Ko = new Go(),
  Ja = [],
  Qa = [],
  eo = new Float32Array(16),
  to = new Float32Array(9),
  no = new Float32Array(4);
function _i(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Ja[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (Ja[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) ((o += t), i[a].toArray(s, o));
  }
  return s;
}
function lt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function ct(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Sr(i, e) {
  let t = Qa[e];
  t === void 0 && ((t = new Int32Array(e)), (Qa[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Ed(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function yd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (lt(t, e)) return;
    (i.uniform2fv(this.addr, e), ct(t, e));
  }
}
function Td(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (lt(t, e)) return;
    (i.uniform3fv(this.addr, e), ct(t, e));
  }
}
function Ad(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (lt(t, e)) return;
    (i.uniform4fv(this.addr, e), ct(t, e));
  }
}
function bd(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    (i.uniformMatrix2fv(this.addr, !1, e), ct(t, e));
  } else {
    if (lt(t, n)) return;
    (no.set(n), i.uniformMatrix2fv(this.addr, !1, no), ct(t, n));
  }
}
function wd(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    (i.uniformMatrix3fv(this.addr, !1, e), ct(t, e));
  } else {
    if (lt(t, n)) return;
    (to.set(n), i.uniformMatrix3fv(this.addr, !1, to), ct(t, n));
  }
}
function Rd(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    (i.uniformMatrix4fv(this.addr, !1, e), ct(t, e));
  } else {
    if (lt(t, n)) return;
    (eo.set(n), i.uniformMatrix4fv(this.addr, !1, eo), ct(t, n));
  }
}
function Cd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Pd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (lt(t, e)) return;
    (i.uniform2iv(this.addr, e), ct(t, e));
  }
}
function Dd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (lt(t, e)) return;
    (i.uniform3iv(this.addr, e), ct(t, e));
  }
}
function Ld(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (lt(t, e)) return;
    (i.uniform4iv(this.addr, e), ct(t, e));
  }
}
function Ud(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function Id(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (lt(t, e)) return;
    (i.uniform2uiv(this.addr, e), ct(t, e));
  }
}
function Nd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (lt(t, e)) return;
    (i.uniform3uiv(this.addr, e), ct(t, e));
  }
}
function Fd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (lt(t, e)) return;
    (i.uniform4uiv(this.addr, e), ct(t, e));
  }
}
function Od(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let s;
  (this.type === i.SAMPLER_2D_SHADOW
    ? ((ja.compareFunction = Do), (s = ja))
    : (s = qo),
    t.setTexture2D(e || s, r));
}
function Bd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || $o, r));
}
function zd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || Ko, r));
}
function Hd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Yo, r));
}
function Gd(i) {
  switch (i) {
    case 5126:
      return Ed;
    case 35664:
      return yd;
    case 35665:
      return Td;
    case 35666:
      return Ad;
    case 35674:
      return bd;
    case 35675:
      return wd;
    case 35676:
      return Rd;
    case 5124:
    case 35670:
      return Cd;
    case 35667:
    case 35671:
      return Pd;
    case 35668:
    case 35672:
      return Dd;
    case 35669:
    case 35673:
      return Ld;
    case 5125:
      return Ud;
    case 36294:
      return Id;
    case 36295:
      return Nd;
    case 36296:
      return Fd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Od;
    case 35679:
    case 36299:
    case 36307:
      return Bd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return zd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hd;
  }
}
function Vd(i, e) {
  i.uniform1fv(this.addr, e);
}
function kd(i, e) {
  const t = _i(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Wd(i, e) {
  const t = _i(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Xd(i, e) {
  const t = _i(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function qd(i, e) {
  const t = _i(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Yd(i, e) {
  const t = _i(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function $d(i, e) {
  const t = _i(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Kd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Zd(i, e) {
  i.uniform2iv(this.addr, e);
}
function jd(i, e) {
  i.uniform3iv(this.addr, e);
}
function Jd(i, e) {
  i.uniform4iv(this.addr, e);
}
function Qd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function ef(i, e) {
  i.uniform2uiv(this.addr, e);
}
function tf(i, e) {
  i.uniform3uiv(this.addr, e);
}
function nf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function rf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Sr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || qo, s[a]);
}
function sf(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Sr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || $o, s[a]);
}
function af(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Sr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || Ko, s[a]);
}
function of(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Sr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || Yo, s[a]);
}
function lf(i) {
  switch (i) {
    case 5126:
      return Vd;
    case 35664:
      return kd;
    case 35665:
      return Wd;
    case 35666:
      return Xd;
    case 35674:
      return qd;
    case 35675:
      return Yd;
    case 35676:
      return $d;
    case 5124:
    case 35670:
      return Kd;
    case 35667:
    case 35671:
      return Zd;
    case 35668:
    case 35672:
      return jd;
    case 35669:
    case 35673:
      return Jd;
    case 5125:
      return Qd;
    case 36294:
      return ef;
    case 36295:
      return tf;
    case 36296:
      return nf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return rf;
    case 35679:
    case 36299:
    case 36307:
      return sf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return af;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return of;
  }
}
class cf {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Gd(t.type)));
  }
}
class hf {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = lf(t.type)));
  }
}
class uf {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ss = /(\w+)(\])?(\[|\.)?/g;
function io(i, e) {
  (i.seq.push(e), (i.map[e.id] = e));
}
function df(i, e, t) {
  const n = i.name,
    r = n.length;
  for (ss.lastIndex = 0; ; ) {
    const s = ss.exec(n),
      a = ss.lastIndex;
    let o = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === r))) {
      io(t, c === void 0 ? new cf(o, i, e) : new hf(o, i, e));
      break;
    } else {
      let f = t.map[o];
      (f === void 0 && ((f = new uf(o)), io(t, f)), (t = f));
    }
  }
}
class ur {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        a = e.getUniformLocation(t, s.name);
      df(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function ro(i, e, t) {
  const n = i.createShader(e);
  return (i.shaderSource(n, t), i.compileShader(n), n);
}
const ff = 37297;
let pf = 0;
function mf(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function gf(i) {
  const e = Xe.getPrimaries(Xe.workingColorSpace),
    t = Xe.getPrimaries(i);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === pr && t === fr
        ? (n = "LinearDisplayP3ToLinearSRGB")
        : e === fr && t === pr && (n = "LinearSRGBToLinearDisplayP3"),
    i)
  ) {
    case Xt:
    case xr:
      return [n, "LinearTransferOETF"];
    case Pt:
    case aa:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        [n, "LinearTransferOETF"]
      );
  }
}
function so(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      mf(i.getShaderSource(e), a)
    );
  } else return r;
}
function _f(i, e) {
  const t = gf(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function vf(i, e) {
  let t;
  switch (e) {
    case Dl:
      t = "Linear";
      break;
    case Ll:
      t = "Reinhard";
      break;
    case Ul:
      t = "Cineon";
      break;
    case Il:
      t = "ACESFilmic";
      break;
    case Fl:
      t = "AgX";
      break;
    case Ol:
      t = "Neutral";
      break;
    case Nl:
      t = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear"));
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const ir = new N();
function xf() {
  Xe.getLuminanceCoefficients(ir);
  const i = ir.x.toFixed(4),
    e = ir.y.toFixed(4),
    t = ir.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Mf(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Ti).join(`
`);
}
function Sf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ef(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    (s.type === i.FLOAT_MAT2 && (o = 2),
      s.type === i.FLOAT_MAT3 && (o = 3),
      s.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      }));
  }
  return t;
}
function Ti(i) {
  return i !== "";
}
function ao(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function oo(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const yf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ks(i) {
  return i.replace(yf, Af);
}
const Tf = new Map();
function Af(i, e) {
  let t = De[e];
  if (t === void 0) {
    const n = Tf.get(e);
    if (n !== void 0)
      ((t = De[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ks(t);
}
const bf =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function lo(i) {
  return i.replace(bf, wf);
}
function wf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function co(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : i.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function Rf(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === xo
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === hl
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : i.shadowMapType === rn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Cf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ui:
      case di:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case vr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Pf(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case di:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Df(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Mo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Cl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Pl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Lf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Uf(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = Rf(t),
    c = Cf(t),
    u = Pf(t),
    f = Df(t),
    p = Lf(t),
    m = Mf(t),
    x = Sf(s),
    S = r.createProgram();
  let d,
    h,
    T = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial
    ? ((d = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(Ti).join(`
`)),
      d.length > 0 &&
        (d += `
`),
      (h = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(Ti).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((d = [
        co(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Ti).join(`
`)),
      (h = [
        co(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + f : "",
        p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
        p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
        p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== cn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== cn ? De.tonemapping_pars_fragment : "",
        t.toneMapping !== cn ? vf("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        De.colorspace_pars_fragment,
        _f("linearToOutputTexel", t.outputColorSpace),
        xf(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Ti).join(`
`))),
    (a = Ks(a)),
    (a = ao(a, t)),
    (a = oo(a, t)),
    (o = Ks(o)),
    (o = ao(o, t)),
    (o = oo(o, t)),
    (a = lo(a)),
    (o = lo(o)),
    t.isRawShaderMaterial !== !0 &&
      ((T = `#version 300 es
`),
      (d =
        [
          m,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        d),
      (h =
        [
          "#define varying in",
          t.glslVersion === bi
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === bi ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h)));
  const E = T + d + a,
    A = T + h + o,
    O = ro(r, r.VERTEX_SHADER, E),
    P = ro(r, r.FRAGMENT_SHADER, A);
  (r.attachShader(S, O),
    r.attachShader(S, P),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(S, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"),
    r.linkProgram(S));
  function b(M) {
    if (i.debug.checkShaderErrors) {
      const V = r.getProgramInfoLog(S).trim(),
        z = r.getShaderInfoLog(O).trim(),
        q = r.getShaderInfoLog(P).trim();
      let K = !0,
        G = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (((K = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, S, O, P);
        else {
          const $ = so(r, O, "vertex"),
            H = so(r, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(S, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              M.name +
              `
Material Type: ` +
              M.type +
              `

Program Info Log: ` +
              V +
              `
` +
              $ +
              `
` +
              H,
          );
        }
      else
        V !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", V)
          : (z === "" || q === "") && (G = !1);
      G &&
        (M.diagnostics = {
          runnable: K,
          programLog: V,
          vertexShader: { log: z, prefix: d },
          fragmentShader: { log: q, prefix: h },
        });
    }
    (r.deleteShader(O), r.deleteShader(P), (F = new ur(r, S)), (te = Ef(r, S)));
  }
  let F;
  this.getUniforms = function () {
    return (F === void 0 && b(this), F);
  };
  let te;
  this.getAttributes = function () {
    return (te === void 0 && b(this), te);
  };
  let g = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (g === !1 && (g = r.getProgramParameter(S, ff)), g);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        r.deleteProgram(S),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = pf++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = S),
    (this.vertexShader = O),
    (this.fragmentShader = P),
    this
  );
}
let If = 0;
class Nf {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Ff(e)), t.set(e, n)), n);
  }
}
class Ff {
  constructor(e) {
    ((this.id = If++), (this.code = e), (this.usedTimes = 0));
  }
}
function Of(i, e, t, n, r, s, a) {
  const o = new la(),
    l = new Nf(),
    c = new Set(),
    u = [],
    f = r.logarithmicDepthBuffer,
    p = r.reverseDepthBuffer,
    m = r.vertexTextures;
  let x = r.precision;
  const S = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function d(g) {
    return (c.add(g), g === 0 ? "uv" : `uv${g}`);
  }
  function h(g, M, V, z, q) {
    const K = z.fog,
      G = q.geometry,
      $ = g.isMeshStandardMaterial ? z.environment : null,
      H = (g.isMeshStandardMaterial ? t : e).get(g.envMap || $),
      le = !!H && H.mapping === vr ? H.image.height : null,
      ce = S[g.type];
    g.precision !== null &&
      ((x = r.getMaxPrecision(g.precision)),
      x !== g.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          g.precision,
          "not supported, using",
          x,
          "instead.",
        ));
    const _e =
        G.morphAttributes.position ||
        G.morphAttributes.normal ||
        G.morphAttributes.color,
      Ge = _e !== void 0 ? _e.length : 0;
    let Ye = 0;
    (G.morphAttributes.position !== void 0 && (Ye = 1),
      G.morphAttributes.normal !== void 0 && (Ye = 2),
      G.morphAttributes.color !== void 0 && (Ye = 3));
    let k, J, me, he;
    if (ce) {
      const St = Yt[ce];
      ((k = St.vertexShader), (J = St.fragmentShader));
    } else
      ((k = g.vertexShader),
        (J = g.fragmentShader),
        l.update(g),
        (me = l.getVertexShaderID(g)),
        (he = l.getFragmentShaderID(g)));
    const Ce = i.getRenderTarget(),
      ye = q.isInstancedMesh === !0,
      Fe = q.isBatchedMesh === !0,
      Ke = !!g.map,
      Oe = !!g.matcap,
      w = !!H,
      At = !!g.aoMap,
      Ie = !!g.lightMap,
      ze = !!g.bumpMap,
      Ae = !!g.normalMap,
      je = !!g.displacementMap,
      Re = !!g.emissiveMap,
      y = !!g.metalnessMap,
      _ = !!g.roughnessMap,
      L = g.anisotropy > 0,
      X = g.clearcoat > 0,
      Z = g.dispersion > 0,
      W = g.iridescence > 0,
      ve = g.sheen > 0,
      ie = g.transmission > 0,
      ue = L && !!g.anisotropyMap,
      He = X && !!g.clearcoatMap,
      Q = X && !!g.clearcoatNormalMap,
      de = X && !!g.clearcoatRoughnessMap,
      be = W && !!g.iridescenceMap,
      we = W && !!g.iridescenceThicknessMap,
      fe = ve && !!g.sheenColorMap,
      Ne = ve && !!g.sheenRoughnessMap,
      Pe = !!g.specularMap,
      Ze = !!g.specularColorMap,
      R = !!g.specularIntensityMap,
      ae = ie && !!g.transmissionMap,
      B = ie && !!g.thicknessMap,
      Y = !!g.gradientMap,
      re = !!g.alphaMap,
      oe = g.alphaTest > 0,
      Be = !!g.alphaHash,
      rt = !!g.extensions;
    let Mt = cn;
    g.toneMapped &&
      (Ce === null || Ce.isXRRenderTarget === !0) &&
      (Mt = i.toneMapping);
    const Ve = {
      shaderID: ce,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: k,
      fragmentShader: J,
      defines: g.defines,
      customVertexShaderID: me,
      customFragmentShaderID: he,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: x,
      batching: Fe,
      batchingColor: Fe && q._colorsTexture !== null,
      instancing: ye,
      instancingColor: ye && q.instanceColor !== null,
      instancingMorph: ye && q.morphTexture !== null,
      supportsVertexTextures: m,
      outputColorSpace:
        Ce === null
          ? i.outputColorSpace
          : Ce.isXRRenderTarget === !0
            ? Ce.texture.colorSpace
            : Xt,
      alphaToCoverage: !!g.alphaToCoverage,
      map: Ke,
      matcap: Oe,
      envMap: w,
      envMapMode: w && H.mapping,
      envMapCubeUVHeight: le,
      aoMap: At,
      lightMap: Ie,
      bumpMap: ze,
      normalMap: Ae,
      displacementMap: m && je,
      emissiveMap: Re,
      normalMapObjectSpace: Ae && g.normalMapType === kl,
      normalMapTangentSpace: Ae && g.normalMapType === Vl,
      metalnessMap: y,
      roughnessMap: _,
      anisotropy: L,
      anisotropyMap: ue,
      clearcoat: X,
      clearcoatMap: He,
      clearcoatNormalMap: Q,
      clearcoatRoughnessMap: de,
      dispersion: Z,
      iridescence: W,
      iridescenceMap: be,
      iridescenceThicknessMap: we,
      sheen: ve,
      sheenColorMap: fe,
      sheenRoughnessMap: Ne,
      specularMap: Pe,
      specularColorMap: Ze,
      specularIntensityMap: R,
      transmission: ie,
      transmissionMap: ae,
      thicknessMap: B,
      gradientMap: Y,
      opaque:
        g.transparent === !1 && g.blending === ii && g.alphaToCoverage === !1,
      alphaMap: re,
      alphaTest: oe,
      alphaHash: Be,
      combine: g.combine,
      mapUv: Ke && d(g.map.channel),
      aoMapUv: At && d(g.aoMap.channel),
      lightMapUv: Ie && d(g.lightMap.channel),
      bumpMapUv: ze && d(g.bumpMap.channel),
      normalMapUv: Ae && d(g.normalMap.channel),
      displacementMapUv: je && d(g.displacementMap.channel),
      emissiveMapUv: Re && d(g.emissiveMap.channel),
      metalnessMapUv: y && d(g.metalnessMap.channel),
      roughnessMapUv: _ && d(g.roughnessMap.channel),
      anisotropyMapUv: ue && d(g.anisotropyMap.channel),
      clearcoatMapUv: He && d(g.clearcoatMap.channel),
      clearcoatNormalMapUv: Q && d(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: de && d(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: be && d(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: we && d(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: fe && d(g.sheenColorMap.channel),
      sheenRoughnessMapUv: Ne && d(g.sheenRoughnessMap.channel),
      specularMapUv: Pe && d(g.specularMap.channel),
      specularColorMapUv: Ze && d(g.specularColorMap.channel),
      specularIntensityMapUv: R && d(g.specularIntensityMap.channel),
      transmissionMapUv: ae && d(g.transmissionMap.channel),
      thicknessMapUv: B && d(g.thicknessMap.channel),
      alphaMapUv: re && d(g.alphaMap.channel),
      vertexTangents: !!G.attributes.tangent && (Ae || L),
      vertexColors: g.vertexColors,
      vertexAlphas:
        g.vertexColors === !0 &&
        !!G.attributes.color &&
        G.attributes.color.itemSize === 4,
      pointsUvs: q.isPoints === !0 && !!G.attributes.uv && (Ke || re),
      fog: !!K,
      useFog: g.fog === !0,
      fogExp2: !!K && K.isFogExp2,
      flatShading: g.flatShading === !0,
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: p,
      skinning: q.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: Ge,
      morphTextureStride: Ye,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && V.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Mt,
      decodeVideoTexture:
        Ke &&
        g.map.isVideoTexture === !0 &&
        Xe.getTransfer(g.map.colorSpace) === Qe,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === an,
      flipSided: g.side === Tt,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance:
        rt &&
        g.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((rt && g.extensions.multiDraw === !0) || Fe) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: g.customProgramCacheKey(),
    };
    return (
      (Ve.vertexUv1s = c.has(1)),
      (Ve.vertexUv2s = c.has(2)),
      (Ve.vertexUv3s = c.has(3)),
      c.clear(),
      Ve
    );
  }
  function T(g) {
    const M = [];
    if (
      (g.shaderID
        ? M.push(g.shaderID)
        : (M.push(g.customVertexShaderID), M.push(g.customFragmentShaderID)),
      g.defines !== void 0)
    )
      for (const V in g.defines) (M.push(V), M.push(g.defines[V]));
    return (
      g.isRawShaderMaterial === !1 &&
        (E(M, g), A(M, g), M.push(i.outputColorSpace)),
      M.push(g.customProgramCacheKey),
      M.join()
    );
  }
  function E(g, M) {
    (g.push(M.precision),
      g.push(M.outputColorSpace),
      g.push(M.envMapMode),
      g.push(M.envMapCubeUVHeight),
      g.push(M.mapUv),
      g.push(M.alphaMapUv),
      g.push(M.lightMapUv),
      g.push(M.aoMapUv),
      g.push(M.bumpMapUv),
      g.push(M.normalMapUv),
      g.push(M.displacementMapUv),
      g.push(M.emissiveMapUv),
      g.push(M.metalnessMapUv),
      g.push(M.roughnessMapUv),
      g.push(M.anisotropyMapUv),
      g.push(M.clearcoatMapUv),
      g.push(M.clearcoatNormalMapUv),
      g.push(M.clearcoatRoughnessMapUv),
      g.push(M.iridescenceMapUv),
      g.push(M.iridescenceThicknessMapUv),
      g.push(M.sheenColorMapUv),
      g.push(M.sheenRoughnessMapUv),
      g.push(M.specularMapUv),
      g.push(M.specularColorMapUv),
      g.push(M.specularIntensityMapUv),
      g.push(M.transmissionMapUv),
      g.push(M.thicknessMapUv),
      g.push(M.combine),
      g.push(M.fogExp2),
      g.push(M.sizeAttenuation),
      g.push(M.morphTargetsCount),
      g.push(M.morphAttributeCount),
      g.push(M.numDirLights),
      g.push(M.numPointLights),
      g.push(M.numSpotLights),
      g.push(M.numSpotLightMaps),
      g.push(M.numHemiLights),
      g.push(M.numRectAreaLights),
      g.push(M.numDirLightShadows),
      g.push(M.numPointLightShadows),
      g.push(M.numSpotLightShadows),
      g.push(M.numSpotLightShadowsWithMaps),
      g.push(M.numLightProbes),
      g.push(M.shadowMapType),
      g.push(M.toneMapping),
      g.push(M.numClippingPlanes),
      g.push(M.numClipIntersection),
      g.push(M.depthPacking));
  }
  function A(g, M) {
    (o.disableAll(),
      M.supportsVertexTextures && o.enable(0),
      M.instancing && o.enable(1),
      M.instancingColor && o.enable(2),
      M.instancingMorph && o.enable(3),
      M.matcap && o.enable(4),
      M.envMap && o.enable(5),
      M.normalMapObjectSpace && o.enable(6),
      M.normalMapTangentSpace && o.enable(7),
      M.clearcoat && o.enable(8),
      M.iridescence && o.enable(9),
      M.alphaTest && o.enable(10),
      M.vertexColors && o.enable(11),
      M.vertexAlphas && o.enable(12),
      M.vertexUv1s && o.enable(13),
      M.vertexUv2s && o.enable(14),
      M.vertexUv3s && o.enable(15),
      M.vertexTangents && o.enable(16),
      M.anisotropy && o.enable(17),
      M.alphaHash && o.enable(18),
      M.batching && o.enable(19),
      M.dispersion && o.enable(20),
      M.batchingColor && o.enable(21),
      g.push(o.mask),
      o.disableAll(),
      M.fog && o.enable(0),
      M.useFog && o.enable(1),
      M.flatShading && o.enable(2),
      M.logarithmicDepthBuffer && o.enable(3),
      M.reverseDepthBuffer && o.enable(4),
      M.skinning && o.enable(5),
      M.morphTargets && o.enable(6),
      M.morphNormals && o.enable(7),
      M.morphColors && o.enable(8),
      M.premultipliedAlpha && o.enable(9),
      M.shadowMapEnabled && o.enable(10),
      M.doubleSided && o.enable(11),
      M.flipSided && o.enable(12),
      M.useDepthPacking && o.enable(13),
      M.dithering && o.enable(14),
      M.transmission && o.enable(15),
      M.sheen && o.enable(16),
      M.opaque && o.enable(17),
      M.pointsUvs && o.enable(18),
      M.decodeVideoTexture && o.enable(19),
      M.alphaToCoverage && o.enable(20),
      g.push(o.mask));
  }
  function O(g) {
    const M = S[g.type];
    let V;
    if (M) {
      const z = Yt[M];
      V = xc.clone(z.uniforms);
    } else V = g.uniforms;
    return V;
  }
  function P(g, M) {
    let V;
    for (let z = 0, q = u.length; z < q; z++) {
      const K = u[z];
      if (K.cacheKey === M) {
        ((V = K), ++V.usedTimes);
        break;
      }
    }
    return (V === void 0 && ((V = new Uf(i, M, g, s)), u.push(V)), V);
  }
  function b(g) {
    if (--g.usedTimes === 0) {
      const M = u.indexOf(g);
      ((u[M] = u[u.length - 1]), u.pop(), g.destroy());
    }
  }
  function F(g) {
    l.remove(g);
  }
  function te() {
    l.dispose();
  }
  return {
    getParameters: h,
    getProgramCacheKey: T,
    getUniforms: O,
    acquireProgram: P,
    releaseProgram: b,
    releaseShaderCache: F,
    programs: u,
    dispose: te,
  };
}
function Bf() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return (o === void 0 && ((o = {}), i.set(a, o)), o);
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function zf(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.material.id !== e.material.id
        ? i.material.id - e.material.id
        : i.z !== e.z
          ? i.z - e.z
          : i.id - e.id;
}
function ho(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.z !== e.z
        ? e.z - i.z
        : i.id - e.id;
}
function uo() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    ((e = 0), (t.length = 0), (n.length = 0), (r.length = 0));
  }
  function a(f, p, m, x, S, d) {
    let h = i[e];
    return (
      h === void 0
        ? ((h = {
            id: f.id,
            object: f,
            geometry: p,
            material: m,
            groupOrder: x,
            renderOrder: f.renderOrder,
            z: S,
            group: d,
          }),
          (i[e] = h))
        : ((h.id = f.id),
          (h.object = f),
          (h.geometry = p),
          (h.material = m),
          (h.groupOrder = x),
          (h.renderOrder = f.renderOrder),
          (h.z = S),
          (h.group = d)),
      e++,
      h
    );
  }
  function o(f, p, m, x, S, d) {
    const h = a(f, p, m, x, S, d);
    m.transmission > 0
      ? n.push(h)
      : m.transparent === !0
        ? r.push(h)
        : t.push(h);
  }
  function l(f, p, m, x, S, d) {
    const h = a(f, p, m, x, S, d);
    m.transmission > 0
      ? n.unshift(h)
      : m.transparent === !0
        ? r.unshift(h)
        : t.unshift(h);
  }
  function c(f, p) {
    (t.length > 1 && t.sort(f || zf),
      n.length > 1 && n.sort(p || ho),
      r.length > 1 && r.sort(p || ho));
  }
  function u() {
    for (let f = e, p = i.length; f < p; f++) {
      const m = i[f];
      if (m.id === null) break;
      ((m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function Hf() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new uo()), i.set(n, [a]))
        : r >= s.length
          ? ((a = new uo()), s.push(a))
          : (a = s[r]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Gf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new N(), color: new qe() };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new N(), color: new qe(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new N(), skyColor: new qe(), groundColor: new qe() };
          break;
        case "RectAreaLight":
          t = {
            color: new qe(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N(),
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
function Vf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
let kf = 0;
function Wf(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Xf(i) {
  const e = new Gf(),
    t = Vf(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) n.probe.push(new N());
  const r = new N(),
    s = new it(),
    a = new it();
  function o(c) {
    let u = 0,
      f = 0,
      p = 0;
    for (let te = 0; te < 9; te++) n.probe[te].set(0, 0, 0);
    let m = 0,
      x = 0,
      S = 0,
      d = 0,
      h = 0,
      T = 0,
      E = 0,
      A = 0,
      O = 0,
      P = 0,
      b = 0;
    c.sort(Wf);
    for (let te = 0, g = c.length; te < g; te++) {
      const M = c[te],
        V = M.color,
        z = M.intensity,
        q = M.distance,
        K = M.shadow && M.shadow.map ? M.shadow.map.texture : null;
      if (M.isAmbientLight) ((u += V.r * z), (f += V.g * z), (p += V.b * z));
      else if (M.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(M.sh.coefficients[G], z);
        b++;
      } else if (M.isDirectionalLight) {
        const G = e.get(M);
        if ((G.color.copy(M.color).multiplyScalar(M.intensity), M.castShadow)) {
          const $ = M.shadow,
            H = t.get(M);
          ((H.shadowIntensity = $.intensity),
            (H.shadowBias = $.bias),
            (H.shadowNormalBias = $.normalBias),
            (H.shadowRadius = $.radius),
            (H.shadowMapSize = $.mapSize),
            (n.directionalShadow[m] = H),
            (n.directionalShadowMap[m] = K),
            (n.directionalShadowMatrix[m] = M.shadow.matrix),
            T++);
        }
        ((n.directional[m] = G), m++);
      } else if (M.isSpotLight) {
        const G = e.get(M);
        (G.position.setFromMatrixPosition(M.matrixWorld),
          G.color.copy(V).multiplyScalar(z),
          (G.distance = q),
          (G.coneCos = Math.cos(M.angle)),
          (G.penumbraCos = Math.cos(M.angle * (1 - M.penumbra))),
          (G.decay = M.decay),
          (n.spot[S] = G));
        const $ = M.shadow;
        if (
          (M.map &&
            ((n.spotLightMap[O] = M.map),
            O++,
            $.updateMatrices(M),
            M.castShadow && P++),
          (n.spotLightMatrix[S] = $.matrix),
          M.castShadow)
        ) {
          const H = t.get(M);
          ((H.shadowIntensity = $.intensity),
            (H.shadowBias = $.bias),
            (H.shadowNormalBias = $.normalBias),
            (H.shadowRadius = $.radius),
            (H.shadowMapSize = $.mapSize),
            (n.spotShadow[S] = H),
            (n.spotShadowMap[S] = K),
            A++);
        }
        S++;
      } else if (M.isRectAreaLight) {
        const G = e.get(M);
        (G.color.copy(V).multiplyScalar(z),
          G.halfWidth.set(M.width * 0.5, 0, 0),
          G.halfHeight.set(0, M.height * 0.5, 0),
          (n.rectArea[d] = G),
          d++);
      } else if (M.isPointLight) {
        const G = e.get(M);
        if (
          (G.color.copy(M.color).multiplyScalar(M.intensity),
          (G.distance = M.distance),
          (G.decay = M.decay),
          M.castShadow)
        ) {
          const $ = M.shadow,
            H = t.get(M);
          ((H.shadowIntensity = $.intensity),
            (H.shadowBias = $.bias),
            (H.shadowNormalBias = $.normalBias),
            (H.shadowRadius = $.radius),
            (H.shadowMapSize = $.mapSize),
            (H.shadowCameraNear = $.camera.near),
            (H.shadowCameraFar = $.camera.far),
            (n.pointShadow[x] = H),
            (n.pointShadowMap[x] = K),
            (n.pointShadowMatrix[x] = M.shadow.matrix),
            E++);
        }
        ((n.point[x] = G), x++);
      } else if (M.isHemisphereLight) {
        const G = e.get(M);
        (G.skyColor.copy(M.color).multiplyScalar(z),
          G.groundColor.copy(M.groundColor).multiplyScalar(z),
          (n.hemi[h] = G),
          h++);
      }
    }
    (d > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = ne.LTC_FLOAT_1), (n.rectAreaLTC2 = ne.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = ne.LTC_HALF_1), (n.rectAreaLTC2 = ne.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = f),
      (n.ambient[2] = p));
    const F = n.hash;
    (F.directionalLength !== m ||
      F.pointLength !== x ||
      F.spotLength !== S ||
      F.rectAreaLength !== d ||
      F.hemiLength !== h ||
      F.numDirectionalShadows !== T ||
      F.numPointShadows !== E ||
      F.numSpotShadows !== A ||
      F.numSpotMaps !== O ||
      F.numLightProbes !== b) &&
      ((n.directional.length = m),
      (n.spot.length = S),
      (n.rectArea.length = d),
      (n.point.length = x),
      (n.hemi.length = h),
      (n.directionalShadow.length = T),
      (n.directionalShadowMap.length = T),
      (n.pointShadow.length = E),
      (n.pointShadowMap.length = E),
      (n.spotShadow.length = A),
      (n.spotShadowMap.length = A),
      (n.directionalShadowMatrix.length = T),
      (n.pointShadowMatrix.length = E),
      (n.spotLightMatrix.length = A + O - P),
      (n.spotLightMap.length = O),
      (n.numSpotLightShadowsWithMaps = P),
      (n.numLightProbes = b),
      (F.directionalLength = m),
      (F.pointLength = x),
      (F.spotLength = S),
      (F.rectAreaLength = d),
      (F.hemiLength = h),
      (F.numDirectionalShadows = T),
      (F.numPointShadows = E),
      (F.numSpotShadows = A),
      (F.numSpotMaps = O),
      (F.numLightProbes = b),
      (n.version = kf++));
  }
  function l(c, u) {
    let f = 0,
      p = 0,
      m = 0,
      x = 0,
      S = 0;
    const d = u.matrixWorldInverse;
    for (let h = 0, T = c.length; h < T; h++) {
      const E = c[h];
      if (E.isDirectionalLight) {
        const A = n.directional[f];
        (A.direction.setFromMatrixPosition(E.matrixWorld),
          r.setFromMatrixPosition(E.target.matrixWorld),
          A.direction.sub(r),
          A.direction.transformDirection(d),
          f++);
      } else if (E.isSpotLight) {
        const A = n.spot[m];
        (A.position.setFromMatrixPosition(E.matrixWorld),
          A.position.applyMatrix4(d),
          A.direction.setFromMatrixPosition(E.matrixWorld),
          r.setFromMatrixPosition(E.target.matrixWorld),
          A.direction.sub(r),
          A.direction.transformDirection(d),
          m++);
      } else if (E.isRectAreaLight) {
        const A = n.rectArea[x];
        (A.position.setFromMatrixPosition(E.matrixWorld),
          A.position.applyMatrix4(d),
          a.identity(),
          s.copy(E.matrixWorld),
          s.premultiply(d),
          a.extractRotation(s),
          A.halfWidth.set(E.width * 0.5, 0, 0),
          A.halfHeight.set(0, E.height * 0.5, 0),
          A.halfWidth.applyMatrix4(a),
          A.halfHeight.applyMatrix4(a),
          x++);
      } else if (E.isPointLight) {
        const A = n.point[p];
        (A.position.setFromMatrixPosition(E.matrixWorld),
          A.position.applyMatrix4(d),
          p++);
      } else if (E.isHemisphereLight) {
        const A = n.hemi[S];
        (A.direction.setFromMatrixPosition(E.matrixWorld),
          A.direction.transformDirection(d),
          S++);
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function fo(i) {
  const e = new Xf(i),
    t = [],
    n = [];
  function r(u) {
    ((c.camera = u), (t.length = 0), (n.length = 0));
  }
  function s(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a,
  };
}
function qf(i) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return (
      a === void 0
        ? ((o = new fo(i)), e.set(r, [o]))
        : s >= a.length
          ? ((o = new fo(i)), a.push(o))
          : (o = a[s]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
class Yf extends Mr {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Hl),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class $f extends Mr {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Kf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Zf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function jf(i, e, t) {
  let n = new Vo();
  const r = new Ue(),
    s = new Ue(),
    a = new tt(),
    o = new Yf({ depthPacking: Gl }),
    l = new $f(),
    c = {},
    u = t.maxTextureSize,
    f = { [yn]: Tt, [Tt]: yn, [an]: an },
    p = new Ot({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ue() },
        radius: { value: 4 },
      },
      vertexShader: Kf,
      fragmentShader: Zf,
    }),
    m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const x = new zn();
  x.setAttribute(
    "position",
    new $t(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const S = new Lt(x, p),
    d = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = xo));
  let h = this.type;
  this.render = function (P, b, F) {
    if (
      d.enabled === !1 ||
      (d.autoUpdate === !1 && d.needsUpdate === !1) ||
      P.length === 0
    )
      return;
    const te = i.getRenderTarget(),
      g = i.getActiveCubeFace(),
      M = i.getActiveMipmapLevel(),
      V = i.state;
    (V.setBlending(En),
      V.buffers.color.setClear(1, 1, 1, 1),
      V.buffers.depth.setTest(!0),
      V.setScissorTest(!1));
    const z = h !== rn && this.type === rn,
      q = h === rn && this.type !== rn;
    for (let K = 0, G = P.length; K < G; K++) {
      const $ = P[K],
        H = $.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", $, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const le = H.getFrameExtents();
      if (
        (r.multiply(le),
        s.copy(H.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / le.x)),
            (r.x = s.x * le.x),
            (H.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / le.y)),
            (r.y = s.y * le.y),
            (H.mapSize.y = s.y))),
        H.map === null || z === !0 || q === !0)
      ) {
        const _e = this.type !== rn ? { minFilter: _t, magFilter: _t } : {};
        (H.map !== null && H.map.dispose(),
          (H.map = new qt(r.x, r.y, _e)),
          (H.map.texture.name = $.name + ".shadowMap"),
          H.camera.updateProjectionMatrix());
      }
      (i.setRenderTarget(H.map), i.clear());
      const ce = H.getViewportCount();
      for (let _e = 0; _e < ce; _e++) {
        const Ge = H.getViewport(_e);
        (a.set(s.x * Ge.x, s.y * Ge.y, s.x * Ge.z, s.y * Ge.w),
          V.viewport(a),
          H.updateMatrices($, _e),
          (n = H.getFrustum()),
          A(b, F, H.camera, $, this.type));
      }
      (H.isPointLightShadow !== !0 && this.type === rn && T(H, F),
        (H.needsUpdate = !1));
    }
    ((h = this.type), (d.needsUpdate = !1), i.setRenderTarget(te, g, M));
  };
  function T(P, b) {
    const F = e.update(S);
    (p.defines.VSM_SAMPLES !== P.blurSamples &&
      ((p.defines.VSM_SAMPLES = P.blurSamples),
      (m.defines.VSM_SAMPLES = P.blurSamples),
      (p.needsUpdate = !0),
      (m.needsUpdate = !0)),
      P.mapPass === null && (P.mapPass = new qt(r.x, r.y)),
      (p.uniforms.shadow_pass.value = P.map.texture),
      (p.uniforms.resolution.value = P.mapSize),
      (p.uniforms.radius.value = P.radius),
      i.setRenderTarget(P.mapPass),
      i.clear(),
      i.renderBufferDirect(b, null, F, p, S, null),
      (m.uniforms.shadow_pass.value = P.mapPass.texture),
      (m.uniforms.resolution.value = P.mapSize),
      (m.uniforms.radius.value = P.radius),
      i.setRenderTarget(P.map),
      i.clear(),
      i.renderBufferDirect(b, null, F, m, S, null));
  }
  function E(P, b, F, te) {
    let g = null;
    const M =
      F.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial;
    if (M !== void 0) g = M;
    else if (
      ((g = F.isPointLight === !0 ? l : o),
      (i.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0) ||
        (b.map && b.alphaTest > 0))
    ) {
      const V = g.uuid,
        z = b.uuid;
      let q = c[V];
      q === void 0 && ((q = {}), (c[V] = q));
      let K = q[z];
      (K === void 0 &&
        ((K = g.clone()), (q[z] = K), b.addEventListener("dispose", O)),
        (g = K));
    }
    if (
      ((g.visible = b.visible),
      (g.wireframe = b.wireframe),
      te === rn
        ? (g.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (g.side = b.shadowSide !== null ? b.shadowSide : f[b.side]),
      (g.alphaMap = b.alphaMap),
      (g.alphaTest = b.alphaTest),
      (g.map = b.map),
      (g.clipShadows = b.clipShadows),
      (g.clippingPlanes = b.clippingPlanes),
      (g.clipIntersection = b.clipIntersection),
      (g.displacementMap = b.displacementMap),
      (g.displacementScale = b.displacementScale),
      (g.displacementBias = b.displacementBias),
      (g.wireframeLinewidth = b.wireframeLinewidth),
      (g.linewidth = b.linewidth),
      F.isPointLight === !0 && g.isMeshDistanceMaterial === !0)
    ) {
      const V = i.properties.get(g);
      V.light = F;
    }
    return g;
  }
  function A(P, b, F, te, g) {
    if (P.visible === !1) return;
    if (
      P.layers.test(b.layers) &&
      (P.isMesh || P.isLine || P.isPoints) &&
      (P.castShadow || (P.receiveShadow && g === rn)) &&
      (!P.frustumCulled || n.intersectsObject(P))
    ) {
      P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, P.matrixWorld);
      const z = e.update(P),
        q = P.material;
      if (Array.isArray(q)) {
        const K = z.groups;
        for (let G = 0, $ = K.length; G < $; G++) {
          const H = K[G],
            le = q[H.materialIndex];
          if (le && le.visible) {
            const ce = E(P, le, te, g);
            (P.onBeforeShadow(i, P, b, F, z, ce, H),
              i.renderBufferDirect(F, null, z, ce, P, H),
              P.onAfterShadow(i, P, b, F, z, ce, H));
          }
        }
      } else if (q.visible) {
        const K = E(P, q, te, g);
        (P.onBeforeShadow(i, P, b, F, z, K, null),
          i.renderBufferDirect(F, null, z, K, P, null),
          P.onAfterShadow(i, P, b, F, z, K, null));
      }
    }
    const V = P.children;
    for (let z = 0, q = V.length; z < q; z++) A(V[z], b, F, te, g);
  }
  function O(P) {
    P.target.removeEventListener("dispose", O);
    for (const F in c) {
      const te = c[F],
        g = P.target.uuid;
      g in te && (te[g].dispose(), delete te[g]);
    }
  }
}
const Jf = {
  [us]: ds,
  [fs]: gs,
  [ps]: _s,
  [hi]: ms,
  [ds]: us,
  [gs]: fs,
  [_s]: ps,
  [ms]: hi,
};
function Qf(i) {
  function e() {
    let R = !1;
    const ae = new tt();
    let B = null;
    const Y = new tt(0, 0, 0, 0);
    return {
      setMask: function (re) {
        B !== re && !R && (i.colorMask(re, re, re, re), (B = re));
      },
      setLocked: function (re) {
        R = re;
      },
      setClear: function (re, oe, Be, rt, Mt) {
        (Mt === !0 && ((re *= rt), (oe *= rt), (Be *= rt)),
          ae.set(re, oe, Be, rt),
          Y.equals(ae) === !1 && (i.clearColor(re, oe, Be, rt), Y.copy(ae)));
      },
      reset: function () {
        ((R = !1), (B = null), Y.set(-1, 0, 0, 0));
      },
    };
  }
  function t() {
    let R = !1,
      ae = !1,
      B = null,
      Y = null,
      re = null;
    return {
      setReversed: function (oe) {
        ae = oe;
      },
      setTest: function (oe) {
        oe ? me(i.DEPTH_TEST) : he(i.DEPTH_TEST);
      },
      setMask: function (oe) {
        B !== oe && !R && (i.depthMask(oe), (B = oe));
      },
      setFunc: function (oe) {
        if ((ae && (oe = Jf[oe]), Y !== oe)) {
          switch (oe) {
            case us:
              i.depthFunc(i.NEVER);
              break;
            case ds:
              i.depthFunc(i.ALWAYS);
              break;
            case fs:
              i.depthFunc(i.LESS);
              break;
            case hi:
              i.depthFunc(i.LEQUAL);
              break;
            case ps:
              i.depthFunc(i.EQUAL);
              break;
            case ms:
              i.depthFunc(i.GEQUAL);
              break;
            case gs:
              i.depthFunc(i.GREATER);
              break;
            case _s:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Y = oe;
        }
      },
      setLocked: function (oe) {
        R = oe;
      },
      setClear: function (oe) {
        re !== oe && (i.clearDepth(oe), (re = oe));
      },
      reset: function () {
        ((R = !1), (B = null), (Y = null), (re = null));
      },
    };
  }
  function n() {
    let R = !1,
      ae = null,
      B = null,
      Y = null,
      re = null,
      oe = null,
      Be = null,
      rt = null,
      Mt = null;
    return {
      setTest: function (Ve) {
        R || (Ve ? me(i.STENCIL_TEST) : he(i.STENCIL_TEST));
      },
      setMask: function (Ve) {
        ae !== Ve && !R && (i.stencilMask(Ve), (ae = Ve));
      },
      setFunc: function (Ve, St, jt) {
        (B !== Ve || Y !== St || re !== jt) &&
          (i.stencilFunc(Ve, St, jt), (B = Ve), (Y = St), (re = jt));
      },
      setOp: function (Ve, St, jt) {
        (oe !== Ve || Be !== St || rt !== jt) &&
          (i.stencilOp(Ve, St, jt), (oe = Ve), (Be = St), (rt = jt));
      },
      setLocked: function (Ve) {
        R = Ve;
      },
      setClear: function (Ve) {
        Mt !== Ve && (i.clearStencil(Ve), (Mt = Ve));
      },
      reset: function () {
        ((R = !1),
          (ae = null),
          (B = null),
          (Y = null),
          (re = null),
          (oe = null),
          (Be = null),
          (rt = null),
          (Mt = null));
      },
    };
  }
  const r = new e(),
    s = new t(),
    a = new n(),
    o = new WeakMap(),
    l = new WeakMap();
  let c = {},
    u = {},
    f = new WeakMap(),
    p = [],
    m = null,
    x = !1,
    S = null,
    d = null,
    h = null,
    T = null,
    E = null,
    A = null,
    O = null,
    P = new qe(0, 0, 0),
    b = 0,
    F = !1,
    te = null,
    g = null,
    M = null,
    V = null,
    z = null;
  const q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1,
    G = 0;
  const $ = i.getParameter(i.VERSION);
  $.indexOf("WebGL") !== -1
    ? ((G = parseFloat(/^WebGL (\d)/.exec($)[1])), (K = G >= 1))
    : $.indexOf("OpenGL ES") !== -1 &&
      ((G = parseFloat(/^OpenGL ES (\d)/.exec($)[1])), (K = G >= 2));
  let H = null,
    le = {};
  const ce = i.getParameter(i.SCISSOR_BOX),
    _e = i.getParameter(i.VIEWPORT),
    Ge = new tt().fromArray(ce),
    Ye = new tt().fromArray(_e);
  function k(R, ae, B, Y) {
    const re = new Uint8Array(4),
      oe = i.createTexture();
    (i.bindTexture(R, oe),
      i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST));
    for (let Be = 0; Be < B; Be++)
      R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(ae, 0, i.RGBA, 1, 1, Y, 0, i.RGBA, i.UNSIGNED_BYTE, re)
        : i.texImage2D(
            ae + Be,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            re,
          );
    return oe;
  }
  const J = {};
  ((J[i.TEXTURE_2D] = k(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (J[i.TEXTURE_CUBE_MAP] = k(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (J[i.TEXTURE_2D_ARRAY] = k(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (J[i.TEXTURE_3D] = k(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    me(i.DEPTH_TEST),
    s.setFunc(hi),
    Ie(!1),
    ze(Sa),
    me(i.CULL_FACE),
    w(En));
  function me(R) {
    c[R] !== !0 && (i.enable(R), (c[R] = !0));
  }
  function he(R) {
    c[R] !== !1 && (i.disable(R), (c[R] = !1));
  }
  function Ce(R, ae) {
    return u[R] !== ae
      ? (i.bindFramebuffer(R, ae),
        (u[R] = ae),
        R === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = ae),
        R === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = ae),
        !0)
      : !1;
  }
  function ye(R, ae) {
    let B = p,
      Y = !1;
    if (R) {
      ((B = f.get(ae)), B === void 0 && ((B = []), f.set(ae, B)));
      const re = R.textures;
      if (B.length !== re.length || B[0] !== i.COLOR_ATTACHMENT0) {
        for (let oe = 0, Be = re.length; oe < Be; oe++)
          B[oe] = i.COLOR_ATTACHMENT0 + oe;
        ((B.length = re.length), (Y = !0));
      }
    } else B[0] !== i.BACK && ((B[0] = i.BACK), (Y = !0));
    Y && i.drawBuffers(B);
  }
  function Fe(R) {
    return m !== R ? (i.useProgram(R), (m = R), !0) : !1;
  }
  const Ke = {
    [In]: i.FUNC_ADD,
    [dl]: i.FUNC_SUBTRACT,
    [fl]: i.FUNC_REVERSE_SUBTRACT,
  };
  ((Ke[pl] = i.MIN), (Ke[ml] = i.MAX));
  const Oe = {
    [gl]: i.ZERO,
    [_l]: i.ONE,
    [vl]: i.SRC_COLOR,
    [cs]: i.SRC_ALPHA,
    [Tl]: i.SRC_ALPHA_SATURATE,
    [El]: i.DST_COLOR,
    [Ml]: i.DST_ALPHA,
    [xl]: i.ONE_MINUS_SRC_COLOR,
    [hs]: i.ONE_MINUS_SRC_ALPHA,
    [yl]: i.ONE_MINUS_DST_COLOR,
    [Sl]: i.ONE_MINUS_DST_ALPHA,
    [Al]: i.CONSTANT_COLOR,
    [bl]: i.ONE_MINUS_CONSTANT_COLOR,
    [wl]: i.CONSTANT_ALPHA,
    [Rl]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function w(R, ae, B, Y, re, oe, Be, rt, Mt, Ve) {
    if (R === En) {
      x === !0 && (he(i.BLEND), (x = !1));
      return;
    }
    if ((x === !1 && (me(i.BLEND), (x = !0)), R !== ul)) {
      if (R !== S || Ve !== F) {
        if (
          ((d !== In || E !== In) &&
            (i.blendEquation(i.FUNC_ADD), (d = In), (E = In)),
          Ve)
        )
          switch (R) {
            case ii:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Ea:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case ya:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ta:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case ii:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Ea:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case ya:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ta:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        ((h = null),
          (T = null),
          (A = null),
          (O = null),
          P.set(0, 0, 0),
          (b = 0),
          (S = R),
          (F = Ve));
      }
      return;
    }
    ((re = re || ae),
      (oe = oe || B),
      (Be = Be || Y),
      (ae !== d || re !== E) &&
        (i.blendEquationSeparate(Ke[ae], Ke[re]), (d = ae), (E = re)),
      (B !== h || Y !== T || oe !== A || Be !== O) &&
        (i.blendFuncSeparate(Oe[B], Oe[Y], Oe[oe], Oe[Be]),
        (h = B),
        (T = Y),
        (A = oe),
        (O = Be)),
      (rt.equals(P) === !1 || Mt !== b) &&
        (i.blendColor(rt.r, rt.g, rt.b, Mt), P.copy(rt), (b = Mt)),
      (S = R),
      (F = !1));
  }
  function At(R, ae) {
    R.side === an ? he(i.CULL_FACE) : me(i.CULL_FACE);
    let B = R.side === Tt;
    (ae && (B = !B),
      Ie(B),
      R.blending === ii && R.transparent === !1
        ? w(En)
        : w(
            R.blending,
            R.blendEquation,
            R.blendSrc,
            R.blendDst,
            R.blendEquationAlpha,
            R.blendSrcAlpha,
            R.blendDstAlpha,
            R.blendColor,
            R.blendAlpha,
            R.premultipliedAlpha,
          ),
      s.setFunc(R.depthFunc),
      s.setTest(R.depthTest),
      s.setMask(R.depthWrite),
      r.setMask(R.colorWrite));
    const Y = R.stencilWrite;
    (a.setTest(Y),
      Y &&
        (a.setMask(R.stencilWriteMask),
        a.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask),
        a.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)),
      je(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits),
      R.alphaToCoverage === !0
        ? me(i.SAMPLE_ALPHA_TO_COVERAGE)
        : he(i.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Ie(R) {
    te !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), (te = R));
  }
  function ze(R) {
    (R !== ll
      ? (me(i.CULL_FACE),
        R !== g &&
          (R === Sa
            ? i.cullFace(i.BACK)
            : R === cl
              ? i.cullFace(i.FRONT)
              : i.cullFace(i.FRONT_AND_BACK)))
      : he(i.CULL_FACE),
      (g = R));
  }
  function Ae(R) {
    R !== M && (K && i.lineWidth(R), (M = R));
  }
  function je(R, ae, B) {
    R
      ? (me(i.POLYGON_OFFSET_FILL),
        (V !== ae || z !== B) && (i.polygonOffset(ae, B), (V = ae), (z = B)))
      : he(i.POLYGON_OFFSET_FILL);
  }
  function Re(R) {
    R ? me(i.SCISSOR_TEST) : he(i.SCISSOR_TEST);
  }
  function y(R) {
    (R === void 0 && (R = i.TEXTURE0 + q - 1),
      H !== R && (i.activeTexture(R), (H = R)));
  }
  function _(R, ae, B) {
    B === void 0 && (H === null ? (B = i.TEXTURE0 + q - 1) : (B = H));
    let Y = le[B];
    (Y === void 0 && ((Y = { type: void 0, texture: void 0 }), (le[B] = Y)),
      (Y.type !== R || Y.texture !== ae) &&
        (H !== B && (i.activeTexture(B), (H = B)),
        i.bindTexture(R, ae || J[R]),
        (Y.type = R),
        (Y.texture = ae)));
  }
  function L() {
    const R = le[H];
    R !== void 0 &&
      R.type !== void 0 &&
      (i.bindTexture(R.type, null), (R.type = void 0), (R.texture = void 0));
  }
  function X() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function W() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ve() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ie() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ue() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function He() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Q() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function de() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function be() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function we(R) {
    Ge.equals(R) === !1 && (i.scissor(R.x, R.y, R.z, R.w), Ge.copy(R));
  }
  function fe(R) {
    Ye.equals(R) === !1 && (i.viewport(R.x, R.y, R.z, R.w), Ye.copy(R));
  }
  function Ne(R, ae) {
    let B = l.get(ae);
    B === void 0 && ((B = new WeakMap()), l.set(ae, B));
    let Y = B.get(R);
    Y === void 0 && ((Y = i.getUniformBlockIndex(ae, R.name)), B.set(R, Y));
  }
  function Pe(R, ae) {
    const Y = l.get(ae).get(R);
    o.get(ae) !== Y &&
      (i.uniformBlockBinding(ae, Y, R.__bindingPointIndex), o.set(ae, Y));
  }
  function Ze() {
    (i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (c = {}),
      (H = null),
      (le = {}),
      (u = {}),
      (f = new WeakMap()),
      (p = []),
      (m = null),
      (x = !1),
      (S = null),
      (d = null),
      (h = null),
      (T = null),
      (E = null),
      (A = null),
      (O = null),
      (P = new qe(0, 0, 0)),
      (b = 0),
      (F = !1),
      (te = null),
      (g = null),
      (M = null),
      (V = null),
      (z = null),
      Ge.set(0, 0, i.canvas.width, i.canvas.height),
      Ye.set(0, 0, i.canvas.width, i.canvas.height),
      r.reset(),
      s.reset(),
      a.reset());
  }
  return {
    buffers: { color: r, depth: s, stencil: a },
    enable: me,
    disable: he,
    bindFramebuffer: Ce,
    drawBuffers: ye,
    useProgram: Fe,
    setBlending: w,
    setMaterial: At,
    setFlipSided: Ie,
    setCullFace: ze,
    setLineWidth: Ae,
    setPolygonOffset: je,
    setScissorTest: Re,
    activeTexture: y,
    bindTexture: _,
    unbindTexture: L,
    compressedTexImage2D: X,
    compressedTexImage3D: Z,
    texImage2D: de,
    texImage3D: be,
    updateUBOMapping: Ne,
    uniformBlockBinding: Pe,
    texStorage2D: He,
    texStorage3D: Q,
    texSubImage2D: W,
    texSubImage3D: ve,
    compressedTexSubImage2D: ie,
    compressedTexSubImage3D: ue,
    scissor: we,
    viewport: fe,
    reset: Ze,
  };
}
function po(i, e, t, n) {
  const r = ep(n);
  switch (t) {
    case Ao:
      return i * e;
    case wo:
      return i * e;
    case Ro:
      return i * e * 2;
    case Co:
      return ((i * e) / r.components) * r.byteLength;
    case na:
      return ((i * e) / r.components) * r.byteLength;
    case ia:
      return ((i * e * 2) / r.components) * r.byteLength;
    case ra:
      return ((i * e * 2) / r.components) * r.byteLength;
    case bo:
      return ((i * e * 3) / r.components) * r.byteLength;
    case ft:
      return ((i * e * 4) / r.components) * r.byteLength;
    case sa:
      return ((i * e * 4) / r.components) * r.byteLength;
    case sr:
    case ar:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case or:
    case lr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ys:
    case As:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case Es:
    case Ts:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case bs:
    case ws:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Rs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Cs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ps:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ds:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ls:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Us:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Is:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ns:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Fs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Os:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Bs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case zs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Hs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Gs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Vs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case cr:
    case ks:
    case Ws:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Po:
    case Xs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case qs:
    case Ys:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function ep(i) {
  switch (i) {
    case hn:
    case Eo:
      return { byteLength: 1, components: 1 };
    case Ai:
    case yo:
    case Tn:
      return { byteLength: 2, components: 1 };
    case ea:
    case ta:
      return { byteLength: 2, components: 4 };
    case Bn:
    case Qs:
    case on:
      return { byteLength: 4, components: 1 };
    case To:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function tp(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new Ue(),
    u = new WeakMap();
  let f;
  const p = new WeakMap();
  let m = !1;
  try {
    m =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function x(y, _) {
    return m ? new OffscreenCanvas(y, _) : wi("canvas");
  }
  function S(y, _, L) {
    let X = 1;
    const Z = Re(y);
    if (
      ((Z.width > L || Z.height > L) && (X = L / Math.max(Z.width, Z.height)),
      X < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && y instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && y instanceof VideoFrame)
      ) {
        const W = Math.floor(X * Z.width),
          ve = Math.floor(X * Z.height);
        f === void 0 && (f = x(W, ve));
        const ie = _ ? x(W, ve) : f;
        return (
          (ie.width = W),
          (ie.height = ve),
          ie.getContext("2d").drawImage(y, 0, 0, W, ve),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              Z.width +
              "x" +
              Z.height +
              ") to (" +
              W +
              "x" +
              ve +
              ").",
          ),
          ie
        );
      } else
        return (
          "data" in y &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                Z.width +
                "x" +
                Z.height +
                ").",
            ),
          y
        );
    return y;
  }
  function d(y) {
    return y.generateMipmaps && y.minFilter !== _t && y.minFilter !== dt;
  }
  function h(y) {
    i.generateMipmap(y);
  }
  function T(y, _, L, X, Z = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          y +
          "'",
      );
    }
    let W = _;
    if (
      (_ === i.RED &&
        (L === i.FLOAT && (W = i.R32F),
        L === i.HALF_FLOAT && (W = i.R16F),
        L === i.UNSIGNED_BYTE && (W = i.R8)),
      _ === i.RED_INTEGER &&
        (L === i.UNSIGNED_BYTE && (W = i.R8UI),
        L === i.UNSIGNED_SHORT && (W = i.R16UI),
        L === i.UNSIGNED_INT && (W = i.R32UI),
        L === i.BYTE && (W = i.R8I),
        L === i.SHORT && (W = i.R16I),
        L === i.INT && (W = i.R32I)),
      _ === i.RG &&
        (L === i.FLOAT && (W = i.RG32F),
        L === i.HALF_FLOAT && (W = i.RG16F),
        L === i.UNSIGNED_BYTE && (W = i.RG8)),
      _ === i.RG_INTEGER &&
        (L === i.UNSIGNED_BYTE && (W = i.RG8UI),
        L === i.UNSIGNED_SHORT && (W = i.RG16UI),
        L === i.UNSIGNED_INT && (W = i.RG32UI),
        L === i.BYTE && (W = i.RG8I),
        L === i.SHORT && (W = i.RG16I),
        L === i.INT && (W = i.RG32I)),
      _ === i.RGB_INTEGER &&
        (L === i.UNSIGNED_BYTE && (W = i.RGB8UI),
        L === i.UNSIGNED_SHORT && (W = i.RGB16UI),
        L === i.UNSIGNED_INT && (W = i.RGB32UI),
        L === i.BYTE && (W = i.RGB8I),
        L === i.SHORT && (W = i.RGB16I),
        L === i.INT && (W = i.RGB32I)),
      _ === i.RGBA_INTEGER &&
        (L === i.UNSIGNED_BYTE && (W = i.RGBA8UI),
        L === i.UNSIGNED_SHORT && (W = i.RGBA16UI),
        L === i.UNSIGNED_INT && (W = i.RGBA32UI),
        L === i.BYTE && (W = i.RGBA8I),
        L === i.SHORT && (W = i.RGBA16I),
        L === i.INT && (W = i.RGBA32I)),
      _ === i.RGB && L === i.UNSIGNED_INT_5_9_9_9_REV && (W = i.RGB9_E5),
      _ === i.RGBA)
    ) {
      const ve = Z ? dr : Xe.getTransfer(X);
      (L === i.FLOAT && (W = i.RGBA32F),
        L === i.HALF_FLOAT && (W = i.RGBA16F),
        L === i.UNSIGNED_BYTE && (W = ve === Qe ? i.SRGB8_ALPHA8 : i.RGBA8),
        L === i.UNSIGNED_SHORT_4_4_4_4 && (W = i.RGBA4),
        L === i.UNSIGNED_SHORT_5_5_5_1 && (W = i.RGB5_A1));
    }
    return (
      (W === i.R16F ||
        W === i.R32F ||
        W === i.RG16F ||
        W === i.RG32F ||
        W === i.RGBA16F ||
        W === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      W
    );
  }
  function E(y, _) {
    let L;
    return (
      y
        ? _ === null || _ === Bn || _ === fi
          ? (L = i.DEPTH24_STENCIL8)
          : _ === on
            ? (L = i.DEPTH32F_STENCIL8)
            : _ === Ai &&
              ((L = i.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : _ === null || _ === Bn || _ === fi
          ? (L = i.DEPTH_COMPONENT24)
          : _ === on
            ? (L = i.DEPTH_COMPONENT32F)
            : _ === Ai && (L = i.DEPTH_COMPONENT16),
      L
    );
  }
  function A(y, _) {
    return d(y) === !0 ||
      (y.isFramebufferTexture && y.minFilter !== _t && y.minFilter !== dt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : y.mipmaps !== void 0 && y.mipmaps.length > 0
        ? y.mipmaps.length
        : y.isCompressedTexture && Array.isArray(y.image)
          ? _.mipmaps.length
          : 1;
  }
  function O(y) {
    const _ = y.target;
    (_.removeEventListener("dispose", O),
      b(_),
      _.isVideoTexture && u.delete(_));
  }
  function P(y) {
    const _ = y.target;
    (_.removeEventListener("dispose", P), te(_));
  }
  function b(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0) return;
    const L = y.source,
      X = p.get(L);
    if (X) {
      const Z = X[_.__cacheKey];
      (Z.usedTimes--,
        Z.usedTimes === 0 && F(y),
        Object.keys(X).length === 0 && p.delete(L));
    }
    n.remove(y);
  }
  function F(y) {
    const _ = n.get(y);
    i.deleteTexture(_.__webglTexture);
    const L = y.source,
      X = p.get(L);
    (delete X[_.__cacheKey], a.memory.textures--);
  }
  function te(y) {
    const _ = n.get(y);
    if ((y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget))
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(_.__webglFramebuffer[X]))
          for (let Z = 0; Z < _.__webglFramebuffer[X].length; Z++)
            i.deleteFramebuffer(_.__webglFramebuffer[X][Z]);
        else i.deleteFramebuffer(_.__webglFramebuffer[X]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[X]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let X = 0; X < _.__webglFramebuffer.length; X++)
          i.deleteFramebuffer(_.__webglFramebuffer[X]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let X = 0; X < _.__webglColorRenderbuffer.length; X++)
          _.__webglColorRenderbuffer[X] &&
            i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);
      _.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const L = y.textures;
    for (let X = 0, Z = L.length; X < Z; X++) {
      const W = n.get(L[X]);
      (W.__webglTexture &&
        (i.deleteTexture(W.__webglTexture), a.memory.textures--),
        n.remove(L[X]));
    }
    n.remove(y);
  }
  let g = 0;
  function M() {
    g = 0;
  }
  function V() {
    const y = g;
    return (
      y >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            y +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (g += 1),
      y
    );
  }
  function z(y) {
    const _ = [];
    return (
      _.push(y.wrapS),
      _.push(y.wrapT),
      _.push(y.wrapR || 0),
      _.push(y.magFilter),
      _.push(y.minFilter),
      _.push(y.anisotropy),
      _.push(y.internalFormat),
      _.push(y.format),
      _.push(y.type),
      _.push(y.generateMipmaps),
      _.push(y.premultiplyAlpha),
      _.push(y.flipY),
      _.push(y.unpackAlignment),
      _.push(y.colorSpace),
      _.join()
    );
  }
  function q(y, _) {
    const L = n.get(y);
    if (
      (y.isVideoTexture && Ae(y),
      y.isRenderTargetTexture === !1 &&
        y.version > 0 &&
        L.__version !== y.version)
    ) {
      const X = y.image;
      if (X === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (X.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        Ye(L, y, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, L.__webglTexture, i.TEXTURE0 + _);
  }
  function K(y, _) {
    const L = n.get(y);
    if (y.version > 0 && L.__version !== y.version) {
      Ye(L, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, L.__webglTexture, i.TEXTURE0 + _);
  }
  function G(y, _) {
    const L = n.get(y);
    if (y.version > 0 && L.__version !== y.version) {
      Ye(L, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, L.__webglTexture, i.TEXTURE0 + _);
  }
  function $(y, _) {
    const L = n.get(y);
    if (y.version > 0 && L.__version !== y.version) {
      k(L, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + _);
  }
  const H = { [Ms]: i.REPEAT, [Wt]: i.CLAMP_TO_EDGE, [Ss]: i.MIRRORED_REPEAT },
    le = {
      [_t]: i.NEAREST,
      [Bl]: i.NEAREST_MIPMAP_NEAREST,
      [Oi]: i.NEAREST_MIPMAP_LINEAR,
      [dt]: i.LINEAR,
      [Pr]: i.LINEAR_MIPMAP_NEAREST,
      [Fn]: i.LINEAR_MIPMAP_LINEAR,
    },
    ce = {
      [Wl]: i.NEVER,
      [Zl]: i.ALWAYS,
      [Xl]: i.LESS,
      [Do]: i.LEQUAL,
      [ql]: i.EQUAL,
      [Kl]: i.GEQUAL,
      [Yl]: i.GREATER,
      [$l]: i.NOTEQUAL,
    };
  function _e(y, _) {
    if (
      (_.type === on &&
        e.has("OES_texture_float_linear") === !1 &&
        (_.magFilter === dt ||
          _.magFilter === Pr ||
          _.magFilter === Oi ||
          _.magFilter === Fn ||
          _.minFilter === dt ||
          _.minFilter === Pr ||
          _.minFilter === Oi ||
          _.minFilter === Fn) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      i.texParameteri(y, i.TEXTURE_WRAP_S, H[_.wrapS]),
      i.texParameteri(y, i.TEXTURE_WRAP_T, H[_.wrapT]),
      (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(y, i.TEXTURE_WRAP_R, H[_.wrapR]),
      i.texParameteri(y, i.TEXTURE_MAG_FILTER, le[_.magFilter]),
      i.texParameteri(y, i.TEXTURE_MIN_FILTER, le[_.minFilter]),
      _.compareFunction &&
        (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, ce[_.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        _.magFilter === _t ||
        (_.minFilter !== Oi && _.minFilter !== Fn) ||
        (_.type === on && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const L = e.get("EXT_texture_filter_anisotropic");
        (i.texParameterf(
          y,
          L.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy()),
        ),
          (n.get(_).__currentAnisotropy = _.anisotropy));
      }
    }
  }
  function Ge(y, _) {
    let L = !1;
    y.__webglInit === void 0 &&
      ((y.__webglInit = !0), _.addEventListener("dispose", O));
    const X = _.source;
    let Z = p.get(X);
    Z === void 0 && ((Z = {}), p.set(X, Z));
    const W = z(_);
    if (W !== y.__cacheKey) {
      (Z[W] === void 0 &&
        ((Z[W] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (L = !0)),
        Z[W].usedTimes++);
      const ve = Z[y.__cacheKey];
      (ve !== void 0 &&
        (Z[y.__cacheKey].usedTimes--, ve.usedTimes === 0 && F(_)),
        (y.__cacheKey = W),
        (y.__webglTexture = Z[W].texture));
    }
    return L;
  }
  function Ye(y, _, L) {
    let X = i.TEXTURE_2D;
    ((_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (X = i.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (X = i.TEXTURE_3D));
    const Z = Ge(y, _),
      W = _.source;
    t.bindTexture(X, y.__webglTexture, i.TEXTURE0 + L);
    const ve = n.get(W);
    if (W.version !== ve.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + L);
      const ie = Xe.getPrimaries(Xe.workingColorSpace),
        ue = _.colorSpace === Mn ? null : Xe.getPrimaries(_.colorSpace),
        He =
          _.colorSpace === Mn || ie === ue ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, He));
      let Q = S(_.image, !1, r.maxTextureSize);
      Q = je(_, Q);
      const de = s.convert(_.format, _.colorSpace),
        be = s.convert(_.type);
      let we = T(_.internalFormat, de, be, _.colorSpace, _.isVideoTexture);
      _e(X, _);
      let fe;
      const Ne = _.mipmaps,
        Pe = _.isVideoTexture !== !0,
        Ze = ve.__version === void 0 || Z === !0,
        R = W.dataReady,
        ae = A(_, Q);
      if (_.isDepthTexture)
        ((we = E(_.format === pi, _.type)),
          Ze &&
            (Pe
              ? t.texStorage2D(i.TEXTURE_2D, 1, we, Q.width, Q.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  we,
                  Q.width,
                  Q.height,
                  0,
                  de,
                  be,
                  null,
                )));
      else if (_.isDataTexture)
        if (Ne.length > 0) {
          Pe &&
            Ze &&
            t.texStorage2D(i.TEXTURE_2D, ae, we, Ne[0].width, Ne[0].height);
          for (let B = 0, Y = Ne.length; B < Y; B++)
            ((fe = Ne[B]),
              Pe
                ? R &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    B,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    de,
                    be,
                    fe.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    B,
                    we,
                    fe.width,
                    fe.height,
                    0,
                    de,
                    be,
                    fe.data,
                  ));
          _.generateMipmaps = !1;
        } else
          Pe
            ? (Ze && t.texStorage2D(i.TEXTURE_2D, ae, we, Q.width, Q.height),
              R &&
                t.texSubImage2D(
                  i.TEXTURE_2D,
                  0,
                  0,
                  0,
                  Q.width,
                  Q.height,
                  de,
                  be,
                  Q.data,
                ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                we,
                Q.width,
                Q.height,
                0,
                de,
                be,
                Q.data,
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Pe &&
            Ze &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              ae,
              we,
              Ne[0].width,
              Ne[0].height,
              Q.depth,
            );
          for (let B = 0, Y = Ne.length; B < Y; B++)
            if (((fe = Ne[B]), _.format !== ft))
              if (de !== null)
                if (Pe) {
                  if (R)
                    if (_.layerUpdates.size > 0) {
                      const re = po(fe.width, fe.height, _.format, _.type);
                      for (const oe of _.layerUpdates) {
                        const Be = fe.data.subarray(
                          (oe * re) / fe.data.BYTES_PER_ELEMENT,
                          ((oe + 1) * re) / fe.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          B,
                          0,
                          0,
                          oe,
                          fe.width,
                          fe.height,
                          1,
                          de,
                          Be,
                          0,
                          0,
                        );
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        B,
                        0,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        Q.depth,
                        de,
                        fe.data,
                        0,
                        0,
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    B,
                    we,
                    fe.width,
                    fe.height,
                    Q.depth,
                    0,
                    fe.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              Pe
                ? R &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    B,
                    0,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    Q.depth,
                    de,
                    be,
                    fe.data,
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    B,
                    we,
                    fe.width,
                    fe.height,
                    Q.depth,
                    0,
                    de,
                    be,
                    fe.data,
                  );
        } else {
          Pe &&
            Ze &&
            t.texStorage2D(i.TEXTURE_2D, ae, we, Ne[0].width, Ne[0].height);
          for (let B = 0, Y = Ne.length; B < Y; B++)
            ((fe = Ne[B]),
              _.format !== ft
                ? de !== null
                  ? Pe
                    ? R &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        B,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        de,
                        fe.data,
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        B,
                        we,
                        fe.width,
                        fe.height,
                        0,
                        fe.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : Pe
                  ? R &&
                    t.texSubImage2D(
                      i.TEXTURE_2D,
                      B,
                      0,
                      0,
                      fe.width,
                      fe.height,
                      de,
                      be,
                      fe.data,
                    )
                  : t.texImage2D(
                      i.TEXTURE_2D,
                      B,
                      we,
                      fe.width,
                      fe.height,
                      0,
                      de,
                      be,
                      fe.data,
                    ));
        }
      else if (_.isDataArrayTexture)
        if (Pe) {
          if (
            (Ze &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                ae,
                we,
                Q.width,
                Q.height,
                Q.depth,
              ),
            R)
          )
            if (_.layerUpdates.size > 0) {
              const B = po(Q.width, Q.height, _.format, _.type);
              for (const Y of _.layerUpdates) {
                const re = Q.data.subarray(
                  (Y * B) / Q.data.BYTES_PER_ELEMENT,
                  ((Y + 1) * B) / Q.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  Y,
                  Q.width,
                  Q.height,
                  1,
                  de,
                  be,
                  re,
                );
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                de,
                be,
                Q.data,
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            we,
            Q.width,
            Q.height,
            Q.depth,
            0,
            de,
            be,
            Q.data,
          );
      else if (_.isData3DTexture)
        Pe
          ? (Ze &&
              t.texStorage3D(i.TEXTURE_3D, ae, we, Q.width, Q.height, Q.depth),
            R &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                de,
                be,
                Q.data,
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              we,
              Q.width,
              Q.height,
              Q.depth,
              0,
              de,
              be,
              Q.data,
            );
      else if (_.isFramebufferTexture) {
        if (Ze)
          if (Pe) t.texStorage2D(i.TEXTURE_2D, ae, we, Q.width, Q.height);
          else {
            let B = Q.width,
              Y = Q.height;
            for (let re = 0; re < ae; re++)
              (t.texImage2D(i.TEXTURE_2D, re, we, B, Y, 0, de, be, null),
                (B >>= 1),
                (Y >>= 1));
          }
      } else if (Ne.length > 0) {
        if (Pe && Ze) {
          const B = Re(Ne[0]);
          t.texStorage2D(i.TEXTURE_2D, ae, we, B.width, B.height);
        }
        for (let B = 0, Y = Ne.length; B < Y; B++)
          ((fe = Ne[B]),
            Pe
              ? R && t.texSubImage2D(i.TEXTURE_2D, B, 0, 0, de, be, fe)
              : t.texImage2D(i.TEXTURE_2D, B, we, de, be, fe));
        _.generateMipmaps = !1;
      } else if (Pe) {
        if (Ze) {
          const B = Re(Q);
          t.texStorage2D(i.TEXTURE_2D, ae, we, B.width, B.height);
        }
        R && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, de, be, Q);
      } else t.texImage2D(i.TEXTURE_2D, 0, we, de, be, Q);
      (d(_) && h(X), (ve.__version = W.version), _.onUpdate && _.onUpdate(_));
    }
    y.__version = _.version;
  }
  function k(y, _, L) {
    if (_.image.length !== 6) return;
    const X = Ge(y, _),
      Z = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + L);
    const W = n.get(Z);
    if (Z.version !== W.__version || X === !0) {
      t.activeTexture(i.TEXTURE0 + L);
      const ve = Xe.getPrimaries(Xe.workingColorSpace),
        ie = _.colorSpace === Mn ? null : Xe.getPrimaries(_.colorSpace),
        ue =
          _.colorSpace === Mn || ve === ie ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue));
      const He = _.isCompressedTexture || _.image[0].isCompressedTexture,
        Q = _.image[0] && _.image[0].isDataTexture,
        de = [];
      for (let Y = 0; Y < 6; Y++)
        (!He && !Q
          ? (de[Y] = S(_.image[Y], !0, r.maxCubemapSize))
          : (de[Y] = Q ? _.image[Y].image : _.image[Y]),
          (de[Y] = je(_, de[Y])));
      const be = de[0],
        we = s.convert(_.format, _.colorSpace),
        fe = s.convert(_.type),
        Ne = T(_.internalFormat, we, fe, _.colorSpace),
        Pe = _.isVideoTexture !== !0,
        Ze = W.__version === void 0 || X === !0,
        R = Z.dataReady;
      let ae = A(_, be);
      _e(i.TEXTURE_CUBE_MAP, _);
      let B;
      if (He) {
        Pe &&
          Ze &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, Ne, be.width, be.height);
        for (let Y = 0; Y < 6; Y++) {
          B = de[Y].mipmaps;
          for (let re = 0; re < B.length; re++) {
            const oe = B[re];
            _.format !== ft
              ? we !== null
                ? Pe
                  ? R &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                      re,
                      0,
                      0,
                      oe.width,
                      oe.height,
                      we,
                      oe.data,
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                      re,
                      Ne,
                      oe.width,
                      oe.height,
                      0,
                      oe.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : Pe
                ? R &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                    re,
                    0,
                    0,
                    oe.width,
                    oe.height,
                    we,
                    fe,
                    oe.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                    re,
                    Ne,
                    oe.width,
                    oe.height,
                    0,
                    we,
                    fe,
                    oe.data,
                  );
          }
        }
      } else {
        if (((B = _.mipmaps), Pe && Ze)) {
          B.length > 0 && ae++;
          const Y = Re(de[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, Ne, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++)
          if (Q) {
            Pe
              ? R &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                  0,
                  0,
                  0,
                  de[Y].width,
                  de[Y].height,
                  we,
                  fe,
                  de[Y].data,
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                  0,
                  Ne,
                  de[Y].width,
                  de[Y].height,
                  0,
                  we,
                  fe,
                  de[Y].data,
                );
            for (let re = 0; re < B.length; re++) {
              const Be = B[re].image[Y].image;
              Pe
                ? R &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                    re + 1,
                    0,
                    0,
                    Be.width,
                    Be.height,
                    we,
                    fe,
                    Be.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                    re + 1,
                    Ne,
                    Be.width,
                    Be.height,
                    0,
                    we,
                    fe,
                    Be.data,
                  );
            }
          } else {
            Pe
              ? R &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                  0,
                  0,
                  0,
                  we,
                  fe,
                  de[Y],
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                  0,
                  Ne,
                  we,
                  fe,
                  de[Y],
                );
            for (let re = 0; re < B.length; re++) {
              const oe = B[re];
              Pe
                ? R &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                    re + 1,
                    0,
                    0,
                    we,
                    fe,
                    oe.image[Y],
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
                    re + 1,
                    Ne,
                    we,
                    fe,
                    oe.image[Y],
                  );
            }
          }
      }
      (d(_) && h(i.TEXTURE_CUBE_MAP),
        (W.__version = Z.version),
        _.onUpdate && _.onUpdate(_));
    }
    y.__version = _.version;
  }
  function J(y, _, L, X, Z, W) {
    const ve = s.convert(L.format, L.colorSpace),
      ie = s.convert(L.type),
      ue = T(L.internalFormat, ve, ie, L.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const Q = Math.max(1, _.width >> W),
        de = Math.max(1, _.height >> W);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(Z, W, ue, Q, de, _.depth, 0, ve, ie, null)
        : t.texImage2D(Z, W, ue, Q, de, 0, ve, ie, null);
    }
    (t.bindFramebuffer(i.FRAMEBUFFER, y),
      ze(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            X,
            Z,
            n.get(L).__webglTexture,
            0,
            Ie(_),
          )
        : (Z === i.TEXTURE_2D ||
            (Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(
            i.FRAMEBUFFER,
            X,
            Z,
            n.get(L).__webglTexture,
            W,
          ),
      t.bindFramebuffer(i.FRAMEBUFFER, null));
  }
  function me(y, _, L) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer)) {
      const X = _.depthTexture,
        Z = X && X.isDepthTexture ? X.type : null,
        W = E(_.stencilBuffer, Z),
        ve = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        ie = Ie(_);
      (ze(_)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            ie,
            W,
            _.width,
            _.height,
          )
        : L
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              ie,
              W,
              _.width,
              _.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, W, _.width, _.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, y));
    } else {
      const X = _.textures;
      for (let Z = 0; Z < X.length; Z++) {
        const W = X[Z],
          ve = s.convert(W.format, W.colorSpace),
          ie = s.convert(W.type),
          ue = T(W.internalFormat, ve, ie, W.colorSpace),
          He = Ie(_);
        L && ze(_) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              He,
              ue,
              _.width,
              _.height,
            )
          : ze(_)
            ? o.renderbufferStorageMultisampleEXT(
                i.RENDERBUFFER,
                He,
                ue,
                _.width,
                _.height,
              )
            : i.renderbufferStorage(i.RENDERBUFFER, ue, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function he(y, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, y),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    ((!n.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      q(_.depthTexture, 0));
    const X = n.get(_.depthTexture).__webglTexture,
      Z = Ie(_);
    if (_.depthTexture.format === ri)
      ze(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            X,
            0,
            Z,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            X,
            0,
          );
    else if (_.depthTexture.format === pi)
      ze(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            X,
            0,
            Z,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            X,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Ce(y) {
    const _ = n.get(y),
      L = y.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== y.depthTexture) {
      const X = y.depthTexture;
      if ((_.__depthDisposeCallback && _.__depthDisposeCallback(), X)) {
        const Z = () => {
          (delete _.__boundDepthTexture,
            delete _.__depthDisposeCallback,
            X.removeEventListener("dispose", Z));
        };
        (X.addEventListener("dispose", Z), (_.__depthDisposeCallback = Z));
      }
      _.__boundDepthTexture = X;
    }
    if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (L)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      he(_.__webglFramebuffer, y);
    } else if (L) {
      _.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[X]),
          _.__webglDepthbuffer[X] === void 0)
        )
          ((_.__webglDepthbuffer[X] = i.createRenderbuffer()),
            me(_.__webglDepthbuffer[X], y, !1));
        else {
          const Z = y.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            W = _.__webglDepthbuffer[X];
          (i.bindRenderbuffer(i.RENDERBUFFER, W),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, W));
        }
    } else if (
      (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
      _.__webglDepthbuffer === void 0)
    )
      ((_.__webglDepthbuffer = i.createRenderbuffer()),
        me(_.__webglDepthbuffer, y, !1));
    else {
      const X = y.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT,
        Z = _.__webglDepthbuffer;
      (i.bindRenderbuffer(i.RENDERBUFFER, Z),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, X, i.RENDERBUFFER, Z));
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ye(y, _, L) {
    const X = n.get(y);
    (_ !== void 0 &&
      J(
        X.__webglFramebuffer,
        y,
        y.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      L !== void 0 && Ce(y));
  }
  function Fe(y) {
    const _ = y.texture,
      L = n.get(y),
      X = n.get(_);
    y.addEventListener("dispose", P);
    const Z = y.textures,
      W = y.isWebGLCubeRenderTarget === !0,
      ve = Z.length > 1;
    if (
      (ve ||
        (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()),
        (X.__version = _.version),
        a.memory.textures++),
      W)
    ) {
      L.__webglFramebuffer = [];
      for (let ie = 0; ie < 6; ie++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          L.__webglFramebuffer[ie] = [];
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            L.__webglFramebuffer[ie][ue] = i.createFramebuffer();
        } else L.__webglFramebuffer[ie] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        L.__webglFramebuffer = [];
        for (let ie = 0; ie < _.mipmaps.length; ie++)
          L.__webglFramebuffer[ie] = i.createFramebuffer();
      } else L.__webglFramebuffer = i.createFramebuffer();
      if (ve)
        for (let ie = 0, ue = Z.length; ie < ue; ie++) {
          const He = n.get(Z[ie]);
          He.__webglTexture === void 0 &&
            ((He.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (y.samples > 0 && ze(y) === !1) {
        ((L.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (L.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, L.__webglMultisampledFramebuffer));
        for (let ie = 0; ie < Z.length; ie++) {
          const ue = Z[ie];
          ((L.__webglColorRenderbuffer[ie] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, L.__webglColorRenderbuffer[ie]));
          const He = s.convert(ue.format, ue.colorSpace),
            Q = s.convert(ue.type),
            de = T(
              ue.internalFormat,
              He,
              Q,
              ue.colorSpace,
              y.isXRRenderTarget === !0,
            ),
            be = Ie(y);
          (i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            be,
            de,
            y.width,
            y.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ie,
              i.RENDERBUFFER,
              L.__webglColorRenderbuffer[ie],
            ));
        }
        (i.bindRenderbuffer(i.RENDERBUFFER, null),
          y.depthBuffer &&
            ((L.__webglDepthRenderbuffer = i.createRenderbuffer()),
            me(L.__webglDepthRenderbuffer, y, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null));
      }
    }
    if (W) {
      (t.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture),
        _e(i.TEXTURE_CUBE_MAP, _));
      for (let ie = 0; ie < 6; ie++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            J(
              L.__webglFramebuffer[ie][ue],
              y,
              _,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + ie,
              ue,
            );
        else
          J(
            L.__webglFramebuffer[ie],
            y,
            _,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + ie,
            0,
          );
      (d(_) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (ve) {
      for (let ie = 0, ue = Z.length; ie < ue; ie++) {
        const He = Z[ie],
          Q = n.get(He);
        (t.bindTexture(i.TEXTURE_2D, Q.__webglTexture),
          _e(i.TEXTURE_2D, He),
          J(
            L.__webglFramebuffer,
            y,
            He,
            i.COLOR_ATTACHMENT0 + ie,
            i.TEXTURE_2D,
            0,
          ),
          d(He) && h(i.TEXTURE_2D));
      }
      t.unbindTexture();
    } else {
      let ie = i.TEXTURE_2D;
      if (
        ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) &&
          (ie = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(ie, X.__webglTexture),
        _e(ie, _),
        _.mipmaps && _.mipmaps.length > 0)
      )
        for (let ue = 0; ue < _.mipmaps.length; ue++)
          J(L.__webglFramebuffer[ue], y, _, i.COLOR_ATTACHMENT0, ie, ue);
      else J(L.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, ie, 0);
      (d(_) && h(ie), t.unbindTexture());
    }
    y.depthBuffer && Ce(y);
  }
  function Ke(y) {
    const _ = y.textures;
    for (let L = 0, X = _.length; L < X; L++) {
      const Z = _[L];
      if (d(Z)) {
        const W = y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D,
          ve = n.get(Z).__webglTexture;
        (t.bindTexture(W, ve), h(W), t.unbindTexture());
      }
    }
  }
  const Oe = [],
    w = [];
  function At(y) {
    if (y.samples > 0) {
      if (ze(y) === !1) {
        const _ = y.textures,
          L = y.width,
          X = y.height;
        let Z = i.COLOR_BUFFER_BIT;
        const W = y.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ve = n.get(y),
          ie = _.length > 1;
        if (ie)
          for (let ue = 0; ue < _.length; ue++)
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              ve.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.TEXTURE_2D,
                null,
                0,
              ));
        (t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer,
        ),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer));
        for (let ue = 0; ue < _.length; ue++) {
          if (
            (y.resolveDepthBuffer &&
              (y.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT),
              y.stencilBuffer &&
                y.resolveStencilBuffer &&
                (Z |= i.STENCIL_BUFFER_BIT)),
            ie)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              ve.__webglColorRenderbuffer[ue],
            );
            const He = n.get(_[ue]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              He,
              0,
            );
          }
          (i.blitFramebuffer(0, 0, L, X, 0, 0, L, X, Z, i.NEAREST),
            l === !0 &&
              ((Oe.length = 0),
              (w.length = 0),
              Oe.push(i.COLOR_ATTACHMENT0 + ue),
              y.depthBuffer &&
                y.resolveDepthBuffer === !1 &&
                (Oe.push(W),
                w.push(W),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, w)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Oe)));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          ie)
        )
          for (let ue = 0; ue < _.length; ue++) {
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              ve.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.RENDERBUFFER,
                ve.__webglColorRenderbuffer[ue],
              ));
            const He = n.get(_[ue]).__webglTexture;
            (t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.TEXTURE_2D,
                He,
                0,
              ));
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer,
        );
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && l) {
        const _ = y.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Ie(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function ze(y) {
    const _ = n.get(y);
    return (
      y.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function Ae(y) {
    const _ = a.render.frame;
    u.get(y) !== _ && (u.set(y, _), y.update());
  }
  function je(y, _) {
    const L = y.colorSpace,
      X = y.format,
      Z = y.type;
    return (
      y.isCompressedTexture === !0 ||
        y.isVideoTexture === !0 ||
        (L !== Xt &&
          L !== Mn &&
          (Xe.getTransfer(L) === Qe
            ? (X !== ft || Z !== hn) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                L,
              ))),
      _
    );
  }
  function Re(y) {
    return (
      typeof HTMLImageElement < "u" && y instanceof HTMLImageElement
        ? ((c.width = y.naturalWidth || y.width),
          (c.height = y.naturalHeight || y.height))
        : typeof VideoFrame < "u" && y instanceof VideoFrame
          ? ((c.width = y.displayWidth), (c.height = y.displayHeight))
          : ((c.width = y.width), (c.height = y.height)),
      c
    );
  }
  ((this.allocateTextureUnit = V),
    (this.resetTextureUnits = M),
    (this.setTexture2D = q),
    (this.setTexture2DArray = K),
    (this.setTexture3D = G),
    (this.setTextureCube = $),
    (this.rebindTextures = ye),
    (this.setupRenderTarget = Fe),
    (this.updateRenderTargetMipmap = Ke),
    (this.updateMultisampleRenderTarget = At),
    (this.setupDepthRenderbuffer = Ce),
    (this.setupFrameBufferTexture = J),
    (this.useMultisampledRTT = ze));
}
function np(i, e) {
  function t(n, r = Mn) {
    let s;
    const a = Xe.getTransfer(r);
    if (n === hn) return i.UNSIGNED_BYTE;
    if (n === ea) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === ta) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === To) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Eo) return i.BYTE;
    if (n === yo) return i.SHORT;
    if (n === Ai) return i.UNSIGNED_SHORT;
    if (n === Qs) return i.INT;
    if (n === Bn) return i.UNSIGNED_INT;
    if (n === on) return i.FLOAT;
    if (n === Tn) return i.HALF_FLOAT;
    if (n === Ao) return i.ALPHA;
    if (n === bo) return i.RGB;
    if (n === ft) return i.RGBA;
    if (n === wo) return i.LUMINANCE;
    if (n === Ro) return i.LUMINANCE_ALPHA;
    if (n === ri) return i.DEPTH_COMPONENT;
    if (n === pi) return i.DEPTH_STENCIL;
    if (n === Co) return i.RED;
    if (n === na) return i.RED_INTEGER;
    if (n === ia) return i.RG;
    if (n === ra) return i.RG_INTEGER;
    if (n === sa) return i.RGBA_INTEGER;
    if (n === sr || n === ar || n === or || n === lr)
      if (a === Qe)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (n === sr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ar) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === or) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === lr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (n === sr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ar) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === or) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === lr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Es || n === ys || n === Ts || n === As)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (n === Es) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ys) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ts) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === As) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === bs || n === ws || n === Rs)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (n === bs || n === ws)
          return a === Qe ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Rs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === Cs ||
      n === Ps ||
      n === Ds ||
      n === Ls ||
      n === Us ||
      n === Is ||
      n === Ns ||
      n === Fs ||
      n === Os ||
      n === Bs ||
      n === zs ||
      n === Hs ||
      n === Gs ||
      n === Vs
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (n === Cs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ps)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ds)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Ls)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Us)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Is)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ns)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Fs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Os)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Bs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === zs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Hs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Gs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Vs)
          return a === Qe
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === cr || n === ks || n === Ws)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (n === cr)
          return a === Qe
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ks) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ws) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === Po || n === Xs || n === qs || n === Ys)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (n === cr) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Xs) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === qs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Ys) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === fi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class ip extends Ft {
  constructor(e = []) {
    (super(), (this.isArrayCamera = !0), (this.cameras = e));
  }
}
class rr extends Ut {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const rp = { type: "move" };
class as {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new rr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new rr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new N()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new N())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new rr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new N()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new N())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const S of e.hand.values()) {
          const d = t.getJointPose(S, n),
            h = this._getHandJoint(c, S);
          (d !== null &&
            (h.matrix.fromArray(d.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = d.radius)),
            (h.visible = d !== null));
        }
        const u = c.joints["index-finger-tip"],
          f = c.joints["thumb-tip"],
          p = u.position.distanceTo(f.position),
          m = 0.02,
          x = 0.005;
        c.inputState.pinching && p > m + x
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            p <= m - x &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(rp)));
    }
    return (
      o !== null && (o.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new rr();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n));
    }
    return e.joints[t.jointName];
  }
}
const sp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  ap = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class op {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new pt(),
        s = e.properties.get(r);
      ((s.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = r));
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new Ot({
          vertexShader: sp,
          fragmentShader: ap,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Lt(new Zt(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class lp extends gi {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      u = null,
      f = null,
      p = null,
      m = null,
      x = null;
    const S = new op(),
      d = t.getContextAttributes();
    let h = null,
      T = null;
    const E = [],
      A = [],
      O = new Ue();
    let P = null;
    const b = new Ft();
    (b.layers.enable(1), (b.viewport = new tt()));
    const F = new Ft();
    (F.layers.enable(2), (F.viewport = new tt()));
    const te = [b, F],
      g = new ip();
    (g.layers.enable(1), g.layers.enable(2));
    let M = null,
      V = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (k) {
        let J = E[k];
        return (
          J === void 0 && ((J = new as()), (E[k] = J)),
          J.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (k) {
        let J = E[k];
        return (J === void 0 && ((J = new as()), (E[k] = J)), J.getGripSpace());
      }),
      (this.getHand = function (k) {
        let J = E[k];
        return (J === void 0 && ((J = new as()), (E[k] = J)), J.getHandSpace());
      }));
    function z(k) {
      const J = A.indexOf(k.inputSource);
      if (J === -1) return;
      const me = E[J];
      me !== void 0 &&
        (me.update(k.inputSource, k.frame, c || a),
        me.dispatchEvent({ type: k.type, data: k.inputSource }));
    }
    function q() {
      (r.removeEventListener("select", z),
        r.removeEventListener("selectstart", z),
        r.removeEventListener("selectend", z),
        r.removeEventListener("squeeze", z),
        r.removeEventListener("squeezestart", z),
        r.removeEventListener("squeezeend", z),
        r.removeEventListener("end", q),
        r.removeEventListener("inputsourceschange", K));
      for (let k = 0; k < E.length; k++) {
        const J = A[k];
        J !== null && ((A[k] = null), E[k].disconnect(J));
      }
      ((M = null),
        (V = null),
        S.reset(),
        e.setRenderTarget(h),
        (m = null),
        (p = null),
        (f = null),
        (r = null),
        (T = null),
        Ye.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(P),
        e.setSize(O.width, O.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (k) {
      ((s = k),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (k) {
        ((o = k),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (k) {
        c = k;
      }),
      (this.getBaseLayer = function () {
        return p !== null ? p : m;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return x;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (k) {
        if (((r = k), r !== null)) {
          if (
            ((h = e.getRenderTarget()),
            r.addEventListener("select", z),
            r.addEventListener("selectstart", z),
            r.addEventListener("selectend", z),
            r.addEventListener("squeeze", z),
            r.addEventListener("squeezestart", z),
            r.addEventListener("squeezeend", z),
            r.addEventListener("end", q),
            r.addEventListener("inputsourceschange", K),
            d.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (P = e.getPixelRatio()),
            e.getSize(O),
            r.renderState.layers === void 0)
          ) {
            const J = {
              antialias: d.antialias,
              alpha: !0,
              depth: d.depth,
              stencil: d.stencil,
              framebufferScaleFactor: s,
            };
            ((m = new XRWebGLLayer(r, t, J)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (T = new qt(m.framebufferWidth, m.framebufferHeight, {
                format: ft,
                type: hn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: d.stencil,
              })));
          } else {
            let J = null,
              me = null,
              he = null;
            d.depth &&
              ((he = d.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (J = d.stencil ? pi : ri),
              (me = d.stencil ? fi : Bn));
            const Ce = {
              colorFormat: t.RGBA8,
              depthFormat: he,
              scaleFactor: s,
            };
            ((f = new XRWebGLBinding(r, t)),
              (p = f.createProjectionLayer(Ce)),
              r.updateRenderState({ layers: [p] }),
              e.setPixelRatio(1),
              e.setSize(p.textureWidth, p.textureHeight, !1),
              (T = new qt(p.textureWidth, p.textureHeight, {
                format: ft,
                type: hn,
                depthTexture: new Xo(
                  p.textureWidth,
                  p.textureHeight,
                  me,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  J,
                ),
                stencilBuffer: d.stencil,
                colorSpace: e.outputColorSpace,
                samples: d.antialias ? 4 : 0,
                resolveDepthBuffer: p.ignoreDepthValues === !1,
              })));
          }
          ((T.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await r.requestReferenceSpace(o)),
            Ye.setContext(r),
            Ye.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return S.getDepthTexture();
      }));
    function K(k) {
      for (let J = 0; J < k.removed.length; J++) {
        const me = k.removed[J],
          he = A.indexOf(me);
        he >= 0 && ((A[he] = null), E[he].disconnect(me));
      }
      for (let J = 0; J < k.added.length; J++) {
        const me = k.added[J];
        let he = A.indexOf(me);
        if (he === -1) {
          for (let ye = 0; ye < E.length; ye++)
            if (ye >= A.length) {
              (A.push(me), (he = ye));
              break;
            } else if (A[ye] === null) {
              ((A[ye] = me), (he = ye));
              break;
            }
          if (he === -1) break;
        }
        const Ce = E[he];
        Ce && Ce.connect(me);
      }
    }
    const G = new N(),
      $ = new N();
    function H(k, J, me) {
      (G.setFromMatrixPosition(J.matrixWorld),
        $.setFromMatrixPosition(me.matrixWorld));
      const he = G.distanceTo($),
        Ce = J.projectionMatrix.elements,
        ye = me.projectionMatrix.elements,
        Fe = Ce[14] / (Ce[10] - 1),
        Ke = Ce[14] / (Ce[10] + 1),
        Oe = (Ce[9] + 1) / Ce[5],
        w = (Ce[9] - 1) / Ce[5],
        At = (Ce[8] - 1) / Ce[0],
        Ie = (ye[8] + 1) / ye[0],
        ze = Fe * At,
        Ae = Fe * Ie,
        je = he / (-At + Ie),
        Re = je * -At;
      if (
        (J.matrixWorld.decompose(k.position, k.quaternion, k.scale),
        k.translateX(Re),
        k.translateZ(je),
        k.matrixWorld.compose(k.position, k.quaternion, k.scale),
        k.matrixWorldInverse.copy(k.matrixWorld).invert(),
        Ce[10] === -1)
      )
        (k.projectionMatrix.copy(J.projectionMatrix),
          k.projectionMatrixInverse.copy(J.projectionMatrixInverse));
      else {
        const y = Fe + je,
          _ = Ke + je,
          L = ze - Re,
          X = Ae + (he - Re),
          Z = ((Oe * Ke) / _) * y,
          W = ((w * Ke) / _) * y;
        (k.projectionMatrix.makePerspective(L, X, Z, W, y, _),
          k.projectionMatrixInverse.copy(k.projectionMatrix).invert());
      }
    }
    function le(k, J) {
      (J === null
        ? k.matrixWorld.copy(k.matrix)
        : k.matrixWorld.multiplyMatrices(J.matrixWorld, k.matrix),
        k.matrixWorldInverse.copy(k.matrixWorld).invert());
    }
    this.updateCamera = function (k) {
      if (r === null) return;
      let J = k.near,
        me = k.far;
      (S.texture !== null &&
        (S.depthNear > 0 && (J = S.depthNear),
        S.depthFar > 0 && (me = S.depthFar)),
        (g.near = F.near = b.near = J),
        (g.far = F.far = b.far = me),
        (M !== g.near || V !== g.far) &&
          (r.updateRenderState({ depthNear: g.near, depthFar: g.far }),
          (M = g.near),
          (V = g.far)));
      const he = k.parent,
        Ce = g.cameras;
      le(g, he);
      for (let ye = 0; ye < Ce.length; ye++) le(Ce[ye], he);
      (Ce.length === 2
        ? H(g, b, F)
        : g.projectionMatrix.copy(b.projectionMatrix),
        ce(k, g, he));
    };
    function ce(k, J, me) {
      (me === null
        ? k.matrix.copy(J.matrixWorld)
        : (k.matrix.copy(me.matrixWorld),
          k.matrix.invert(),
          k.matrix.multiply(J.matrixWorld)),
        k.matrix.decompose(k.position, k.quaternion, k.scale),
        k.updateMatrixWorld(!0),
        k.projectionMatrix.copy(J.projectionMatrix),
        k.projectionMatrixInverse.copy(J.projectionMatrixInverse),
        k.isPerspectiveCamera &&
          ((k.fov = $s * 2 * Math.atan(1 / k.projectionMatrix.elements[5])),
          (k.zoom = 1)));
    }
    ((this.getCamera = function () {
      return g;
    }),
      (this.getFoveation = function () {
        if (!(p === null && m === null)) return l;
      }),
      (this.setFoveation = function (k) {
        ((l = k),
          p !== null && (p.fixedFoveation = k),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = k));
      }),
      (this.hasDepthSensing = function () {
        return S.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return S.getMesh(g);
      }));
    let _e = null;
    function Ge(k, J) {
      if (((u = J.getViewerPose(c || a)), (x = J), u !== null)) {
        const me = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(T, m.framebuffer),
          e.setRenderTarget(T));
        let he = !1;
        me.length !== g.cameras.length && ((g.cameras.length = 0), (he = !0));
        for (let ye = 0; ye < me.length; ye++) {
          const Fe = me[ye];
          let Ke = null;
          if (m !== null) Ke = m.getViewport(Fe);
          else {
            const w = f.getViewSubImage(p, Fe);
            ((Ke = w.viewport),
              ye === 0 &&
                (e.setRenderTargetTextures(
                  T,
                  w.colorTexture,
                  p.ignoreDepthValues ? void 0 : w.depthStencilTexture,
                ),
                e.setRenderTarget(T)));
          }
          let Oe = te[ye];
          (Oe === void 0 &&
            ((Oe = new Ft()),
            Oe.layers.enable(ye),
            (Oe.viewport = new tt()),
            (te[ye] = Oe)),
            Oe.matrix.fromArray(Fe.transform.matrix),
            Oe.matrix.decompose(Oe.position, Oe.quaternion, Oe.scale),
            Oe.projectionMatrix.fromArray(Fe.projectionMatrix),
            Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),
            Oe.viewport.set(Ke.x, Ke.y, Ke.width, Ke.height),
            ye === 0 &&
              (g.matrix.copy(Oe.matrix),
              g.matrix.decompose(g.position, g.quaternion, g.scale)),
            he === !0 && g.cameras.push(Oe));
        }
        const Ce = r.enabledFeatures;
        if (Ce && Ce.includes("depth-sensing")) {
          const ye = f.getDepthInformation(me[0]);
          ye && ye.isValid && ye.texture && S.init(e, ye, r.renderState);
        }
      }
      for (let me = 0; me < E.length; me++) {
        const he = A[me],
          Ce = E[me];
        he !== null && Ce !== void 0 && Ce.update(he, J, c || a);
      }
      (_e && _e(k, J),
        J.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: J }),
        (x = null));
    }
    const Ye = new ko();
    (Ye.setAnimationLoop(Ge),
      (this.setAnimationLoop = function (k) {
        _e = k;
      }),
      (this.dispose = function () {}));
  }
}
const Dn = new un(),
  cp = new it();
function hp(i, e) {
  function t(d, h) {
    (d.matrixAutoUpdate === !0 && d.updateMatrix(), h.value.copy(d.matrix));
  }
  function n(d, h) {
    (h.color.getRGB(d.fogColor.value, zo(i)),
      h.isFog
        ? ((d.fogNear.value = h.near), (d.fogFar.value = h.far))
        : h.isFogExp2 && (d.fogDensity.value = h.density));
  }
  function r(d, h, T, E, A) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial
      ? s(d, h)
      : h.isMeshToonMaterial
        ? (s(d, h), f(d, h))
        : h.isMeshPhongMaterial
          ? (s(d, h), u(d, h))
          : h.isMeshStandardMaterial
            ? (s(d, h), p(d, h), h.isMeshPhysicalMaterial && m(d, h, A))
            : h.isMeshMatcapMaterial
              ? (s(d, h), x(d, h))
              : h.isMeshDepthMaterial
                ? s(d, h)
                : h.isMeshDistanceMaterial
                  ? (s(d, h), S(d, h))
                  : h.isMeshNormalMaterial
                    ? s(d, h)
                    : h.isLineBasicMaterial
                      ? (a(d, h), h.isLineDashedMaterial && o(d, h))
                      : h.isPointsMaterial
                        ? l(d, h, T, E)
                        : h.isSpriteMaterial
                          ? c(d, h)
                          : h.isShadowMaterial
                            ? (d.color.value.copy(h.color),
                              (d.opacity.value = h.opacity))
                            : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(d, h) {
    ((d.opacity.value = h.opacity),
      h.color && d.diffuse.value.copy(h.color),
      h.emissive &&
        d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((d.map.value = h.map), t(h.map, d.mapTransform)),
      h.alphaMap &&
        ((d.alphaMap.value = h.alphaMap), t(h.alphaMap, d.alphaMapTransform)),
      h.bumpMap &&
        ((d.bumpMap.value = h.bumpMap),
        t(h.bumpMap, d.bumpMapTransform),
        (d.bumpScale.value = h.bumpScale),
        h.side === Tt && (d.bumpScale.value *= -1)),
      h.normalMap &&
        ((d.normalMap.value = h.normalMap),
        t(h.normalMap, d.normalMapTransform),
        d.normalScale.value.copy(h.normalScale),
        h.side === Tt && d.normalScale.value.negate()),
      h.displacementMap &&
        ((d.displacementMap.value = h.displacementMap),
        t(h.displacementMap, d.displacementMapTransform),
        (d.displacementScale.value = h.displacementScale),
        (d.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((d.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, d.emissiveMapTransform)),
      h.specularMap &&
        ((d.specularMap.value = h.specularMap),
        t(h.specularMap, d.specularMapTransform)),
      h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest));
    const T = e.get(h),
      E = T.envMap,
      A = T.envMapRotation;
    (E &&
      ((d.envMap.value = E),
      Dn.copy(A),
      (Dn.x *= -1),
      (Dn.y *= -1),
      (Dn.z *= -1),
      E.isCubeTexture &&
        E.isRenderTargetTexture === !1 &&
        ((Dn.y *= -1), (Dn.z *= -1)),
      d.envMapRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Dn)),
      (d.flipEnvMap.value =
        E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1),
      (d.reflectivity.value = h.reflectivity),
      (d.ior.value = h.ior),
      (d.refractionRatio.value = h.refractionRatio)),
      h.lightMap &&
        ((d.lightMap.value = h.lightMap),
        (d.lightMapIntensity.value = h.lightMapIntensity),
        t(h.lightMap, d.lightMapTransform)),
      h.aoMap &&
        ((d.aoMap.value = h.aoMap),
        (d.aoMapIntensity.value = h.aoMapIntensity),
        t(h.aoMap, d.aoMapTransform)));
  }
  function a(d, h) {
    (d.diffuse.value.copy(h.color),
      (d.opacity.value = h.opacity),
      h.map && ((d.map.value = h.map), t(h.map, d.mapTransform)));
  }
  function o(d, h) {
    ((d.dashSize.value = h.dashSize),
      (d.totalSize.value = h.dashSize + h.gapSize),
      (d.scale.value = h.scale));
  }
  function l(d, h, T, E) {
    (d.diffuse.value.copy(h.color),
      (d.opacity.value = h.opacity),
      (d.size.value = h.size * T),
      (d.scale.value = E * 0.5),
      h.map && ((d.map.value = h.map), t(h.map, d.uvTransform)),
      h.alphaMap &&
        ((d.alphaMap.value = h.alphaMap), t(h.alphaMap, d.alphaMapTransform)),
      h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest));
  }
  function c(d, h) {
    (d.diffuse.value.copy(h.color),
      (d.opacity.value = h.opacity),
      (d.rotation.value = h.rotation),
      h.map && ((d.map.value = h.map), t(h.map, d.mapTransform)),
      h.alphaMap &&
        ((d.alphaMap.value = h.alphaMap), t(h.alphaMap, d.alphaMapTransform)),
      h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest));
  }
  function u(d, h) {
    (d.specular.value.copy(h.specular),
      (d.shininess.value = Math.max(h.shininess, 1e-4)));
  }
  function f(d, h) {
    h.gradientMap && (d.gradientMap.value = h.gradientMap);
  }
  function p(d, h) {
    ((d.metalness.value = h.metalness),
      h.metalnessMap &&
        ((d.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, d.metalnessMapTransform)),
      (d.roughness.value = h.roughness),
      h.roughnessMap &&
        ((d.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, d.roughnessMapTransform)),
      h.envMap && (d.envMapIntensity.value = h.envMapIntensity));
  }
  function m(d, h, T) {
    ((d.ior.value = h.ior),
      h.sheen > 0 &&
        (d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (d.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((d.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, d.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((d.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, d.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((d.clearcoat.value = h.clearcoat),
        (d.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((d.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, d.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((d.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((d.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, d.clearcoatNormalMapTransform),
          d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === Tt && d.clearcoatNormalScale.value.negate())),
      h.dispersion > 0 && (d.dispersion.value = h.dispersion),
      h.iridescence > 0 &&
        ((d.iridescence.value = h.iridescence),
        (d.iridescenceIOR.value = h.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((d.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, d.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((d.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((d.transmission.value = h.transmission),
        (d.transmissionSamplerMap.value = T.texture),
        d.transmissionSamplerSize.value.set(T.width, T.height),
        h.transmissionMap &&
          ((d.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, d.transmissionMapTransform)),
        (d.thickness.value = h.thickness),
        h.thicknessMap &&
          ((d.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, d.thicknessMapTransform)),
        (d.attenuationDistance.value = h.attenuationDistance),
        d.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (d.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation),
        ),
        h.anisotropyMap &&
          ((d.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, d.anisotropyMapTransform))),
      (d.specularIntensity.value = h.specularIntensity),
      d.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((d.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, d.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((d.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, d.specularIntensityMapTransform)));
  }
  function x(d, h) {
    h.matcap && (d.matcap.value = h.matcap);
  }
  function S(d, h) {
    const T = e.get(h).light;
    (d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
      (d.nearDistance.value = T.shadow.camera.near),
      (d.farDistance.value = T.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function up(i, e, t, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, E) {
    const A = E.program;
    n.uniformBlockBinding(T, A);
  }
  function c(T, E) {
    let A = r[T.id];
    A === void 0 &&
      (x(T), (A = u(T)), (r[T.id] = A), T.addEventListener("dispose", d));
    const O = E.program;
    n.updateUBOMapping(T, O);
    const P = e.render.frame;
    s[T.id] !== P && (p(T), (s[T.id] = P));
  }
  function u(T) {
    const E = f();
    T.__bindingPointIndex = E;
    const A = i.createBuffer(),
      O = T.__size,
      P = T.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, A),
      i.bufferData(i.UNIFORM_BUFFER, O, P),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, E, A),
      A
    );
  }
  function f() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return (a.push(T), T);
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function p(T) {
    const E = r[T.id],
      A = T.uniforms,
      O = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let P = 0, b = A.length; P < b; P++) {
      const F = Array.isArray(A[P]) ? A[P] : [A[P]];
      for (let te = 0, g = F.length; te < g; te++) {
        const M = F[te];
        if (m(M, P, te, O) === !0) {
          const V = M.__offset,
            z = Array.isArray(M.value) ? M.value : [M.value];
          let q = 0;
          for (let K = 0; K < z.length; K++) {
            const G = z[K],
              $ = S(G);
            typeof G == "number" || typeof G == "boolean"
              ? ((M.__data[0] = G),
                i.bufferSubData(i.UNIFORM_BUFFER, V + q, M.__data))
              : G.isMatrix3
                ? ((M.__data[0] = G.elements[0]),
                  (M.__data[1] = G.elements[1]),
                  (M.__data[2] = G.elements[2]),
                  (M.__data[3] = 0),
                  (M.__data[4] = G.elements[3]),
                  (M.__data[5] = G.elements[4]),
                  (M.__data[6] = G.elements[5]),
                  (M.__data[7] = 0),
                  (M.__data[8] = G.elements[6]),
                  (M.__data[9] = G.elements[7]),
                  (M.__data[10] = G.elements[8]),
                  (M.__data[11] = 0))
                : (G.toArray(M.__data, q),
                  (q += $.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, V, M.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, E, A, O) {
    const P = T.value,
      b = E + "_" + A;
    if (O[b] === void 0)
      return (
        typeof P == "number" || typeof P == "boolean"
          ? (O[b] = P)
          : (O[b] = P.clone()),
        !0
      );
    {
      const F = O[b];
      if (typeof P == "number" || typeof P == "boolean") {
        if (F !== P) return ((O[b] = P), !0);
      } else if (F.equals(P) === !1) return (F.copy(P), !0);
    }
    return !1;
  }
  function x(T) {
    const E = T.uniforms;
    let A = 0;
    const O = 16;
    for (let b = 0, F = E.length; b < F; b++) {
      const te = Array.isArray(E[b]) ? E[b] : [E[b]];
      for (let g = 0, M = te.length; g < M; g++) {
        const V = te[g],
          z = Array.isArray(V.value) ? V.value : [V.value];
        for (let q = 0, K = z.length; q < K; q++) {
          const G = z[q],
            $ = S(G),
            H = A % O,
            le = H % $.boundary,
            ce = H + le;
          ((A += le),
            ce !== 0 && O - ce < $.storage && (A += O - ce),
            (V.__data = new Float32Array(
              $.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (V.__offset = A),
            (A += $.storage));
        }
      }
    }
    const P = A % O;
    return (P > 0 && (A += O - P), (T.__size = A), (T.__cache = {}), this);
  }
  function S(T) {
    const E = { boundary: 0, storage: 0 };
    return (
      typeof T == "number" || typeof T == "boolean"
        ? ((E.boundary = 4), (E.storage = 4))
        : T.isVector2
          ? ((E.boundary = 8), (E.storage = 8))
          : T.isVector3 || T.isColor
            ? ((E.boundary = 16), (E.storage = 12))
            : T.isVector4
              ? ((E.boundary = 16), (E.storage = 16))
              : T.isMatrix3
                ? ((E.boundary = 48), (E.storage = 48))
                : T.isMatrix4
                  ? ((E.boundary = 64), (E.storage = 64))
                  : T.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        T,
                      ),
      E
    );
  }
  function d(T) {
    const E = T.target;
    E.removeEventListener("dispose", d);
    const A = a.indexOf(E.__bindingPointIndex);
    (a.splice(A, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id]);
  }
  function h() {
    for (const T in r) i.deleteBuffer(r[T]);
    ((a = []), (r = {}), (s = {}));
  }
  return { bind: l, update: c, dispose: h };
}
class dp {
  constructor(e = {}) {
    const {
      canvas: t = Jl(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      p = n.getContextAttributes().alpha;
    } else p = a;
    const m = new Uint32Array(4),
      x = new Int32Array(4);
    let S = null,
      d = null;
    const h = [],
      T = [];
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Pt),
      (this.toneMapping = cn),
      (this.toneMappingExposure = 1));
    const E = this;
    let A = !1,
      O = 0,
      P = 0,
      b = null,
      F = -1,
      te = null;
    const g = new tt(),
      M = new tt();
    let V = null;
    const z = new qe(0);
    let q = 0,
      K = t.width,
      G = t.height,
      $ = 1,
      H = null,
      le = null;
    const ce = new tt(0, 0, K, G),
      _e = new tt(0, 0, K, G);
    let Ge = !1;
    const Ye = new Vo();
    let k = !1,
      J = !1;
    const me = new it(),
      he = new it(),
      Ce = new N(),
      ye = new tt(),
      Fe = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Ke = !1;
    function Oe() {
      return b === null ? $ : 1;
    }
    let w = n;
    function At(v, C) {
      return t.getContext(v, C);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Js}`),
        t.addEventListener("webglcontextlost", Y, !1),
        t.addEventListener("webglcontextrestored", re, !1),
        t.addEventListener("webglcontextcreationerror", oe, !1),
        w === null)
      ) {
        const C = "webgl2";
        if (((w = At(C, v)), w === null))
          throw At(C)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw (console.error("THREE.WebGLRenderer: " + v.message), v);
    }
    let Ie,
      ze,
      Ae,
      je,
      Re,
      y,
      _,
      L,
      X,
      Z,
      W,
      ve,
      ie,
      ue,
      He,
      Q,
      de,
      be,
      we,
      fe,
      Ne,
      Pe,
      Ze,
      R;
    function ae() {
      ((Ie = new gd(w)),
        Ie.init(),
        (Pe = new np(w, Ie)),
        (ze = new hd(w, Ie, e, Pe)),
        (Ae = new Qf(w)),
        ze.reverseDepthBuffer && Ae.buffers.depth.setReversed(!0),
        (je = new xd(w)),
        (Re = new Bf()),
        (y = new tp(w, Ie, Ae, Re, ze, Pe, je)),
        (_ = new dd(E)),
        (L = new md(E)),
        (X = new bc(w)),
        (Ze = new ld(w, X)),
        (Z = new _d(w, X, je, Ze)),
        (W = new Sd(w, Z, X, je)),
        (we = new Md(w, ze, y)),
        (Q = new ud(Re)),
        (ve = new Of(E, _, L, Ie, ze, Ze, Q)),
        (ie = new hp(E, Re)),
        (ue = new Hf()),
        (He = new qf(Ie)),
        (be = new od(E, _, L, Ae, W, p, l)),
        (de = new jf(E, W, ze)),
        (R = new up(w, je, ze, Ae)),
        (fe = new cd(w, Ie, je)),
        (Ne = new vd(w, Ie, je)),
        (je.programs = ve.programs),
        (E.capabilities = ze),
        (E.extensions = Ie),
        (E.properties = Re),
        (E.renderLists = ue),
        (E.shadowMap = de),
        (E.state = Ae),
        (E.info = je));
    }
    ae();
    const B = new lp(E, w);
    ((this.xr = B),
      (this.getContext = function () {
        return w;
      }),
      (this.getContextAttributes = function () {
        return w.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const v = Ie.get("WEBGL_lose_context");
        v && v.loseContext();
      }),
      (this.forceContextRestore = function () {
        const v = Ie.get("WEBGL_lose_context");
        v && v.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return $;
      }),
      (this.setPixelRatio = function (v) {
        v !== void 0 && (($ = v), this.setSize(K, G, !1));
      }),
      (this.getSize = function (v) {
        return v.set(K, G);
      }),
      (this.setSize = function (v, C, U = !0) {
        if (B.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((K = v),
          (G = C),
          (t.width = Math.floor(v * $)),
          (t.height = Math.floor(C * $)),
          U === !0 && ((t.style.width = v + "px"), (t.style.height = C + "px")),
          this.setViewport(0, 0, v, C));
      }),
      (this.getDrawingBufferSize = function (v) {
        return v.set(K * $, G * $).floor();
      }),
      (this.setDrawingBufferSize = function (v, C, U) {
        ((K = v),
          (G = C),
          ($ = U),
          (t.width = Math.floor(v * U)),
          (t.height = Math.floor(C * U)),
          this.setViewport(0, 0, v, C));
      }),
      (this.getCurrentViewport = function (v) {
        return v.copy(g);
      }),
      (this.getViewport = function (v) {
        return v.copy(ce);
      }),
      (this.setViewport = function (v, C, U, I) {
        (v.isVector4 ? ce.set(v.x, v.y, v.z, v.w) : ce.set(v, C, U, I),
          Ae.viewport(g.copy(ce).multiplyScalar($).round()));
      }),
      (this.getScissor = function (v) {
        return v.copy(_e);
      }),
      (this.setScissor = function (v, C, U, I) {
        (v.isVector4 ? _e.set(v.x, v.y, v.z, v.w) : _e.set(v, C, U, I),
          Ae.scissor(M.copy(_e).multiplyScalar($).round()));
      }),
      (this.getScissorTest = function () {
        return Ge;
      }),
      (this.setScissorTest = function (v) {
        Ae.setScissorTest((Ge = v));
      }),
      (this.setOpaqueSort = function (v) {
        H = v;
      }),
      (this.setTransparentSort = function (v) {
        le = v;
      }),
      (this.getClearColor = function (v) {
        return v.copy(be.getClearColor());
      }),
      (this.setClearColor = function () {
        be.setClearColor.apply(be, arguments);
      }),
      (this.getClearAlpha = function () {
        return be.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        be.setClearAlpha.apply(be, arguments);
      }),
      (this.clear = function (v = !0, C = !0, U = !0) {
        let I = 0;
        if (v) {
          let D = !1;
          if (b !== null) {
            const ee = b.texture.format;
            D = ee === sa || ee === ra || ee === na;
          }
          if (D) {
            const ee = b.texture.type,
              se =
                ee === hn ||
                ee === Bn ||
                ee === Ai ||
                ee === fi ||
                ee === ea ||
                ee === ta,
              pe = be.getClearColor(),
              ge = be.getClearAlpha(),
              Ee = pe.r,
              Te = pe.g,
              xe = pe.b;
            se
              ? ((m[0] = Ee),
                (m[1] = Te),
                (m[2] = xe),
                (m[3] = ge),
                w.clearBufferuiv(w.COLOR, 0, m))
              : ((x[0] = Ee),
                (x[1] = Te),
                (x[2] = xe),
                (x[3] = ge),
                w.clearBufferiv(w.COLOR, 0, x));
          } else I |= w.COLOR_BUFFER_BIT;
        }
        (C &&
          ((I |= w.DEPTH_BUFFER_BIT),
          w.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)),
          U &&
            ((I |= w.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          w.clear(I));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", Y, !1),
          t.removeEventListener("webglcontextrestored", re, !1),
          t.removeEventListener("webglcontextcreationerror", oe, !1),
          ue.dispose(),
          He.dispose(),
          Re.dispose(),
          _.dispose(),
          L.dispose(),
          W.dispose(),
          Ze.dispose(),
          R.dispose(),
          ve.dispose(),
          B.dispose(),
          B.removeEventListener("sessionstart", fa),
          B.removeEventListener("sessionend", pa),
          An.stop());
      }));
    function Y(v) {
      (v.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (A = !0));
    }
    function re() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (A = !1));
      const v = je.autoReset,
        C = de.enabled,
        U = de.autoUpdate,
        I = de.needsUpdate,
        D = de.type;
      (ae(),
        (je.autoReset = v),
        (de.enabled = C),
        (de.autoUpdate = U),
        (de.needsUpdate = I),
        (de.type = D));
    }
    function oe(v) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        v.statusMessage,
      );
    }
    function Be(v) {
      const C = v.target;
      (C.removeEventListener("dispose", Be), rt(C));
    }
    function rt(v) {
      (Mt(v), Re.remove(v));
    }
    function Mt(v) {
      const C = Re.get(v).programs;
      C !== void 0 &&
        (C.forEach(function (U) {
          ve.releaseProgram(U);
        }),
        v.isShaderMaterial && ve.releaseShaderCache(v));
    }
    this.renderBufferDirect = function (v, C, U, I, D, ee) {
      C === null && (C = Fe);
      const se = D.isMesh && D.matrixWorld.determinant() < 0,
        pe = il(v, C, U, I, D);
      Ae.setMaterial(I, se);
      let ge = U.index,
        Ee = 1;
      if (I.wireframe === !0) {
        if (((ge = Z.getWireframeAttribute(U)), ge === void 0)) return;
        Ee = 2;
      }
      const Te = U.drawRange,
        xe = U.attributes.position;
      let $e = Te.start * Ee,
        Je = (Te.start + Te.count) * Ee;
      (ee !== null &&
        (($e = Math.max($e, ee.start * Ee)),
        (Je = Math.min(Je, (ee.start + ee.count) * Ee))),
        ge !== null
          ? (($e = Math.max($e, 0)), (Je = Math.min(Je, ge.count)))
          : xe != null &&
            (($e = Math.max($e, 0)), (Je = Math.min(Je, xe.count))));
      const et = Je - $e;
      if (et < 0 || et === 1 / 0) return;
      Ze.setup(D, I, pe, U, ge);
      let bt,
        ke = fe;
      if (
        (ge !== null && ((bt = X.get(ge)), (ke = Ne), ke.setIndex(bt)),
        D.isMesh)
      )
        I.wireframe === !0
          ? (Ae.setLineWidth(I.wireframeLinewidth * Oe()), ke.setMode(w.LINES))
          : ke.setMode(w.TRIANGLES);
      else if (D.isLine) {
        let Me = I.linewidth;
        (Me === void 0 && (Me = 1),
          Ae.setLineWidth(Me * Oe()),
          D.isLineSegments
            ? ke.setMode(w.LINES)
            : D.isLineLoop
              ? ke.setMode(w.LINE_LOOP)
              : ke.setMode(w.LINE_STRIP));
      } else
        D.isPoints
          ? ke.setMode(w.POINTS)
          : D.isSprite && ke.setMode(w.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          ke.renderMultiDrawInstances(
            D._multiDrawStarts,
            D._multiDrawCounts,
            D._multiDrawCount,
            D._multiDrawInstances,
          );
        else if (Ie.get("WEBGL_multi_draw"))
          ke.renderMultiDraw(
            D._multiDrawStarts,
            D._multiDrawCounts,
            D._multiDrawCount,
          );
        else {
          const Me = D._multiDrawStarts,
            ut = D._multiDrawCounts,
            We = D._multiDrawCount,
            Bt = ge ? X.get(ge).bytesPerElement : 1,
            Hn = Re.get(I).currentProgram.getUniforms();
          for (let wt = 0; wt < We; wt++)
            (Hn.setValue(w, "_gl_DrawID", wt), ke.render(Me[wt] / Bt, ut[wt]));
        }
      else if (D.isInstancedMesh) ke.renderInstances($e, et, D.count);
      else if (U.isInstancedBufferGeometry) {
        const Me = U._maxInstanceCount !== void 0 ? U._maxInstanceCount : 1 / 0,
          ut = Math.min(U.instanceCount, Me);
        ke.renderInstances($e, et, ut);
      } else ke.render($e, et);
    };
    function Ve(v, C, U) {
      v.transparent === !0 && v.side === an && v.forceSinglePass === !1
        ? ((v.side = Tt),
          (v.needsUpdate = !0),
          Fi(v, C, U),
          (v.side = yn),
          (v.needsUpdate = !0),
          Fi(v, C, U),
          (v.side = an))
        : Fi(v, C, U);
    }
    ((this.compile = function (v, C, U = null) {
      (U === null && (U = v),
        (d = He.get(U)),
        d.init(C),
        T.push(d),
        U.traverseVisible(function (D) {
          D.isLight &&
            D.layers.test(C.layers) &&
            (d.pushLight(D), D.castShadow && d.pushShadow(D));
        }),
        v !== U &&
          v.traverseVisible(function (D) {
            D.isLight &&
              D.layers.test(C.layers) &&
              (d.pushLight(D), D.castShadow && d.pushShadow(D));
          }),
        d.setupLights());
      const I = new Set();
      return (
        v.traverse(function (D) {
          if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite)) return;
          const ee = D.material;
          if (ee)
            if (Array.isArray(ee))
              for (let se = 0; se < ee.length; se++) {
                const pe = ee[se];
                (Ve(pe, U, D), I.add(pe));
              }
            else (Ve(ee, U, D), I.add(ee));
        }),
        T.pop(),
        (d = null),
        I
      );
    }),
      (this.compileAsync = function (v, C, U = null) {
        const I = this.compile(v, C, U);
        return new Promise((D) => {
          function ee() {
            if (
              (I.forEach(function (se) {
                Re.get(se).currentProgram.isReady() && I.delete(se);
              }),
              I.size === 0)
            ) {
              D(v);
              return;
            }
            setTimeout(ee, 10);
          }
          Ie.get("KHR_parallel_shader_compile") !== null
            ? ee()
            : setTimeout(ee, 10);
        });
      }));
    let St = null;
    function jt(v) {
      St && St(v);
    }
    function fa() {
      An.stop();
    }
    function pa() {
      An.start();
    }
    const An = new ko();
    (An.setAnimationLoop(jt),
      typeof self < "u" && An.setContext(self),
      (this.setAnimationLoop = function (v) {
        ((St = v), B.setAnimationLoop(v), v === null ? An.stop() : An.start());
      }),
      B.addEventListener("sessionstart", fa),
      B.addEventListener("sessionend", pa),
      (this.render = function (v, C) {
        if (C !== void 0 && C.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (A === !0) return;
        if (
          (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
          C.parent === null &&
            C.matrixWorldAutoUpdate === !0 &&
            C.updateMatrixWorld(),
          B.enabled === !0 &&
            B.isPresenting === !0 &&
            (B.cameraAutoUpdate === !0 && B.updateCamera(C),
            (C = B.getCamera())),
          v.isScene === !0 && v.onBeforeRender(E, v, C, b),
          (d = He.get(v, T.length)),
          d.init(C),
          T.push(d),
          he.multiplyMatrices(C.projectionMatrix, C.matrixWorldInverse),
          Ye.setFromProjectionMatrix(he),
          (J = this.localClippingEnabled),
          (k = Q.init(this.clippingPlanes, J)),
          (S = ue.get(v, h.length)),
          S.init(),
          h.push(S),
          B.enabled === !0 && B.isPresenting === !0)
        ) {
          const ee = E.xr.getDepthSensingMesh();
          ee !== null && br(ee, C, -1 / 0, E.sortObjects);
        }
        (br(v, C, 0, E.sortObjects),
          S.finish(),
          E.sortObjects === !0 && S.sort(H, le),
          (Ke =
            B.enabled === !1 ||
            B.isPresenting === !1 ||
            B.hasDepthSensing() === !1),
          Ke && be.addToRenderList(S, v),
          this.info.render.frame++,
          k === !0 && Q.beginShadows());
        const U = d.state.shadowsArray;
        (de.render(U, v, C),
          k === !0 && Q.endShadows(),
          this.info.autoReset === !0 && this.info.reset());
        const I = S.opaque,
          D = S.transmissive;
        if ((d.setupLights(), C.isArrayCamera)) {
          const ee = C.cameras;
          if (D.length > 0)
            for (let se = 0, pe = ee.length; se < pe; se++) {
              const ge = ee[se];
              ga(I, D, v, ge);
            }
          Ke && be.render(v);
          for (let se = 0, pe = ee.length; se < pe; se++) {
            const ge = ee[se];
            ma(S, v, ge, ge.viewport);
          }
        } else
          (D.length > 0 && ga(I, D, v, C), Ke && be.render(v), ma(S, v, C));
        (b !== null &&
          (y.updateMultisampleRenderTarget(b), y.updateRenderTargetMipmap(b)),
          v.isScene === !0 && v.onAfterRender(E, v, C),
          Ze.resetDefaultState(),
          (F = -1),
          (te = null),
          T.pop(),
          T.length > 0
            ? ((d = T[T.length - 1]),
              k === !0 && Q.setGlobalState(E.clippingPlanes, d.state.camera))
            : (d = null),
          h.pop(),
          h.length > 0 ? (S = h[h.length - 1]) : (S = null));
      }));
    function br(v, C, U, I) {
      if (v.visible === !1) return;
      if (v.layers.test(C.layers)) {
        if (v.isGroup) U = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === !0 && v.update(C);
        else if (v.isLight) (d.pushLight(v), v.castShadow && d.pushShadow(v));
        else if (v.isSprite) {
          if (!v.frustumCulled || Ye.intersectsSprite(v)) {
            I && ye.setFromMatrixPosition(v.matrixWorld).applyMatrix4(he);
            const se = W.update(v),
              pe = v.material;
            pe.visible && S.push(v, se, pe, U, ye.z, null);
          }
        } else if (
          (v.isMesh || v.isLine || v.isPoints) &&
          (!v.frustumCulled || Ye.intersectsObject(v))
        ) {
          const se = W.update(v),
            pe = v.material;
          if (
            (I &&
              (v.boundingSphere !== void 0
                ? (v.boundingSphere === null && v.computeBoundingSphere(),
                  ye.copy(v.boundingSphere.center))
                : (se.boundingSphere === null && se.computeBoundingSphere(),
                  ye.copy(se.boundingSphere.center)),
              ye.applyMatrix4(v.matrixWorld).applyMatrix4(he)),
            Array.isArray(pe))
          ) {
            const ge = se.groups;
            for (let Ee = 0, Te = ge.length; Ee < Te; Ee++) {
              const xe = ge[Ee],
                $e = pe[xe.materialIndex];
              $e && $e.visible && S.push(v, se, $e, U, ye.z, xe);
            }
          } else pe.visible && S.push(v, se, pe, U, ye.z, null);
        }
      }
      const ee = v.children;
      for (let se = 0, pe = ee.length; se < pe; se++) br(ee[se], C, U, I);
    }
    function ma(v, C, U, I) {
      const D = v.opaque,
        ee = v.transmissive,
        se = v.transparent;
      (d.setupLightsView(U),
        k === !0 && Q.setGlobalState(E.clippingPlanes, U),
        I && Ae.viewport(g.copy(I)),
        D.length > 0 && Ni(D, C, U),
        ee.length > 0 && Ni(ee, C, U),
        se.length > 0 && Ni(se, C, U),
        Ae.buffers.depth.setTest(!0),
        Ae.buffers.depth.setMask(!0),
        Ae.buffers.color.setMask(!0),
        Ae.setPolygonOffset(!1));
    }
    function ga(v, C, U, I) {
      if ((U.isScene === !0 ? U.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[I.id] === void 0 &&
        (d.state.transmissionRenderTarget[I.id] = new qt(1, 1, {
          generateMipmaps: !0,
          type:
            Ie.has("EXT_color_buffer_half_float") ||
            Ie.has("EXT_color_buffer_float")
              ? Tn
              : hn,
          minFilter: Fn,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Xe.workingColorSpace,
        }));
      const ee = d.state.transmissionRenderTarget[I.id],
        se = I.viewport || g;
      ee.setSize(se.z, se.w);
      const pe = E.getRenderTarget();
      (E.setRenderTarget(ee),
        E.getClearColor(z),
        (q = E.getClearAlpha()),
        q < 1 && E.setClearColor(16777215, 0.5),
        E.clear(),
        Ke && be.render(U));
      const ge = E.toneMapping;
      E.toneMapping = cn;
      const Ee = I.viewport;
      if (
        (I.viewport !== void 0 && (I.viewport = void 0),
        d.setupLightsView(I),
        k === !0 && Q.setGlobalState(E.clippingPlanes, I),
        Ni(v, U, I),
        y.updateMultisampleRenderTarget(ee),
        y.updateRenderTargetMipmap(ee),
        Ie.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Te = !1;
        for (let xe = 0, $e = C.length; xe < $e; xe++) {
          const Je = C[xe],
            et = Je.object,
            bt = Je.geometry,
            ke = Je.material,
            Me = Je.group;
          if (ke.side === an && et.layers.test(I.layers)) {
            const ut = ke.side;
            ((ke.side = Tt),
              (ke.needsUpdate = !0),
              _a(et, U, I, bt, ke, Me),
              (ke.side = ut),
              (ke.needsUpdate = !0),
              (Te = !0));
          }
        }
        Te === !0 &&
          (y.updateMultisampleRenderTarget(ee), y.updateRenderTargetMipmap(ee));
      }
      (E.setRenderTarget(pe),
        E.setClearColor(z, q),
        Ee !== void 0 && (I.viewport = Ee),
        (E.toneMapping = ge));
    }
    function Ni(v, C, U) {
      const I = C.isScene === !0 ? C.overrideMaterial : null;
      for (let D = 0, ee = v.length; D < ee; D++) {
        const se = v[D],
          pe = se.object,
          ge = se.geometry,
          Ee = I === null ? se.material : I,
          Te = se.group;
        pe.layers.test(U.layers) && _a(pe, C, U, ge, Ee, Te);
      }
    }
    function _a(v, C, U, I, D, ee) {
      (v.onBeforeRender(E, C, U, I, D, ee),
        v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, v.matrixWorld),
        v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
        D.onBeforeRender(E, C, U, I, v, ee),
        D.transparent === !0 && D.side === an && D.forceSinglePass === !1
          ? ((D.side = Tt),
            (D.needsUpdate = !0),
            E.renderBufferDirect(U, C, I, D, v, ee),
            (D.side = yn),
            (D.needsUpdate = !0),
            E.renderBufferDirect(U, C, I, D, v, ee),
            (D.side = an))
          : E.renderBufferDirect(U, C, I, D, v, ee),
        v.onAfterRender(E, C, U, I, D, ee));
    }
    function Fi(v, C, U) {
      C.isScene !== !0 && (C = Fe);
      const I = Re.get(v),
        D = d.state.lights,
        ee = d.state.shadowsArray,
        se = D.state.version,
        pe = ve.getParameters(v, D.state, ee, C, U),
        ge = ve.getProgramCacheKey(pe);
      let Ee = I.programs;
      ((I.environment = v.isMeshStandardMaterial ? C.environment : null),
        (I.fog = C.fog),
        (I.envMap = (v.isMeshStandardMaterial ? L : _).get(
          v.envMap || I.environment,
        )),
        (I.envMapRotation =
          I.environment !== null && v.envMap === null
            ? C.environmentRotation
            : v.envMapRotation),
        Ee === void 0 &&
          (v.addEventListener("dispose", Be),
          (Ee = new Map()),
          (I.programs = Ee)));
      let Te = Ee.get(ge);
      if (Te !== void 0) {
        if (I.currentProgram === Te && I.lightsStateVersion === se)
          return (xa(v, pe), Te);
      } else
        ((pe.uniforms = ve.getUniforms(v)),
          v.onBeforeCompile(pe, E),
          (Te = ve.acquireProgram(pe, ge)),
          Ee.set(ge, Te),
          (I.uniforms = pe.uniforms));
      const xe = I.uniforms;
      return (
        ((!v.isShaderMaterial && !v.isRawShaderMaterial) ||
          v.clipping === !0) &&
          (xe.clippingPlanes = Q.uniform),
        xa(v, pe),
        (I.needsLights = sl(v)),
        (I.lightsStateVersion = se),
        I.needsLights &&
          ((xe.ambientLightColor.value = D.state.ambient),
          (xe.lightProbe.value = D.state.probe),
          (xe.directionalLights.value = D.state.directional),
          (xe.directionalLightShadows.value = D.state.directionalShadow),
          (xe.spotLights.value = D.state.spot),
          (xe.spotLightShadows.value = D.state.spotShadow),
          (xe.rectAreaLights.value = D.state.rectArea),
          (xe.ltc_1.value = D.state.rectAreaLTC1),
          (xe.ltc_2.value = D.state.rectAreaLTC2),
          (xe.pointLights.value = D.state.point),
          (xe.pointLightShadows.value = D.state.pointShadow),
          (xe.hemisphereLights.value = D.state.hemi),
          (xe.directionalShadowMap.value = D.state.directionalShadowMap),
          (xe.directionalShadowMatrix.value = D.state.directionalShadowMatrix),
          (xe.spotShadowMap.value = D.state.spotShadowMap),
          (xe.spotLightMatrix.value = D.state.spotLightMatrix),
          (xe.spotLightMap.value = D.state.spotLightMap),
          (xe.pointShadowMap.value = D.state.pointShadowMap),
          (xe.pointShadowMatrix.value = D.state.pointShadowMatrix)),
        (I.currentProgram = Te),
        (I.uniformsList = null),
        Te
      );
    }
    function va(v) {
      if (v.uniformsList === null) {
        const C = v.currentProgram.getUniforms();
        v.uniformsList = ur.seqWithValue(C.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function xa(v, C) {
      const U = Re.get(v);
      ((U.outputColorSpace = C.outputColorSpace),
        (U.batching = C.batching),
        (U.batchingColor = C.batchingColor),
        (U.instancing = C.instancing),
        (U.instancingColor = C.instancingColor),
        (U.instancingMorph = C.instancingMorph),
        (U.skinning = C.skinning),
        (U.morphTargets = C.morphTargets),
        (U.morphNormals = C.morphNormals),
        (U.morphColors = C.morphColors),
        (U.morphTargetsCount = C.morphTargetsCount),
        (U.numClippingPlanes = C.numClippingPlanes),
        (U.numIntersection = C.numClipIntersection),
        (U.vertexAlphas = C.vertexAlphas),
        (U.vertexTangents = C.vertexTangents),
        (U.toneMapping = C.toneMapping));
    }
    function il(v, C, U, I, D) {
      (C.isScene !== !0 && (C = Fe), y.resetTextureUnits());
      const ee = C.fog,
        se = I.isMeshStandardMaterial ? C.environment : null,
        pe =
          b === null
            ? E.outputColorSpace
            : b.isXRRenderTarget === !0
              ? b.texture.colorSpace
              : Xt,
        ge = (I.isMeshStandardMaterial ? L : _).get(I.envMap || se),
        Ee =
          I.vertexColors === !0 &&
          !!U.attributes.color &&
          U.attributes.color.itemSize === 4,
        Te = !!U.attributes.tangent && (!!I.normalMap || I.anisotropy > 0),
        xe = !!U.morphAttributes.position,
        $e = !!U.morphAttributes.normal,
        Je = !!U.morphAttributes.color;
      let et = cn;
      I.toneMapped &&
        (b === null || b.isXRRenderTarget === !0) &&
        (et = E.toneMapping);
      const bt =
          U.morphAttributes.position ||
          U.morphAttributes.normal ||
          U.morphAttributes.color,
        ke = bt !== void 0 ? bt.length : 0,
        Me = Re.get(I),
        ut = d.state.lights;
      if (k === !0 && (J === !0 || v !== te)) {
        const It = v === te && I.id === F;
        Q.setState(I, v, It);
      }
      let We = !1;
      I.version === Me.__version
        ? ((Me.needsLights && Me.lightsStateVersion !== ut.state.version) ||
            Me.outputColorSpace !== pe ||
            (D.isBatchedMesh && Me.batching === !1) ||
            (!D.isBatchedMesh && Me.batching === !0) ||
            (D.isBatchedMesh &&
              Me.batchingColor === !0 &&
              D.colorTexture === null) ||
            (D.isBatchedMesh &&
              Me.batchingColor === !1 &&
              D.colorTexture !== null) ||
            (D.isInstancedMesh && Me.instancing === !1) ||
            (!D.isInstancedMesh && Me.instancing === !0) ||
            (D.isSkinnedMesh && Me.skinning === !1) ||
            (!D.isSkinnedMesh && Me.skinning === !0) ||
            (D.isInstancedMesh &&
              Me.instancingColor === !0 &&
              D.instanceColor === null) ||
            (D.isInstancedMesh &&
              Me.instancingColor === !1 &&
              D.instanceColor !== null) ||
            (D.isInstancedMesh &&
              Me.instancingMorph === !0 &&
              D.morphTexture === null) ||
            (D.isInstancedMesh &&
              Me.instancingMorph === !1 &&
              D.morphTexture !== null) ||
            Me.envMap !== ge ||
            (I.fog === !0 && Me.fog !== ee) ||
            (Me.numClippingPlanes !== void 0 &&
              (Me.numClippingPlanes !== Q.numPlanes ||
                Me.numIntersection !== Q.numIntersection)) ||
            Me.vertexAlphas !== Ee ||
            Me.vertexTangents !== Te ||
            Me.morphTargets !== xe ||
            Me.morphNormals !== $e ||
            Me.morphColors !== Je ||
            Me.toneMapping !== et ||
            Me.morphTargetsCount !== ke) &&
          (We = !0)
        : ((We = !0), (Me.__version = I.version));
      let Bt = Me.currentProgram;
      We === !0 && (Bt = Fi(I, C, D));
      let Hn = !1,
        wt = !1,
        wr = !1;
      const nt = Bt.getUniforms(),
        fn = Me.uniforms;
      if (
        (Ae.useProgram(Bt.program) && ((Hn = !0), (wt = !0), (wr = !0)),
        I.id !== F && ((F = I.id), (wt = !0)),
        Hn || te !== v)
      ) {
        (ze.reverseDepthBuffer
          ? (me.copy(v.projectionMatrix),
            ec(me),
            tc(me),
            nt.setValue(w, "projectionMatrix", me))
          : nt.setValue(w, "projectionMatrix", v.projectionMatrix),
          nt.setValue(w, "viewMatrix", v.matrixWorldInverse));
        const It = nt.map.cameraPosition;
        (It !== void 0 &&
          It.setValue(w, Ce.setFromMatrixPosition(v.matrixWorld)),
          ze.logarithmicDepthBuffer &&
            nt.setValue(
              w,
              "logDepthBufFC",
              2 / (Math.log(v.far + 1) / Math.LN2),
            ),
          (I.isMeshPhongMaterial ||
            I.isMeshToonMaterial ||
            I.isMeshLambertMaterial ||
            I.isMeshBasicMaterial ||
            I.isMeshStandardMaterial ||
            I.isShaderMaterial) &&
            nt.setValue(w, "isOrthographic", v.isOrthographicCamera === !0),
          te !== v && ((te = v), (wt = !0), (wr = !0)));
      }
      if (D.isSkinnedMesh) {
        (nt.setOptional(w, D, "bindMatrix"),
          nt.setOptional(w, D, "bindMatrixInverse"));
        const It = D.skeleton;
        It &&
          (It.boneTexture === null && It.computeBoneTexture(),
          nt.setValue(w, "boneTexture", It.boneTexture, y));
      }
      D.isBatchedMesh &&
        (nt.setOptional(w, D, "batchingTexture"),
        nt.setValue(w, "batchingTexture", D._matricesTexture, y),
        nt.setOptional(w, D, "batchingIdTexture"),
        nt.setValue(w, "batchingIdTexture", D._indirectTexture, y),
        nt.setOptional(w, D, "batchingColorTexture"),
        D._colorsTexture !== null &&
          nt.setValue(w, "batchingColorTexture", D._colorsTexture, y));
      const Rr = U.morphAttributes;
      if (
        ((Rr.position !== void 0 ||
          Rr.normal !== void 0 ||
          Rr.color !== void 0) &&
          we.update(D, U, Bt),
        (wt || Me.receiveShadow !== D.receiveShadow) &&
          ((Me.receiveShadow = D.receiveShadow),
          nt.setValue(w, "receiveShadow", D.receiveShadow)),
        I.isMeshGouraudMaterial &&
          I.envMap !== null &&
          ((fn.envMap.value = ge),
          (fn.flipEnvMap.value =
            ge.isCubeTexture && ge.isRenderTargetTexture === !1 ? -1 : 1)),
        I.isMeshStandardMaterial &&
          I.envMap === null &&
          C.environment !== null &&
          (fn.envMapIntensity.value = C.environmentIntensity),
        wt &&
          (nt.setValue(w, "toneMappingExposure", E.toneMappingExposure),
          Me.needsLights && rl(fn, wr),
          ee && I.fog === !0 && ie.refreshFogUniforms(fn, ee),
          ie.refreshMaterialUniforms(
            fn,
            I,
            $,
            G,
            d.state.transmissionRenderTarget[v.id],
          ),
          ur.upload(w, va(Me), fn, y)),
        I.isShaderMaterial &&
          I.uniformsNeedUpdate === !0 &&
          (ur.upload(w, va(Me), fn, y), (I.uniformsNeedUpdate = !1)),
        I.isSpriteMaterial && nt.setValue(w, "center", D.center),
        nt.setValue(w, "modelViewMatrix", D.modelViewMatrix),
        nt.setValue(w, "normalMatrix", D.normalMatrix),
        nt.setValue(w, "modelMatrix", D.matrixWorld),
        I.isShaderMaterial || I.isRawShaderMaterial)
      ) {
        const It = I.uniformsGroups;
        for (let Cr = 0, al = It.length; Cr < al; Cr++) {
          const Ma = It[Cr];
          (R.update(Ma, Bt), R.bind(Ma, Bt));
        }
      }
      return Bt;
    }
    function rl(v, C) {
      ((v.ambientLightColor.needsUpdate = C),
        (v.lightProbe.needsUpdate = C),
        (v.directionalLights.needsUpdate = C),
        (v.directionalLightShadows.needsUpdate = C),
        (v.pointLights.needsUpdate = C),
        (v.pointLightShadows.needsUpdate = C),
        (v.spotLights.needsUpdate = C),
        (v.spotLightShadows.needsUpdate = C),
        (v.rectAreaLights.needsUpdate = C),
        (v.hemisphereLights.needsUpdate = C));
    }
    function sl(v) {
      return (
        v.isMeshLambertMaterial ||
        v.isMeshToonMaterial ||
        v.isMeshPhongMaterial ||
        v.isMeshStandardMaterial ||
        v.isShadowMaterial ||
        (v.isShaderMaterial && v.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return O;
    }),
      (this.getActiveMipmapLevel = function () {
        return P;
      }),
      (this.getRenderTarget = function () {
        return b;
      }),
      (this.setRenderTargetTextures = function (v, C, U) {
        ((Re.get(v.texture).__webglTexture = C),
          (Re.get(v.depthTexture).__webglTexture = U));
        const I = Re.get(v);
        ((I.__hasExternalTextures = !0),
          (I.__autoAllocateDepthBuffer = U === void 0),
          I.__autoAllocateDepthBuffer ||
            (Ie.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
              ),
              (I.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (v, C) {
        const U = Re.get(v);
        ((U.__webglFramebuffer = C),
          (U.__useDefaultFramebuffer = C === void 0));
      }),
      (this.setRenderTarget = function (v, C = 0, U = 0) {
        ((b = v), (O = C), (P = U));
        let I = !0,
          D = null,
          ee = !1,
          se = !1;
        if (v) {
          const ge = Re.get(v);
          if (ge.__useDefaultFramebuffer !== void 0)
            (Ae.bindFramebuffer(w.FRAMEBUFFER, null), (I = !1));
          else if (ge.__webglFramebuffer === void 0) y.setupRenderTarget(v);
          else if (ge.__hasExternalTextures)
            y.rebindTextures(
              v,
              Re.get(v.texture).__webglTexture,
              Re.get(v.depthTexture).__webglTexture,
            );
          else if (v.depthBuffer) {
            const xe = v.depthTexture;
            if (ge.__boundDepthTexture !== xe) {
              if (
                xe !== null &&
                Re.has(xe) &&
                (v.width !== xe.image.width || v.height !== xe.image.height)
              )
                throw new Error(
                  "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
                );
              y.setupDepthRenderbuffer(v);
            }
          }
          const Ee = v.texture;
          (Ee.isData3DTexture ||
            Ee.isDataArrayTexture ||
            Ee.isCompressedArrayTexture) &&
            (se = !0);
          const Te = Re.get(v).__webglFramebuffer;
          (v.isWebGLCubeRenderTarget
            ? (Array.isArray(Te[C]) ? (D = Te[C][U]) : (D = Te[C]), (ee = !0))
            : v.samples > 0 && y.useMultisampledRTT(v) === !1
              ? (D = Re.get(v).__webglMultisampledFramebuffer)
              : Array.isArray(Te)
                ? (D = Te[U])
                : (D = Te),
            g.copy(v.viewport),
            M.copy(v.scissor),
            (V = v.scissorTest));
        } else
          (g.copy(ce).multiplyScalar($).floor(),
            M.copy(_e).multiplyScalar($).floor(),
            (V = Ge));
        if (
          (Ae.bindFramebuffer(w.FRAMEBUFFER, D) && I && Ae.drawBuffers(v, D),
          Ae.viewport(g),
          Ae.scissor(M),
          Ae.setScissorTest(V),
          ee)
        ) {
          const ge = Re.get(v.texture);
          w.framebufferTexture2D(
            w.FRAMEBUFFER,
            w.COLOR_ATTACHMENT0,
            w.TEXTURE_CUBE_MAP_POSITIVE_X + C,
            ge.__webglTexture,
            U,
          );
        } else if (se) {
          const ge = Re.get(v.texture),
            Ee = C || 0;
          w.framebufferTextureLayer(
            w.FRAMEBUFFER,
            w.COLOR_ATTACHMENT0,
            ge.__webglTexture,
            U || 0,
            Ee,
          );
        }
        F = -1;
      }),
      (this.readRenderTargetPixels = function (v, C, U, I, D, ee, se) {
        if (!(v && v.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let pe = Re.get(v).__webglFramebuffer;
        if ((v.isWebGLCubeRenderTarget && se !== void 0 && (pe = pe[se]), pe)) {
          Ae.bindFramebuffer(w.FRAMEBUFFER, pe);
          try {
            const ge = v.texture,
              Ee = ge.format,
              Te = ge.type;
            if (!ze.textureFormatReadable(Ee)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!ze.textureTypeReadable(Te)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            C >= 0 &&
              C <= v.width - I &&
              U >= 0 &&
              U <= v.height - D &&
              w.readPixels(C, U, I, D, Pe.convert(Ee), Pe.convert(Te), ee);
          } finally {
            const ge = b !== null ? Re.get(b).__webglFramebuffer : null;
            Ae.bindFramebuffer(w.FRAMEBUFFER, ge);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        v,
        C,
        U,
        I,
        D,
        ee,
        se,
      ) {
        if (!(v && v.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let pe = Re.get(v).__webglFramebuffer;
        if ((v.isWebGLCubeRenderTarget && se !== void 0 && (pe = pe[se]), pe)) {
          const ge = v.texture,
            Ee = ge.format,
            Te = ge.type;
          if (!ze.textureFormatReadable(Ee))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
            );
          if (!ze.textureTypeReadable(Te))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
            );
          if (C >= 0 && C <= v.width - I && U >= 0 && U <= v.height - D) {
            Ae.bindFramebuffer(w.FRAMEBUFFER, pe);
            const xe = w.createBuffer();
            (w.bindBuffer(w.PIXEL_PACK_BUFFER, xe),
              w.bufferData(w.PIXEL_PACK_BUFFER, ee.byteLength, w.STREAM_READ),
              w.readPixels(C, U, I, D, Pe.convert(Ee), Pe.convert(Te), 0));
            const $e = b !== null ? Re.get(b).__webglFramebuffer : null;
            Ae.bindFramebuffer(w.FRAMEBUFFER, $e);
            const Je = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              w.flush(),
              await Ql(w, Je, 4),
              w.bindBuffer(w.PIXEL_PACK_BUFFER, xe),
              w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, ee),
              w.deleteBuffer(xe),
              w.deleteSync(Je),
              ee
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
        }
      }),
      (this.copyFramebufferToTexture = function (v, C = null, U = 0) {
        v.isTexture !== !0 &&
          (hr(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed.",
          ),
          (C = arguments[0] || null),
          (v = arguments[1]));
        const I = Math.pow(2, -U),
          D = Math.floor(v.image.width * I),
          ee = Math.floor(v.image.height * I),
          se = C !== null ? C.x : 0,
          pe = C !== null ? C.y : 0;
        (y.setTexture2D(v, 0),
          w.copyTexSubImage2D(w.TEXTURE_2D, U, 0, 0, se, pe, D, ee),
          Ae.unbindTexture());
      }),
      (this.copyTextureToTexture = function (v, C, U = null, I = null, D = 0) {
        v.isTexture !== !0 &&
          (hr(
            "WebGLRenderer: copyTextureToTexture function signature has changed.",
          ),
          (I = arguments[0] || null),
          (v = arguments[1]),
          (C = arguments[2]),
          (D = arguments[3] || 0),
          (U = null));
        let ee, se, pe, ge, Ee, Te;
        (U !== null
          ? ((ee = U.max.x - U.min.x),
            (se = U.max.y - U.min.y),
            (pe = U.min.x),
            (ge = U.min.y))
          : ((ee = v.image.width), (se = v.image.height), (pe = 0), (ge = 0)),
          I !== null ? ((Ee = I.x), (Te = I.y)) : ((Ee = 0), (Te = 0)));
        const xe = Pe.convert(C.format),
          $e = Pe.convert(C.type);
        (y.setTexture2D(C, 0),
          w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, C.flipY),
          w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, C.premultiplyAlpha),
          w.pixelStorei(w.UNPACK_ALIGNMENT, C.unpackAlignment));
        const Je = w.getParameter(w.UNPACK_ROW_LENGTH),
          et = w.getParameter(w.UNPACK_IMAGE_HEIGHT),
          bt = w.getParameter(w.UNPACK_SKIP_PIXELS),
          ke = w.getParameter(w.UNPACK_SKIP_ROWS),
          Me = w.getParameter(w.UNPACK_SKIP_IMAGES),
          ut = v.isCompressedTexture ? v.mipmaps[D] : v.image;
        (w.pixelStorei(w.UNPACK_ROW_LENGTH, ut.width),
          w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, ut.height),
          w.pixelStorei(w.UNPACK_SKIP_PIXELS, pe),
          w.pixelStorei(w.UNPACK_SKIP_ROWS, ge),
          v.isDataTexture
            ? w.texSubImage2D(w.TEXTURE_2D, D, Ee, Te, ee, se, xe, $e, ut.data)
            : v.isCompressedTexture
              ? w.compressedTexSubImage2D(
                  w.TEXTURE_2D,
                  D,
                  Ee,
                  Te,
                  ut.width,
                  ut.height,
                  xe,
                  ut.data,
                )
              : w.texSubImage2D(w.TEXTURE_2D, D, Ee, Te, ee, se, xe, $e, ut),
          w.pixelStorei(w.UNPACK_ROW_LENGTH, Je),
          w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, et),
          w.pixelStorei(w.UNPACK_SKIP_PIXELS, bt),
          w.pixelStorei(w.UNPACK_SKIP_ROWS, ke),
          w.pixelStorei(w.UNPACK_SKIP_IMAGES, Me),
          D === 0 && C.generateMipmaps && w.generateMipmap(w.TEXTURE_2D),
          Ae.unbindTexture());
      }),
      (this.copyTextureToTexture3D = function (
        v,
        C,
        U = null,
        I = null,
        D = 0,
      ) {
        v.isTexture !== !0 &&
          (hr(
            "WebGLRenderer: copyTextureToTexture3D function signature has changed.",
          ),
          (U = arguments[0] || null),
          (I = arguments[1] || null),
          (v = arguments[2]),
          (C = arguments[3]),
          (D = arguments[4] || 0));
        let ee, se, pe, ge, Ee, Te, xe, $e, Je;
        const et = v.isCompressedTexture ? v.mipmaps[D] : v.image;
        (U !== null
          ? ((ee = U.max.x - U.min.x),
            (se = U.max.y - U.min.y),
            (pe = U.max.z - U.min.z),
            (ge = U.min.x),
            (Ee = U.min.y),
            (Te = U.min.z))
          : ((ee = et.width),
            (se = et.height),
            (pe = et.depth),
            (ge = 0),
            (Ee = 0),
            (Te = 0)),
          I !== null
            ? ((xe = I.x), ($e = I.y), (Je = I.z))
            : ((xe = 0), ($e = 0), (Je = 0)));
        const bt = Pe.convert(C.format),
          ke = Pe.convert(C.type);
        let Me;
        if (C.isData3DTexture) (y.setTexture3D(C, 0), (Me = w.TEXTURE_3D));
        else if (C.isDataArrayTexture || C.isCompressedArrayTexture)
          (y.setTexture2DArray(C, 0), (Me = w.TEXTURE_2D_ARRAY));
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.",
          );
          return;
        }
        (w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, C.flipY),
          w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, C.premultiplyAlpha),
          w.pixelStorei(w.UNPACK_ALIGNMENT, C.unpackAlignment));
        const ut = w.getParameter(w.UNPACK_ROW_LENGTH),
          We = w.getParameter(w.UNPACK_IMAGE_HEIGHT),
          Bt = w.getParameter(w.UNPACK_SKIP_PIXELS),
          Hn = w.getParameter(w.UNPACK_SKIP_ROWS),
          wt = w.getParameter(w.UNPACK_SKIP_IMAGES);
        (w.pixelStorei(w.UNPACK_ROW_LENGTH, et.width),
          w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, et.height),
          w.pixelStorei(w.UNPACK_SKIP_PIXELS, ge),
          w.pixelStorei(w.UNPACK_SKIP_ROWS, Ee),
          w.pixelStorei(w.UNPACK_SKIP_IMAGES, Te),
          v.isDataTexture || v.isData3DTexture
            ? w.texSubImage3D(Me, D, xe, $e, Je, ee, se, pe, bt, ke, et.data)
            : C.isCompressedArrayTexture
              ? w.compressedTexSubImage3D(
                  Me,
                  D,
                  xe,
                  $e,
                  Je,
                  ee,
                  se,
                  pe,
                  bt,
                  et.data,
                )
              : w.texSubImage3D(Me, D, xe, $e, Je, ee, se, pe, bt, ke, et),
          w.pixelStorei(w.UNPACK_ROW_LENGTH, ut),
          w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, We),
          w.pixelStorei(w.UNPACK_SKIP_PIXELS, Bt),
          w.pixelStorei(w.UNPACK_SKIP_ROWS, Hn),
          w.pixelStorei(w.UNPACK_SKIP_IMAGES, wt),
          D === 0 && C.generateMipmaps && w.generateMipmap(Me),
          Ae.unbindTexture());
      }),
      (this.initRenderTarget = function (v) {
        Re.get(v).__webglFramebuffer === void 0 && y.setupRenderTarget(v);
      }),
      (this.initTexture = function (v) {
        (v.isCubeTexture
          ? y.setTextureCube(v, 0)
          : v.isData3DTexture
            ? y.setTexture3D(v, 0)
            : v.isDataArrayTexture || v.isCompressedArrayTexture
              ? y.setTexture2DArray(v, 0)
              : y.setTexture2D(v, 0),
          Ae.unbindTexture());
      }),
      (this.resetState = function () {
        ((O = 0), (P = 0), (b = null), Ae.reset(), Ze.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return ln;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorSpace = e === aa ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        Xe.workingColorSpace === xr ? "display-p3" : "srgb"));
  }
}
class Zo extends Ut {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new un()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new un()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class fp extends pt {
  constructor(e = null, t = 1, n = 1, r, s, a, o, l, c = _t, u = _t, f, p) {
    (super(null, a, o, l, c, u, r, s, f, p),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class pp extends pt {
  constructor(e, t, n, r, s, a, o, l, c) {
    (super(e, t, n, r, s, a, o, l, c),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0));
  }
}
class mp extends Ot {
  constructor(e) {
    (super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial"));
  }
}
const mo = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class gp {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    ((this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        (o++, s === !1 && r.onStart !== void 0 && r.onStart(u, a, o), (s = !0));
      }),
      (this.itemEnd = function (u) {
        (a++,
          r.onProgress !== void 0 && r.onProgress(u, a, o),
          a === o && ((s = !1), r.onLoad !== void 0 && r.onLoad()));
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return ((l = u), this);
      }),
      (this.addHandler = function (u, f) {
        return (c.push(u, f), this);
      }),
      (this.removeHandler = function (u) {
        const f = c.indexOf(u);
        return (f !== -1 && c.splice(f, 2), this);
      }),
      (this.getHandler = function (u) {
        for (let f = 0, p = c.length; f < p; f += 2) {
          const m = c[f],
            x = c[f + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return x;
        }
        return null;
      }));
  }
}
const _p = new gp();
class ua {
  constructor(e) {
    ((this.manager = e !== void 0 ? e : _p),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}));
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return ((this.crossOrigin = e), this);
  }
  setWithCredentials(e) {
    return ((this.withCredentials = e), this);
  }
  setPath(e) {
    return ((this.path = e), this);
  }
  setResourcePath(e) {
    return ((this.resourcePath = e), this);
  }
  setRequestHeader(e) {
    return ((this.requestHeader = e), this);
  }
}
ua.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class vp extends ua {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    (this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const s = this,
      a = mo.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          (t && t(a), s.manager.itemEnd(e));
        }, 0),
        a
      );
    const o = wi("img");
    function l() {
      (u(), mo.add(e, this), t && t(this), s.manager.itemEnd(e));
    }
    function c(f) {
      (u(), r && r(f), s.manager.itemError(e), s.manager.itemEnd(e));
    }
    function u() {
      (o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1));
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class jo extends ua {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new pt(),
      a = new vp(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          ((s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s));
        },
        n,
        r,
      ),
      s
    );
  }
}
const go = new it();
class xp {
  constructor(e, t, n = 0, r = 1 / 0) {
    ((this.ray = new No(e, t)),
      (this.near = n),
      (this.far = r),
      (this.camera = null),
      (this.layers = new la()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      }));
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
        ? (this.ray.origin
            .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
            .unproject(t),
          this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
          (this.camera = t))
        : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return (
      go.identity().extractRotation(e.matrixWorld),
      this.ray.origin.setFromMatrixPosition(e.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(go),
      this
    );
  }
  intersectObject(e, t = !0, n = []) {
    return (Zs(e, this, n, t), n.sort(_o), n);
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, s = e.length; r < s; r++) Zs(e[r], this, n, t);
    return (n.sort(_o), n);
  }
}
function _o(i, e) {
  return i.distance - e.distance;
}
function Zs(i, e, t, n) {
  let r = !0;
  if (
    (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (r = !1),
    r === !0 && n === !0)
  ) {
    const s = i.children;
    for (let a = 0, o = s.length; a < o; a++) Zs(s[a], e, t, !0);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Js } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Js));
const Ui = { devMode: 0, camera: { fov: 45, depth: 10 } },
  Mp = new Zt(2, 2, 1, 1),
  Sp = new Wo(-1, 1, 1, -1, -1, 1),
  Ep = (i) => {
    if (i.isDFBO) {
      (j.pipeline.renderer.setRenderTarget(i.read),
        j.pipeline.renderer.clear(!0),
        j.pipeline.renderer.setRenderTarget(i.write),
        j.pipeline.renderer.clear(!0));
      return;
    }
    (j.pipeline.renderer.setRenderTarget(i), j.pipeline.renderer.clear(!0));
  },
  gr = ({
    width: i,
    height: e,
    filter: t = _t,
    format: n = ft,
    type: r = Tn,
    wrapping: s = Wt,
  } = {}) => {
    const a = new qt(i, e, {
      type: r,
      format: n,
      minFilter: t,
      magFilter: t,
      colorSpace: Xt,
      depthBuffer: !1,
    });
    return ((a.texture.wrapS = a.texture.wrapT = s), a);
  },
  Jo = ({
    width: i,
    height: e,
    filter: t = _t,
    format: n = ft,
    type: r = Tn,
    wrapping: s = Wt,
  } = {}) => ({
    read: gr({
      width: i,
      height: e,
      filter: t,
      format: n,
      type: r,
      wrapping: s,
    }),
    write: gr({
      width: i,
      height: e,
      filter: t,
      format: n,
      type: r,
      wrapping: s,
    }),
    swap() {
      const a = this.read;
      ((this.read = this.write), (this.write = a));
    },
    isDFBO: !0,
  }),
  Er = ({
    vertex: i,
    fragment: e,
    uniforms: t,
    glslVersion: n = null,
    geometry: r = Mp,
  }) =>
    new Lt(
      r,
      new mp({
        vertexShader: i,
        fragmentShader: e,
        uniforms: t,
        depthTest: !1,
        depthWrite: !1,
        glslVersion: n,
      }),
    ),
  ai = (i, e) => {
    const t = e.isDFBO ? e.write : e;
    (j.pipeline.renderer.setRenderTarget(t),
      j.pipeline.renderer.render(i, Sp),
      e.isDFBO && e.swap());
  },
  oi = {},
  at = (i, e) => (
    i in oi ||
      (e === void 0 &&
        (Ui.devMode && console.log(`Using 0 for undefined uniform ${i}`),
        (e = 0)),
      (oi[i] = { value: e })),
    oi[i]
  ),
  ot = (i, e) => {
    i in oi ? (oi[i].value = e) : (oi[i] = { value: e });
  };
class dn {
  static resizeEvent = "Viewport.resizeEvent";
  container = document.body;
  v2 = new Ue();
  iv2 = new Ue();
  v4 = new tt();
  aspect = 1;
  aspectV2 = new Ue();
  dpr = 2;
  #e = null;
  constructor() {
    (this.resetDPR(),
      Se.on("dpr.set", this.setDPR),
      Se.on("dpr.reset", this.resetDPR),
      window.addEventListener("resize", this.debounceResize));
  }
  setDPR = (e) => {
    ((this.dpr = e), this.update());
  };
  resetDPR = () => {
    ((this.dpr = Math.min(2, window.devicePixelRatio)), this.update());
  };
  setContainer = (e) => {
    ((this.container = e), this.update());
  };
  debounceResize = () => {
    (this.#e !== null && clearTimeout(this.#e),
      (this.#e = setTimeout(this.update, 333)));
  };
  update = () => {
    ((this.#e = null),
      (this.x =
        this.v2.x =
        this.v4.x =
          this.container.clientWidth || this.container.innerWidth),
      (this.y =
        this.v2.y =
        this.v4.y =
          this.container.clientHeight || this.container.innerHeight),
      (this.aspect = this.x / this.y),
      (this.aspectV2.x = this.aspect > 1 ? this.aspect : 1),
      (this.aspectV2.y = this.aspect > 1 ? 1 : 1 / this.aspect),
      (this.iv2.x = this.v4.z = 1 / this.x),
      (this.iv2.y = this.v4.w = 1 / this.y),
      Se.dispatch(dn.resizeEvent, this));
  };
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */ class Kt {
  constructor(e, t, n, r, s = "div") {
    ((this.parent = e),
      (this.object = t),
      (this.property = n),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("controller"),
      this.domElement.classList.add(r),
      (this.$name = document.createElement("div")),
      this.$name.classList.add("name"),
      (Kt.nextNameID = Kt.nextNameID || 0),
      (this.$name.id = `lil-gui-name-${++Kt.nextNameID}`),
      (this.$widget = document.createElement(s)),
      this.$widget.classList.add("widget"),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.domElement.addEventListener("keydown", (a) => a.stopPropagation()),
      this.domElement.addEventListener("keyup", (a) => a.stopPropagation()),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(n));
  }
  name(e) {
    return ((this._name = e), (this.$name.innerHTML = e), this);
  }
  onChange(e) {
    return ((this._onChange = e), this);
  }
  _callOnChange() {
    (this.parent._callOnChange(this),
      this._onChange !== void 0 && this._onChange.call(this, this.getValue()),
      (this._changed = !0));
  }
  onFinishChange(e) {
    return ((this._onFinishChange = e), this);
  }
  _callOnFinishChange() {
    (this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1));
  }
  reset() {
    return (this.setValue(this.initialValue), this._callOnFinishChange(), this);
  }
  enable(e = !0) {
    return this.disable(!e);
  }
  disable(e = !0) {
    return e === this._disabled
      ? this
      : ((this._disabled = e),
        this.domElement.classList.toggle("disabled", e),
        this.$disable.toggleAttribute("disabled", e),
        this);
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return (t.name(this._name), this.destroy(), t);
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = !0) {
    return (
      (this._listening = e),
      this._listenCallbackID !== void 0 &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = void 0)),
      this._listening && this._listenCallback(),
      this
    );
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    (e !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = e));
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return (
      (this.object[this.property] = e),
      this._callOnChange(),
      this.updateDisplay(),
      this
    );
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return (this.setValue(e), this._callOnFinishChange(), this);
  }
  save() {
    return this.getValue();
  }
  destroy() {
    (this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement));
  }
}
class yp extends Kt {
  constructor(e, t, n) {
    (super(e, t, n, "boolean", "label"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "checkbox"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener("change", () => {
        (this.setValue(this.$input.checked), this._callOnFinishChange());
      }),
      (this.$disable = this.$input),
      this.updateDisplay());
  }
  updateDisplay() {
    return ((this.$input.checked = this.getValue()), this);
  }
}
function js(i) {
  let e, t;
  return (
    (e = i.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (t = e[2])
      : (e = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
        ? (t =
            parseInt(e[1]).toString(16).padStart(2, 0) +
            parseInt(e[2]).toString(16).padStart(2, 0) +
            parseInt(e[3]).toString(16).padStart(2, 0))
        : (e = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
          (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
    t ? "#" + t : !1
  );
}
const Tp = {
    isPrimitive: !0,
    match: (i) => typeof i == "string",
    fromHexString: js,
    toHexString: js,
  },
  Ri = {
    isPrimitive: !0,
    match: (i) => typeof i == "number",
    fromHexString: (i) => parseInt(i.substring(1), 16),
    toHexString: (i) => "#" + i.toString(16).padStart(6, 0),
  },
  Ap = {
    isPrimitive: !1,
    match: (i) => Array.isArray(i),
    fromHexString(i, e, t = 1) {
      const n = Ri.fromHexString(i);
      ((e[0] = (((n >> 16) & 255) / 255) * t),
        (e[1] = (((n >> 8) & 255) / 255) * t),
        (e[2] = ((n & 255) / 255) * t));
    },
    toHexString([i, e, t], n = 1) {
      n = 255 / n;
      const r = ((i * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return Ri.toHexString(r);
    },
  },
  bp = {
    isPrimitive: !1,
    match: (i) => Object(i) === i,
    fromHexString(i, e, t = 1) {
      const n = Ri.fromHexString(i);
      ((e.r = (((n >> 16) & 255) / 255) * t),
        (e.g = (((n >> 8) & 255) / 255) * t),
        (e.b = ((n & 255) / 255) * t));
    },
    toHexString({ r: i, g: e, b: t }, n = 1) {
      n = 255 / n;
      const r = ((i * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return Ri.toHexString(r);
    },
  },
  wp = [Tp, Ri, Ap, bp];
function Rp(i) {
  return wp.find((e) => e.match(i));
}
class Cp extends Kt {
  constructor(e, t, n, r) {
    (super(e, t, n, "color"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "color"),
      this.$input.setAttribute("tabindex", -1),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      (this.$text = document.createElement("input")),
      this.$text.setAttribute("type", "text"),
      this.$text.setAttribute("spellcheck", "false"),
      this.$text.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = Rp(this.initialValue)),
      (this._rgbScale = r),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener("input", () => {
        this._setValueFromHexString(this.$input.value);
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$text.addEventListener("input", () => {
        const s = js(this.$text.value);
        s && this._setValueFromHexString(s);
      }),
      this.$text.addEventListener("focus", () => {
        ((this._textFocused = !0), this.$text.select());
      }),
      this.$text.addEventListener("blur", () => {
        ((this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange());
      }),
      (this.$disable = this.$text),
      this.updateDisplay());
  }
  reset() {
    return (this._setValueFromHexString(this._initialValueHexString), this);
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else
      (this._format.fromHexString(e, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay());
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return (this._setValueFromHexString(e), this._callOnFinishChange(), this);
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale,
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    );
  }
}
class os extends Kt {
  constructor(e, t, n) {
    (super(e, t, n, "function"),
      (this.$button = document.createElement("button")),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener("click", (r) => {
        (r.preventDefault(),
          this.getValue().call(this.object),
          this._callOnChange());
      }),
      this.$button.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$disable = this.$button));
  }
}
class Pp extends Kt {
  constructor(e, t, n, r, s, a) {
    (super(e, t, n, "number"), this._initInput(), this.min(r), this.max(s));
    const o = a !== void 0;
    (this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay());
  }
  decimals(e) {
    return ((this._decimals = e), this.updateDisplay(), this);
  }
  min(e) {
    return ((this._min = e), this._onUpdateMinMax(), this);
  }
  max(e) {
    return ((this._max = e), this._onUpdateMinMax(), this);
  }
  step(e, t = !0) {
    return ((this._step = e), (this._stepExplicit = t), this);
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      ((t = Math.max(0, Math.min(t, 1))),
        (this.$fill.style.width = t * 100 + "%"));
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === void 0 ? e : e.toFixed(this._decimals)),
      this
    );
  }
  _initInput() {
    ((this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      window.matchMedia("(pointer: coarse)").matches &&
        (this.$input.setAttribute("type", "number"),
        this.$input.setAttribute("step", "any")),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input));
    const t = () => {
        let T = parseFloat(this.$input.value);
        isNaN(T) ||
          (this._stepExplicit && (T = this._snap(T)),
          this.setValue(this._clamp(T)));
      },
      n = (T) => {
        const E = parseFloat(this.$input.value);
        isNaN(E) ||
          (this._snapClampSetValue(E + T),
          (this.$input.value = this.getValue()));
      },
      r = (T) => {
        (T.key === "Enter" && this.$input.blur(),
          T.code === "ArrowUp" &&
            (T.preventDefault(), n(this._step * this._arrowKeyMultiplier(T))),
          T.code === "ArrowDown" &&
            (T.preventDefault(),
            n(this._step * this._arrowKeyMultiplier(T) * -1)));
      },
      s = (T) => {
        this._inputFocused &&
          (T.preventDefault(), n(this._step * this._normalizeMouseWheel(T)));
      };
    let a = !1,
      o,
      l,
      c,
      u,
      f;
    const p = 5,
      m = (T) => {
		console.log("T0:", T)
        ((o = T.clientX),
          (l = c = T.clientY),
          (a = !0),
          (u = this.getValue()),
          (f = 0),
          window.addEventListener("mousemove", x),
          window.addEventListener("mouseup", S));
      },
      x = (T) => {
		// scale mouse position
		console.log("T1:", T)
        if (a) {
          const E = T.clientX - o,
            A = T.clientY - l;
			
          Math.abs(A) > p
            ? (T.preventDefault(),
              this.$input.blur(),
              (a = !1),
              this._setDraggingStyle(!0, "vertical"))
            : Math.abs(E) > p && S();
        }
        if (!a) {
          const E = T.clientY - c;
          ((f -= E * this._step * this._arrowKeyMultiplier(T)),
            u + f > this._max
              ? (f = this._max - u)
              : u + f < this._min && (f = this._min - u),
            this._snapClampSetValue(u + f));
        }
        c = T.clientY;
      },
      S = () => {
        (this._setDraggingStyle(!1, "vertical"),
          this._callOnFinishChange(),
          window.removeEventListener("mousemove", x),
          window.removeEventListener("mouseup", S));
      },
      d = () => {
        this._inputFocused = !0;
      },
      h = () => {
        ((this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange());
      };
    (this.$input.addEventListener("input", t),
      this.$input.addEventListener("keydown", r),
      this.$input.addEventListener("wheel", s, { passive: !1 }),
      this.$input.addEventListener("mousedown", m),
      this.$input.addEventListener("focus", d),
      this.$input.addEventListener("blur", h));
  }
  _initSlider() {
    ((this._hasSlider = !0),
      (this.$slider = document.createElement("div")),
      this.$slider.classList.add("slider"),
      (this.$fill = document.createElement("div")),
      this.$fill.classList.add("fill"),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add("hasSlider"));
    const e = (h, T, E, A, O) => ((h - T) / (E - T)) * (O - A) + A,
      t = (h) => {
        const T = this.$slider.getBoundingClientRect();
        let E = e(h, T.left, T.right, this._min, this._max);
        this._snapClampSetValue(E);
      },
      n = (h) => {
        (this._setDraggingStyle(!0),
          t(h.clientX),
          window.addEventListener("mousemove", r),
          window.addEventListener("mouseup", s));
      },
      r = (h) => {
        t(h.clientX);
      },
      s = () => {
        (this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("mousemove", r),
          window.removeEventListener("mouseup", s));
      };
    let a = !1,
      o,
      l;
    const c = (h) => {
        (h.preventDefault(),
          this._setDraggingStyle(!0),
          t(h.touches[0].clientX),
          (a = !1));
      },
      u = (h) => {
        h.touches.length > 1 ||
          (this._hasScrollBar
            ? ((o = h.touches[0].clientX), (l = h.touches[0].clientY), (a = !0))
            : c(h),
          window.addEventListener("touchmove", f, { passive: !1 }),
          window.addEventListener("touchend", p));
      },
      f = (h) => {
        if (a) {
          const T = h.touches[0].clientX - o,
            E = h.touches[0].clientY - l;
          Math.abs(T) > Math.abs(E)
            ? c(h)
            : (window.removeEventListener("touchmove", f),
              window.removeEventListener("touchend", p));
        } else (h.preventDefault(), t(h.touches[0].clientX));
      },
      p = () => {
        (this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("touchmove", f),
          window.removeEventListener("touchend", p));
      },
      m = this._callOnFinishChange.bind(this),
      x = 400;
    let S;
    const d = (h) => {
      if (Math.abs(h.deltaX) < Math.abs(h.deltaY) && this._hasScrollBar) return;
      h.preventDefault();
      const E = this._normalizeMouseWheel(h) * this._step;
      (this._snapClampSetValue(this.getValue() + E),
        (this.$input.value = this.getValue()),
        clearTimeout(S),
        (S = setTimeout(m, x)));
    };
    (this.$slider.addEventListener("mousedown", n),
      this.$slider.addEventListener("touchstart", u, { passive: !1 }),
      this.$slider.addEventListener("wheel", d, { passive: !1 }));
  }
  _setDraggingStyle(e, t = "horizontal") {
    (this.$slider && this.$slider.classList.toggle("active", e),
      document.body.classList.toggle("lil-gui-dragging", e),
      document.body.classList.toggle(`lil-gui-${t}`, e));
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return (
      Math.floor(e.deltaY) !== e.deltaY &&
        e.wheelDelta &&
        ((t = 0),
        (n = -e.wheelDelta / 120),
        (n *= this._stepExplicit ? 1 : 10)),
      t + -n
    );
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return (e.shiftKey ? (t *= 10) : e.altKey && (t /= 10), t);
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return (
      e < this._min && (e = this._min),
      e > this._max && (e = this._max),
      e
    );
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Dp extends Kt {
  constructor(e, t, n, r) {
    (super(e, t, n, "option"),
      (this.$select = document.createElement("select")),
      this.$select.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      (this._values = Array.isArray(r) ? r : Object.values(r)),
      (this._names = Array.isArray(r) ? r : Object.keys(r)),
      this._names.forEach((s) => {
        const a = document.createElement("option");
        ((a.innerHTML = s), this.$select.appendChild(a));
      }),
      this.$select.addEventListener("change", () => {
        (this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange());
      }),
      this.$select.addEventListener("focus", () => {
        this.$display.classList.add("focus");
      }),
      this.$select.addEventListener("blur", () => {
        this.$display.classList.remove("focus");
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.updateDisplay());
  }
  updateDisplay() {
    const e = this.getValue(),
      t = this._values.indexOf(e);
    return (
      (this.$select.selectedIndex = t),
      (this.$display.innerHTML = t === -1 ? e : this._names[t]),
      this
    );
  }
}
class Lp extends Kt {
  constructor(e, t, n) {
    (super(e, t, n, "string"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$input.addEventListener("input", () => {
        this.setValue(this.$input.value);
      }),
      this.$input.addEventListener("keydown", (r) => {
        r.code === "Enter" && this.$input.blur();
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay());
  }
  updateDisplay() {
    return ((this.$input.value = this.getValue()), this);
  }
}
const Up = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function Ip(i) {
  const e = document.createElement("style");
  e.innerHTML = i;
  const t = document.querySelector("head link[rel=stylesheet], head style");
  t ? document.head.insertBefore(e, t) : document.head.appendChild(e);
}
let vo = !1;
class da {
  constructor({
    parent: e,
    autoPlace: t = e === void 0,
    container: n,
    width: r,
    title: s = "Controls",
    closeFolders: a = !1,
    injectStyles: o = !0,
    touchStyles: l = !0,
  } = {}) {
    if (
      ((this.parent = e),
      (this.root = e ? e.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("lil-gui"),
      (this.$title = document.createElement("div")),
      this.$title.classList.add("title"),
      this.$title.setAttribute("role", "button"),
      this.$title.setAttribute("aria-expanded", !0),
      this.$title.setAttribute("tabindex", 0),
      this.$title.addEventListener("click", () =>
        this.openAnimated(this._closed),
      ),
      this.$title.addEventListener("keydown", (c) => {
        (c.code === "Enter" || c.code === "Space") &&
          (c.preventDefault(), this.$title.click());
      }),
      this.$title.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$children = document.createElement("div")),
      this.$children.classList.add("children"),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(s),
      this.parent)
    ) {
      (this.parent.children.push(this),
        this.parent.folders.push(this),
        this.parent.$children.appendChild(this.domElement));
      return;
    }
    (this.domElement.classList.add("root"),
      l && this.domElement.classList.add("allow-touch-styles"),
      !vo && o && (Ip(Up), (vo = !0)),
      n
        ? n.appendChild(this.domElement)
        : t &&
          (this.domElement.classList.add("autoPlace"),
          document.body.appendChild(this.domElement)),
      r && this.domElement.style.setProperty("--width", r + "px"),
      (this._closeFolders = a));
  }
  add(e, t, n, r, s) {
    if (Object(n) === n) return new Dp(this, e, t, n);
    const a = e[t];
    switch (typeof a) {
      case "number":
        return new Pp(this, e, t, n, r, s);
      case "boolean":
        return new yp(this, e, t);
      case "string":
        return new Lp(this, e, t);
      case "function":
        return new os(this, e, t);
    }
    console.error(
      `gui.add failed
	property:`,
      t,
      `
	object:`,
      e,
      `
	value:`,
      a,
    );
  }
  addColor(e, t, n = 1) {
    return new Cp(this, e, t, n);
  }
  addFolder(e) {
    const t = new da({ parent: this, title: e });
    return (this.root._closeFolders && t.close(), t);
  }
  load(e, t = !0) {
    return (
      e.controllers &&
        this.controllers.forEach((n) => {
          n instanceof os ||
            (n._name in e.controllers && n.load(e.controllers[n._name]));
        }),
      t &&
        e.folders &&
        this.folders.forEach((n) => {
          n._title in e.folders && n.load(e.folders[n._title]);
        }),
      this
    );
  }
  save(e = !0) {
    const t = { controllers: {}, folders: {} };
    return (
      this.controllers.forEach((n) => {
        if (!(n instanceof os)) {
          if (n._name in t.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${n._name}"`,
            );
          t.controllers[n._name] = n.save();
        }
      }),
      e &&
        this.folders.forEach((n) => {
          if (n._title in t.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${n._title}"`,
            );
          t.folders[n._title] = n.save();
        }),
      t
    );
  }
  open(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      this.domElement.classList.toggle("closed", this._closed),
      this
    );
  }
  close() {
    return this.open(!1);
  }
  _setClosed(e) {
    this._closed !== e && ((this._closed = e), this._callOnOpenClose(this));
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      requestAnimationFrame(() => {
        const t = this.$children.clientHeight;
        ((this.$children.style.height = t + "px"),
          this.domElement.classList.add("transition"));
        const n = (s) => {
          s.target === this.$children &&
            ((this.$children.style.height = ""),
            this.domElement.classList.remove("transition"),
            this.$children.removeEventListener("transitionend", n));
        };
        this.$children.addEventListener("transitionend", n);
        const r = e ? this.$children.scrollHeight : 0;
        (this.domElement.classList.toggle("closed", !e),
          requestAnimationFrame(() => {
            this.$children.style.height = r + "px";
          }));
      }),
      this
    );
  }
  title(e) {
    return ((this._title = e), (this.$title.innerHTML = e), this);
  }
  reset(e = !0) {
    return (
      (e ? this.controllersRecursive() : this.controllers).forEach((n) =>
        n.reset(),
      ),
      this
    );
  }
  onChange(e) {
    return ((this._onChange = e), this);
  }
  _callOnChange(e) {
    (this.parent && this.parent._callOnChange(e),
      this._onChange !== void 0 &&
        this._onChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        }));
  }
  onFinishChange(e) {
    return ((this._onFinishChange = e), this);
  }
  _callOnFinishChange(e) {
    (this.parent && this.parent._callOnFinishChange(e),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        }));
  }
  onOpenClose(e) {
    return ((this._onOpenClose = e), this);
  }
  _callOnOpenClose(e) {
    (this.parent && this.parent._callOnOpenClose(e),
      this._onOpenClose !== void 0 && this._onOpenClose.call(this, e));
  }
  destroy() {
    (this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach((e) => e.destroy()));
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.controllersRecursive());
      }),
      e
    );
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.foldersRecursive());
      }),
      e
    );
  }
}
const Np = da,
  Qo = Ui.devMode ? new Np() : null,
  ls = {};
function el(i, e, t, n) {
  return Ui.devMode ? Qo.add(i, e, t, n) : null;
}
function Vt(i, e, t, n = (e + t) * 0.5) {
  if (!Ui.devMode) return { value: n };
  for (; i in ls; ) i += "_";
  return ((ls[i] = n), Qo.add(ls, i, e, t).onChange((r) => ot(i, r)), at(i, n));
}
var Fp = `precision mediump float;\r
precision mediump sampler2D;

varying highp vec2 vUv;\r
varying highp vec2 vR;\r
varying highp vec2 vT;

uniform sampler2D bumpMap;\r
uniform vec2 eps;\r
uniform vec2 simTexelSize;\r
uniform float amplification;

float readBump(vec2 uv) {\r
  vec2 texCoordFloor = floor(uv / simTexelSize) * simTexelSize;

  vec2 c00 = texCoordFloor;\r
  vec2 c10 = c00 + vec2(simTexelSize.x, 0.0);\r
  vec2 c01 = c00 + vec2(0.0, simTexelSize.y);\r
  vec2 c11 = c00 + simTexelSize;

  float tex00 = texture2D(bumpMap, c00).x;\r
  float tex10 = texture2D(bumpMap, c10).x;\r
  float tex01 = texture2D(bumpMap, c01).x;\r
  float tex11 = texture2D(bumpMap, c11).x;

  vec2 f = fract(uv / simTexelSize);

  float lerpX1 = mix(tex00, tex10, f.x);\r
  float lerpX2 = mix(tex01, tex11, f.x);\r
  return mix(lerpX1, lerpX2, f.y);\r
}

void main () {\r
  float C = readBump(vUv);\r
  float R = readBump(vR);\r
  float T = readBump(vT);\r
  vec2 dN = vec2(R - C, T - C) * amplification;\r
  vec3 N = vec3(0., 0., 1.);\r
  N = normalize(N + cross(dN.x * N + eps.xyy, dN.y * N + eps.yxy));

  gl_FragColor = vec4(N, 1.);\r
}`,
  Op = `precision highp float;

attribute vec2 position;\r
attribute vec2 uv;

varying vec2 vUv;\r
varying vec2 vR;\r
varying vec2 vT;

uniform vec2 texelSize;

void main () {\r
  vUv = uv;\r
  vR = vUv + vec2(texelSize.x, 0.);\r
  vT = vUv + vec2(0., texelSize.y);\r
  gl_Position = vec4(position, 0., 1);\r
}`;
class Ii {
  static provider = "BumpToNormal.provider";
  simScale = 1;
  eps = new Ue();
  texelSize = new Ue();
  simTexelSize = new Ue();
  constructor({
    inProvider: e,
    amplification: t = 1150,
    outProvider: n = Ii.provider,
    outEvent: r = !1,
    updateEvent: s = !1,
    autoResize: a = !0,
    width: o = j.viewport.x,
    height: l = j.viewport.y,
    simScale: c = 1,
  }) {
    ((this.event = r),
      (this.simScale = c),
      (this.rt = gr({ width: o, height: l, format: ft, filter: dt })),
      ot(n, this.rt.texture),
      this.eps.set(1 / o, 0),
      this.texelSize.set(1 / o, 1 / l),
      this.simTexelSize.set(
        1 / this.simScale / j.viewport.x,
        1 / this.simScale / j.viewport.y,
      ),
      (this.program = Er({
        vertex: Op,
        fragment: Fp,
        uniforms: {
          amplification: Vt("amplification", 0, 1e4, t),
          eps: { value: this.eps },
          texelSize: { value: this.texelSize },
          simTexelSize: { value: this.simTexelSize },
          bumpMap: at(e),
        },
      })),
      s && Se.on(s, this.update),
      a && Se.on(dn.resizeEvent, this.onResize));
  }
  update = () => {
    (ai(this.program, this.rt),
      this.event && Se.dispatch(this.event, this.rt.texture));
  };
  onResize = ({ x: e, y: t }) => {
    (this.rt.setSize(e, t),
      this.eps.set(1 / e, 0),
      this.texelSize.set(1 / e, 1 / t),
      this.simTexelSize.set(
        1 / this.simScale / j.viewport.x,
        1 / this.simScale / j.viewport.y,
      ));
  };
}
class sn {
  static collection = {};
  static array = [];
  static get = (e) => sn.collection[e].value;
  static getV = (e) => sn.collection[e].v;
  static set = (e, t) => (sn.collection[e].target = t);
  static update = (e) => sn.array.forEach((t) => t.update(e));
  constructor(e, t, n = 1, r = 1) {
    ((this.damp = r),
      (this.k = n),
      (this.v = 0),
      (this.value = t),
      (this.target = t),
      (sn.collection[e] = this),
      sn.array.push(this));
  }
  update = (e) => {
    const t = (this.target - this.value) * this.k,
      n = this.v * this.damp;
    ((this.v += (t - n) * e), (this.value += this.v * e));
  };
}
class Sn {
  static collection = {};
  static get = (e) => Sn.collection[e].springs.map((t) => t.value);
  static getV = (e) => Sn.collection[e].springs.map((t) => t.v);
  static set = (e, t) =>
    Sn.collection[e].springs.forEach((n, r) => (n.target = t[r]));
  constructor(e, t, n = 1, r = 1) {
    ((this.name = e),
      (this.size = t.length),
      (this.scalarNames = this.getScalarNames(this.name, this.size)),
      (this.springs = this.scalarNames.map((s, a) => new sn(s, t[a], n, r))),
      (Sn.collection[e] = this));
  }
  getScalarNames = (e, t) => {
    const n = [];
    for (let r = 0; r < t; r++) n.push(`!__vec${t}-${r}@${e}`);
    return n;
  };
}
class Bp {
  constructor(e, t, n) {
    ((this.name = e),
      (this.fg = t),
      (this.bg = n),
      (this.PR = Math.round(window.devicePixelRatio || 1)),
      (this.WIDTH = 90 * this.PR),
      (this.HEIGHT = 48 * this.PR),
      (this.TEXT_X = 3 * this.PR),
      (this.TEXT_Y = 2 * this.PR),
      (this.GRAPH_X = 3 * this.PR),
      (this.GRAPH_Y = 15 * this.PR),
      (this.GRAPH_WIDTH = 84 * this.PR),
      (this.GRAPH_HEIGHT = 30 * this.PR),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.width = 90 * this.PR),
      (this.canvas.height = 48 * this.PR),
      (this.canvas.style.width = "90px"),
      (this.canvas.style.position = "absolute"),
      (this.canvas.style.height = "48px"),
      (this.canvas.style.cssText = "width:90px;height:48px"),
      (this.context = this.canvas.getContext("2d")),
      this.context &&
        ((this.context.font =
          "bold " + 9 * this.PR + "px Helvetica,Arial,sans-serif"),
        (this.context.textBaseline = "top"),
        (this.context.fillStyle = this.bg),
        this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT),
        (this.context.fillStyle = this.fg),
        this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y),
        this.context.fillRect(
          this.GRAPH_X,
          this.GRAPH_Y,
          this.GRAPH_WIDTH,
          this.GRAPH_HEIGHT,
        ),
        (this.context.fillStyle = this.bg),
        (this.context.globalAlpha = 0.9),
        this.context.fillRect(
          this.GRAPH_X,
          this.GRAPH_Y,
          this.GRAPH_WIDTH,
          this.GRAPH_HEIGHT,
        )));
  }
  update(e, t, n, r, s = 0) {
    let a = 1 / 0,
      o = 0;
    !this.context ||
      ((a = Math.min(a, e)),
      (o = Math.max(n, e)),
      (r = Math.max(r, t)),
      (this.context.fillStyle = this.bg),
      (this.context.globalAlpha = 1),
      this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y),
      (this.context.fillStyle = this.fg),
      this.context.fillText(
        e.toFixed(s) +
          " " +
          this.name +
          " (" +
          a.toFixed(s) +
          "-" +
          parseFloat(o.toFixed(s)) +
          ")",
        this.TEXT_X,
        this.TEXT_Y,
      ),
      this.context.drawImage(
        this.canvas,
        this.GRAPH_X + this.PR,
        this.GRAPH_Y,
        this.GRAPH_WIDTH - this.PR,
        this.GRAPH_HEIGHT,
        this.GRAPH_X,
        this.GRAPH_Y,
        this.GRAPH_WIDTH - this.PR,
        this.GRAPH_HEIGHT,
      ),
      this.context.fillRect(
        this.GRAPH_X + this.GRAPH_WIDTH - this.PR,
        this.GRAPH_Y,
        this.PR,
        this.GRAPH_HEIGHT,
      ),
      (this.context.fillStyle = this.bg),
      (this.context.globalAlpha = 0.9),
      this.context.fillRect(
        this.GRAPH_X + this.GRAPH_WIDTH - this.PR,
        this.GRAPH_Y,
        this.PR,
        (1 - t / r) * this.GRAPH_HEIGHT,
      ));
  }
}
const tl = class ti {
  constructor({
    logsPerSecond: e = 20,
    samplesLog: t = 100,
    samplesGraph: n = 10,
    precision: r = 2,
    minimal: s = !1,
    horizontal: a = !0,
    mode: o = 0,
  } = {}) {
    ((this.totalCpuDuration = 0),
      (this.totalGpuDuration = 0),
      (this.totalGpuDurationCompute = 0),
      (this.totalFps = 0),
      (this.activeQuery = null),
      (this.gpuQueries = []),
      (this.renderCount = 0),
      (this.mode = o),
      (this.horizontal = a),
      (this.dom = document.createElement("div")),
      (this.dom.style.cssText =
        "position:fixed;top:0;left:0;opacity:0.9;z-index:10000;"),
      s && (this.dom.style.cssText += "cursor:pointer"),
      (this.gl = null),
      (this.query = null),
      (this.isRunningCPUProfiling = !1),
      (this.minimal = s),
      (this.beginTime = (performance || Date).now()),
      (this.prevTime = this.beginTime),
      (this.prevCpuTime = this.beginTime),
      (this.frames = 0),
      (this.renderCount = 0),
      (this.threeRendererPatched = !1),
      (this.averageCpu = { logs: [], graph: [] }),
      (this.averageGpu = { logs: [], graph: [] }),
      (this.averageGpuCompute = { logs: [], graph: [] }),
      (this.queryCreated = !1),
      (this.fpsPanel = this.addPanel(new ti.Panel("FPS", "#0ff", "#002"), 0)),
      (this.msPanel = this.addPanel(new ti.Panel("CPU", "#0f0", "#020"), 1)),
      (this.gpuPanel = null),
      (this.gpuPanelCompute = null),
      (this.samplesLog = t),
      (this.samplesGraph = n),
      (this.precision = r),
      (this.logsPerSecond = e),
      this.minimal
        ? (this.dom.addEventListener(
            "click",
            (l) => {
              (l.preventDefault(),
                this.showPanel(++this.mode % this.dom.children.length));
            },
            !1,
          ),
          (this.mode = o),
          this.showPanel(this.mode))
        : window.addEventListener("resize", () => {
            (this.resizePanel(this.fpsPanel, 0),
              this.resizePanel(this.msPanel, 1),
              this.gpuPanel && this.resizePanel(this.gpuPanel, 2),
              this.gpuPanelCompute &&
                this.resizePanel(this.gpuPanelCompute, 3));
          }));
  }
  patchThreeRenderer(e) {
    const t = e.render,
      n = this;
    ((e.render = function (r, s) {
      (n.begin(), t.call(this, r, s), n.end());
    }),
      (this.threeRendererPatched = !0));
  }
  resizePanel(e, t) {
    ((e.canvas.style.position = "absolute"),
      this.minimal
        ? (e.canvas.style.display = "none")
        : ((e.canvas.style.display = "block"),
          this.horizontal
            ? ((e.canvas.style.top = "0px"),
              (e.canvas.style.left = (t * e.WIDTH) / e.PR + "px"))
            : ((e.canvas.style.left = "0px"),
              (e.canvas.style.top = (t * e.HEIGHT) / e.PR + "px"))));
  }
  addPanel(e, t) {
    return (
      e.canvas && (this.dom.appendChild(e.canvas), this.resizePanel(e, t)),
      e
    );
  }
  showPanel(e) {
    for (let t = 0; t < this.dom.children.length; t++) {
      const n = this.dom.children[t];
      n.style.display = t === e ? "block" : "none";
    }
    this.mode = e;
  }
  async init(e) {
    if (!e) {
      console.error('Stats: The "canvas" parameter is undefined.');
      return;
    }
    if (e.isWebGLRenderer && !this.threeRendererPatched) {
      const t = e;
      (this.patchThreeRenderer(t), (this.gl = t.getContext()));
    } else !this.gl && e instanceof WebGL2RenderingContext && (this.gl = e);
    if (e.isWebGPURenderer) {
      ((e.backend.trackTimestamp = !0),
        (await e.hasFeatureAsync("timestamp-query")) &&
          ((this.gpuPanel = this.addPanel(
            new ti.Panel("GPU", "#ff0", "#220"),
            2,
          )),
          (this.gpuPanelCompute = this.addPanel(
            new ti.Panel("CPT", "#e1e1e1", "#212121"),
            3,
          )),
          (this.info = e.info)));
      return;
    } else if (
      (!this.gl && e instanceof HTMLCanvasElement) ||
      e instanceof OffscreenCanvas
    ) {
      if (((this.gl = e.getContext("webgl2")), !this.gl)) {
        console.error("Stats: Unable to obtain WebGL2 context.");
        return;
      }
    } else if (!this.gl) {
      console.error(
        "Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas.",
      );
      return;
    }
    ((this.ext = this.gl.getExtension("EXT_disjoint_timer_query_webgl2")),
      this.ext &&
        (this.gpuPanel = this.addPanel(
          new ti.Panel("GPU", "#ff0", "#220"),
          2,
        )));
  }
  begin() {
    (this.isRunningCPUProfiling || this.beginProfiling("cpu-started"),
      !(!this.gl || !this.ext) &&
        this.gl &&
        this.ext &&
        (this.activeQuery && this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),
        (this.activeQuery = this.gl.createQuery()),
        this.activeQuery !== null &&
          this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.activeQuery)));
  }
  end() {
    (this.renderCount++,
      this.gl &&
        this.ext &&
        this.activeQuery &&
        (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),
        this.gpuQueries.push({ query: this.activeQuery }),
        (this.activeQuery = null)));
  }
  processGpuQueries() {
    !this.gl ||
      !this.ext ||
      ((this.totalGpuDuration = 0),
      this.gpuQueries.forEach((e, t) => {
        if (this.gl) {
          const n = this.gl.getQueryParameter(
              e.query,
              this.gl.QUERY_RESULT_AVAILABLE,
            ),
            r = this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);
          if (n && !r) {
            const a =
              this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT) * 1e-6;
            ((this.totalGpuDuration += a),
              this.gl.deleteQuery(e.query),
              this.gpuQueries.splice(t, 1));
          }
        }
      }));
  }
  update() {
    (this.info === void 0
      ? this.processGpuQueries()
      : ((this.totalGpuDuration = this.info.render.timestamp),
        (this.totalGpuDurationCompute = this.info.compute.timestamp),
        this.addToAverage(
          this.totalGpuDurationCompute,
          this.averageGpuCompute,
        )),
      this.endProfiling("cpu-started", "cpu-finished", "cpu-duration"),
      this.addToAverage(this.totalCpuDuration, this.averageCpu),
      this.addToAverage(this.totalGpuDuration, this.averageGpu),
      (this.renderCount = 0),
      this.totalCpuDuration === 0 && this.beginProfiling("cpu-started"),
      (this.totalCpuDuration = 0),
      (this.totalFps = 0),
      (this.beginTime = this.endInternal()));
  }
  endInternal() {
    this.frames++;
    const e = (performance || Date).now();
    if (
      (e >= this.prevCpuTime + 1e3 / this.logsPerSecond &&
        (this.updatePanel(this.msPanel, this.averageCpu),
        this.updatePanel(this.gpuPanel, this.averageGpu),
        this.gpuPanelCompute &&
          this.updatePanel(this.gpuPanelCompute, this.averageGpuCompute),
        (this.prevCpuTime = e)),
      e >= this.prevTime + 1e3)
    ) {
      const t = (this.frames * 1e3) / (e - this.prevTime);
      (this.fpsPanel.update(t, t, 100, 100, 0),
        (this.prevTime = e),
        (this.frames = 0));
    }
    return e;
  }
  addToAverage(e, t) {
    (t.logs.push(e),
      t.logs.length > this.samplesLog && t.logs.shift(),
      t.graph.push(e),
      t.graph.length > this.samplesGraph && t.graph.shift());
  }
  beginProfiling(e) {
    window.performance &&
      (window.performance.mark(e), (this.isRunningCPUProfiling = !0));
  }
  endProfiling(e, t, n) {
    if (window.performance && t && this.isRunningCPUProfiling) {
      window.performance.mark(t);
      const r = performance.measure(n, e, t);
      ((this.totalCpuDuration += r.duration),
        (this.isRunningCPUProfiling = !1));
    }
  }
  updatePanel(e, t) {
    if (t.logs.length > 0) {
      let n = 0,
        r = 0.01;
      for (let o = 0; o < t.logs.length; o++)
        ((n += t.logs[o]), t.logs[o] > r && (r = t.logs[o]));
      let s = 0,
        a = 0.01;
      for (let o = 0; o < t.graph.length; o++)
        ((s += t.graph[o]), t.graph[o] > a && (a = t.graph[o]));
      e &&
        e.update(
          n / Math.min(t.logs.length, this.samplesLog),
          s / Math.min(t.graph.length, this.samplesGraph),
          r,
          a,
          this.precision,
        );
    }
  }
  get domElement() {
    return this.dom;
  }
  get container() {
    return (
      console.warn(
        "Stats: Deprecated! this.container as been replaced to this.dom ",
      ),
      this.dom
    );
  }
};
tl.Panel = Bp;
let zp = tl;
class xt {
  static event = "Tick.event";
  static timeProvider = "Tick.timeProvider";
  static secondsProvider = "Tick.secondsProvider";
  static dsProvider = "Tick.dsProvider";
  constructor() {
    (j.settings.devMode &&
      ((this.stats = new zp({ mode: 2 })),
      this.stats.init(j.pipeline.renderer.domElement),
      document.body.appendChild(this.stats.dom)),
      Se.on("frame.raw", this.onFrame));
  }
  onFrame = (e) => {
    (this.stats && this.stats.begin(),
      "prevTime" in this || (this.prevTime = e));
    const t = Math.min(1e3 / 30, e - this.prevTime),
      n = t * 0.001,
      r = e * 0.001;
    this.prevTime = e;
    const s = { time: e, dt: t, seconds: r, ds: n };
    (sn.update(n),
      ot(xt.timeProvider, e),
      ot(xt.secondsProvider, r),
      ot(xt.dsProvider, n),
      Se.dispatch(xt.event, s),
      Se.dispatch("beforeRender", s),
      j.pipeline.render(),
      Se.dispatch("afterRender", s),
      this.stats && this.stats.end(),
      this.stats && this.stats.update());
  };
}
class Hp {
  constructor() {
    ((j.camera.fov = j.settings.camera.fov),
      this.onResize(j.viewport),
      j.camera.position.set(0, 0, j.settings.camera.depth),
      j.camera.lookAt(0, 0, 0),
      j.settings.devMode &&
        ((window.cam = j.camera),
        (window.getCam = () => {
          console.log(`
    Root.camera.position.set(${j.camera.position.toArray().join(", ")})
        `);
        })),
      new Sn("cam.position", [0, 0], 10, 5),
      Se.on(dn.resizeEvent, this.onResize),
      Se.on(xt.event, this.onFrame),
      Se.on("pointer.ndc", this.onPointer));
  }
  onPointer = ({ x: e, y: t }) => {
    // Sn.set("cam.position", [-e, -t]);
  };
  onFrame = () => {
    const e = Sn.get("cam.position");
    ((j.camera.position.x = e[0]),
      (j.camera.position.y = e[1]),
      j.camera.lookAt(0, 0, 0));
  };
  onResize = ({ aspect: e }) => {
    ((j.camera.aspect = e), j.camera.updateProjectionMatrix());
  };
}
var Gp = `precision mediump float;\r
precision mediump sampler2D;

in highp vec2 vUv;\r
out vec4 result;

uniform sampler2D map;\r
uniform vec2 texelSize;\r
uniform float size;\r
uniform float filterMax;

#define twoPI 6.283185307179586\r
const int samples = 25,\r
          LOD = 2,         
          sLOD = 1 << LOD; 
const float sigma = float(samples) * .25;

float gaussian(vec2 i) {\r
  vec2 vi = i / sigma;\r
  return exp(-.5 * dot(vi, vi) ) / (twoPI * sigma * sigma);\r
}

vec3 blur(sampler2D sp, vec2 uv, vec2 kernel) {\r
  vec3 color = vec3(0.);  \r
  int s = samples / sLOD;\r
  int samplesCount = s * s;\r
  float a = 0.;\r
  \r
  for (int i = 0; i < samplesCount; i++) {\r
    vec2 d = vec2(i % s, i / s) * float(sLOD) - float(samples) / 2.;\r
    float gauss = gaussian(d);\r
    vec3 blurSample = textureLod(sp, uv + kernel * d, float(LOD)).rgb;\r
    color += gauss * blurSample;\r
    a += gauss;\r
  }\r
  \r
  return color / a;\r
}

void main () {\r
  vec3 res = blur(map, vUv, size * texelSize);\r
  res = min(res, filterMax);\r
  result = vec4(res, 1.);\r
}`,
  Vp = `precision highp float;

in vec2 position;\r
in vec2 uv;

out highp vec2 vUv;

uniform vec2 texelSize;

void main () {\r
  vUv = uv;\r
  gl_Position = vec4(position, 0., 1);\r
}`;
class kp {
  texelSize = new Ue();
  constructor({
    mapBinder: e,
    updateEvent: t = !1,
    outBinder: n,
    outEvent: r = !1,
    kernelSize: s = 1,
    filterMax: a = 1e10,
    width: o = j.screen.x,
    height: l = j.screen.y,
  }) {
    ((this.event = r),
      (this.rt = gr({ width: o, height: l, format: ft })),
      ot(n, this.rt.texture),
      this.texelSize.set(1 / o, 1 / l),
      (this.program = Er({
        vertex: Vp,
        fragment: Gp,
        uniforms: {
          texelSize: { value: this.texelSize },
          map: at(e),
          size: { value: s },
          filterMax: { value: a },
        },
        glslVersion: bi,
      })),
      t && Se.on(t, this.update));
  }
  update = () => {
    (ai(this.program, this.rt),
      this.event && Se.dispatch(this.event, this.rt.texture));
  };
  resize = (e, t) => {
    (this.rt.setSize(e, t), this.texelSize.set(1 / e, 1 / t));
  };
}
class yr {
  static event = "Performance.event";
  static flushEvent = "Performance.flushEvent";
  level = 2;
  #e = [];
  constructor() {
    (Se.on("Performance.flushEvent", this.onFlush),
      Se.on(xt.event, this.onTick));
  }
  onFlush = () => {
    this.#e.length = 0;
  };
  onTick = ({ time: e }) => {
    if ((this.#e.push(e), this.#e.length < 40)) return;
    const t = this.#e.shift();
    e - t < 1e3 ||
      ((this.#e.length = 0),
      this.level--,
      j.settings.devMode && console.log("Performance.level:", this.level),
      Se.dispatch(yr.event, this.level),
      this.level == 0 && Se.off(xt.event, this.onTick));
  };
}
var Wp = `precision highp float;

in vec2 vUv;\r
in vec3 vOld;\r
in vec3 vNew;

out vec4 outColor;

uniform sampler2D map;\r
uniform vec3 mask;

void main() {\r
  vec3 color = texture(map, vUv).rgb;\r
  float oa = length(dFdx(vOld)) * length(dFdy(vOld));\r
  float na = length(dFdx(vNew)) * length(dFdy(vNew));\r
  color += oa / na * mask;\r
  outColor = vec4(color, 1.);\r
}`,
  Xp = `precision highp float;

in vec3 position;\r
in vec2 uv;

out vec2 vUv;\r
out vec3 vOld;\r
out vec3 vNew;

uniform sampler2D normalMap;\r
uniform vec3 lightPosition;\r
uniform float eta;

void main () {\r
  vec3 normal = texture(normalMap, uv).xyz;\r
  vUv = uv;

  
  vec3 fluidPos = position;\r
  vec3 rd = normalize(fluidPos - lightPosition);\r
  vec3 dir = refract(rd, vec3(0., 0., 1.), eta);\r
  vOld = fluidPos - rd * dir / dir.z;\r
  dir = refract(rd, normal, eta);\r
  vNew = fluidPos - rd * dir / dir.z;

  gl_Position = vec4(position + vNew - vOld, 1.);\r
}`;
class li {
  static updateEvent = "Caustics.updateEvent";
  static mapProvider = "Caustics.mapProvider";
  scale = 1;
  enabled = !0;
  constructor({ updateEvent: e = !1 }) {
    const t = j.viewport.x,
      n = j.viewport.y;
    ((this.mask = new qe()),
      this.adaptScale(t, n),
      (this.program = Er({
        geometry: new Zt(2, 2, t * this.scale, n * this.scale),
        vertex: Xp,
        fragment: Wp,
        uniforms: {
          map: { value: null },
          eta: { value: 1 },
          mask: { value: this.mask },
          normalMap: at(Ii.provider),
          lightPosition: { value: new N(0, 0, 1.5) },
        },
        glslVersion: bi,
      })),
      j.settings.devMode &&
        console.log(
          `Caustics vcount: ${t * this.scale * n * this.scale}, ${this.program.geometry.getAttribute("position").count}`,
        ),
      (this.dfbo = Jo({ width: t, height: n, filter: dt, format: ft })),
      (this.blur = new kp({
        mapBinder: "caustics.raw",
        width: t,
        height: n,
        kernelSize: 0.4,
        filterMax: 2.5,
      })),
      e && Se.on(e, this.onUpdate),
      Se.on(dn.resizeEvent, this.onResize),
      (this.causticsDispersion = !0),
      el(this, "causticsDispersion", !1, !0),
      Se.on(yr.event, this.onPerformance));
  }
  onPerformance = (e) => {
    if (
      ((this.causticsDispersion = e === 2),
      (this.enabled = e > 0),
      !this.enabled)
    ) {
      const t = new fp(new Uint8Array([255, 255, 255, 255]), 1, 1);
      ((t.needsUpdate = !0), ot(li.mapProvider, t));
    }
  };
  onUpdate = () => {
    !this.enabled ||
      (Ep(this.dfbo.read),
      this.causticsDispersion
        ? (this.mask.setHex(16711680),
          (this.program.material.uniforms.eta.value = 1 / 1.9),
          (this.program.material.uniforms.map.value = this.dfbo.read.texture),
          ai(this.program, this.dfbo),
          this.mask.setHex(65280),
          (this.program.material.uniforms.eta.value = 1 / 1.6),
          (this.program.material.uniforms.map.value = this.dfbo.read.texture),
          ai(this.program, this.dfbo),
          this.mask.setHex(255))
        : this.mask.setHex(16777215),
      (this.program.material.uniforms.eta.value = 1 / 1.3),
      (this.program.material.uniforms.map.value = this.dfbo.read.texture),
      ai(this.program, this.dfbo),
      ot("caustics.raw", this.dfbo.read.texture),
      this.blur.update(),
      ot(li.mapProvider, this.blur.rt.texture),
      Se.dispatch(li.updateEvent, this.blur.rt.texture));
  };
  adaptScale = (e, t) => {
    for (this.scale = 1; e * t * this.scale * this.scale > 15e4; )
      this.scale *= 0.5;
  };
  onResize = ({ x: e, y: t }) => {
    (this.adaptScale(e, t),
      this.program.geometry.dispose(),
      (this.program.geometry = null),
      (this.program.geometry = new Zt(2, 2, e * this.scale, t * this.scale)),
      j.settings.devMode &&
        console.log(
          `Caustics vcount: ${e * this.scale * t * this.scale}, ${this.program.geometry.getAttribute("position").count}`,
        ),
      this.dfbo.read.setSize(e, t),
      this.dfbo.write.setSize(e, t),
      this.blur.resize(e, t));
  };
}
class Tr {
  static lowFpsEvent = "features.lowfps";
  constructor() {
    ((this.skippedStart = !1),
      (this.currentTick = 0),
      (this.benchmarkStartTime = 0),
      Se.on(xt.event, this.onTick));
  }
  onTick = ({ time: e }) => {
    (this.currentTick++,
      this.currentTick == 6 &&
        (this.skippedStart
          ? (6e3 / (e - this.benchmarkStartTime) < 40 &&
              Se.dispatch(Tr.lowFpsEvent),
            Se.off(xt.event, this.onTick))
          : (this.skippedStart = !0),
        (this.benchmarkStartTime = e),
        (this.currentTick = 0)));
  };
}
var nl = `varying vec2 vUv;

void main() {\r
  vUv = uv;\r
  gl_Position = vec4(2. * uv - 1., 0., 1.);\r
}`;
class qp {
  constructor(e) {
    e.forEach((r) => !r.out && (r.out = {}));
    const t = Object.assign(
        { map: at("post.screen"), texelSize: { value: j.viewport.iv2 } },
        ...e.map((r) => r.out.uniforms),
      ),
      n = `
precision highp float;
#define saturate(x) clamp(x, 0., 1.)
varying vec2 vUv;
uniform sampler2D map;
uniform vec2 texelSize;

${e.map((r) => r.out.declarations).join("")}

void main() {
  vec2 uv = vUv;
  vec3 color = texture2D(map, uv).rgb;

  ${e.map((r) => r.out.inject).join("")}

  gl_FragColor = vec4(saturate(color), 1.);
}
    `;
    this.material = new Ot({
      uniforms: t,
      vertexShader: nl,
      fragmentShader: n,
    });
  }
  render = (e, t, n) => {
    ((t.material = this.material), e.setRenderTarget(null), e.render(t, n));
  };
}
class Yp {
  out = {
    uniforms: { seconds: at(xt.secondsProvider) },
    declarations: `
uniform float seconds;
float rand(vec2 c) {
  return fract(sin(dot(fract(c), vec2(12.9898, 78.233))) * 43758.5453);
}

`,
    inject: `{
      float rnd = rand(vUv + fract(seconds));
      color += rnd * 0.15 - 0.075;
      // color.b = 1.;
    }`,
  };
}
class $p {
  out = {
    declarations: `
vec3 LinearTosRGB(vec3 value) {
  return vec3(
    mix(
      pow(value.rgb, vec3(.41666)) * 1.055 - vec3(.055),
      value.rgb * 12.92,
      vec3(lessThanEqual(value.rgb, vec3(.0031308)))
    )
  );
}
`,
    inject: `{
      color = LinearTosRGB(color);
    }`,
  };
}
var Kp = `varying vec2 vUv;

uniform sampler2D map;

void main() {\r
  gl_FragColor = texture2D(map, vUv);\r
}`;
class _r {
  static rtParameters = {
    magFilter: dt,
    minFilter: dt,
    generateMipmaps: !1,
    type: Tn,
    format: ft,
    colorSpace: Xt,
  };
  constructor() {
    ((this.renderer = new dp({
      antialias: !1,
      powerPreference: "high-performance",
      premultipliedAlpha: !1,
    })),
      (this.renderer.outputColorSpace = Xt),
      (this.renderer.toneMapping = cn),
      (this.quad = new Lt(new Zt(1, 1, 1, 1), null)),
      (this.quad.frustumCulled = !1),
      (this.sceneRT = new qt(j.viewport.x, j.viewport.y, _r.rtParameters)),
      (this.quality = 1),
      (this.fx = [new $p(), new Yp()]),
      (this.composer = new qp(this.fx)),
      (this.debugBuffer = ""),
      this.debugBuffer != "" &&
        (this.debugMaterial = new Ot({
          uniforms: { map: at(this.debugBuffer) },
          vertexShader: nl,
          fragmentShader: Kp,
        })),
      this.updateRendererSize(j.viewport),
      Se.on(dn.resizeEvent, this.onResize),
      Se.on(Tr.lowFpsEvent, this.onLowFps));
  }
  setContainer = (e) => {
    (e.appendChild(this.renderer.domElement), this.onResize(j.viewport));
  };
  render = () => {
    const { scene: e, camera: t } = j,
      n = this.renderer.autoClear;
    ((this.renderer.autoClear = !0),
      this.renderer.setRenderTarget(this.sceneRT),
      this.renderer.render(e, t),
      ot("post.screen", this.sceneRT.texture),
      ot("post.screen.raw", this.sceneRT.texture),
      this.fx.forEach((r) => r.render && r.render(this.renderer, this.quad, t)),
      this.debugBuffer == ""
        ? this.composer.render(this.renderer, this.quad, t)
        : ((this.quad.material = this.debugMaterial),
          this.renderer.setRenderTarget(null),
          this.renderer.render(this.quad, t)),
      (this.renderer.autoClear = n));
  };
  updateRendererSize = ({ x: e, y: t }) => {
    (this.renderer.setSize(e, t),
      this.renderer.setPixelRatio(window.devicePixelRatio));
  };
  onResize = ({ x: e, y: t }) => {
    (this.updateRendererSize({ x: e, y: t }), this.sceneRT.setSize(e, t));
  };
  onLowFps = () => {
    this.quality == 1 &&
      (this.sceneRT.dispose(),
      (this.sceneRT = new qt(j.viewport.x, j.viewport.y, {
        samples: 4,
        ..._r.rtParameters,
      })),
      (this.quality = 0));
  };
}
class Dt {
  static v2Provider = "Pointer.v2Provider";
  static v3Provider = "Pointer.v3Provider";
  static pointerEvent = "pointer.pointer";
  static ndcEvent = "pointer.ndc";
  static raycasterEvent = "pointer.raycaster";
  static downEvent = "pointer.down";
  static upEvent = "pointer.up";
  constructor() {
    ((this.pointerV2 = new Ue()),
      (this.pointerNDC = new Ue()),
      (this.pointerV3 = new N()),
      (this.raycaster = new xp()),
      ot("pointer.origin", this.raycaster.ray.origin),
      ot("pointer.direction", this.raycaster.ray.direction),
      ot(Dt.v2Provider, this.pointerV2),
      ot(Dt.v3Provider, this.pointerV3),
      this.updatePointer({ x: j.viewport.x * 0.5, y: j.viewport.y * 0.5 }),
      Se.on("pointer.raw", this.updatePointer),
      Se.on("pointer.raw.down", this.onDown),
      Se.on("pointer.raw.up", this.onUp));
  }
  updatePointer = ({ x: e, y: t }) => {
    (this.pointerV2.set(e / j.viewport.x, 1 - t / j.viewport.y),
      this.pointerNDC.copy(this.pointerV2).multiplyScalar(2).subScalar(1),
      Se.dispatch(Dt.pointerEvent, this.pointerV2),
      Se.dispatch(Dt.ndcEvent, this.pointerNDC),
      (this.pointerV3.x = this.pointerV2.x),
      (this.pointerV3.y = this.pointerV2.y),
      this.raycaster.setFromCamera(this.pointerNDC, j.camera),
      Se.dispatch(Dt.raycasterEvent, this.raycaster));
  };
  onDown = () => {
    ((this.pointerV3.z = 1), Se.dispatch(Dt.downEvent, this.raycaster));
  };
  onUp = () => {
    ((this.pointerV3.z = 0), Se.dispatch(Dt.upEvent, this.raycaster));
  };
}
class Ar {
  static mapProvider = "LayoutController.mapProvider";
  ndc11 = new N();
  viewportHeight = 0;
  top = 0;
  constructor() {
    ((this.scene = new Zo()),
      (this.camera = j.camera.clone()),
      this.camera.position.set(0, 0, j.settings.camera.depth),
      this.camera.lookAt(0, 0, 0),
      this.camera.updateProjectionMatrix(),
      this.updateNDC11(),
      (this.collection = []));
    // Defer collecting elements; will populate in setContainer
    ((this.rt = new qt(j.viewport.x, j.viewport.y, {
      wrapS: Wt,
      wrapT: Wt,
      magFilter: dt,
      minFilter: zl,
      generateMipmaps: !0,
      samples: 4,
    })),
      this.onScroll(),
      ot(Ar.mapProvider, this.rt.texture),
      Se.on(xt.event, this.onTick),
      Se.on(dn.resizeEvent, this.onResize),
      document.addEventListener("scroll", this.onScroll));
  }
  setContainer = (e) => {
    (this.container = e,
      this.onScroll(),
      this.updateNDC11());

    // remove previous meshes
    this.collection.forEach(({ mesh: t }) => {
      this.scene.remove(t);
      if (t.geometry && t.geometry.dispose) t.geometry.dispose();
      if (t.material && t.material.map && t.material.map.dispose)
        t.material.map.dispose();
    });
    this.collection.length = 0;

    // add images within this container only
    const els = e.getElementsByClassName("webgl-elements_container");
    for (let t of els) {
      const n = t.getElementsByTagName("img");
      for (let r = 0; r < n.length; r++) {
        const s = n[r],
          a = new Lt(new Zt(), new ca({ transparent: !0 }));
        this.updateMesh(a, s);
        this.collection.push({ mesh: a, container: t, img: s });
        this.scene.add(a);
      }
      (t.style.opacity = 0), (t.style.pointerEvents = "none");
    }
  };
  updateNDC11 = () => {
    (this.ndc11
      .set(1, 1, 0)
      .unproject(this.camera)
      .sub(this.camera.position)
      .normalize(),
      (this.viewportHeight =
        (2 * this.ndc11.y * j.settings.camera.depth) / Math.abs(this.ndc11.z)));
  };
  unprojectWithDepth = (e, t, n) => {
    const r = this.ndc11
      .clone()
      .multiplyScalar(n / Math.abs(this.ndc11.z))
      .add(this.camera.position);
    return ((r.x *= e), (r.y *= t), r);
  };
  imgToTexture = (e, t) => {
    if (((e.crossOrigin = "anonymous"), !e.src.endsWith(".svg"))) {
      const a = new jo();
      return (
        a.setCrossOrigin("anonymous"),
        a.load(e.src, (o) => {
          o.colorSpace = Pt;
        })
      );
    }
    const n = document.createElement("canvas");
    ((n.width = t.width), (n.height = t.height));
    const r = new pp(n);
    r.colorSpace = Pt;
    const s = n.getContext("2d");
    return (
      e.complete
        ? (s.drawImage(e, 0, 0, t.width, t.height), (r.needsUpdate = !0))
        : (e.onload = () => {
            (s.drawImage(e, 0, 0, t.width, t.height), (r.needsUpdate = !0));
          }),
      r
    );
  };
  rectDepthToTransform = (e, t, n = 0, r = !1) => {
    const s = (t.left / j.viewport.x) * 2 - 1,
      a = ((t.top + window.scrollY - this.top) / j.viewport.y) * -2 + 1,
      o = (t.right / j.viewport.x) * 2 - 1,
      l = ((t.bottom + window.scrollY - this.top) / j.viewport.y) * -2 + 1,
      c = j.settings.camera.depth + n + Math.random() * 0.01,
      u = this.unprojectWithDepth(s, a, c),
      f = this.unprojectWithDepth(o, l, c);
    (e.position.copy(u).add(f).divideScalar(2),
      (e.scale.x = r ? 1e4 : Math.abs(u.x - f.x)),
      (e.scale.y = Math.abs(u.y - f.y)));
  };
  updateMesh = (e, t, n = !0) => {
    const r = t.getBoundingClientRect(),
      s = +(t.getAttribute("data-depth") || 0),
      a = t.getAttribute("data-width") == "extreme";
    (n && (e.material.map = this.imgToTexture(t, r)),
      this.rectDepthToTransform(e, r, s, a));
  };
  onTick = () => {
    const e = j.pipeline.renderer;
    (e.setClearAlpha(0),
      e.setRenderTarget(this.rt),
      e.render(this.scene, j.camera));
  };
  onResize = ({ x: e, y: t, aspect: n }) => {
    ((this.camera.aspect = n),
      this.camera.updateProjectionMatrix(),
      this.onScroll(),
      this.updateNDC11(),
      this.collection.forEach(({ mesh: r, img: s }) => {
        const a = r.material.map;
        ((r.material.map = null), a.dispose(), this.updateMesh(r, s));
      }),
      this.rt.setSize(e, t));
  };
  onScroll = () => {
    this.top = this.container
      ? this.container.getBoundingClientRect().top + window.scrollY
      : 0;
  };
}
var Zp = `#define pi 3.141592653589793

varying vec2 vUv;\r
varying vec4 vNDC;

uniform sampler2D simMap;\r
uniform sampler2D layoutMap;\r
uniform sampler2D gradMap;\r
uniform sampler2D caustcisMap;\r
uniform float reflectivityInfluence;\r
uniform float displacementPower;\r
uniform float lightAmplification;\r
uniform float causticsPower;\r
uniform vec2 aspect;\r
uniform vec3 bgColor;\r
uniform mat4 invProjectionMatrix;\r
uniform mat4 invViewMatrix;

float fresnelSchlick(vec3 r, vec3 n) {\r
  return 0.04 + 0.96 * pow(1. - abs(dot(r, n)), 5.);\r
}

float fresnelReflectivity(vec3 rd, vec3 n, float n1, float n2) {\r
  vec3 rfr = refract(rd, n, n1 / n2);\r
  \r
  if (dot(rfr, rfr) == 0.) return 1.;

  float cos1 = -dot(rd, n);\r
  float cos2 = -dot(rfr, n);

  float n1c1 = n1 * cos1;\r
  float n2c1 = n2 * cos1;\r
  float n1c2 = n1 * cos2;\r
  float n2c2 = n2 * cos2;

  float rs = (n1c1 - n2c2) / (n1c1 + n2c2);\r
  float rp = (n1c2 - n2c1) / (n1c2 + n2c1);

  return 0.5 * (rs * rs + rp * rp);\r
}

vec3 iRefract(vec3 R, vec3 N, float eta) {\r
  float q = 1. - (1. - dot(R, N) * dot(R, N)) * eta * eta;\r
  if (q < 0.) return vec3(0.);\r
  return (R + N * (eta * sqrt(q) + dot(R, N))) / eta;\r
}

float getTransmission(vec3 V, vec3 N) {\r
  vec3 I = iRefract(-V, N, 1. / 1.3);\r
  if (dot(I, I) == 0.) return 0.;\r
  return 1. - fresnelReflectivity(I, -N, 1.3, 1.);\r
}

void main() {\r
  vec4 wPos4 = invProjectionMatrix * invViewMatrix * vNDC;\r
  vec3 wPos = wPos4.xyz / wPos4.w;\r
  vec3 rd = normalize(wPos - cameraPosition);

  vec3 normal = normalize(texture2D(simMap, vUv).xyz);\r
  vec2 dUv = normal.xy * displacementPower / aspect; 
  vec2 uv = vUv + dUv;

  vec4 layoutTexel = texture2D(layoutMap, vUv + dUv * 16.);\r
  if (layoutTexel.a > 1e-3) {\r
    layoutTexel.rgb /= layoutTexel.a; 
  }

  float reflectivity = fresnelSchlick(rd, normal);\r
  float light = max(0., 1. - normal.z);

  vec3 color = vec3(0.5);\r
  color = mix(color, layoutTexel.rgb, layoutTexel.a);

  vec2 caUV = uv + dUv * 2. * (1. - layoutTexel.a);\r
  caUV = (caUV - 0.5) * 0.95 + 0.5;\r
  vec3 caustics = texture2D(caustcisMap, caUV).rgb;\r
  color *= (caustics - 1.) * causticsPower + 1.;

  float transmission = getTransmission(rd, normal);\r
  color *= transmission;

  color += light * lightAmplification * mix(1., reflectivity, reflectivityInfluence);

  vec3 gradient = texture2D(gradMap, vec2(dot(color, vec3(0.33333)), 0.5)).rgb;\r
  color = mix(gradient, color, layoutTexel.a);

  gl_FragColor = vec4(color, 1.);\r
  
  
  
  
}`,
  jp = `varying vec2 vUv;\r
varying vec4 vNDC;

void main() {\r
  vUv = uv;

  vNDC = vec4(uv * 2. - 1., 0., 1.);\r
  gl_Position = vNDC;\r
}`;
class Jp extends Ot {
  constructor() {
    super({
      uniforms: {
        aspect: { value: j.viewport.aspectV2 },
        gradMap: at("gradientMap", null),
        caustcisMap: at(li.mapProvider, null),
        simMap: at(Ii.provider),
        bgColor: { value: new qe(16609316) },
        layoutMap: at(Ar.mapProvider),
        displacementPower: Vt("displacementPower", 0, 0.2, 0.05),
        lightAmplification: Vt("lightAmplification", 0, 500, 100),
        reflectivityInfluence: Vt("reflectivityInfluence", 0, 1, 1),
        causticsPower: Vt("causticsPower", 0, 2, 1),
        invProjectionMatrix: { value: j.camera.projectionMatrixInverse },
        invViewMatrix: { value: j.camera.matrixWorld },
      },
      vertexShader: jp,
      fragmentShader: Zp,
    });
  }
}
class Qp {
  constructor() {
    ((this.mesh = new Lt(new Zt(), new Jp())), j.scene.add(this.mesh));
  }
}
var em = `precision highp float;\r
precision highp int;

#define PI 3.141592653589793\r
#define TAU 6.283185307179586\r
#define rain 1\r
#define depth 20.\r
#define velPropagation 1.4\r
#define pow2(x) (x * x)

in vec2 vUv;\r
in vec2 vUvA;\r
layout(location = 0) out highp vec2 fragColor;

uniform vec2 aspect;\r
uniform vec2 texelSize;\r
uniform vec2 pointer;\r
uniform vec2 oldPointer;\r
uniform bool useDrops;\r
uniform float seconds;\r
uniform float simDamping;\r
uniform float dropProbability;\r
uniform float dropSize;\r
uniform float trailSize;\r
uniform float trailPulseWidth;\r
uniform float trailPulseFrequency;\r
uniform sampler2D map;

uint hash( uint x ) {\r
  x += ( x << 10u );\r
  x ^= ( x >>  6u );\r
  x += ( x <<  3u );\r
  x ^= ( x >> 11u );\r
  x += ( x << 15u );\r
  return x;\r
}

uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }\r
uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }\r
uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

float floatConstruct( uint m ) {\r
  const uint ieeeMantissa = 0x007FFFFFu; 
  const uint ieeeOne      = 0x3F800000u; 

  m &= ieeeMantissa;                     
  m |= ieeeOne;                          

  float  f = uintBitsToFloat( m );       
  return f - 1.0;                        
}

float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }\r
float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }\r
float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }\r
float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }

vec2 hash22(vec2 p) {\r
  return vec2(\r
    random(p),\r
    random(p + vec2(735.153, 369.165))\r
  );\r
}

void main() {\r
  vec2 uv = vUv;\r
  vec2 pA = pointer * aspect;\r
  vec2 oPA = oldPointer * aspect;\r
  \r
  float d;\r
  vec2 po = pA - oPA;\r
  float lpo = length(po);\r
  if (lpo < 1e-4) {\r
    d = distance(vUvA, pA);\r
  } else {\r
    vec2 npo = normalize(po);\r
    vec2 to = vUvA - oPA;\r
    float projectedD = dot(to, npo);\r
    projectedD = clamp(projectedD, 0., lpo);\r
    vec2 projected = oPA + npo * projectedD;\r
    d = distance(vUvA, projected);\r
  }

  float isMoving = smoothstep(0., 0.01, lpo);

  float ripple = smoothstep(trailSize + sin(seconds * trailPulseFrequency) * trailPulseWidth, 0., d) * isMoving;

  if (useDrops && mod(seconds, 0.1) <= 0.1 * dropProbability) {\r
    vec2 hash = hash22(vec2(seconds * 2., sin(seconds * 10.))) * 3. - 1.;\r
    ripple += smoothstep(dropSize, 0., length(vUvA - hash + 0.5));\r
  }

  vec3 e = vec3(3.6 * texelSize, 0.);

  float t = texture(map, uv - e.zy, 1.).x;\r
  float b = texture(map, uv + e.xz, 1.).x;\r
  float l = texture(map, uv + e.zy, 1.).x;\r
  float r = texture(map, uv - e.xz, 1.).x;\r
  vec4 prevVal = texture(map, uv);

  float val = t + r + b + l + ripple * 2. - prevVal.y * 2. - 1.;\r
  val *= simDamping;\r
  val = val * 0.5 + 0.5;

  fragColor = vec2(val, prevVal.x);

  
}`,
  tm = `in vec2 uv;\r
in vec3 position;

out vec2 vUv;\r
out vec2 vUvA;

uniform vec2 aspect;

void main() {\r
  vUv = uv;\r
  vUvA = uv * aspect;\r
  gl_Position = vec4(position, 1.);\r
}`;
class ci {
  static updateEvent = "SimpleFluidSim.updateEvent";
  static simProvider = "SimpleFluidSim.simProvider";
  lastPointerMovementTime = 0;
  delayBeforeDropsAllowed = 2;
  oldPointer = new Ue();
  width = 1;
  height = 1;
  scale = 1;
  aspectV2 = new Ue();
  texelSize = new Ue();
  constructor(e = { scale: 0.5 }) {
    ((this.scale = e.scale),
      (this.width = j.viewport.x * e.scale),
      (this.height = j.viewport.y * e.scale));
    const t = this.width / this.height;
    ((this.aspectV2.x = t > 1 ? t : 1),
      (this.aspectV2.y = t > 1 ? 1 : t),
      this.texelSize.set(1 / this.width, 1 / this.height),
      (this.fbo = Jo({
        width: this.width,
        height: this.height,
        format: ia,
        filter: dt,
      })),
      (this.program = Er({
        uniforms: {
          aspect: { value: this.aspectV2 },
          texelSize: { value: this.texelSize },
          pointer: at(Dt.v2Provider),
          oldPointer: { value: this.oldPointer },
          useDrops: at("SimpleFluidSim.useDrops", !0),
          seconds: at(xt.secondsProvider),
          simDamping: Vt("simDamping", 0.95, 1, 0.98),
          dropProbability: Vt("dropProbability", 0, 1, 0.5),
          dropSize: Vt("dropSize", 0, 0.25, 0.025),
          trailSize: Vt("trailSize", 0, 0.25, 0.035),
          trailPulseWidth: Vt("trailPulseWidth", 0, 0.25, 0.02),
          trailPulseFrequency: Vt(
            "trailPulseFrequency",
            0,
            314.159,
            3.14159 * 4,
          ),
          map: { value: null },
        },
        vertex: tm,
        fragment: em,
        glslVersion: bi,
      })),
      this.oldPointer.copy(at(Dt.v2Provider).value),
      el(this, "delayBeforeDropsAllowed", 0, 15),
      Se.on("beforeRender", this.update),
      Se.on(dn.resizeEvent, this.onResize),
      Se.on(Dt.pointerEvent, this.onPointer));
  }
  onPointer = () => {
    this.lastPointerMovementTime = at(xt.secondsProvider).value;
  };
  update = ({ seconds: e }) => {
    (ot(
      "SimpleFluidSim.useDrops",
      e - this.lastPointerMovementTime > this.delayBeforeDropsAllowed,
    ),
      (this.program.material.uniforms.map.value = this.fbo.read.texture),
      ai(this.program, this.fbo),
      ot(ci.simProvider, this.fbo.read.texture),
      Se.dispatch(ci.updateEvent, this.fbo.read.texture),
      this.oldPointer.copy(at(Dt.v2Provider).value));
  };
  onResize = ({ x: e, y: t, aspect: n }) => {
    ((this.aspectV2.x = n > 1 ? n : 1),
      (this.aspectV2.y = n > 1 ? 1 : n),
      this.texelSize.set(1 / e, 1 / t),
      this.fbo.read.setSize(e * this.scale, t * this.scale),
      this.fbo.write.setSize(e * this.scale, t * this.scale));
  };
}
class j {
  static container;
  static features;
  static viewport;
  static pipeline;
  static scene = new Zo();
  static camera = new Ft(45, 1, 0.1, 1e3);
  static settings = Ui;
  static performance = new yr();
  static layoutController = null;
  static #e = null;
  static get instance() {
    return j.#e !== null ? j.#e : new j();
  }
  constructor({ settings: e } = {}) {
    if (j.#e !== null) throw "Root already exists";
    ((j.#e = this),
      (j.settings = Object.assign(j.settings, e)),
      (j.features = new Tr()),
      (j.viewport = new dn()),
      (j.pipeline = new _r()));
  }
  create = (e) => {
    ((j.layoutController = new Ar()),
      this.setContainer(e),
      new xt(),
      new Dt(),
      new Hp(),
      new ci({ scale: 1 }),
      new Ii({
        inProvider: ci.simProvider,
        updateEvent: ci.updateEvent,
        outEvent: "onFluidNormal",
        simScale: 1,
      }),
      new li({ updateEvent: "onFluidNormal" }),
      new Qp(),
      j.settings.devMode && (window.root = j));
  };
  containters = [];
  setContainer = (e) => {
    if (j.container === e) return;
    at("gradientMap", null).value !== null && at("gradientMap").value.dispose();
    const t = this.containters.filter((r) => r.container === e);
    if (t.length == 0) {
      let r = null;
      const s = e.getElementsByTagName("img");
      if (s.length == 0) console.warn("No gradient found in", e);
      else {
        const o = new jo();
        o.setCrossOrigin("anonymous");
        const l = s[0].src;
        r = o.load(l, (c) => {
          c.colorSpace = Pt;
        });
      }
      const a = { container: e, gradMap: r };
      (this.containters.push(a), t.push(a));
    }
    const n = t[0];
    (ot("gradientMap", n.gradMap),
      (j.container = e),
      j.viewport.setContainer(e),
      j.pipeline.setContainer(e),
      j.layoutController.setContainer(e));
  };
}
class nm {
  isVisible = !1;
  constructor() {
    new j();
  }
  start = () => {
    ((this.containers = [
      ...document.getElementsByClassName("webgl-canvas_container"),
    ]),
      (this.observer = new IntersectionObserver((e) => {
        let visible = e.filter((n) => n.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          j.instance.setContainer(visible[0].target);
        }
        this.isVisible = visible.length > 0;
      })),
      this.containers.forEach((e) => {
        this.observer.observe(e);
      }),
      j.instance.create(this.containers[0]),
      document.body.addEventListener("mousemove", this.#e),
      document.body.addEventListener("mousedown", this.#t),
      document.body.addEventListener("mouseup", this.#n),
      requestAnimationFrame(this.#i));
  };
  #e = (e) => {
    let parentZoom = 1;
    // Prefer the container under the pointer, if any
    let active = null;
    for (let c of this.containers) {
      const r = c.getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
        active = c;
        break;
      }
    }
    const container = active || j.container || (this.containers && this.containers[0]);
    if (!container) return;
    if (container !== j.container) j.instance.setContainer(container);
    const rect = container.getBoundingClientRect();
    const tnatom = container.closest('.tn-atom');
    if (tnatom && tnatom.parentElement && tnatom.parentElement.style && tnatom.parentElement.style.zoom) {
      parentZoom = parseFloat(tnatom.parentElement.style.zoom);
    }
    let x1 = (e.clientX - rect.left) / parentZoom;
    let y1 = (e.clientY - rect.top) / parentZoom;

    Se.dispatch("pointer.raw", { x: x1, y: y1 });
  };
  #t = () => {
    Se.dispatch("pointer.raw.down");
  };
  #n = () => {
    Se.dispatch("pointer.raw.up");
  };
  #i = (e) => {
    (requestAnimationFrame(this.#i),
      this.isVisible
        ? (document.hasFocus() || Se.dispatch("Performance.flushEvent"),
          Se.dispatch("frame.raw", e))
        : Se.dispatch("Performance.flushEvent"));
  };
}
const im = new nm();
im.start();
