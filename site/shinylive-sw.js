// Shinylive 0.2.0
// Copyright 2023 RStudio, PBC
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});

// src/assets/shinylive-inject-socket.txt
var shinylive_inject_socket_default = '// src/messageportwebsocket.ts\nvar MessagePortWebSocket = class extends EventTarget {\n  constructor(port) {\n    super();\n    this.readyState = 0;\n    this.addEventListener("open", (e) => {\n      if (this.onopen) {\n        this.onopen(e);\n      }\n    });\n    this.addEventListener("message", (e) => {\n      if (this.onmessage) {\n        this.onmessage(e);\n      }\n    });\n    this.addEventListener("error", (e) => {\n      if (this.onerror) {\n        this.onerror(e);\n      }\n    });\n    this.addEventListener("close", (e) => {\n      if (this.onclose) {\n        this.onclose(e);\n      }\n    });\n    this._port = port;\n    port.addEventListener("message", this._onMessage.bind(this));\n    port.start();\n  }\n  // Call on the server side of the connection, to tell the client that\n  // the connection has been established.\n  accept() {\n    if (this.readyState !== 0) {\n      return;\n    }\n    this.readyState = 1;\n    this._port.postMessage({ type: "open" });\n  }\n  send(data) {\n    if (this.readyState === 0) {\n      throw new DOMException(\n        "Can\'t send messages while WebSocket is in CONNECTING state",\n        "InvalidStateError"\n      );\n    }\n    if (this.readyState > 1) {\n      return;\n    }\n    this._port.postMessage({ type: "message", value: { data } });\n  }\n  close(code, reason) {\n    if (this.readyState > 1) {\n      return;\n    }\n    this.readyState = 2;\n    this._port.postMessage({ type: "close", value: { code, reason } });\n    this.readyState = 3;\n    this.dispatchEvent(new CloseEvent("close", { code, reason }));\n  }\n  _onMessage(e) {\n    const event = e.data;\n    switch (event.type) {\n      case "open":\n        if (this.readyState === 0) {\n          this.readyState = 1;\n          this.dispatchEvent(new Event("open"));\n          return;\n        }\n        break;\n      case "message":\n        if (this.readyState === 1) {\n          this.dispatchEvent(new MessageEvent("message", { ...event.value }));\n          return;\n        }\n        break;\n      case "close":\n        if (this.readyState < 3) {\n          this.readyState = 3;\n          this.dispatchEvent(new CloseEvent("close", { ...event.value }));\n          return;\n        }\n        break;\n    }\n    this._reportError(\n      `Unexpected event \'${event.type}\' while in readyState ${this.readyState}`,\n      1002\n    );\n  }\n  _reportError(message, code) {\n    this.dispatchEvent(new ErrorEvent("error", { message }));\n    if (typeof code === "number") {\n      this.close(code, message);\n    }\n  }\n};\n\n// src/shinylive-inject-socket.ts\nwindow.Shiny.createSocket = function() {\n  const channel = new MessageChannel();\n  window.parent.postMessage(\n    {\n      type: "openChannel",\n      // Infer app name from path: "/foo/app_abc123/"" => "app_abc123"\n      appName: window.location.pathname.replace(\n        new RegExp(".*/([^/]+)/$"),\n        "$1"\n      ),\n      path: "/websocket/"\n    },\n    "*",\n    [channel.port2]\n  );\n  return new MessagePortWebSocket(channel.port1);\n};\n';

// src/utils.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function dirname(path) {
  if (path === "/" || path === "") {
    return "";
  }
  return path.replace(/[/]?[^/]+[/]?$/, "");
}
function uint8ArrayToString(buf) {
  let result = "";
  for (let i2 = 0; i2 < buf.length; i2++) {
    result += String.fromCharCode(buf[i2]);
  }
  return result;
}

// node_modules/webr/dist/webr.mjs
var Gs = Object.create;
var $r = Object.defineProperty;
var Ks = Object.getOwnPropertyDescriptor;
var Qs = Object.getOwnPropertyNames;
var Zs = Object.getPrototypeOf;
var Ys = Object.prototype.hasOwnProperty;
var U = ((r) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(r, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : r)(function(r) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});
var _ = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var en = (r, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of Qs(e))
      !Ys.call(r, n) && n !== t && $r(r, n, { get: () => e[n], enumerable: !(s = Ks(e, n)) || s.enumerable });
  return r;
};
var re = (r, e, t) => (t = r != null ? Gs(Zs(r)) : {}, en(e || !r || !r.__esModule ? $r(t, "default", { value: r, enumerable: true }) : t, r));
var pr = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var i = (r, e, t) => (pr(r, e, "read from private field"), t ? t.call(r) : e.get(r));
var u = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
};
var d = (r, e, t, s) => (pr(r, e, "write to private field"), s ? s.call(r, t) : e.set(r, t), t);
var x = (r, e, t) => (pr(r, e, "access private method"), t);
var Ae = _((I) => {
  "use strict";
  Object.defineProperty(I, "__esModule", { value: true });
  I.getUint64 = I.getInt64 = I.setInt64 = I.setUint64 = I.UINT32_MAX = void 0;
  I.UINT32_MAX = 4294967295;
  function sn(r, e, t) {
    let s = t / 4294967296, n = t;
    r.setUint32(e, s), r.setUint32(e + 4, n);
  }
  I.setUint64 = sn;
  function nn(r, e, t) {
    let s = Math.floor(t / 4294967296), n = t;
    r.setUint32(e, s), r.setUint32(e + 4, n);
  }
  I.setInt64 = nn;
  function on(r, e) {
    let t = r.getInt32(e), s = r.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  I.getInt64 = on;
  function an(r, e) {
    let t = r.getUint32(e), s = r.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  I.getUint64 = an;
});
var gt = _((S) => {
  "use strict";
  var hr, yr, fr;
  Object.defineProperty(S, "__esModule", { value: true });
  S.utf8DecodeTD = S.TEXT_DECODER_THRESHOLD = S.utf8DecodeJs = S.utf8EncodeTE = S.TEXT_ENCODER_THRESHOLD = S.utf8EncodeJs = S.utf8Count = void 0;
  var Zr = Ae(), mt = (typeof process > "u" || ((hr = process == null ? void 0 : process.env) === null || hr === void 0 ? void 0 : hr.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
  function ln(r) {
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
  S.utf8Count = ln;
  function cn(r, e, t) {
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
  S.utf8EncodeJs = cn;
  var Oe = mt ? new TextEncoder() : void 0;
  S.TEXT_ENCODER_THRESHOLD = mt ? typeof process < "u" && ((yr = process == null ? void 0 : process.env) === null || yr === void 0 ? void 0 : yr.TEXT_ENCODING) !== "force" ? 200 : 0 : Zr.UINT32_MAX;
  function un(r, e, t) {
    e.set(Oe.encode(r), t);
  }
  function pn(r, e, t) {
    Oe.encodeInto(r, e.subarray(t));
  }
  S.utf8EncodeTE = Oe != null && Oe.encodeInto ? pn : un;
  var dn = 4096;
  function hn(r, e, t) {
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
        let p = r[s++] & 63, v = r[s++] & 63, te = r[s++] & 63, z = (c & 7) << 18 | p << 12 | v << 6 | te;
        z > 65535 && (z -= 65536, o.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), o.push(z);
      } else
        o.push(c);
      o.length >= dn && (a += String.fromCharCode(...o), o.length = 0);
    }
    return o.length > 0 && (a += String.fromCharCode(...o)), a;
  }
  S.utf8DecodeJs = hn;
  var yn = mt ? new TextDecoder() : null;
  S.TEXT_DECODER_THRESHOLD = mt ? typeof process < "u" && ((fr = process == null ? void 0 : process.env) === null || fr === void 0 ? void 0 : fr.TEXT_DECODER) !== "force" ? 200 : 0 : Zr.UINT32_MAX;
  function fn(r, e, t) {
    let s = r.subarray(e, e + t);
    return yn.decode(s);
  }
  S.utf8DecodeTD = fn;
});
var mr = _((bt) => {
  "use strict";
  Object.defineProperty(bt, "__esModule", { value: true });
  bt.ExtData = void 0;
  var Rr = class {
    constructor(e, t) {
      this.type = e, this.data = t;
    }
  };
  bt.ExtData = Rr;
});
var xt = _((wt) => {
  "use strict";
  Object.defineProperty(wt, "__esModule", { value: true });
  wt.DecodeError = void 0;
  var he = class extends Error {
    constructor(e) {
      super(e);
      let t = Object.create(he.prototype);
      Object.setPrototypeOf(this, t), Object.defineProperty(this, "name", { configurable: true, enumerable: false, value: he.name });
    }
  };
  wt.DecodeError = he;
});
var gr = _((T) => {
  "use strict";
  Object.defineProperty(T, "__esModule", { value: true });
  T.timestampExtension = T.decodeTimestampExtension = T.decodeTimestampToTimeSpec = T.encodeTimestampExtension = T.encodeDateToTimeSpec = T.encodeTimeSpecToTimestamp = T.EXT_TIMESTAMP = void 0;
  var Rn = xt(), Yr = Ae();
  T.EXT_TIMESTAMP = -1;
  var mn = 4294967296 - 1, gn = 17179869184 - 1;
  function es({ sec: r, nsec: e }) {
    if (r >= 0 && e >= 0 && r <= gn)
      if (e === 0 && r <= mn) {
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, r), t;
      } else {
        let t = r / 4294967296, s = r & 4294967295, n = new Uint8Array(8), o = new DataView(n.buffer);
        return o.setUint32(0, e << 2 | t & 3), o.setUint32(4, s), n;
      }
    else {
      let t = new Uint8Array(12), s = new DataView(t.buffer);
      return s.setUint32(0, e), (0, Yr.setInt64)(s, 4, r), t;
    }
  }
  T.encodeTimeSpecToTimestamp = es;
  function ts(r) {
    let e = r.getTime(), t = Math.floor(e / 1e3), s = (e - t * 1e3) * 1e6, n = Math.floor(s / 1e9);
    return { sec: t + n, nsec: s - n * 1e9 };
  }
  T.encodeDateToTimeSpec = ts;
  function rs(r) {
    if (r instanceof Date) {
      let e = ts(r);
      return es(e);
    } else
      return null;
  }
  T.encodeTimestampExtension = rs;
  function ss(r) {
    let e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    switch (r.byteLength) {
      case 4:
        return { sec: e.getUint32(0), nsec: 0 };
      case 8: {
        let t = e.getUint32(0), s = e.getUint32(4), n = (t & 3) * 4294967296 + s, o = t >>> 2;
        return { sec: n, nsec: o };
      }
      case 12: {
        let t = (0, Yr.getInt64)(e, 4), s = e.getUint32(0);
        return { sec: t, nsec: s };
      }
      default:
        throw new Rn.DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${r.length}`);
    }
  }
  T.decodeTimestampToTimeSpec = ss;
  function ns(r) {
    let e = ss(r);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  T.decodeTimestampExtension = ns;
  T.timestampExtension = { type: T.EXT_TIMESTAMP, encode: rs, decode: ns };
});
var Pt = _((Et) => {
  "use strict";
  Object.defineProperty(Et, "__esModule", { value: true });
  Et.ExtensionCodec = void 0;
  var vt = mr(), bn = gr(), Ie = class {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(bn.timestampExtension);
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
            return new vt.ExtData(a, o);
          }
        }
      }
      for (let s = 0; s < this.encoders.length; s++) {
        let n = this.encoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = s;
            return new vt.ExtData(a, o);
          }
        }
      }
      return e instanceof vt.ExtData ? e : null;
    }
    decode(e, t, s) {
      let n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return n ? n(e, t, s) : new vt.ExtData(t, e);
    }
  };
  Et.ExtensionCodec = Ie;
  Ie.defaultCodec = new Ie();
});
var br = _((ye) => {
  "use strict";
  Object.defineProperty(ye, "__esModule", { value: true });
  ye.createDataView = ye.ensureUint8Array = void 0;
  function os(r) {
    return r instanceof Uint8Array ? r : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r instanceof ArrayBuffer ? new Uint8Array(r) : Uint8Array.from(r);
  }
  ye.ensureUint8Array = os;
  function wn(r) {
    if (r instanceof ArrayBuffer)
      return new DataView(r);
    let e = os(r);
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  ye.createDataView = wn;
});
var xr = _((N) => {
  "use strict";
  Object.defineProperty(N, "__esModule", { value: true });
  N.Encoder = N.DEFAULT_INITIAL_BUFFER_SIZE = N.DEFAULT_MAX_DEPTH = void 0;
  var Ue = gt(), xn = Pt(), is = Ae(), vn = br();
  N.DEFAULT_MAX_DEPTH = 100;
  N.DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var wr = class {
    constructor(e = xn.ExtensionCodec.defaultCodec, t = void 0, s = N.DEFAULT_MAX_DEPTH, n = N.DEFAULT_INITIAL_BUFFER_SIZE, o = false, a = false, c = false, p = false) {
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
      let s = (0, vn.ensureUint8Array)(e);
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
      this.ensureBufferSizeToWrite(8), (0, is.setUint64)(this.view, this.pos, e), this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8), (0, is.setInt64)(this.view, this.pos, e), this.pos += 8;
    }
  };
  N.Encoder = wr;
});
var as = _((Tt) => {
  "use strict";
  Object.defineProperty(Tt, "__esModule", { value: true });
  Tt.encode = void 0;
  var En = xr(), Pn = {};
  function Tn(r, e = Pn) {
    return new En.Encoder(e.extensionCodec, e.context, e.maxDepth, e.initialBufferSize, e.sortKeys, e.forceFloat32, e.ignoreUndefined, e.forceIntegerToFloat).encodeSharedRef(r);
  }
  Tt.encode = Tn;
});
var ls = _((_t) => {
  "use strict";
  Object.defineProperty(_t, "__esModule", { value: true });
  _t.prettyByte = void 0;
  function _n(r) {
    return `${r < 0 ? "-" : ""}0x${Math.abs(r).toString(16).padStart(2, "0")}`;
  }
  _t.prettyByte = _n;
});
var cs = _((St) => {
  "use strict";
  Object.defineProperty(St, "__esModule", { value: true });
  St.CachedKeyDecoder = void 0;
  var Sn = gt(), Mn = 16, kn = 16, vr = class {
    constructor(e = Mn, t = kn) {
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
      let o = (0, Sn.utf8DecodeJs)(e, t, s), a = Uint8Array.prototype.slice.call(e, t, t + s);
      return this.store(a, o), o;
    }
  };
  St.CachedKeyDecoder = vr;
});
var Mt = _((J) => {
  "use strict";
  Object.defineProperty(J, "__esModule", { value: true });
  J.Decoder = J.DataViewIndexOutOfBoundsError = void 0;
  var Er = ls(), Dn = Pt(), se = Ae(), Pr = gt(), Tr = br(), Wn = cs(), H = xt(), An = (r) => {
    let e = typeof r;
    return e === "string" || e === "number";
  }, Ce = -1, Sr = new DataView(new ArrayBuffer(0)), On = new Uint8Array(Sr.buffer);
  J.DataViewIndexOutOfBoundsError = (() => {
    try {
      Sr.getInt8(0);
    } catch (r) {
      return r.constructor;
    }
    throw new Error("never reached");
  })();
  var us = new J.DataViewIndexOutOfBoundsError("Insufficient data"), In = new Wn.CachedKeyDecoder(), _r = class {
    constructor(e = Dn.ExtensionCodec.defaultCodec, t = void 0, s = se.UINT32_MAX, n = se.UINT32_MAX, o = se.UINT32_MAX, a = se.UINT32_MAX, c = se.UINT32_MAX, p = In) {
      this.extensionCodec = e, this.context = t, this.maxStrLength = s, this.maxBinLength = n, this.maxArrayLength = o, this.maxMapLength = a, this.maxExtLength = c, this.keyDecoder = p, this.totalPos = 0, this.pos = 0, this.view = Sr, this.bytes = On, this.headByte = Ce, this.stack = [];
    }
    reinitializeState() {
      this.totalPos = 0, this.headByte = Ce, this.stack.length = 0;
    }
    setBuffer(e) {
      this.bytes = (0, Tr.ensureUint8Array)(e), this.view = (0, Tr.createDataView)(this.bytes), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === Ce && !this.hasRemaining(1))
        this.setBuffer(e);
      else {
        let t = this.bytes.subarray(this.pos), s = (0, Tr.ensureUint8Array)(e), n = new Uint8Array(t.length + s.length);
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
      throw new RangeError(`Insufficient data in parsing ${(0, Er.prettyByte)(n)} at ${a} (${o} in the current buffer)`);
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
            throw new H.DecodeError(`Unrecognized type byte: ${(0, Er.prettyByte)(e)}`);
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
              if (!An(t))
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
          throw new H.DecodeError(`Unrecognized array type byte: ${(0, Er.prettyByte)(e)}`);
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
        throw us;
      let n = this.pos + t, o;
      return this.stateIsMapKey() && (!((s = this.keyDecoder) === null || s === void 0) && s.canBeCached(e)) ? o = this.keyDecoder.decode(this.bytes, n, e) : e > Pr.TEXT_DECODER_THRESHOLD ? o = (0, Pr.utf8DecodeTD)(this.bytes, n, e) : o = (0, Pr.utf8DecodeJs)(this.bytes, n, e), this.pos += t + e, o;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack[this.stack.length - 1].type === 1 : false;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength)
        throw new H.DecodeError(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + t))
        throw us;
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
      let e = (0, se.getUint64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      let e = (0, se.getInt64)(this.view, this.pos);
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
  J.Decoder = _r;
});
var Mr = _((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: true });
  L.decodeMulti = L.decode = L.defaultDecodeOptions = void 0;
  var ps = Mt();
  L.defaultDecodeOptions = {};
  function Un(r, e = L.defaultDecodeOptions) {
    return new ps.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decode(r);
  }
  L.decode = Un;
  function Cn(r, e = L.defaultDecodeOptions) {
    return new ps.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeMulti(r);
  }
  L.decodeMulti = Cn;
});
var ys = _((G) => {
  "use strict";
  Object.defineProperty(G, "__esModule", { value: true });
  G.ensureAsyncIterable = G.asyncIterableFromStream = G.isAsyncIterable = void 0;
  function ds(r) {
    return r[Symbol.asyncIterator] != null;
  }
  G.isAsyncIterable = ds;
  function Nn(r) {
    if (r == null)
      throw new Error("Assertion Failure: value must not be null nor undefined");
  }
  async function* hs(r) {
    let e = r.getReader();
    try {
      for (; ; ) {
        let { done: t, value: s } = await e.read();
        if (t)
          return;
        Nn(s), yield s;
      }
    } finally {
      e.releaseLock();
    }
  }
  G.asyncIterableFromStream = hs;
  function Ln(r) {
    return ds(r) ? r : hs(r);
  }
  G.ensureAsyncIterable = Ln;
});
var Rs = _((j) => {
  "use strict";
  Object.defineProperty(j, "__esModule", { value: true });
  j.decodeStream = j.decodeMultiStream = j.decodeArrayStream = j.decodeAsync = void 0;
  var kr = Mt(), Dr = ys(), kt = Mr();
  async function jn(r, e = kt.defaultDecodeOptions) {
    let t = (0, Dr.ensureAsyncIterable)(r);
    return new kr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeAsync(t);
  }
  j.decodeAsync = jn;
  function Bn(r, e = kt.defaultDecodeOptions) {
    let t = (0, Dr.ensureAsyncIterable)(r);
    return new kr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(t);
  }
  j.decodeArrayStream = Bn;
  function fs(r, e = kt.defaultDecodeOptions) {
    let t = (0, Dr.ensureAsyncIterable)(r);
    return new kr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(t);
  }
  j.decodeMultiStream = fs;
  function Fn(r, e = kt.defaultDecodeOptions) {
    return fs(r, e);
  }
  j.decodeStream = Fn;
});
var Wt = _((h) => {
  "use strict";
  Object.defineProperty(h, "__esModule", { value: true });
  h.decodeTimestampExtension = h.encodeTimestampExtension = h.decodeTimestampToTimeSpec = h.encodeTimeSpecToTimestamp = h.encodeDateToTimeSpec = h.EXT_TIMESTAMP = h.ExtData = h.ExtensionCodec = h.Encoder = h.DataViewIndexOutOfBoundsError = h.DecodeError = h.Decoder = h.decodeStream = h.decodeMultiStream = h.decodeArrayStream = h.decodeAsync = h.decodeMulti = h.decode = h.encode = void 0;
  var qn = as();
  Object.defineProperty(h, "encode", { enumerable: true, get: function() {
    return qn.encode;
  } });
  var ms = Mr();
  Object.defineProperty(h, "decode", { enumerable: true, get: function() {
    return ms.decode;
  } });
  Object.defineProperty(h, "decodeMulti", { enumerable: true, get: function() {
    return ms.decodeMulti;
  } });
  var Dt = Rs();
  Object.defineProperty(h, "decodeAsync", { enumerable: true, get: function() {
    return Dt.decodeAsync;
  } });
  Object.defineProperty(h, "decodeArrayStream", { enumerable: true, get: function() {
    return Dt.decodeArrayStream;
  } });
  Object.defineProperty(h, "decodeMultiStream", { enumerable: true, get: function() {
    return Dt.decodeMultiStream;
  } });
  Object.defineProperty(h, "decodeStream", { enumerable: true, get: function() {
    return Dt.decodeStream;
  } });
  var gs = Mt();
  Object.defineProperty(h, "Decoder", { enumerable: true, get: function() {
    return gs.Decoder;
  } });
  Object.defineProperty(h, "DataViewIndexOutOfBoundsError", { enumerable: true, get: function() {
    return gs.DataViewIndexOutOfBoundsError;
  } });
  var Vn = xt();
  Object.defineProperty(h, "DecodeError", { enumerable: true, get: function() {
    return Vn.DecodeError;
  } });
  var Hn = xr();
  Object.defineProperty(h, "Encoder", { enumerable: true, get: function() {
    return Hn.Encoder;
  } });
  var Jn = Pt();
  Object.defineProperty(h, "ExtensionCodec", { enumerable: true, get: function() {
    return Jn.ExtensionCodec;
  } });
  var zn = mr();
  Object.defineProperty(h, "ExtData", { enumerable: true, get: function() {
    return zn.ExtData;
  } });
  var fe = gr();
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
var O = class extends Error {
  constructor(e) {
    super(e), this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var E = class extends O {
};
var m = typeof process < "u" && process.release && process.release.name === "node";
var dr;
if (globalThis.document)
  dr = (r) => new Promise((e, t) => {
    let s = document.createElement("script");
    s.src = r, s.onload = () => e(), s.onerror = t, document.head.appendChild(s);
  });
else if (globalThis.importScripts)
  dr = async (r) => {
    try {
      globalThis.importScripts(r);
    } catch (e) {
      if (e instanceof TypeError)
        await Promise.resolve().then(() => re(U(r)));
      else
        throw e;
    }
  };
else if (m)
  dr = async (r) => {
    let e = (await Promise.resolve().then(() => re(U("path")))).default;
    await Promise.resolve().then(() => re(U(e.resolve(r))));
  };
else
  throw new O("Cannot determine runtime environment");
var tn = /* @__PURE__ */ new WeakMap();
function Qr(r, e) {
  return tn.set(r, e), r;
}
var ws = re(Wt());
var Xn = new TextEncoder();
var B;
var F;
var Ne;
var Wr;
B = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakSet(), Wr = function() {
  i(this, B).push(new Promise((e) => {
    i(this, F).push(e);
  }));
};
function Le(r, e, t) {
  return vs({ type: "response", data: { uuid: r, resp: e } }, t);
}
function vs(r, e) {
  return e && Qr(r, e), r;
}
var ge;
ge = /* @__PURE__ */ new WeakMap();
var _s = re(Wt());
var Qn = new TextDecoder("utf-8");
var be;
var we;
var je;
var Be;
var xe;
be = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap();
var Or = new Int32Array(new ArrayBuffer(4));
var l = {};
function Ds(r) {
  Object.keys(r).forEach((e) => l._free(r[e]));
}
m && (globalThis.Worker = U("worker_threads").Worker);
var ve;
var Nt;
var Ws;
var qe;
ve = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakSet(), Ws = function(t) {
  m ? t.on("message", (s) => {
    i(this, qe).call(this, t, s);
  }) : t.onmessage = (s) => i(this, qe).call(this, t, s.data);
}, qe = /* @__PURE__ */ new WeakMap();
var ne;
var Ve;
var oe;
var He;
ne = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap();
var Ft = re(Wt());
m && (globalThis.Worker = U("worker_threads").Worker);
var Ee;
var ie;
var Pe;
var Lt;
var As;
var jt;
var Os;
var Bt;
var Is;
var ze;
Ee = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakSet(), As = async function(t) {
  d(this, ie, await navigator.serviceWorker.register(t)), await navigator.serviceWorker.ready, window.addEventListener("beforeunload", () => {
    var n;
    (n = i(this, ie)) == null || n.unregister();
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
      throw new E("Request not found during service worker XHR request");
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
        throw new E(`Unsupported request type '${n.type}'.`);
    }
    return;
  }
}, Bt = /* @__PURE__ */ new WeakSet(), Is = function(t) {
  m ? t.on("message", (s) => {
    i(this, ze).call(this, t, s);
  }) : t.onmessage = (s) => i(this, ze).call(this, t, s.data);
}, ze = /* @__PURE__ */ new WeakMap();
var Te;
var Xe;
var $e;
var Ge;
var Ke;
var Qe;
Te = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap();
m && (globalThis.Worker = U("worker_threads").Worker);
var _e;
var Vt;
var Us;
var Ze;
_e = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakSet(), Us = function(t) {
  m ? t.on("message", (s) => {
    i(this, Ze).call(this, t, s);
  }) : t.onmessage = (s) => i(this, Ze).call(this, t, s.data);
}, Ze = /* @__PURE__ */ new WeakMap();
var Se;
var Me;
var Ye;
var ae;
var et;
var Ht;
Se = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
var A = { Automatic: 0, SharedArrayBuffer: 1, ServiceWorker: 2, PostMessage: 3 };
var Ns = m ? __dirname + "/" : "https://webr.r-wasm.org/v0.2.1/";
var Ls = "https://repo.r-wasm.org";
var f = { null: 0, symbol: 1, pairlist: 2, closure: 3, environment: 4, promise: 5, call: 6, special: 7, builtin: 8, string: 9, logical: 10, integer: 13, double: 14, complex: 15, character: 16, dots: 17, any: 18, list: 19, expression: 20, bytecode: 21, pointer: 22, weakref: 23, raw: 24, s4: 25, new: 30, free: 31, function: 99 };
function Nr(r) {
  return r && typeof r == "object" && Object.keys(f).includes(r.type);
}
function Lr(r) {
  return r && typeof r == "object" && "re" in r && "im" in r;
}
function Jt(r) {
  return l._Rf_protect(q(r)), r;
}
function M(r, e) {
  return l._Rf_protect(q(r)), ++e.n, r;
}
function Bs(r) {
  let e = l._malloc(4);
  return l._R_ProtectWithIndex(q(r), e), { loc: l.getValue(e, "i32"), ptr: e };
}
function Fs(r) {
  l._Rf_unprotect(1), l._free(r.ptr);
}
function qs(r, e) {
  return l._R_Reprotect(q(r), e.loc), r;
}
function D(r) {
  l._Rf_unprotect(r);
}
function jr(r, e, t) {
  l._Rf_defineVar(q(e), q(t), q(r));
}
function Vs(r, e) {
  let t = {}, s = { n: 0 };
  try {
    let n = new rt(e);
    M(n, s), t.code = l.allocateUTF8(r);
    let o = l._R_ParseEvalString(t.code, n.ptr);
    return y.wrap(o);
  } finally {
    Ds(t), D(s.n);
  }
}
function tt(r, e) {
  return l.getWasmTableEntry(l.GOT.ffi_safe_eval.value)(q(r), q(e));
}
function q(r) {
  return ro(r) ? r.ptr : r;
}
function pe(r, e) {
  if (l._TYPEOF(r.ptr) !== f[e])
    throw new Error(`Unexpected object type "${r.type()}" when expecting type "${e}"`);
}
function eo(r) {
  if (Nr(r))
    return new (Hs(f[r.type]))(r);
  if (r && typeof r == "object" && "type" in r && r.type === "null")
    return new Gt();
  if (r === null)
    return new ce({ type: "logical", names: null, values: [null] });
  if (typeof r == "boolean")
    return new ce(r);
  if (typeof r == "number")
    return new st(r);
  if (typeof r == "string")
    return new Q(r);
  if (Lr(r))
    return new nt(r);
  if (Array.isArray(r))
    return to(r);
  throw new Error("Robj construction for this JS object is not yet supported");
}
function to(r) {
  let e = { n: 0 };
  try {
    let t = new ue([new Z("c"), ...r]);
    return M(t, e), t.eval();
  } finally {
    D(e.n);
  }
}
var P = class {
  constructor(e) {
    this.ptr = e;
  }
  type() {
    let e = l._TYPEOF(this.ptr);
    return Object.keys(f).find((s) => f[s] === e);
  }
};
var De;
var zt;
var le = class extends P {
  constructor(t) {
    if (!(t instanceof P))
      return eo(t);
    super(t.ptr);
    u(this, De);
  }
  static wrap(t) {
    let s = l._TYPEOF(t);
    return new (Hs(s))(new P(t));
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
    Vs(".Internal(inspect(x))", { x: this });
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
      s = new Q(t);
    else
      throw new Error("Argument to setNames must be null or an Array of strings or null");
    return l._Rf_setAttrib(this.ptr, k.namesSymbol.ptr, s.ptr), this;
  }
  names() {
    let t = Q.wrap(l._Rf_getAttrib(this.ptr, k.namesSymbol.ptr));
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
    return x(this, De, zt).call(this, t, k.bracketSymbol.ptr);
  }
  get(t) {
    return x(this, De, zt).call(this, t, k.bracket2Symbol.ptr);
  }
  getDollar(t) {
    return x(this, De, zt).call(this, t, k.dollarSymbol.ptr);
  }
  pluck(...t) {
    let s = Bs(k.null);
    try {
      let n = (a, c) => {
        let p = a.get(c);
        return qs(p, s);
      }, o = t.reduce(n, this);
      return o.isNull() ? void 0 : o;
    } finally {
      Fs(s);
    }
  }
  set(t, s) {
    let n = { n: 0 };
    try {
      let o = new le(t);
      M(o, n);
      let a = new le(s);
      M(a, n);
      let c = new Z("[[<-"), p = l._Rf_lang4(c.ptr, this.ptr, o.ptr, a.ptr);
      return M(p, n), le.wrap(tt(p, k.baseEnv));
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
var y = le;
De = /* @__PURE__ */ new WeakSet(), zt = function(t, s) {
  let n = { n: 0 };
  try {
    let o = new le(t);
    M(o, n);
    let a = l._Rf_lang3(s, this.ptr, o.ptr);
    return M(a, n), le.wrap(tt(a, k.baseEnv));
  } finally {
    D(n.n);
  }
};
var Gt = class extends y {
  constructor() {
    return super(new P(l.getValue(l._R_NilValue, "*"))), this;
  }
  toJs() {
    return { type: "null" };
  }
};
var Z = class extends y {
  constructor(e) {
    if (e instanceof P) {
      pe(e, "symbol"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new P(l._Rf_install(t)));
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
    return ot.wrap(l._PRINTNAME(this.ptr));
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
    if (e instanceof P)
      return pe(e, "pairlist"), super(e), this;
    let t = { n: 0 };
    try {
      let { names: s, values: n } = it(e), o = We.wrap(l._Rf_allocList(n.length));
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
var ue = class extends y {
  constructor(e) {
    if (e instanceof P)
      return pe(e, "call"), super(e), this;
    let t = { n: 0 };
    try {
      let { values: s } = it(e), n = s.map((a) => M(new y(a), t)), o = ue.wrap(l._Rf_allocVector(f.call, s.length));
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
    return y.wrap(tt(this.ptr, k.baseEnv));
  }
};
var Br = class extends y {
  constructor(e) {
    if (e instanceof P)
      return pe(e, "list"), super(e), this;
    let t = { n: 0 };
    try {
      let { names: s, values: n } = it(e), o = l._Rf_allocVector(f.list, n.length);
      M(o, t), n.forEach((a, c) => {
        l._SET_VECTOR_ELT(o, c, new y(a).ptr);
      }), y.wrap(o).setNames(s), super(new P(o));
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
      let s = new ue([this, ...e]);
      return M(s, t), s.eval();
    } finally {
      D(t.n);
    }
  }
};
var ot = class extends y {
  constructor(e) {
    if (e instanceof P) {
      pe(e, "string"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new P(l._Rf_mkChar(t)));
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
var rt = class extends y {
  constructor(e = {}) {
    if (e instanceof P)
      return pe(e, "environment"), super(e), this;
    let t = 0;
    try {
      let { names: s, values: n } = it(e), o = Jt(l._R_NewEnv(k.globalEnv.ptr, 0, 0));
      ++t, n.forEach((a, c) => {
        let p = s ? s[c] : null;
        if (!p)
          throw new Error("Can't create object in new environment with empty symbol name");
        let v = new Z(p), te = Jt(new y(a));
        try {
          jr(o, v, te);
        } finally {
          D(1);
        }
      }), super(new P(o));
    } finally {
      D(t);
    }
  }
  ls(e = false, t = true) {
    return Q.wrap(l._R_lsInternal3(this.ptr, Number(e), Number(t))).toArray();
  }
  bind(e, t) {
    let s = new Z(e), n = Jt(new y(t));
    try {
      jr(this, s, n);
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
var Y = class extends y {
  constructor(e, t, s) {
    if (e instanceof P)
      return pe(e, t), super(e), this;
    let n = { n: 0 };
    try {
      let { names: o, values: a } = it(e), c = l._Rf_allocVector(f[t], a.length);
      M(c, n), a.forEach(s(c)), y.wrap(c).setNames(o), super(new P(c));
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
      let t = l._Rf_lang2(new Z("is.na").ptr, this.ptr);
      M(t, e);
      let s = ce.wrap(tt(t, k.baseEnv));
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
var Kt;
var Fr = class extends Y {
  constructor(e) {
    super(e, "logical", i(Fr, Kt));
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
var ce = Fr;
Kt = /* @__PURE__ */ new WeakMap(), u(ce, Kt, (e) => {
  let t = l._LOGICAL(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : !!n, "i32");
  };
});
var Qt;
var qr = class extends Y {
  constructor(e) {
    super(e, "integer", i(qr, Qt));
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
var Xt = qr;
Qt = /* @__PURE__ */ new WeakMap(), u(Xt, Qt, (e) => {
  let t = l._INTEGER(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : Math.round(Number(n)), "i32");
  };
});
var Zt;
var Vr = class extends Y {
  constructor(e) {
    super(e, "double", i(Vr, Zt));
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
var st = Vr;
Zt = /* @__PURE__ */ new WeakMap(), u(st, Zt, (e) => {
  let t = l._REAL(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * o, n === null ? s : n, "double");
  };
});
var Yt;
var Hr = class extends Y {
  constructor(e) {
    super(e, "complex", i(Hr, Yt));
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
var nt = Hr;
Yt = /* @__PURE__ */ new WeakMap(), u(nt, Yt, (e) => {
  let t = l._COMPLEX(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * (2 * o), n === null ? s : n.re, "double"), l.setValue(t + 8 * (2 * o + 1), n === null ? s : n.im, "double");
  };
});
var er;
var Jr = class extends Y {
  constructor(e) {
    super(e, "character", i(Jr, er));
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
var Q = Jr;
er = /* @__PURE__ */ new WeakMap(), u(Q, er, (e) => (t, s) => {
  t === null ? l._SET_STRING_ELT(e, s, k.naString.ptr) : l._SET_STRING_ELT(e, s, new ot(t).ptr);
});
var tr;
var zr = class extends Y {
  constructor(e) {
    super(e, "raw", i(zr, tr));
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
var $t = zr;
tr = /* @__PURE__ */ new WeakMap(), u($t, tr, (e) => {
  let t = l._RAW(e);
  return (s, n) => {
    l.setValue(t + n, Number(s), "i8");
  };
});
function it(r) {
  return Nr(r) ? r : Array.isArray(r) || ArrayBuffer.isView(r) ? { names: null, values: r } : r && typeof r == "object" && !Lr(r) ? { names: Object.keys(r), values: Object.values(r) } : { names: null, values: [r] };
}
function Hs(r) {
  let e = { [f.null]: Gt, [f.symbol]: Z, [f.pairlist]: We, [f.closure]: ke, [f.environment]: rt, [f.call]: ue, [f.special]: ke, [f.builtin]: ke, [f.string]: ot, [f.logical]: ce, [f.integer]: Xt, [f.double]: st, [f.complex]: nt, [f.character]: Q, [f.list]: Br, [f.raw]: $t, [f.function]: ke };
  return r in e ? e[r] : y;
}
function ro(r) {
  return r instanceof y;
}
var k;
var at;
var lt;
var ct;
var ut;
var pt;
var rr;
var sr;
var nr;
var or;
var ir;
var ar;
var zs;
at = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakSet(), zs = async function() {
  for (; ; ) {
    let e = await this.webR.read();
    switch (e.type) {
      case "stdout":
        i(this, at).call(this, e.data);
        break;
      case "stderr":
        i(this, lt).call(this, e.data);
        break;
      case "prompt":
        i(this, ct).call(this, e.data);
        break;
      case "canvas":
        e.data.event === "canvasImage" ? i(this, ut).call(this, e.data.image) : e.data.event === "canvasNewPage" && i(this, pt).call(this);
        break;
      case "closed":
        return;
      default:
        console.warn(`Unhandled output type for webR Console: ${e.type}.`);
    }
  }
};
var ao = { FONTCONFIG_PATH: "/etc/fonts", R_HOME: "/usr/lib/R", R_ENABLE_JIT: "0" };
var Xs = { RArgs: [], REnv: ao, baseUrl: Ns, serviceWorkerUrl: "", repoUrl: Ls, homedir: "/home/web_user", interactive: true, channelType: A.Automatic, createLazyFilesystem: true };
var w;
var dt;
var ur;
var $s;
w = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakSet(), $s = async function() {
  for (; ; ) {
    let e = await i(this, w).readSystem();
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
        throw new O("Unknown system message type `" + e.type + "`");
    }
  }
};
var g;
var R;
var ht;
g = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap();

// src/messageporthttp.ts
async function fetchASGI(client, resource, init, filter = (bodyChunk) => bodyChunk) {
  if (typeof resource === "string" || typeof init !== "undefined") {
    resource = new Request(resource, init);
  }
  const channel = new MessageChannel();
  const clientPort = channel.port1;
  client.postMessage(
    {
      type: "makeRequest",
      scope: reqToASGI(resource)
    },
    [channel.port2]
  );
  const blob = await resource.blob();
  if (!blob.size) {
    clientPort.postMessage({
      type: "http.request",
      more_body: false
    });
  } else {
    const reader = blob.stream().getReader();
    try {
      while (true) {
        const { value: theChunk, done } = await reader.read();
        clientPort.postMessage({
          type: "http.request",
          body: theChunk,
          more_body: !done
        });
        if (done) {
          break;
        }
      }
    } finally {
      reader.releaseLock();
    }
  }
  return new Promise((resolve) => {
    let streamController;
    const readableStream = new ReadableStream({
      start(controller) {
        streamController = controller;
      },
      cancel(reason) {
      }
    });
    let response;
    clientPort.addEventListener("message", (event) => {
      const msg = event.data;
      if (msg.type === "http.response.start") {
        response = asgiToRes(msg, readableStream);
        resolve(response);
      } else if (msg.type === "http.response.body") {
        if (msg.body) {
          streamController.enqueue(filter(msg.body, response));
        }
        if (!msg.more_body) {
          streamController.close();
          clientPort.close();
        }
      } else {
        throw new Error("Unexpected event type from clientPort: " + msg.type);
      }
    });
    clientPort.start();
  });
}
function headersToASGI(headers) {
  const result = [];
  for (const [key, value] of headers.entries()) {
    result.push([key, value]);
  }
  return result;
}
function reqToASGI(req) {
  const url = new URL(req.url);
  return {
    type: "http",
    asgi: {
      version: "3.0",
      spec_version: "2.1"
    },
    http_version: "1.1",
    method: req.method,
    scheme: url.protocol.replace(/:$/, ""),
    path: url.pathname,
    query_string: url.search.replace(/^\?/, ""),
    root_path: "",
    headers: headersToASGI(req.headers)
  };
}
function asgiToRes(res, body) {
  return new Response(body, {
    headers: res.headers,
    status: res.status
  });
}

// src/shinylive-sw.ts
var useCaching = false;
var cacheName = "::prismExperimentsServiceworker";
var version = "v6";
function addCoiHeaders(resp) {
  const headers = new Headers(resp.headers);
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  headers.set("Cross-Origin-Resource-Policy", "cross-origin");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers
  });
}
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([self.skipWaiting(), caches.open(version + cacheName)])
  );
});
self.addEventListener("activate", function(event) {
  event.waitUntil(
    (async () => {
      await self.clients.claim();
      const keys = await caches.keys();
      return Promise.all(
        keys.filter(function(key) {
          return key.indexOf(version + cacheName) !== 0;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    })()
  );
});
self.addEventListener("fetch", function(event) {
  const request = event.request;
  const url = new URL(request.url);
  if (self.location.origin !== url.origin)
    return;
  if (url.pathname == "/esbuild")
    return;
  const base_path = dirname(self.location.pathname);
  if (url.pathname == `${base_path}/shinylive-inject-socket.js`) {
    event.respondWith(
      new Response(shinylive_inject_socket_default, {
        headers: { "Content-Type": "text/javascript" },
        status: 200
      })
    );
    return;
  }
  const coiRequested = url.searchParams.get("coi") === "1" || request.referrer.includes("coi=1");
  const appPathRegex = /.*\/(app_[^/]+\/)/;
  const m_appPath = appPathRegex.exec(url.pathname);
  if (m_appPath) {
    event.respondWith(
      (async () => {
        let pollCount = 5;
        while (!apps[m_appPath[1]]) {
          if (pollCount == 0) {
            return new Response(
              `Couldn't find parent page for ${url}. This may be because the Service Worker has updated. Try reloading the page.`,
              {
                status: 404
              }
            );
          }
          console.log("App URL not registered. Waiting 50ms.");
          await sleep(50);
          pollCount--;
        }
        url.pathname = url.pathname.replace(appPathRegex, "/");
        const isAppRoot = url.pathname === "/";
        const filter = isAppRoot ? injectSocketFilter : identityFilter;
        const blob = await request.blob();
        const resp = await fetchASGI(
          apps[m_appPath[1]],
          new Request(url.toString(), {
            method: request.method,
            headers: request.headers,
            body: request.method === "GET" || request.method === "HEAD" ? void 0 : blob,
            credentials: request.credentials,
            cache: request.cache,
            redirect: request.redirect,
            referrer: request.referrer
          }),
          void 0,
          filter
        );
        if (coiRequested) {
          return addCoiHeaders(resp);
        } else {
          return resp;
        }
      })()
    );
    return;
  }
  if (request.method !== "GET") {
    return;
  }
  if (useCaching) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        try {
          const networkResponse = addCoiHeaders(await fetch(request));
          const baseUrl = self.location.origin + dirname(self.location.pathname);
          if (request.url.startsWith(baseUrl + "/shinylive/") || request.url === baseUrl + "/favicon.ico") {
            const cache = await caches.open(version + cacheName);
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return new Response("Failed to find in cache, or fetch.", {
            status: 404
          });
        }
      })()
    );
    return;
  }
  event.respondWith((async () => {
    const resp = await fetch(request);
    if (coiRequested) {
      return addCoiHeaders(resp);
    } else {
      return resp;
    }
  })());
});
var apps = {};
(async () => {
  const allClients = await self.clients.matchAll();
  for (const client of allClients) {
    client.postMessage({
      type: "serviceworkerStart"
    });
  }
})();
self.addEventListener("message", (event) => {
  const msg = event.data;
  if (msg.type === "configureProxyPath") {
    const path = msg.path;
    const port = event.ports[0];
    apps[path] = port;
  }
});
function identityFilter(bodyChunk, response) {
  return bodyChunk;
}
function injectSocketFilter(bodyChunk, response) {
  const contentType = response.headers.get("content-type");
  if (contentType && /^text\/html(;|$)/.test(contentType)) {
    const bodyChunkStr = uint8ArrayToString(bodyChunk);
    const base_path = dirname(self.location.pathname);
    const newStr = bodyChunkStr.replace(
      /<\/head>/,
      `<script src="${base_path}/shinylive-inject-socket.js" type="module"><\/script>
</head>`
    );
    const newChunk = Uint8Array.from(
      newStr.split("").map((s) => s.charCodeAt(0))
    );
    return newChunk;
  }
  return bodyChunk;
}
