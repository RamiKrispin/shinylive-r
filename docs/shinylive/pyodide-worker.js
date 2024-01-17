// Shinylive 0.2.3
// Copyright 2023 RStudio, PBC
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// src/awaitable-queue.ts
var AwaitableQueue = class {
  constructor() {
    this._buffer = [];
    this._resolve = null;
    this._promise = null;
    this._notifyAll();
  }
  async _wait() {
    await this._promise;
  }
  _notifyAll() {
    if (this._resolve) {
      this._resolve();
    }
    this._promise = new Promise((resolve) => this._resolve = resolve);
  }
  async dequeue() {
    while (this._buffer.length === 0) {
      await this._wait();
    }
    return this._buffer.shift();
  }
  enqueue(x2) {
    this._buffer.push(x2);
    this._notifyAll();
  }
};

// src/utils.ts
function uint8ArrayToString(buf) {
  let result = "";
  for (let i2 = 0; i2 < buf.length; i2++) {
    result += String.fromCharCode(buf[i2]);
  }
  return result;
}

// node_modules/webr/dist/webr.mjs
var $s = Object.create;
var Xr = Object.defineProperty;
var Gs = Object.getOwnPropertyDescriptor;
var Ks = Object.getOwnPropertyNames;
var Qs = Object.getPrototypeOf;
var Zs = Object.prototype.hasOwnProperty;
var U = ((r) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(r, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : r)(function(r) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});
var _ = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var Ys = (r, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of Ks(e))
      !Zs.call(r, n) && n !== t && Xr(r, n, { get: () => e[n], enumerable: !(s = Gs(e, n)) || s.enumerable });
  return r;
};
var te = (r, e, t) => (t = r != null ? $s(Qs(r)) : {}, Ys(e || !r || !r.__esModule ? Xr(t, "default", { value: r, enumerable: true }) : t, r));
var ur = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var i = (r, e, t) => (ur(r, e, "read from private field"), t ? t.call(r) : e.get(r));
var u = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
};
var d = (r, e, t, s) => (ur(r, e, "write to private field"), s ? s.call(r, t) : e.set(r, t), t);
var x = (r, e, t) => (ur(r, e, "access private method"), t);
var Oe = _((I) => {
  "use strict";
  Object.defineProperty(I, "__esModule", { value: true });
  I.getUint64 = I.getInt64 = I.setInt64 = I.setUint64 = I.UINT32_MAX = void 0;
  I.UINT32_MAX = 4294967295;
  function rn(r, e, t) {
    let s = t / 4294967296, n = t;
    r.setUint32(e, s), r.setUint32(e + 4, n);
  }
  I.setUint64 = rn;
  function sn(r, e, t) {
    let s = Math.floor(t / 4294967296), n = t;
    r.setUint32(e, s), r.setUint32(e + 4, n);
  }
  I.setInt64 = sn;
  function nn(r, e) {
    let t = r.getInt32(e), s = r.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  I.getInt64 = nn;
  function on(r, e) {
    let t = r.getUint32(e), s = r.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  I.getUint64 = on;
});
var mt = _((S) => {
  "use strict";
  var dr, hr, yr;
  Object.defineProperty(S, "__esModule", { value: true });
  S.utf8DecodeTD = S.TEXT_DECODER_THRESHOLD = S.utf8DecodeJs = S.utf8EncodeTE = S.TEXT_ENCODER_THRESHOLD = S.utf8EncodeJs = S.utf8Count = void 0;
  var Qr = Oe(), Rt = (typeof process > "u" || ((dr = process == null ? void 0 : process.env) === null || dr === void 0 ? void 0 : dr.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
  function an(r) {
    let e = r.length, t = 0, s = 0;
    for (; s < e; ) {
      let n = r.charCodeAt(s++);
      if (n & 4294967168)
        if (!(n & 4294965248))
          t += 2;
        else {
          if (n >= 55296 && n <= 56319 && s < e) {
            let o = r.charCodeAt(s);
            (o & 64512) === 56320 && (++s, n = ((n & 1023) << 10) + (o & 1023) + 65536);
          }
          n & 4294901760 ? t += 4 : t += 3;
        }
      else {
        t++;
        continue;
      }
    }
    return t;
  }
  S.utf8Count = an;
  function ln(r, e, t) {
    let s = r.length, n = t, o = 0;
    for (; o < s; ) {
      let a = r.charCodeAt(o++);
      if (a & 4294967168)
        if (!(a & 4294965248))
          e[n++] = a >> 6 & 31 | 192;
        else {
          if (a >= 55296 && a <= 56319 && o < s) {
            let c = r.charCodeAt(o);
            (c & 64512) === 56320 && (++o, a = ((a & 1023) << 10) + (c & 1023) + 65536);
          }
          a & 4294901760 ? (e[n++] = a >> 18 & 7 | 240, e[n++] = a >> 12 & 63 | 128, e[n++] = a >> 6 & 63 | 128) : (e[n++] = a >> 12 & 15 | 224, e[n++] = a >> 6 & 63 | 128);
        }
      else {
        e[n++] = a;
        continue;
      }
      e[n++] = a & 63 | 128;
    }
  }
  S.utf8EncodeJs = ln;
  var Ae = Rt ? new TextEncoder() : void 0;
  S.TEXT_ENCODER_THRESHOLD = Rt ? typeof process < "u" && ((hr = process == null ? void 0 : process.env) === null || hr === void 0 ? void 0 : hr.TEXT_ENCODING) !== "force" ? 200 : 0 : Qr.UINT32_MAX;
  function cn(r, e, t) {
    e.set(Ae.encode(r), t);
  }
  function un(r, e, t) {
    Ae.encodeInto(r, e.subarray(t));
  }
  S.utf8EncodeTE = Ae != null && Ae.encodeInto ? un : cn;
  var pn = 4096;
  function dn(r, e, t) {
    let s = e, n = s + t, o = [], a = "";
    for (; s < n; ) {
      let c = r[s++];
      if (!(c & 128))
        o.push(c);
      else if ((c & 224) === 192) {
        let p = r[s++] & 63;
        o.push((c & 31) << 6 | p);
      } else if ((c & 240) === 224) {
        let p = r[s++] & 63, v = r[s++] & 63;
        o.push((c & 31) << 12 | p << 6 | v);
      } else if ((c & 248) === 240) {
        let p = r[s++] & 63, v = r[s++] & 63, ee = r[s++] & 63, z = (c & 7) << 18 | p << 12 | v << 6 | ee;
        z > 65535 && (z -= 65536, o.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), o.push(z);
      } else
        o.push(c);
      o.length >= pn && (a += String.fromCharCode(...o), o.length = 0);
    }
    return o.length > 0 && (a += String.fromCharCode(...o)), a;
  }
  S.utf8DecodeJs = dn;
  var hn = Rt ? new TextDecoder() : null;
  S.TEXT_DECODER_THRESHOLD = Rt ? typeof process < "u" && ((yr = process == null ? void 0 : process.env) === null || yr === void 0 ? void 0 : yr.TEXT_DECODER) !== "force" ? 200 : 0 : Qr.UINT32_MAX;
  function yn(r, e, t) {
    let s = r.subarray(e, e + t);
    return hn.decode(s);
  }
  S.utf8DecodeTD = yn;
});
var Rr = _((gt) => {
  "use strict";
  Object.defineProperty(gt, "__esModule", { value: true });
  gt.ExtData = void 0;
  var fr = class {
    constructor(e, t) {
      this.type = e, this.data = t;
    }
  };
  gt.ExtData = fr;
});
var wt = _((bt) => {
  "use strict";
  Object.defineProperty(bt, "__esModule", { value: true });
  bt.DecodeError = void 0;
  var he = class extends Error {
    constructor(e) {
      super(e);
      let t = Object.create(he.prototype);
      Object.setPrototypeOf(this, t), Object.defineProperty(this, "name", { configurable: true, enumerable: false, value: he.name });
    }
  };
  bt.DecodeError = he;
});
var mr = _((T) => {
  "use strict";
  Object.defineProperty(T, "__esModule", { value: true });
  T.timestampExtension = T.decodeTimestampExtension = T.decodeTimestampToTimeSpec = T.encodeTimestampExtension = T.encodeDateToTimeSpec = T.encodeTimeSpecToTimestamp = T.EXT_TIMESTAMP = void 0;
  var fn = wt(), Zr = Oe();
  T.EXT_TIMESTAMP = -1;
  var Rn = 4294967296 - 1, mn = 17179869184 - 1;
  function Yr({ sec: r, nsec: e }) {
    if (r >= 0 && e >= 0 && r <= mn)
      if (e === 0 && r <= Rn) {
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, r), t;
      } else {
        let t = r / 4294967296, s = r & 4294967295, n = new Uint8Array(8), o = new DataView(n.buffer);
        return o.setUint32(0, e << 2 | t & 3), o.setUint32(4, s), n;
      }
    else {
      let t = new Uint8Array(12), s = new DataView(t.buffer);
      return s.setUint32(0, e), (0, Zr.setInt64)(s, 4, r), t;
    }
  }
  T.encodeTimeSpecToTimestamp = Yr;
  function es(r) {
    let e = r.getTime(), t = Math.floor(e / 1e3), s = (e - t * 1e3) * 1e6, n = Math.floor(s / 1e9);
    return { sec: t + n, nsec: s - n * 1e9 };
  }
  T.encodeDateToTimeSpec = es;
  function ts(r) {
    if (r instanceof Date) {
      let e = es(r);
      return Yr(e);
    } else
      return null;
  }
  T.encodeTimestampExtension = ts;
  function rs(r) {
    let e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    switch (r.byteLength) {
      case 4:
        return { sec: e.getUint32(0), nsec: 0 };
      case 8: {
        let t = e.getUint32(0), s = e.getUint32(4), n = (t & 3) * 4294967296 + s, o = t >>> 2;
        return { sec: n, nsec: o };
      }
      case 12: {
        let t = (0, Zr.getInt64)(e, 4), s = e.getUint32(0);
        return { sec: t, nsec: s };
      }
      default:
        throw new fn.DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${r.length}`);
    }
  }
  T.decodeTimestampToTimeSpec = rs;
  function ss(r) {
    let e = rs(r);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  T.decodeTimestampExtension = ss;
  T.timestampExtension = { type: T.EXT_TIMESTAMP, encode: ts, decode: ss };
});
var Et = _((vt) => {
  "use strict";
  Object.defineProperty(vt, "__esModule", { value: true });
  vt.ExtensionCodec = void 0;
  var xt = Rr(), gn = mr(), Ie = class {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(gn.timestampExtension);
    }
    register({ type: e, encode: t, decode: s }) {
      if (e >= 0)
        this.encoders[e] = t, this.decoders[e] = s;
      else {
        let n = 1 + e;
        this.builtInEncoders[n] = t, this.builtInDecoders[n] = s;
      }
    }
    tryToEncode(e, t) {
      for (let s = 0; s < this.builtInEncoders.length; s++) {
        let n = this.builtInEncoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = -1 - s;
            return new xt.ExtData(a, o);
          }
        }
      }
      for (let s = 0; s < this.encoders.length; s++) {
        let n = this.encoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = s;
            return new xt.ExtData(a, o);
          }
        }
      }
      return e instanceof xt.ExtData ? e : null;
    }
    decode(e, t, s) {
      let n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return n ? n(e, t, s) : new xt.ExtData(t, e);
    }
  };
  vt.ExtensionCodec = Ie;
  Ie.defaultCodec = new Ie();
});
var gr = _((ye) => {
  "use strict";
  Object.defineProperty(ye, "__esModule", { value: true });
  ye.createDataView = ye.ensureUint8Array = void 0;
  function ns(r) {
    return r instanceof Uint8Array ? r : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r instanceof ArrayBuffer ? new Uint8Array(r) : Uint8Array.from(r);
  }
  ye.ensureUint8Array = ns;
  function bn(r) {
    if (r instanceof ArrayBuffer)
      return new DataView(r);
    let e = ns(r);
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  ye.createDataView = bn;
});
var wr = _((N) => {
  "use strict";
  Object.defineProperty(N, "__esModule", { value: true });
  N.Encoder = N.DEFAULT_INITIAL_BUFFER_SIZE = N.DEFAULT_MAX_DEPTH = void 0;
  var Ue = mt(), wn = Et(), os = Oe(), xn = gr();
  N.DEFAULT_MAX_DEPTH = 100;
  N.DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var br = class {
    constructor(e = wn.ExtensionCodec.defaultCodec, t = void 0, s = N.DEFAULT_MAX_DEPTH, n = N.DEFAULT_INITIAL_BUFFER_SIZE, o = false, a = false, c = false, p = false) {
      this.extensionCodec = e, this.context = t, this.maxDepth = s, this.initialBufferSize = n, this.sortKeys = o, this.forceFloat32 = a, this.ignoreUndefined = c, this.forceIntegerToFloat = p, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }
    reinitializeState() {
      this.pos = 0;
    }
    encodeSharedRef(e) {
      return this.reinitializeState(), this.doEncode(e, 1), this.bytes.subarray(0, this.pos);
    }
    encode(e) {
      return this.reinitializeState(), this.doEncode(e, 1), this.bytes.slice(0, this.pos);
    }
    doEncode(e, t) {
      if (t > this.maxDepth)
        throw new Error(`Too deep objects in depth ${t}`);
      e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.encodeObject(e, t);
    }
    ensureBufferSizeToWrite(e) {
      let t = this.pos + e;
      this.view.byteLength < t && this.resizeBuffer(t * 2);
    }
    resizeBuffer(e) {
      let t = new ArrayBuffer(e), s = new Uint8Array(t), n = new DataView(t);
      s.set(this.bytes), this.view = n, this.bytes = s;
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(e) {
      e === false ? this.writeU8(194) : this.writeU8(195);
    }
    encodeNumber(e) {
      Number.isSafeInteger(e) && !this.forceIntegerToFloat ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : (this.writeU8(211), this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
    }
    writeStringHeader(e) {
      if (e < 32)
        this.writeU8(160 + e);
      else if (e < 256)
        this.writeU8(217), this.writeU8(e);
      else if (e < 65536)
        this.writeU8(218), this.writeU16(e);
      else if (e < 4294967296)
        this.writeU8(219), this.writeU32(e);
      else
        throw new Error(`Too long string: ${e} bytes in UTF-8`);
    }
    encodeString(e) {
      if (e.length > Ue.TEXT_ENCODER_THRESHOLD) {
        let n = (0, Ue.utf8Count)(e);
        this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), (0, Ue.utf8EncodeTE)(e, this.bytes, this.pos), this.pos += n;
      } else {
        let n = (0, Ue.utf8Count)(e);
        this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), (0, Ue.utf8EncodeJs)(e, this.bytes, this.pos), this.pos += n;
      }
    }
    encodeObject(e, t) {
      let s = this.extensionCodec.tryToEncode(e, this.context);
      if (s != null)
        this.encodeExtension(s);
      else if (Array.isArray(e))
        this.encodeArray(e, t);
      else if (ArrayBuffer.isView(e))
        this.encodeBinary(e);
      else if (typeof e == "object")
        this.encodeMap(e, t);
      else
        throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
    }
    encodeBinary(e) {
      let t = e.byteLength;
      if (t < 256)
        this.writeU8(196), this.writeU8(t);
      else if (t < 65536)
        this.writeU8(197), this.writeU16(t);
      else if (t < 4294967296)
        this.writeU8(198), this.writeU32(t);
      else
        throw new Error(`Too large binary: ${t}`);
      let s = (0, xn.ensureUint8Array)(e);
      this.writeU8a(s);
    }
    encodeArray(e, t) {
      let s = e.length;
      if (s < 16)
        this.writeU8(144 + s);
      else if (s < 65536)
        this.writeU8(220), this.writeU16(s);
      else if (s < 4294967296)
        this.writeU8(221), this.writeU32(s);
      else
        throw new Error(`Too large array: ${s}`);
      for (let n of e)
        this.doEncode(n, t + 1);
    }
    countWithoutUndefined(e, t) {
      let s = 0;
      for (let n of t)
        e[n] !== void 0 && s++;
      return s;
    }
    encodeMap(e, t) {
      let s = Object.keys(e);
      this.sortKeys && s.sort();
      let n = this.ignoreUndefined ? this.countWithoutUndefined(e, s) : s.length;
      if (n < 16)
        this.writeU8(128 + n);
      else if (n < 65536)
        this.writeU8(222), this.writeU16(n);
      else if (n < 4294967296)
        this.writeU8(223), this.writeU32(n);
      else
        throw new Error(`Too large map object: ${n}`);
      for (let o of s) {
        let a = e[o];
        this.ignoreUndefined && a === void 0 || (this.encodeString(o), this.doEncode(a, t + 1));
      }
    }
    encodeExtension(e) {
      let t = e.data.length;
      if (t === 1)
        this.writeU8(212);
      else if (t === 2)
        this.writeU8(213);
      else if (t === 4)
        this.writeU8(214);
      else if (t === 8)
        this.writeU8(215);
      else if (t === 16)
        this.writeU8(216);
      else if (t < 256)
        this.writeU8(199), this.writeU8(t);
      else if (t < 65536)
        this.writeU8(200), this.writeU16(t);
      else if (t < 4294967296)
        this.writeU8(201), this.writeU32(t);
      else
        throw new Error(`Too large extension object: ${t}`);
      this.writeI8(e.type), this.writeU8a(e.data);
    }
    writeU8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
    }
    writeU8a(e) {
      let t = e.length;
      this.ensureBufferSizeToWrite(t), this.bytes.set(e, this.pos), this.pos += t;
    }
    writeI8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
    }
    writeU16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
    }
    writeI16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
    }
    writeU32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
    }
    writeI32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
    }
    writeF32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
    }
    writeF64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
    }
    writeU64(e) {
      this.ensureBufferSizeToWrite(8), (0, os.setUint64)(this.view, this.pos, e), this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8), (0, os.setInt64)(this.view, this.pos, e), this.pos += 8;
    }
  };
  N.Encoder = br;
});
var is = _((Pt) => {
  "use strict";
  Object.defineProperty(Pt, "__esModule", { value: true });
  Pt.encode = void 0;
  var vn = wr(), En = {};
  function Pn(r, e = En) {
    return new vn.Encoder(e.extensionCodec, e.context, e.maxDepth, e.initialBufferSize, e.sortKeys, e.forceFloat32, e.ignoreUndefined, e.forceIntegerToFloat).encodeSharedRef(r);
  }
  Pt.encode = Pn;
});
var as = _((Tt) => {
  "use strict";
  Object.defineProperty(Tt, "__esModule", { value: true });
  Tt.prettyByte = void 0;
  function Tn(r) {
    return `${r < 0 ? "-" : ""}0x${Math.abs(r).toString(16).padStart(2, "0")}`;
  }
  Tt.prettyByte = Tn;
});
var ls = _((_t) => {
  "use strict";
  Object.defineProperty(_t, "__esModule", { value: true });
  _t.CachedKeyDecoder = void 0;
  var _n = mt(), Sn = 16, Mn = 16, xr = class {
    constructor(e = Sn, t = Mn) {
      this.maxKeyLength = e, this.maxLengthPerKey = t, this.hit = 0, this.miss = 0, this.caches = [];
      for (let s = 0; s < this.maxKeyLength; s++)
        this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, s) {
      let n = this.caches[s - 1];
      e:
        for (let o of n) {
          let a = o.bytes;
          for (let c = 0; c < s; c++)
            if (a[c] !== e[t + c])
              continue e;
          return o.str;
        }
      return null;
    }
    store(e, t) {
      let s = this.caches[e.length - 1], n = { bytes: e, str: t };
      s.length >= this.maxLengthPerKey ? s[Math.random() * s.length | 0] = n : s.push(n);
    }
    decode(e, t, s) {
      let n = this.find(e, t, s);
      if (n != null)
        return this.hit++, n;
      this.miss++;
      let o = (0, _n.utf8DecodeJs)(e, t, s), a = Uint8Array.prototype.slice.call(e, t, t + s);
      return this.store(a, o), o;
    }
  };
  _t.CachedKeyDecoder = xr;
});
var St = _((J) => {
  "use strict";
  Object.defineProperty(J, "__esModule", { value: true });
  J.Decoder = J.DataViewIndexOutOfBoundsError = void 0;
  var vr = as(), kn = Et(), re = Oe(), Er = mt(), Pr = gr(), Dn = ls(), H = wt(), Wn = (r) => {
    let e = typeof r;
    return e === "string" || e === "number";
  }, Ce = -1, _r = new DataView(new ArrayBuffer(0)), On = new Uint8Array(_r.buffer);
  J.DataViewIndexOutOfBoundsError = (() => {
    try {
      _r.getInt8(0);
    } catch (r) {
      return r.constructor;
    }
    throw new Error("never reached");
  })();
  var cs = new J.DataViewIndexOutOfBoundsError("Insufficient data"), An = new Dn.CachedKeyDecoder(), Tr = class {
    constructor(e = kn.ExtensionCodec.defaultCodec, t = void 0, s = re.UINT32_MAX, n = re.UINT32_MAX, o = re.UINT32_MAX, a = re.UINT32_MAX, c = re.UINT32_MAX, p = An) {
      this.extensionCodec = e, this.context = t, this.maxStrLength = s, this.maxBinLength = n, this.maxArrayLength = o, this.maxMapLength = a, this.maxExtLength = c, this.keyDecoder = p, this.totalPos = 0, this.pos = 0, this.view = _r, this.bytes = On, this.headByte = Ce, this.stack = [];
    }
    reinitializeState() {
      this.totalPos = 0, this.headByte = Ce, this.stack.length = 0;
    }
    setBuffer(e) {
      this.bytes = (0, Pr.ensureUint8Array)(e), this.view = (0, Pr.createDataView)(this.bytes), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === Ce && !this.hasRemaining(1))
        this.setBuffer(e);
      else {
        let t = this.bytes.subarray(this.pos), s = (0, Pr.ensureUint8Array)(e), n = new Uint8Array(t.length + s.length);
        n.set(t), n.set(s, t.length), this.setBuffer(n);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: t, pos: s } = this;
      return new RangeError(`Extra ${t.byteLength - s} of ${t.byteLength} byte(s) found at buffer[${e}]`);
    }
    decode(e) {
      this.reinitializeState(), this.setBuffer(e);
      let t = this.doDecodeSync();
      if (this.hasRemaining(1))
        throw this.createExtraByteError(this.pos);
      return t;
    }
    *decodeMulti(e) {
      for (this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); )
        yield this.doDecodeSync();
    }
    async decodeAsync(e) {
      let t = false, s;
      for await (let c of e) {
        if (t)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(c);
        try {
          s = this.doDecodeSync(), t = true;
        } catch (p) {
          if (!(p instanceof J.DataViewIndexOutOfBoundsError))
            throw p;
        }
        this.totalPos += this.pos;
      }
      if (t) {
        if (this.hasRemaining(1))
          throw this.createExtraByteError(this.totalPos);
        return s;
      }
      let { headByte: n, pos: o, totalPos: a } = this;
      throw new RangeError(`Insufficient data in parsing ${(0, vr.prettyByte)(n)} at ${a} (${o} in the current buffer)`);
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, true);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, false);
    }
    async *decodeMultiAsync(e, t) {
      let s = t, n = -1;
      for await (let o of e) {
        if (t && n === 0)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(o), s && (n = this.readArraySize(), s = false, this.complete());
        try {
          for (; yield this.doDecodeSync(), --n !== 0; )
            ;
        } catch (a) {
          if (!(a instanceof J.DataViewIndexOutOfBoundsError))
            throw a;
        }
        this.totalPos += this.pos;
      }
    }
    doDecodeSync() {
      e:
        for (; ; ) {
          let e = this.readHeadByte(), t;
          if (e >= 224)
            t = e - 256;
          else if (e < 192)
            if (e < 128)
              t = e;
            else if (e < 144) {
              let n = e - 128;
              if (n !== 0) {
                this.pushMapState(n), this.complete();
                continue e;
              } else
                t = {};
            } else if (e < 160) {
              let n = e - 144;
              if (n !== 0) {
                this.pushArrayState(n), this.complete();
                continue e;
              } else
                t = [];
            } else {
              let n = e - 160;
              t = this.decodeUtf8String(n, 0);
            }
          else if (e === 192)
            t = null;
          else if (e === 194)
            t = false;
          else if (e === 195)
            t = true;
          else if (e === 202)
            t = this.readF32();
          else if (e === 203)
            t = this.readF64();
          else if (e === 204)
            t = this.readU8();
          else if (e === 205)
            t = this.readU16();
          else if (e === 206)
            t = this.readU32();
          else if (e === 207)
            t = this.readU64();
          else if (e === 208)
            t = this.readI8();
          else if (e === 209)
            t = this.readI16();
          else if (e === 210)
            t = this.readI32();
          else if (e === 211)
            t = this.readI64();
          else if (e === 217) {
            let n = this.lookU8();
            t = this.decodeUtf8String(n, 1);
          } else if (e === 218) {
            let n = this.lookU16();
            t = this.decodeUtf8String(n, 2);
          } else if (e === 219) {
            let n = this.lookU32();
            t = this.decodeUtf8String(n, 4);
          } else if (e === 220) {
            let n = this.readU16();
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue e;
            } else
              t = [];
          } else if (e === 221) {
            let n = this.readU32();
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue e;
            } else
              t = [];
          } else if (e === 222) {
            let n = this.readU16();
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue e;
            } else
              t = {};
          } else if (e === 223) {
            let n = this.readU32();
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue e;
            } else
              t = {};
          } else if (e === 196) {
            let n = this.lookU8();
            t = this.decodeBinary(n, 1);
          } else if (e === 197) {
            let n = this.lookU16();
            t = this.decodeBinary(n, 2);
          } else if (e === 198) {
            let n = this.lookU32();
            t = this.decodeBinary(n, 4);
          } else if (e === 212)
            t = this.decodeExtension(1, 0);
          else if (e === 213)
            t = this.decodeExtension(2, 0);
          else if (e === 214)
            t = this.decodeExtension(4, 0);
          else if (e === 215)
            t = this.decodeExtension(8, 0);
          else if (e === 216)
            t = this.decodeExtension(16, 0);
          else if (e === 199) {
            let n = this.lookU8();
            t = this.decodeExtension(n, 1);
          } else if (e === 200) {
            let n = this.lookU16();
            t = this.decodeExtension(n, 2);
          } else if (e === 201) {
            let n = this.lookU32();
            t = this.decodeExtension(n, 4);
          } else
            throw new H.DecodeError(`Unrecognized type byte: ${(0, vr.prettyByte)(e)}`);
          this.complete();
          let s = this.stack;
          for (; s.length > 0; ) {
            let n = s[s.length - 1];
            if (n.type === 0)
              if (n.array[n.position] = t, n.position++, n.position === n.size)
                s.pop(), t = n.array;
              else
                continue e;
            else if (n.type === 1) {
              if (!Wn(t))
                throw new H.DecodeError("The type of key must be string or number but " + typeof t);
              if (t === "__proto__")
                throw new H.DecodeError("The key __proto__ is not allowed");
              n.key = t, n.type = 2;
              continue e;
            } else if (n.map[n.key] = t, n.readCount++, n.readCount === n.size)
              s.pop(), t = n.map;
            else {
              n.key = null, n.type = 1;
              continue e;
            }
          }
          return t;
        }
    }
    readHeadByte() {
      return this.headByte === Ce && (this.headByte = this.readU8()), this.headByte;
    }
    complete() {
      this.headByte = Ce;
    }
    readArraySize() {
      let e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (e < 160)
            return e - 144;
          throw new H.DecodeError(`Unrecognized array type byte: ${(0, vr.prettyByte)(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength)
        throw new H.DecodeError(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.push({ type: 1, size: e, key: null, readCount: 0, map: {} });
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength)
        throw new H.DecodeError(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.push({ type: 0, size: e, array: new Array(e), position: 0 });
    }
    decodeUtf8String(e, t) {
      var s;
      if (e > this.maxStrLength)
        throw new H.DecodeError(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + t + e)
        throw cs;
      let n = this.pos + t, o;
      return this.stateIsMapKey() && (!((s = this.keyDecoder) === null || s === void 0) && s.canBeCached(e)) ? o = this.keyDecoder.decode(this.bytes, n, e) : e > Er.TEXT_DECODER_THRESHOLD ? o = (0, Er.utf8DecodeTD)(this.bytes, n, e) : o = (0, Er.utf8DecodeJs)(this.bytes, n, e), this.pos += t + e, o;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack[this.stack.length - 1].type === 1 : false;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength)
        throw new H.DecodeError(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + t))
        throw cs;
      let s = this.pos + t, n = this.bytes.subarray(s, s + e);
      return this.pos += t + e, n;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength)
        throw new H.DecodeError(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
      let s = this.view.getInt8(this.pos + t), n = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(n, s, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      let e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      let e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      let e = this.view.getUint16(this.pos);
      return this.pos += 2, e;
    }
    readI16() {
      let e = this.view.getInt16(this.pos);
      return this.pos += 2, e;
    }
    readU32() {
      let e = this.view.getUint32(this.pos);
      return this.pos += 4, e;
    }
    readI32() {
      let e = this.view.getInt32(this.pos);
      return this.pos += 4, e;
    }
    readU64() {
      let e = (0, re.getUint64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      let e = (0, re.getInt64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readF32() {
      let e = this.view.getFloat32(this.pos);
      return this.pos += 4, e;
    }
    readF64() {
      let e = this.view.getFloat64(this.pos);
      return this.pos += 8, e;
    }
  };
  J.Decoder = Tr;
});
var Sr = _((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: true });
  L.decodeMulti = L.decode = L.defaultDecodeOptions = void 0;
  var us = St();
  L.defaultDecodeOptions = {};
  function In(r, e = L.defaultDecodeOptions) {
    return new us.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decode(r);
  }
  L.decode = In;
  function Un(r, e = L.defaultDecodeOptions) {
    return new us.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeMulti(r);
  }
  L.decodeMulti = Un;
});
var hs = _(($) => {
  "use strict";
  Object.defineProperty($, "__esModule", { value: true });
  $.ensureAsyncIterable = $.asyncIterableFromStream = $.isAsyncIterable = void 0;
  function ps(r) {
    return r[Symbol.asyncIterator] != null;
  }
  $.isAsyncIterable = ps;
  function Cn(r) {
    if (r == null)
      throw new Error("Assertion Failure: value must not be null nor undefined");
  }
  async function* ds(r) {
    let e = r.getReader();
    try {
      for (; ; ) {
        let { done: t, value: s } = await e.read();
        if (t)
          return;
        Cn(s), yield s;
      }
    } finally {
      e.releaseLock();
    }
  }
  $.asyncIterableFromStream = ds;
  function Nn(r) {
    return ps(r) ? r : ds(r);
  }
  $.ensureAsyncIterable = Nn;
});
var fs = _((j) => {
  "use strict";
  Object.defineProperty(j, "__esModule", { value: true });
  j.decodeStream = j.decodeMultiStream = j.decodeArrayStream = j.decodeAsync = void 0;
  var Mr = St(), kr = hs(), Mt = Sr();
  async function Ln(r, e = Mt.defaultDecodeOptions) {
    let t = (0, kr.ensureAsyncIterable)(r);
    return new Mr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeAsync(t);
  }
  j.decodeAsync = Ln;
  function jn(r, e = Mt.defaultDecodeOptions) {
    let t = (0, kr.ensureAsyncIterable)(r);
    return new Mr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(t);
  }
  j.decodeArrayStream = jn;
  function ys(r, e = Mt.defaultDecodeOptions) {
    let t = (0, kr.ensureAsyncIterable)(r);
    return new Mr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(t);
  }
  j.decodeMultiStream = ys;
  function Fn(r, e = Mt.defaultDecodeOptions) {
    return ys(r, e);
  }
  j.decodeStream = Fn;
});
var Dt = _((h) => {
  "use strict";
  Object.defineProperty(h, "__esModule", { value: true });
  h.decodeTimestampExtension = h.encodeTimestampExtension = h.decodeTimestampToTimeSpec = h.encodeTimeSpecToTimestamp = h.encodeDateToTimeSpec = h.EXT_TIMESTAMP = h.ExtData = h.ExtensionCodec = h.Encoder = h.DataViewIndexOutOfBoundsError = h.DecodeError = h.Decoder = h.decodeStream = h.decodeMultiStream = h.decodeArrayStream = h.decodeAsync = h.decodeMulti = h.decode = h.encode = void 0;
  var Bn = is();
  Object.defineProperty(h, "encode", { enumerable: true, get: function() {
    return Bn.encode;
  } });
  var Rs = Sr();
  Object.defineProperty(h, "decode", { enumerable: true, get: function() {
    return Rs.decode;
  } });
  Object.defineProperty(h, "decodeMulti", { enumerable: true, get: function() {
    return Rs.decodeMulti;
  } });
  var kt = fs();
  Object.defineProperty(h, "decodeAsync", { enumerable: true, get: function() {
    return kt.decodeAsync;
  } });
  Object.defineProperty(h, "decodeArrayStream", { enumerable: true, get: function() {
    return kt.decodeArrayStream;
  } });
  Object.defineProperty(h, "decodeMultiStream", { enumerable: true, get: function() {
    return kt.decodeMultiStream;
  } });
  Object.defineProperty(h, "decodeStream", { enumerable: true, get: function() {
    return kt.decodeStream;
  } });
  var ms = St();
  Object.defineProperty(h, "Decoder", { enumerable: true, get: function() {
    return ms.Decoder;
  } });
  Object.defineProperty(h, "DataViewIndexOutOfBoundsError", { enumerable: true, get: function() {
    return ms.DataViewIndexOutOfBoundsError;
  } });
  var qn = wt();
  Object.defineProperty(h, "DecodeError", { enumerable: true, get: function() {
    return qn.DecodeError;
  } });
  var Vn = wr();
  Object.defineProperty(h, "Encoder", { enumerable: true, get: function() {
    return Vn.Encoder;
  } });
  var Hn = Et();
  Object.defineProperty(h, "ExtensionCodec", { enumerable: true, get: function() {
    return Hn.ExtensionCodec;
  } });
  var Jn = Rr();
  Object.defineProperty(h, "ExtData", { enumerable: true, get: function() {
    return Jn.ExtData;
  } });
  var fe = mr();
  Object.defineProperty(h, "EXT_TIMESTAMP", { enumerable: true, get: function() {
    return fe.EXT_TIMESTAMP;
  } });
  Object.defineProperty(h, "encodeDateToTimeSpec", { enumerable: true, get: function() {
    return fe.encodeDateToTimeSpec;
  } });
  Object.defineProperty(h, "encodeTimeSpecToTimestamp", { enumerable: true, get: function() {
    return fe.encodeTimeSpecToTimestamp;
  } });
  Object.defineProperty(h, "decodeTimestampToTimeSpec", { enumerable: true, get: function() {
    return fe.decodeTimestampToTimeSpec;
  } });
  Object.defineProperty(h, "encodeTimestampExtension", { enumerable: true, get: function() {
    return fe.encodeTimestampExtension;
  } });
  Object.defineProperty(h, "decodeTimestampExtension", { enumerable: true, get: function() {
    return fe.decodeTimestampExtension;
  } });
});
var A = class extends Error {
  constructor(e) {
    super(e), this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var P = class extends A {
};
var m = typeof process < "u" && process.release && process.release.name === "node";
var pr;
if (globalThis.document)
  pr = (r) => new Promise((e, t) => {
    let s = document.createElement("script");
    s.src = r, s.onload = () => e(), s.onerror = t, document.head.appendChild(s);
  });
else if (globalThis.importScripts)
  pr = async (r) => {
    try {
      globalThis.importScripts(r);
    } catch (e) {
      if (e instanceof TypeError)
        await Promise.resolve().then(() => te(U(r)));
      else
        throw e;
    }
  };
else if (m)
  pr = async (r) => {
    let e = (await Promise.resolve().then(() => te(U("path")))).default;
    await Promise.resolve().then(() => te(U(e.resolve(r))));
  };
else
  throw new A("Cannot determine runtime environment");
var en = /* @__PURE__ */ new WeakMap();
function Kr(r, e) {
  return en.set(r, e), r;
}
var bs = te(Dt());
var zn = new TextEncoder();
var F;
var B;
var Ne;
var Dr;
F = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakSet(), Dr = function() {
  i(this, F).push(new Promise((e) => {
    i(this, B).push(e);
  }));
};
function Le(r, e, t) {
  return xs({ type: "response", data: { uuid: r, resp: e } }, t);
}
function xs(r, e) {
  return e && Kr(r, e), r;
}
var ge;
ge = /* @__PURE__ */ new WeakMap();
var Ts = te(Dt());
var Kn = new TextDecoder("utf-8");
var be;
var we;
var je;
var Fe;
var xe;
be = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap();
var Or = new Int32Array(new ArrayBuffer(4));
var l = {};
function ks(r) {
  Object.keys(r).forEach((e) => l._free(r[e]));
}
m && (globalThis.Worker = U("worker_threads").Worker);
var ve;
var Ct;
var Ds;
var qe;
ve = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakSet(), Ds = function(t) {
  m ? t.on("message", (s) => {
    i(this, qe).call(this, t, s);
  }) : t.onmessage = (s) => i(this, qe).call(this, t, s.data);
}, qe = /* @__PURE__ */ new WeakMap();
var se;
var Ve;
var ne;
var He;
se = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap();
var Bt = te(Dt());
m && (globalThis.Worker = U("worker_threads").Worker);
var Ee;
var oe;
var Pe;
var Lt;
var Ws;
var jt;
var Os;
var Ft;
var As;
var Je;
Ee = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakSet(), Ws = async function(t) {
  d(this, oe, await navigator.serviceWorker.register(t)), await navigator.serviceWorker.ready, window.addEventListener("beforeunload", () => {
    var n;
    (n = i(this, oe)) == null || n.unregister();
  });
  let s = await new Promise((n) => {
    navigator.serviceWorker.addEventListener("message", function o(a) {
      a.data.type === "registration-successful" && (navigator.serviceWorker.removeEventListener("message", o), n(a.data.clientId));
    }), this.activeRegistration().postMessage({ type: "register-client-main" });
  });
  return navigator.serviceWorker.addEventListener("message", (n) => {
    x(this, jt, Os).call(this, n);
  }), s;
}, jt = /* @__PURE__ */ new WeakSet(), Os = async function(t) {
  if (t.data.type === "request") {
    let s = t.data.data, n = i(this, Ee).get(s);
    if (!n)
      throw new P("Request not found during service worker XHR request");
    switch (i(this, Ee).delete(s), n.type) {
      case "read": {
        let o = await this.inputQueue.get();
        this.activeRegistration().postMessage({ type: "wasm-webr-fetch-response", uuid: s, response: Le(s, o) });
        break;
      }
      case "interrupt": {
        let o = i(this, Pe);
        this.activeRegistration().postMessage({ type: "wasm-webr-fetch-response", uuid: s, response: Le(s, o) }), this.inputQueue.reset(), d(this, Pe, false);
        break;
      }
      default:
        throw new P(`Unsupported request type '${n.type}'.`);
    }
    return;
  }
}, Ft = /* @__PURE__ */ new WeakSet(), As = function(t) {
  m ? t.on("message", (s) => {
    i(this, Je).call(this, t, s);
  }) : t.onmessage = (s) => i(this, Je).call(this, t, s.data);
}, Je = /* @__PURE__ */ new WeakMap();
var Te;
var ze;
var Xe;
var $e;
var Ge;
var Ke;
Te = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap();
m && (globalThis.Worker = U("worker_threads").Worker);
var _e;
var qt;
var Is;
var Ze;
_e = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakSet(), Is = function(t) {
  m ? t.on("message", (s) => {
    i(this, Ze).call(this, t, s);
  }) : t.onmessage = (s) => i(this, Ze).call(this, t, s.data);
}, Ze = /* @__PURE__ */ new WeakMap();
var Se;
var Me;
var Ye;
var ie;
var Vt;
Se = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
var O = { Automatic: 0, SharedArrayBuffer: 1, ServiceWorker: 2, PostMessage: 3 };
var Cs = m ? __dirname + "/" : "https://webr.r-wasm.org/v0.2.2/";
var Ns = "https://repo.r-wasm.org";
var f = { null: 0, symbol: 1, pairlist: 2, closure: 3, environment: 4, promise: 5, call: 6, special: 7, builtin: 8, string: 9, logical: 10, integer: 13, double: 14, complex: 15, character: 16, dots: 17, any: 18, list: 19, expression: 20, bytecode: 21, pointer: 22, weakref: 23, raw: 24, s4: 25, new: 30, free: 31, function: 99 };
function Cr(r) {
  return r && typeof r == "object" && Object.keys(f).includes(r.type);
}
function Nr(r) {
  return r && typeof r == "object" && "re" in r && "im" in r;
}
function Ht(r) {
  return l._Rf_protect(q(r)), r;
}
function M(r, e) {
  return l._Rf_protect(q(r)), ++e.n, r;
}
function js(r) {
  let e = l._malloc(4);
  return l._R_ProtectWithIndex(q(r), e), { loc: l.getValue(e, "i32"), ptr: e };
}
function Fs(r) {
  l._Rf_unprotect(1), l._free(r.ptr);
}
function Bs(r, e) {
  return l._R_Reprotect(q(r), e.loc), r;
}
function D(r) {
  l._Rf_unprotect(r);
}
function Lr(r, e, t) {
  l._Rf_defineVar(q(e), q(t), q(r));
}
function qs(r, e) {
  let t = {}, s = { n: 0 };
  try {
    let n = new tt(e);
    M(n, s), t.code = l.allocateUTF8(r);
    let o = l._R_ParseEvalString(t.code, n.ptr);
    return y.wrap(o);
  } finally {
    ks(t), D(s.n);
  }
}
function et(r, e) {
  return l.getWasmTableEntry(l.GOT.ffi_safe_eval.value)(q(r), q(e));
}
function q(r) {
  return to(r) ? r.ptr : r;
}
function ue(r, e) {
  if (l._TYPEOF(r.ptr) !== f[e])
    throw new Error(`Unexpected object type "${r.type()}" when expecting type "${e}"`);
}
function Yn(r) {
  if (Cr(r))
    return new (Vs(f[r.type]))(r);
  if (r && typeof r == "object" && "type" in r && r.type === "null")
    return new $t();
  if (r === null)
    return new le({ type: "logical", names: null, values: [null] });
  if (typeof r == "boolean")
    return new le(r);
  if (typeof r == "number")
    return new rt(r);
  if (typeof r == "string")
    return new K(r);
  if (Nr(r))
    return new st(r);
  if (Array.isArray(r))
    return eo(r);
  throw new Error("Robj construction for this JS object is not yet supported");
}
function eo(r) {
  let e = { n: 0 };
  try {
    let t = new ce([new Q("c"), ...r]);
    return M(t, e), t.eval();
  } finally {
    D(e.n);
  }
}
var E = class {
  constructor(e) {
    this.ptr = e;
  }
  type() {
    let e = l._TYPEOF(this.ptr);
    return Object.keys(f).find((s) => f[s] === e);
  }
};
var De;
var Jt;
var ae = class extends E {
  constructor(t) {
    if (!(t instanceof E))
      return Yn(t);
    super(t.ptr);
    u(this, De);
  }
  static wrap(t) {
    let s = l._TYPEOF(t);
    return new (Vs(s))(new E(t));
  }
  get [Symbol.toStringTag]() {
    return `RObject:${this.type()}`;
  }
  static getPersistentObject(t) {
    return k[t];
  }
  getPropertyValue(t) {
    return this[t];
  }
  inspect() {
    qs(".Internal(inspect(x))", { x: this });
  }
  isNull() {
    return l._TYPEOF(this.ptr) === f.null;
  }
  isUnbound() {
    return this.ptr === k.unboundValue.ptr;
  }
  attrs() {
    return We.wrap(l._ATTRIB(this.ptr));
  }
  setNames(t) {
    let s;
    if (t === null)
      s = k.null;
    else if (Array.isArray(t) && t.every((n) => typeof n == "string" || n === null))
      s = new K(t);
    else
      throw new Error("Argument to setNames must be null or an Array of strings or null");
    return l._Rf_setAttrib(this.ptr, k.namesSymbol.ptr, s.ptr), this;
  }
  names() {
    let t = K.wrap(l._Rf_getAttrib(this.ptr, k.namesSymbol.ptr));
    return t.isNull() ? null : t.toArray();
  }
  includes(t) {
    let s = this.names();
    return s && s.includes(t);
  }
  toJs(t = { depth: 0 }, s = 1) {
    throw new Error("This R object cannot be converted to JS");
  }
  subset(t) {
    return x(this, De, Jt).call(this, t, k.bracketSymbol.ptr);
  }
  get(t) {
    return x(this, De, Jt).call(this, t, k.bracket2Symbol.ptr);
  }
  getDollar(t) {
    return x(this, De, Jt).call(this, t, k.dollarSymbol.ptr);
  }
  pluck(...t) {
    let s = js(k.null);
    try {
      let n = (a, c) => {
        let p = a.get(c);
        return Bs(p, s);
      }, o = t.reduce(n, this);
      return o.isNull() ? void 0 : o;
    } finally {
      Fs(s);
    }
  }
  set(t, s) {
    let n = { n: 0 };
    try {
      let o = new ae(t);
      M(o, n);
      let a = new ae(s);
      M(a, n);
      let c = new Q("[[<-"), p = l._Rf_lang4(c.ptr, this.ptr, o.ptr, a.ptr);
      return M(p, n), ae.wrap(et(p, k.baseEnv));
    } finally {
      D(n.n);
    }
  }
  static getMethods(t) {
    let s = /* @__PURE__ */ new Set(), n = t;
    do
      Object.getOwnPropertyNames(n).map((o) => s.add(o));
    while (n = Object.getPrototypeOf(n));
    return [...s.keys()].filter((o) => typeof t[o] == "function");
  }
};
var y = ae;
De = /* @__PURE__ */ new WeakSet(), Jt = function(t, s) {
  let n = { n: 0 };
  try {
    let o = new ae(t);
    M(o, n);
    let a = l._Rf_lang3(s, this.ptr, o.ptr);
    return M(a, n), ae.wrap(et(a, k.baseEnv));
  } finally {
    D(n.n);
  }
};
var $t = class extends y {
  constructor() {
    return super(new E(l.getValue(l._R_NilValue, "*"))), this;
  }
  toJs() {
    return { type: "null" };
  }
};
var Q = class extends y {
  constructor(e) {
    if (e instanceof E) {
      ue(e, "symbol"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new E(l._Rf_install(t)));
    } finally {
      l._free(t);
    }
  }
  toJs() {
    let e = this.toObject();
    return { type: "symbol", printname: e.printname, symvalue: e.symvalue, internal: e.internal };
  }
  toObject() {
    return { printname: this.printname().isUnbound() ? null : this.printname().toString(), symvalue: this.symvalue().isUnbound() ? null : this.symvalue().ptr, internal: this.internal().isNull() ? null : this.internal().ptr };
  }
  toString() {
    return this.printname().toString();
  }
  printname() {
    return nt.wrap(l._PRINTNAME(this.ptr));
  }
  symvalue() {
    return y.wrap(l._SYMVALUE(this.ptr));
  }
  internal() {
    return y.wrap(l._INTERNAL(this.ptr));
  }
};
var We = class extends y {
  constructor(e) {
    if (e instanceof E)
      return ue(e, "pairlist"), super(e), this;
    let t = { n: 0 };
    try {
      let { names: s, values: n } = ot(e), o = We.wrap(l._Rf_allocList(n.length));
      M(o, t);
      for (let [a, c] = [0, o]; !c.isNull(); [a, c] = [a + 1, c.cdr()])
        c.setcar(new y(n[a]));
      o.setNames(s), super(o);
    } finally {
      D(t.n);
    }
  }
  get length() {
    return this.toArray().length;
  }
  toArray(e = { depth: 1 }) {
    return this.toJs(e).values;
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s = 1 } = {}) {
    let n = this.entries({ depth: s }), o = n.map(([a, c]) => a);
    if (!e && new Set(o).size !== o.length)
      throw new Error("Duplicate key when converting pairlist without allowDuplicateKey enabled");
    if (!t && o.some((a) => !a))
      throw new Error("Empty or null key when converting pairlist without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((a, c) => n.findIndex((p) => p[0] === a[0]) === c));
  }
  entries(e = { depth: 1 }) {
    let t = this.toJs(e);
    return t.values.map((s, n) => [t.names ? t.names[n] : null, s]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s = [], n = false, o = [];
    for (let c = this; !c.isNull(); c = c.cdr()) {
      let p = c.tag();
      p.isNull() ? s.push("") : (n = true, s.push(p.toString())), e.depth && t >= e.depth ? o.push(c.car()) : o.push(c.car().toJs(e, t + 1));
    }
    return { type: "pairlist", names: n ? s : null, values: o };
  }
  includes(e) {
    return e in this.toObject();
  }
  setcar(e) {
    l._SETCAR(this.ptr, e.ptr);
  }
  car() {
    return y.wrap(l._CAR(this.ptr));
  }
  cdr() {
    return y.wrap(l._CDR(this.ptr));
  }
  tag() {
    return y.wrap(l._TAG(this.ptr));
  }
};
var ce = class extends y {
  constructor(e) {
    if (e instanceof E)
      return ue(e, "call"), super(e), this;
    let t = { n: 0 };
    try {
      let { values: s } = ot(e), n = s.map((a) => M(new y(a), t)), o = ce.wrap(l._Rf_allocVector(f.call, s.length));
      M(o, t);
      for (let [a, c] = [0, o]; !c.isNull(); [a, c] = [a + 1, c.cdr()])
        c.setcar(n[a]);
      super(o);
    } finally {
      D(t.n);
    }
  }
  setcar(e) {
    l._SETCAR(this.ptr, e.ptr);
  }
  car() {
    return y.wrap(l._CAR(this.ptr));
  }
  cdr() {
    return y.wrap(l._CDR(this.ptr));
  }
  eval() {
    return y.wrap(et(this.ptr, k.baseEnv));
  }
};
var jr = class extends y {
  constructor(e) {
    if (e instanceof E)
      return ue(e, "list"), super(e), this;
    let t = { n: 0 };
    try {
      let { names: s, values: n } = ot(e), o = l._Rf_allocVector(f.list, n.length);
      M(o, t), n.forEach((a, c) => {
        l._SET_VECTOR_ELT(o, c, new y(a).ptr);
      }), y.wrap(o).setNames(s), super(new E(o));
    } finally {
      D(t.n);
    }
  }
  get length() {
    return l._LENGTH(this.ptr);
  }
  toArray(e = { depth: 1 }) {
    return this.toJs(e).values;
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s = 1 } = {}) {
    let n = this.entries({ depth: s }), o = n.map(([a, c]) => a);
    if (!e && new Set(o).size !== o.length)
      throw new Error("Duplicate key when converting list without allowDuplicateKey enabled");
    if (!t && o.some((a) => !a))
      throw new Error("Empty or null key when converting list without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((a, c) => n.findIndex((p) => p[0] === a[0]) === c));
  }
  entries(e = { depth: 1 }) {
    let t = this.toJs(e);
    return t.values.map((s, n) => [t.names ? t.names[n] : null, s]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    return { type: "list", names: this.names(), values: [...Array(this.length).keys()].map((s) => e.depth && t >= e.depth ? this.get(s + 1) : this.get(s + 1).toJs(e, t + 1)) };
  }
};
var ke = class extends y {
  exec(...e) {
    let t = { n: 0 };
    try {
      let s = new ce([this, ...e]);
      return M(s, t), s.eval();
    } finally {
      D(t.n);
    }
  }
};
var nt = class extends y {
  constructor(e) {
    if (e instanceof E) {
      ue(e, "string"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new E(l._Rf_mkChar(t)));
    } finally {
      l._free(t);
    }
  }
  toString() {
    return l.UTF8ToString(l._R_CHAR(this.ptr));
  }
  toJs() {
    return { type: "string", value: this.toString() };
  }
};
var tt = class extends y {
  constructor(e = {}) {
    if (e instanceof E)
      return ue(e, "environment"), super(e), this;
    let t = 0;
    try {
      let { names: s, values: n } = ot(e), o = Ht(l._R_NewEnv(k.globalEnv.ptr, 0, 0));
      ++t, n.forEach((a, c) => {
        let p = s ? s[c] : null;
        if (!p)
          throw new Error("Can't create object in new environment with empty symbol name");
        let v = new Q(p), ee = Ht(new y(a));
        try {
          Lr(o, v, ee);
        } finally {
          D(1);
        }
      }), super(new E(o));
    } finally {
      D(t);
    }
  }
  ls(e = false, t = true) {
    return K.wrap(l._R_lsInternal3(this.ptr, Number(e), Number(t))).toArray();
  }
  bind(e, t) {
    let s = new Q(e), n = Ht(new y(t));
    try {
      Lr(this, s, n);
    } finally {
      D(1);
    }
  }
  names() {
    return this.ls(true, true);
  }
  frame() {
    return y.wrap(l._FRAME(this.ptr));
  }
  subset(e) {
    if (typeof e == "number")
      throw new Error("Object of type environment is not subsettable");
    return this.getDollar(e);
  }
  toObject({ depth: e = 0 } = {}) {
    let t = this.names();
    return Object.fromEntries([...Array(t.length).keys()].map((s) => [t[s], this.getDollar(t[s]).toJs({ depth: e })]));
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s = this.names(), n = [...Array(s.length).keys()].map((o) => e.depth && t >= e.depth ? this.getDollar(s[o]) : this.getDollar(s[o]).toJs(e, t + 1));
    return { type: "environment", names: s, values: n };
  }
};
var Z = class extends y {
  constructor(e, t, s) {
    if (e instanceof E)
      return ue(e, t), super(e), this;
    let n = { n: 0 };
    try {
      let { names: o, values: a } = ot(e), c = l._Rf_allocVector(f[t], a.length);
      M(c, n), a.forEach(s(c)), y.wrap(c).setNames(o), super(new E(c));
    } finally {
      D(n.n);
    }
  }
  get length() {
    return l._LENGTH(this.ptr);
  }
  get(e) {
    return super.get(e);
  }
  subset(e) {
    return super.subset(e);
  }
  getDollar(e) {
    throw new Error("$ operator is invalid for atomic vectors");
  }
  detectMissing() {
    let e = { n: 0 };
    try {
      let t = l._Rf_lang2(new Q("is.na").ptr, this.ptr);
      M(t, e);
      let s = le.wrap(et(t, k.baseEnv));
      M(s, e);
      let n = s.toTypedArray();
      return Array.from(n).map((o) => !!o);
    } finally {
      D(e.n);
    }
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : e[s]);
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false } = {}) {
    let s = this.entries(), n = s.map(([o, a]) => o);
    if (!e && new Set(n).size !== n.length)
      throw new Error("Duplicate key when converting atomic vector without allowDuplicateKey enabled");
    if (!t && n.some((o) => !o))
      throw new Error("Empty or null key when converting atomic vector without allowEmptyKey enabled");
    return Object.fromEntries(s.filter((o, a) => s.findIndex((c) => c[0] === o[0]) === a));
  }
  entries() {
    let e = this.toArray(), t = this.names();
    return e.map((s, n) => [t ? t[n] : null, s]);
  }
  toJs() {
    return { type: this.type(), names: this.names(), values: this.toArray() };
  }
};
var Gt;
var Fr = class extends Z {
  constructor(e) {
    super(e, "logical", i(Fr, Gt));
  }
  getBoolean(e) {
    return this.get(e).toArray()[0];
  }
  toBoolean() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getBoolean(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS boolean");
    return e;
  }
  toTypedArray() {
    return new Int32Array(l.HEAP32.subarray(l._LOGICAL(this.ptr) / 4, l._LOGICAL(this.ptr) / 4 + this.length));
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : !!e[s]);
  }
};
var le = Fr;
Gt = /* @__PURE__ */ new WeakMap(), u(le, Gt, (e) => {
  let t = l._LOGICAL(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : !!n, "i32");
  };
});
var Kt;
var Br = class extends Z {
  constructor(e) {
    super(e, "integer", i(Br, Kt));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Int32Array(l.HEAP32.subarray(l._INTEGER(this.ptr) / 4, l._INTEGER(this.ptr) / 4 + this.length));
  }
};
var zt = Br;
Kt = /* @__PURE__ */ new WeakMap(), u(zt, Kt, (e) => {
  let t = l._INTEGER(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : Math.round(Number(n)), "i32");
  };
});
var Qt;
var qr = class extends Z {
  constructor(e) {
    super(e, "double", i(qr, Qt));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Float64Array(l.HEAPF64.subarray(l._REAL(this.ptr) / 8, l._REAL(this.ptr) / 8 + this.length));
  }
};
var rt = qr;
Qt = /* @__PURE__ */ new WeakMap(), u(rt, Qt, (e) => {
  let t = l._REAL(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * o, n === null ? s : n, "double");
  };
});
var Zt;
var Vr = class extends Z {
  constructor(e) {
    super(e, "complex", i(Vr, Zt));
  }
  getComplex(e) {
    return this.get(e).toArray()[0];
  }
  toComplex() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getComplex(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS object");
    return e;
  }
  toTypedArray() {
    return new Float64Array(l.HEAPF64.subarray(l._COMPLEX(this.ptr) / 8, l._COMPLEX(this.ptr) / 8 + 2 * this.length));
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : { re: e[2 * s], im: e[2 * s + 1] });
  }
};
var st = Vr;
Zt = /* @__PURE__ */ new WeakMap(), u(st, Zt, (e) => {
  let t = l._COMPLEX(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * (2 * o), n === null ? s : n.re, "double"), l.setValue(t + 8 * (2 * o + 1), n === null ? s : n.im, "double");
  };
});
var Yt;
var Hr = class extends Z {
  constructor(e) {
    super(e, "character", i(Hr, Yt));
  }
  getString(e) {
    return this.get(e).toArray()[0];
  }
  toString() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getString(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS string");
    return e;
  }
  toTypedArray() {
    return new Uint32Array(l.HEAPU32.subarray(l._STRING_PTR(this.ptr) / 4, l._STRING_PTR(this.ptr) / 4 + this.length));
  }
  toArray() {
    return this.detectMissing().map((e, t) => e ? null : l.UTF8ToString(l._R_CHAR(l._STRING_ELT(this.ptr, t))));
  }
};
var K = Hr;
Yt = /* @__PURE__ */ new WeakMap(), u(K, Yt, (e) => (t, s) => {
  t === null ? l._SET_STRING_ELT(e, s, k.naString.ptr) : l._SET_STRING_ELT(e, s, new nt(t).ptr);
});
var er;
var Jr = class extends Z {
  constructor(e) {
    super(e, "raw", i(Jr, er));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Uint8Array(l.HEAPU8.subarray(l._RAW(this.ptr), l._RAW(this.ptr) + this.length));
  }
};
var Xt = Jr;
er = /* @__PURE__ */ new WeakMap(), u(Xt, er, (e) => {
  let t = l._RAW(e);
  return (s, n) => {
    l.setValue(t + n, Number(s), "i8");
  };
});
function ot(r) {
  return Cr(r) ? r : Array.isArray(r) || ArrayBuffer.isView(r) ? { names: null, values: r } : r && typeof r == "object" && !Nr(r) ? { names: Object.keys(r), values: Object.values(r) } : { names: null, values: [r] };
}
function Vs(r) {
  let e = { [f.null]: $t, [f.symbol]: Q, [f.pairlist]: We, [f.closure]: ke, [f.environment]: tt, [f.call]: ce, [f.special]: ke, [f.builtin]: ke, [f.string]: nt, [f.logical]: le, [f.integer]: zt, [f.double]: rt, [f.complex]: st, [f.character]: K, [f.list]: jr, [f.raw]: Xt, [f.function]: ke };
  return r in e ? e[r] : y;
}
function to(r) {
  return r instanceof y;
}
var k;
var it;
var at;
var lt;
var ct;
var ut;
var tr;
var rr;
var sr;
var nr;
var or;
var ir;
var Js;
it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakSet(), Js = async function() {
  for (; ; ) {
    let e = await this.webR.read();
    switch (e.type) {
      case "stdout":
        i(this, it).call(this, e.data);
        break;
      case "stderr":
        i(this, at).call(this, e.data);
        break;
      case "prompt":
        i(this, lt).call(this, e.data);
        break;
      case "canvas":
        e.data.event === "canvasImage" ? i(this, ct).call(this, e.data.image) : e.data.event === "canvasNewPage" && i(this, ut).call(this);
        break;
      case "closed":
        return;
      default:
        console.warn(`Unhandled output type for webR Console: ${e.type}.`);
    }
  }
};
var io = { FONTCONFIG_PATH: "/etc/fonts", R_HOME: "/usr/lib/R", R_ENABLE_JIT: "0" };
var zs = { RArgs: [], REnv: io, baseUrl: Cs, serviceWorkerUrl: "", repoUrl: Ns, homedir: "/home/web_user", interactive: true, channelType: O.Automatic, createLazyFilesystem: true };
var g;
var pt;
var cr;
var Xs;
g = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakSet(), Xs = async function() {
  for (; ; ) {
    let e = await i(this, g).readSystem();
    switch (e.type) {
      case "setTimeoutWasm":
        setTimeout((t, s) => {
          this.invokeWasmFunction(t, ...s);
        }, e.data.delay, e.data.ptr, e.data.args);
        break;
      case "console.log":
        console.log(e.data);
        break;
      case "console.warn":
        console.warn(e.data);
        break;
      case "console.error":
        console.error(e.data);
        break;
      default:
        throw new A("Unknown system message type `" + e.type + "`");
    }
  }
};
var b;
var R;
var dt;
b = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap();

// src/messageporthttp.ts
async function makeRequest(scope, appName, clientPort, pyodide2) {
  const asgiFunc = pyodide2.runPython(
    `_shiny_app_registry["${appName}"].app.call_pyodide`
  );
  await connect(scope, clientPort, asgiFunc);
}
async function connect(scope, clientPort, asgiFunc) {
  const fromClientQueue = new AwaitableQueue();
  clientPort.addEventListener("message", (event) => {
    if (event.data.type === "http.request") {
      fromClientQueue.enqueue({
        type: "http.request",
        body: event.data.body,
        more_body: event.data.more_body
      });
    }
  });
  clientPort.start();
  async function fromClient() {
    return fromClientQueue.dequeue();
  }
  async function toClient(event) {
    event = Object.fromEntries(event.toJs());
    if (event.type === "http.response.start") {
      clientPort.postMessage({
        type: event.type,
        status: event.status,
        headers: asgiHeadersToRecord(event.headers)
      });
    } else if (event.type === "http.response.body") {
      clientPort.postMessage({
        type: event.type,
        body: asgiBodyToArray(event.body),
        more_body: event.more_body
      });
    } else {
      throw new Error(`Unhandled ASGI event: ${event.type}`);
    }
  }
  await asgiFunc(scope, fromClient, toClient);
}
function asgiHeadersToRecord(headers) {
  headers = headers.map(([key, val]) => {
    return [uint8ArrayToString(key), uint8ArrayToString(val)];
  });
  return Object.fromEntries(headers);
}
function asgiBodyToArray(body) {
  return body;
}

// src/messageportwebsocket.ts
var MessagePortWebSocket = class extends EventTarget {
  constructor(port) {
    super();
    this.readyState = 0;
    this.addEventListener("open", (e) => {
      if (this.onopen) {
        this.onopen(e);
      }
    });
    this.addEventListener("message", (e) => {
      if (this.onmessage) {
        this.onmessage(e);
      }
    });
    this.addEventListener("error", (e) => {
      if (this.onerror) {
        this.onerror(e);
      }
    });
    this.addEventListener("close", (e) => {
      if (this.onclose) {
        this.onclose(e);
      }
    });
    this._port = port;
    port.addEventListener("message", this._onMessage.bind(this));
    port.start();
  }
  // Call on the server side of the connection, to tell the client that
  // the connection has been established.
  accept() {
    if (this.readyState !== 0) {
      return;
    }
    this.readyState = 1;
    this._port.postMessage({ type: "open" });
  }
  send(data) {
    if (this.readyState === 0) {
      throw new DOMException(
        "Can't send messages while WebSocket is in CONNECTING state",
        "InvalidStateError"
      );
    }
    if (this.readyState > 1) {
      return;
    }
    this._port.postMessage({ type: "message", value: { data } });
  }
  close(code, reason) {
    if (this.readyState > 1) {
      return;
    }
    this.readyState = 2;
    this._port.postMessage({ type: "close", value: { code, reason } });
    this.readyState = 3;
    this.dispatchEvent(new CloseEvent("close", { code, reason }));
  }
  _onMessage(e) {
    const event = e.data;
    switch (event.type) {
      case "open":
        if (this.readyState === 0) {
          this.readyState = 1;
          this.dispatchEvent(new Event("open"));
          return;
        }
        break;
      case "message":
        if (this.readyState === 1) {
          this.dispatchEvent(new MessageEvent("message", { ...event.value }));
          return;
        }
        break;
      case "close":
        if (this.readyState < 3) {
          this.readyState = 3;
          this.dispatchEvent(new CloseEvent("close", { ...event.value }));
          return;
        }
        break;
    }
    this._reportError(
      `Unexpected event '${event.type}' while in readyState ${this.readyState}`,
      1002
    );
  }
  _reportError(message, code) {
    this.dispatchEvent(new ErrorEvent("error", { message }));
    if (typeof code === "number") {
      this.close(code, message);
    }
  }
};

// src/messageportwebsocket-channel.ts
async function openChannel(path, appName, clientPort, pyodide2) {
  const conn = new MessagePortWebSocket(clientPort);
  const asgiFunc = pyodide2.runPython(
    `_shiny_app_registry["${appName}"].app.call_pyodide`
  );
  await connect2(path, conn, asgiFunc);
}
async function connect2(path, conn, asgiFunc) {
  const scope = {
    type: "websocket",
    asgi: {
      version: "3.0",
      spec_version: "2.1"
    },
    path,
    headers: []
  };
  const fromClientQueue = new AwaitableQueue();
  fromClientQueue.enqueue({ type: "websocket.connect" });
  async function fromClient() {
    return await fromClientQueue.dequeue();
  }
  async function toClient(event) {
    event = Object.fromEntries(event.toJs());
    if (event.type === "websocket.accept") {
      conn.accept();
    } else if (event.type === "websocket.send") {
      conn.send(event.text ?? event.bytes);
    } else if (event.type === "websocket.close") {
      conn.close(event.code, event.reason);
      fromClientQueue.enqueue({ type: "websocket.disconnect" });
    } else {
      conn.close(1002, "ASGI protocol error");
      throw new Error(`Unhandled ASGI event: ${event.type}`);
    }
  }
  conn.addEventListener("message", (e) => {
    const me = e;
    const event = { type: "websocket.receive" };
    if (typeof me.data === "string") {
      event.text = me.data;
    } else {
      event.bytes = me.data;
    }
    fromClientQueue.enqueue(event);
  });
  conn.addEventListener("close", (e) => {
    const ce2 = e;
    fromClientQueue.enqueue({ type: "websocket.disconnect", code: ce2.code });
  });
  conn.addEventListener("error", (e) => {
    console.error(e);
  });
  await asgiFunc(scope, fromClient, toClient);
}

// src/postable-error.ts
function errorToPostableErrorObject(e) {
  const errObj = {
    message: "An unknown error occured",
    name: e.name
  };
  if (!(e instanceof Error)) {
    return errObj;
  }
  errObj.message = e.message;
  if (e.stack) {
    errObj.stack = e.stack;
  }
  return errObj;
}

// src/pyodide/pyodide.js
var StackFrame;
var FIREFOX_SAFARI_STACK_REGEXP;
var CHROME_IE_STACK_REGEXP;
var SAFARI_NATIVE_CODE_REGEXP;
var errorStackParser = { exports: {} };
var stackframe = { exports: {} };
stackframe.exports = function() {
  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  function _getter(p) {
    return function() {
      return this[p];
    };
  }
  var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"], numericProps = ["columnNumber", "lineNumber"], stringProps = ["fileName", "functionName", "source"], arrayProps = ["args"], objectProps = ["evalOrigin"], props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);
  function StackFrame2(obj) {
    if (obj)
      for (var i3 = 0; i3 < props.length; i3++)
        void 0 !== obj[props[i3]] && this["set" + _capitalize(props[i3])](obj[props[i3]]);
  }
  StackFrame2.prototype = { getArgs: function() {
    return this.args;
  }, setArgs: function(v) {
    if ("[object Array]" !== Object.prototype.toString.call(v))
      throw new TypeError("Args must be an Array");
    this.args = v;
  }, getEvalOrigin: function() {
    return this.evalOrigin;
  }, setEvalOrigin: function(v) {
    if (v instanceof StackFrame2)
      this.evalOrigin = v;
    else {
      if (!(v instanceof Object))
        throw new TypeError("Eval Origin must be an Object or StackFrame");
      this.evalOrigin = new StackFrame2(v);
    }
  }, toString: function() {
    var fileName = this.getFileName() || "", lineNumber = this.getLineNumber() || "", columnNumber = this.getColumnNumber() || "", functionName = this.getFunctionName() || "";
    return this.getIsEval() ? fileName ? "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")" : "[eval]:" + lineNumber + ":" + columnNumber : functionName ? functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")" : fileName + ":" + lineNumber + ":" + columnNumber;
  } }, StackFrame2.fromString = function(str) {
    var argsStartIndex = str.indexOf("("), argsEndIndex = str.lastIndexOf(")"), functionName = str.substring(0, argsStartIndex), args = str.substring(argsStartIndex + 1, argsEndIndex).split(","), locationString = str.substring(argsEndIndex + 1);
    if (0 === locationString.indexOf("@"))
      var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, ""), fileName = parts[1], lineNumber = parts[2], columnNumber = parts[3];
    return new StackFrame2({ functionName, args: args || void 0, fileName, lineNumber: lineNumber || void 0, columnNumber: columnNumber || void 0 });
  };
  for (var i2 = 0; i2 < booleanProps.length; i2++)
    StackFrame2.prototype["get" + _capitalize(booleanProps[i2])] = _getter(booleanProps[i2]), StackFrame2.prototype["set" + _capitalize(booleanProps[i2])] = function(p) {
      return function(v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i2]);
  for (var j = 0; j < numericProps.length; j++)
    StackFrame2.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]), StackFrame2.prototype["set" + _capitalize(numericProps[j])] = function(p) {
      return function(v) {
        if (!_isNumber(v))
          throw new TypeError(p + " must be a Number");
        this[p] = Number(v);
      };
    }(numericProps[j]);
  for (var k2 = 0; k2 < stringProps.length; k2++)
    StackFrame2.prototype["get" + _capitalize(stringProps[k2])] = _getter(stringProps[k2]), StackFrame2.prototype["set" + _capitalize(stringProps[k2])] = function(p) {
      return function(v) {
        this[p] = String(v);
      };
    }(stringProps[k2]);
  return StackFrame2;
}();
var ErrorStackParser = errorStackParser.exports = (StackFrame = stackframe.exports, FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/, CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m, SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/, { parse: function(error) {
  if (void 0 !== error.stacktrace || void 0 !== error["opera#sourceloc"])
    return this.parseOpera(error);
  if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP))
    return this.parseV8OrIE(error);
  if (error.stack)
    return this.parseFFOrSafari(error);
  throw new Error("Cannot parse given Error object");
}, extractLocation: function(urlLike) {
  if (-1 === urlLike.indexOf(":"))
    return [urlLike];
  var parts = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(urlLike.replace(/[()]/g, ""));
  return [parts[1], parts[2] || void 0, parts[3] || void 0];
}, parseV8OrIE: function(error) {
  return error.stack.split("\n").filter(function(line) {
    return !!line.match(CHROME_IE_STACK_REGEXP);
  }, this).map(function(line) {
    line.indexOf("(eval ") > -1 && (line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
    var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), location2 = sanitizedLine.match(/ (\(.+\)$)/);
    sanitizedLine = location2 ? sanitizedLine.replace(location2[0], "") : sanitizedLine;
    var locationParts = this.extractLocation(location2 ? location2[1] : sanitizedLine), functionName = location2 && sanitizedLine || void 0, fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
    return new StackFrame({ functionName, fileName, lineNumber: locationParts[1], columnNumber: locationParts[2], source: line });
  }, this);
}, parseFFOrSafari: function(error) {
  return error.stack.split("\n").filter(function(line) {
    return !line.match(SAFARI_NATIVE_CODE_REGEXP);
  }, this).map(function(line) {
    if (line.indexOf(" > eval") > -1 && (line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === line.indexOf("@") && -1 === line.indexOf(":"))
      return new StackFrame({ functionName: line });
    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/, matches = line.match(functionNameRegex), functionName = matches && matches[1] ? matches[1] : void 0, locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
    return new StackFrame({ functionName, fileName: locationParts[0], lineNumber: locationParts[1], columnNumber: locationParts[2], source: line });
  }, this);
}, parseOpera: function(e) {
  return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
}, parseOpera9: function(e) {
  for (var lineRE = /Line (\d+).*script (?:in )?(\S+)/i, lines = e.message.split("\n"), result = [], i2 = 2, len = lines.length; i2 < len; i2 += 2) {
    var match = lineRE.exec(lines[i2]);
    match && result.push(new StackFrame({ fileName: match[2], lineNumber: match[1], source: lines[i2] }));
  }
  return result;
}, parseOpera10: function(e) {
  for (var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, lines = e.stacktrace.split("\n"), result = [], i2 = 0, len = lines.length; i2 < len; i2 += 2) {
    var match = lineRE.exec(lines[i2]);
    match && result.push(new StackFrame({ functionName: match[3] || void 0, fileName: match[2], lineNumber: match[1], source: lines[i2] }));
  }
  return result;
}, parseOpera11: function(error) {
  return error.stack.split("\n").filter(function(line) {
    return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
  }, this).map(function(line) {
    var argsRaw, tokens = line.split("@"), locationParts = this.extractLocation(tokens.pop()), functionCall = tokens.shift() || "", functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
    functionCall.match(/\(([^)]*)\)/) && (argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
    var args = void 0 === argsRaw || "[arguments not available]" === argsRaw ? void 0 : argsRaw.split(",");
    return new StackFrame({ functionName, args, fileName: locationParts[0], lineNumber: locationParts[1], columnNumber: locationParts[2], source: line });
  }, this);
} });
var IN_NODE = "undefined" != typeof process && process.release && "node" === process.release.name && void 0 === process.browser;
var nodeUrlMod;
var nodeFetch;
var nodePath;
var nodeVmMod;
var nodeFsPromisesMod;
var resolvePath;
var pathSep;
var loadBinaryFile;
var loadScript;
if (resolvePath = IN_NODE ? function(path, base) {
  return nodePath.resolve(base || ".", path);
} : function(path, base) {
  return void 0 === base && (base = location), new URL(path, base).toString();
}, IN_NODE || (pathSep = "/"), loadBinaryFile = IN_NODE ? async function(path, _file_sub_resource_hash) {
  if (path.startsWith("file://") && (path = path.slice("file://".length)), path.includes("://")) {
    let response = await nodeFetch(path);
    if (!response.ok)
      throw new Error(`Failed to load '${path}': request failed.`);
    return new Uint8Array(await response.arrayBuffer());
  }
  {
    const data = await nodeFsPromisesMod.readFile(path);
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
} : async function(path, subResourceHash) {
  const url = new URL(path, location);
  let options = subResourceHash ? { integrity: subResourceHash } : {}, response = await fetch(url, options);
  if (!response.ok)
    throw new Error(`Failed to load '${url}': request failed.`);
  return new Uint8Array(await response.arrayBuffer());
}, globalThis.document)
  loadScript = async (url) => await import(
    /* webpackIgnore: true */
    url
  );
else if (globalThis.importScripts)
  loadScript = async (url) => {
    try {
      globalThis.importScripts(url);
    } catch (e) {
      if (!(e instanceof TypeError))
        throw e;
      await import(
        /* webpackIgnore: true */
        url
      );
    }
  };
else {
  if (!IN_NODE)
    throw new Error("Cannot determine runtime environment");
  loadScript = async function(url) {
    url.startsWith("file://") && (url = url.slice("file://".length));
    url.includes("://") ? nodeVmMod.runInThisContext(await (await nodeFetch(url)).text()) : await import(
      /* webpackIgnore: true */
      nodeUrlMod.pathToFileURL(url).href
    );
  };
}
function __values(o) {
  var s = "function" == typeof Symbol && Symbol.iterator, m2 = s && o[s], i2 = 0;
  if (m2)
    return m2.call(o);
  if (o && "number" == typeof o.length)
    return { next: function() {
      return o && i2 >= o.length && (o = void 0), { value: o && o[i2++], done: !o };
    } };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i2, m2 = o[Symbol.asyncIterator];
  return m2 ? m2.call(o) : (o = __values(o), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n) {
    i2[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        (function(resolve2, reject2, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve2({ value: v3, done: d2 });
          }, reject2);
        })(resolve, reject, (v = o[n](v)).done, v.value);
      });
    };
  }
}
var getFsHandles = async (dirHandle) => {
  const handles = [];
  await async function collect(curDirHandle) {
    var e_1, _a;
    try {
      for (var _c, _b = __asyncValues(curDirHandle.values()); !(_c = await _b.next()).done; ) {
        const entry = _c.value;
        handles.push(entry), "directory" === entry.kind && await collect(entry);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        _c && !_c.done && (_a = _b.return) && await _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }(dirHandle);
  const result = /* @__PURE__ */ new Map();
  result.set(".", dirHandle);
  for (const handle of handles) {
    const relativePath = (await dirHandle.resolve(handle)).join("/");
    result.set(relativePath, handle);
  }
  return result;
};
function finalizeBootstrap(API, config) {
  API.runPythonInternal_dict = API._pyodide._base.eval_code("{}"), API.importlib = API.runPythonInternal("import importlib; importlib");
  let import_module = API.importlib.import_module;
  API.sys = import_module("sys"), API.sys.path.insert(0, config.homedir), API.os = import_module("os");
  let globals = API.runPythonInternal("import __main__; __main__.__dict__"), builtins = API.runPythonInternal("import builtins; builtins.__dict__");
  var builtins_dict;
  API.globals = (builtins_dict = builtins, new Proxy(globals, { get: (target, symbol) => "get" === symbol ? (key) => {
    let result = target.get(key);
    return void 0 === result && (result = builtins_dict.get(key)), result;
  } : "has" === symbol ? (key) => target.has(key) || builtins_dict.has(key) : Reflect.get(target, symbol) }));
  let importhook = API._pyodide._importhook;
  importhook.register_js_finder(), importhook.register_js_module("js", config.jsglobals);
  let pyodide2 = API.makePublicAPI();
  return importhook.register_js_module("pyodide_js", pyodide2), API.pyodide_py = import_module("pyodide"), API.pyodide_code = import_module("pyodide.code"), API.pyodide_ffi = import_module("pyodide.ffi"), API.package_loader = import_module("pyodide._package_loader"), API.sitepackages = API.package_loader.SITE_PACKAGES.__str__(), API.dsodir = API.package_loader.DSO_DIR.__str__(), API.defaultLdLibraryPath = [API.dsodir, API.sitepackages], API.os.environ.__setitem__("LD_LIBRARY_PATH", API.defaultLdLibraryPath.join(":")), pyodide2.pyodide_py = API.pyodide_py, pyodide2.globals = API.globals, pyodide2;
}
async function loadPyodide(options = {}) {
  await async function() {
    if (!IN_NODE)
      return;
    if (nodeUrlMod = (await import("url")).default, nodeFsPromisesMod = await import("fs/promises"), nodeFetch = globalThis.fetch ? fetch : (await import("node-fetch")).default, nodeVmMod = (await import("vm")).default, nodePath = await import("path"), pathSep = nodePath.sep, "undefined" != typeof __require)
      return;
    const node_modules = { fs: await import("fs"), crypto: await import("crypto"), ws: await Promise.resolve().then(() => __toESM(require_browser())), child_process: await import("child_process") };
    globalThis.require = function(mod) {
      return node_modules[mod];
    };
  }();
  let indexURL = options.indexURL || function() {
    if ("string" == typeof __dirname)
      return __dirname;
    let err2;
    try {
      throw new Error();
    } catch (e) {
      err2 = e;
    }
    let fileName = ErrorStackParser.parse(err2)[0].fileName;
    const indexOfLastSlash = fileName.lastIndexOf(pathSep);
    if (-1 === indexOfLastSlash)
      throw new Error("Could not extract indexURL path from pyodide module location");
    return fileName.slice(0, indexOfLastSlash);
  }();
  indexURL = resolvePath(indexURL), indexURL.endsWith("/") || (indexURL += "/"), options.indexURL = indexURL;
  const default_config = { fullStdLib: false, jsglobals: globalThis, stdin: globalThis.prompt ? globalThis.prompt : void 0, homedir: "/home/pyodide", lockFileURL: indexURL + "repodata.json", args: [], _node_mounts: [] }, config = Object.assign(default_config, options), pyodide_py_tar_promise = loadBinaryFile(config.indexURL + "pyodide_py.tar"), Module2 = function() {
    let Module3 = { noImageDecoding: true, noAudioDecoding: true, noWasmDecoding: false, preRun: [], quit: (status, toThrow) => {
      throw Module3.exited = { status, toThrow }, toThrow;
    } };
    return Module3;
  }();
  Module2.print = config.stdout, Module2.printErr = config.stderr, Module2.preRun.push(() => {
    for (const mount of config._node_mounts)
      Module2.FS.mkdirTree(mount), Module2.FS.mount(Module2.NODEFS, { root: mount }, mount);
  }), Module2.arguments = config.args;
  const API = { config };
  Module2.API = API, function(Module3, path) {
    Module3.preRun.push(function() {
      try {
        Module3.FS.mkdirTree(path);
      } catch (e) {
        console.error(`Error occurred while making a home directory '${path}':`), console.error(e), console.error("Using '/' for a home directory instead"), path = "/";
      }
      Module3.ENV.HOME = path, Module3.FS.chdir(path);
    });
  }(Module2, config.homedir);
  const moduleLoaded = new Promise((r) => Module2.postRun = r);
  if (Module2.locateFile = (path) => config.indexURL + path, "function" != typeof _createPyodideModule) {
    const scriptSrc = `${config.indexURL}pyodide.asm.js`;
    await loadScript(scriptSrc);
  }
  if (await _createPyodideModule(Module2), await moduleLoaded, Module2.exited)
    throw Module2.exited.toThrow;
  if ("0.22.1" !== API.version)
    throw new Error(`Pyodide version does not match: '0.22.1' <==> '${API.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);
  Module2.locateFile = (path) => {
    throw new Error("Didn't expect to load any more file_packager files!");
  }, function(module) {
    const FS = module.FS, MEMFS = module.FS.filesystems.MEMFS, PATH = module.PATH, nativeFSAsync = { DIR_MODE: 16895, FILE_MODE: 33279, mount: function(mount) {
      if (!mount.opts.fileSystemHandle)
        throw new Error("opts.fileSystemHandle is required");
      return MEMFS.mount.apply(null, arguments);
    }, syncfs: async (mount, populate, callback) => {
      try {
        const local = nativeFSAsync.getLocalSet(mount), remote = await nativeFSAsync.getRemoteSet(mount), src = populate ? remote : local, dst = populate ? local : remote;
        await nativeFSAsync.reconcile(mount, src, dst), callback(null);
      } catch (e) {
        callback(e);
      }
    }, getLocalSet: (mount) => {
      let entries = /* @__PURE__ */ Object.create(null);
      function isRealDir(p) {
        return "." !== p && ".." !== p;
      }
      function toAbsolute(root) {
        return (p) => PATH.join2(root, p);
      }
      let check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
      for (; check.length; ) {
        let path = check.pop(), stat = FS.stat(path);
        FS.isDir(stat.mode) && check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path))), entries[path] = { timestamp: stat.mtime, mode: stat.mode };
      }
      return { type: "local", entries };
    }, getRemoteSet: async (mount) => {
      const entries = /* @__PURE__ */ Object.create(null), handles = await getFsHandles(mount.opts.fileSystemHandle);
      for (const [path, handle] of handles)
        "." !== path && (entries[PATH.join2(mount.mountpoint, path)] = { timestamp: "file" === handle.kind ? (await handle.getFile()).lastModifiedDate : /* @__PURE__ */ new Date(), mode: "file" === handle.kind ? nativeFSAsync.FILE_MODE : nativeFSAsync.DIR_MODE });
      return { type: "remote", entries, handles };
    }, loadLocalEntry: (path) => {
      const node = FS.lookupPath(path).node, stat = FS.stat(path);
      if (FS.isDir(stat.mode))
        return { timestamp: stat.mtime, mode: stat.mode };
      if (FS.isFile(stat.mode))
        return node.contents = MEMFS.getFileDataAsTypedArray(node), { timestamp: stat.mtime, mode: stat.mode, contents: node.contents };
      throw new Error("node type not supported");
    }, storeLocalEntry: (path, entry) => {
      if (FS.isDir(entry.mode))
        FS.mkdirTree(path, entry.mode);
      else {
        if (!FS.isFile(entry.mode))
          throw new Error("node type not supported");
        FS.writeFile(path, entry.contents, { canOwn: true });
      }
      FS.chmod(path, entry.mode), FS.utime(path, entry.timestamp, entry.timestamp);
    }, removeLocalEntry: (path) => {
      var stat = FS.stat(path);
      FS.isDir(stat.mode) ? FS.rmdir(path) : FS.isFile(stat.mode) && FS.unlink(path);
    }, loadRemoteEntry: async (handle) => {
      if ("file" === handle.kind) {
        const file = await handle.getFile();
        return { contents: new Uint8Array(await file.arrayBuffer()), mode: nativeFSAsync.FILE_MODE, timestamp: file.lastModifiedDate };
      }
      if ("directory" === handle.kind)
        return { mode: nativeFSAsync.DIR_MODE, timestamp: /* @__PURE__ */ new Date() };
      throw new Error("unknown kind: " + handle.kind);
    }, storeRemoteEntry: async (handles, path, entry) => {
      const parentDirHandle = handles.get(PATH.dirname(path)), handle = FS.isFile(entry.mode) ? await parentDirHandle.getFileHandle(PATH.basename(path), { create: true }) : await parentDirHandle.getDirectoryHandle(PATH.basename(path), { create: true });
      if ("file" === handle.kind) {
        const writable = await handle.createWritable();
        await writable.write(entry.contents), await writable.close();
      }
      handles.set(path, handle);
    }, removeRemoteEntry: async (handles, path) => {
      const parentDirHandle = handles.get(PATH.dirname(path));
      await parentDirHandle.removeEntry(PATH.basename(path)), handles.delete(path);
    }, reconcile: async (mount, src, dst) => {
      let total = 0;
      const create = [];
      Object.keys(src.entries).forEach(function(key) {
        const e = src.entries[key], e2 = dst.entries[key];
        (!e2 || FS.isFile(e.mode) && e.timestamp.getTime() > e2.timestamp.getTime()) && (create.push(key), total++);
      }), create.sort();
      const remove = [];
      if (Object.keys(dst.entries).forEach(function(key) {
        src.entries[key] || (remove.push(key), total++);
      }), remove.sort().reverse(), !total)
        return;
      const handles = "remote" === src.type ? src.handles : dst.handles;
      for (const path of create) {
        const relPath = PATH.normalize(path.replace(mount.mountpoint, "/")).substring(1);
        if ("local" === dst.type) {
          const handle = handles.get(relPath), entry = await nativeFSAsync.loadRemoteEntry(handle);
          nativeFSAsync.storeLocalEntry(path, entry);
        } else {
          const entry = nativeFSAsync.loadLocalEntry(path);
          await nativeFSAsync.storeRemoteEntry(handles, relPath, entry);
        }
      }
      for (const path of remove)
        if ("local" === dst.type)
          nativeFSAsync.removeLocalEntry(path);
        else {
          const relPath = PATH.normalize(path.replace(mount.mountpoint, "/")).substring(1);
          await nativeFSAsync.removeRemoteEntry(handles, relPath);
        }
    } };
    module.FS.filesystems.NATIVEFS_ASYNC = nativeFSAsync;
  }(Module2);
  const pyodide_py_tar = await pyodide_py_tar_promise;
  !function(Module3, pyodide_py_tar2) {
    let stream = Module3.FS.open("/pyodide_py.tar", "w");
    Module3.FS.write(stream, pyodide_py_tar2, 0, pyodide_py_tar2.byteLength, void 0, true), Module3.FS.close(stream);
    let [errcode, captured_stderr2] = Module3.API.rawRun('\nfrom sys import version_info\npyversion = f"python{version_info.major}.{version_info.minor}"\nimport shutil\nshutil.unpack_archive("/pyodide_py.tar", f"/lib/{pyversion}/")\ndel shutil\nimport importlib\nimportlib.invalidate_caches()\ndel importlib\n');
    errcode && Module3.API.fatal_loading_error("Failed to unpack standard library.\n", captured_stderr2), Module3.FS.unlink("/pyodide_py.tar");
  }(Module2, pyodide_py_tar);
  let [err, captured_stderr] = API.rawRun("import _pyodide_core");
  err && Module2.API.fatal_loading_error("Failed to import _pyodide_core\n", captured_stderr);
  const pyodide2 = finalizeBootstrap(API, config);
  if (pyodide2.version.includes("dev") || API.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${pyodide2.version}/full/`), await API.packageIndexReady, API._pyodide._importhook.register_module_not_found_hook(API._import_name_to_package_name), "0.22.1" !== API.repodata_info.version)
    throw new Error("Lock file version doesn't match Pyodide version");
  return API.package_loader.init_loaded_packages(), config.fullStdLib && await pyodide2.loadPackage(API._pyodide._importhook.UNVENDORED_STDLIBS), API.initializeStreams(config.stdin, config.stdout, config.stderr), pyodide2;
}

// src/pyodide-proxy.ts
async function setupPythonEnv(pyodide2, callJS2) {
  const repr = pyodide2.globals.get("repr");
  pyodide2.globals.set("js_pyodide", pyodide2);
  const pyconsole = await pyodide2.runPythonAsync(`
  import pyodide.console
  import __main__
  pyodide.console.PyodideConsole(__main__.__dict__)
  `);
  const tabComplete = pyconsole.complete.copy();
  pyconsole.destroy();
  if (callJS2) {
    pyodide2.globals.set("callJS", callJS2);
  }
  const shortFormatLastTraceback = await pyodide2.runPythonAsync(`
  def _short_format_last_traceback() -> str:
      import sys
      import traceback
      e = sys.last_value
      found_marker = False
      nframes = 0
      for (frame, _) in traceback.walk_tb(e.__traceback__):
          if frame.f_code.co_filename in ("<console>", "<exec>"):
              found_marker = True
          if found_marker:
              nframes += 1
      return "".join(traceback.format_exception(type(e), e, e.__traceback__, -nframes))

  _short_format_last_traceback
  `);
  await pyodide2.runPythonAsync(`del _short_format_last_traceback`);
  return {
    repr,
    tabComplete,
    shortFormatLastTraceback
  };
}
function processReturnValue(value, returnResult = "none", pyodide2, repr) {
  const possibleReturnValues = {
    get value() {
      if (pyodide2.isPyProxy(value)) {
        return value.toJs();
      } else {
        return value;
      }
    },
    get printed_value() {
      return repr(value);
    },
    get to_html() {
      let toHtml;
      try {
        toHtml = pyodide2.globals.get("_to_html");
      } catch (e) {
        console.error("Couldn't find _to_html function: ", e);
        toHtml = (x2) => ({
          type: "text",
          value: "Couldn't finding _to_html function."
        });
      }
      const val = toHtml(value).toJs({
        dict_converter: Object.fromEntries
      });
      return val;
    },
    get none() {
      return void 0;
    }
  };
  return possibleReturnValues[returnResult];
}

// src/pyodide-worker.ts
var pyodideStatus = "none";
var pyodide;
self.stdout_callback = function(s) {
  self.postMessage({ type: "nonreply", subtype: "output", stdout: s });
};
self.stderr_callback = function(s) {
  self.postMessage({ type: "nonreply", subtype: "output", stderr: s });
};
async function callJS(fnName, args) {
  self.postMessage({
    type: "nonreply",
    subtype: "callJS",
    fnName: fnName.toJs(),
    args: args.toJs()
  });
}
var pyUtils;
self.onmessage = async function(e) {
  const msg = e.data;
  if (msg.type === "openChannel") {
    const clientPort = e.ports[0];
    await openChannel(msg.path, msg.appName, clientPort, pyodide);
    return;
  } else if (msg.type === "makeRequest") {
    const clientPort = e.ports[0];
    await makeRequest(msg.scope, msg.appName, clientPort, pyodide);
    return;
  }
  const messagePort = e.ports[0];
  try {
    if (msg.type === "init") {
      if (pyodideStatus === "none") {
        pyodideStatus = "loading";
        pyodide = await loadPyodide({
          ...msg.config,
          stdout: self.stdout_callback,
          stderr: self.stderr_callback
        });
        pyUtils = await setupPythonEnv(pyodide, callJS);
        pyodideStatus = "loaded";
      }
      messagePort.postMessage({ type: "reply", subtype: "done" });
    } else if (msg.type === "loadPackagesFromImports") {
      await pyodide.loadPackagesFromImports(msg.code);
    } else if (msg.type === "runPythonAsync") {
      await pyodide.loadPackagesFromImports(msg.code);
      const result = await pyodide.runPythonAsync(
        msg.code
      );
      if (msg.printResult && result !== void 0) {
        self.stdout_callback(pyUtils.repr(result));
      }
      try {
        const processedResult = processReturnValue(
          result,
          msg.returnResult,
          pyodide,
          pyUtils.repr
        );
        messagePort.postMessage({
          type: "reply",
          subtype: "done",
          value: processedResult
        });
      } finally {
        if (pyodide.isPyProxy(result)) {
          result.destroy();
        }
      }
    } else if (msg.type === "tabComplete") {
      const completions = pyUtils.tabComplete(msg.code).toJs()[0];
      messagePort.postMessage({
        type: "reply",
        subtype: "tabCompletions",
        completions
      });
    } else if (msg.type === "callPyAsync") {
      const { fnName, args, kwargs } = msg;
      let fn = pyodide.globals.get(fnName[0]);
      for (const el of fnName.slice(1)) {
        fn = fn[el];
      }
      const resultMaybePromise = fn.callKwargs(...args, kwargs);
      const result = await Promise.resolve(resultMaybePromise);
      if (msg.printResult && result !== void 0) {
        self.stdout_callback(pyUtils.repr(result));
      }
      try {
        const processedResult = processReturnValue(
          result,
          msg.returnResult,
          pyodide,
          pyUtils.repr
        );
        messagePort.postMessage({
          type: "reply",
          subtype: "done",
          value: processedResult
        });
      } finally {
        if (pyodide.isPyProxy(result)) {
          result.destroy();
        }
      }
    } else {
      messagePort.postMessage({
        type: "reply",
        subtype: "done",
        error: new Error(`Unknown message type: ${msg.toString()}`)
      });
    }
  } catch (e2) {
    if (e2 instanceof pyodide.PythonError) {
      e2.message = pyUtils.shortFormatLastTraceback();
    }
    messagePort.postMessage({
      type: "reply",
      subtype: "done",
      error: errorToPostableErrorObject(e2)
    });
  }
};
