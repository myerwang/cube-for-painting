(function (e) { function n(n) { for (var r, c, a = n[0], s = n[1], l = n[2], f = 0, d = []; f < a.length; f++)c = a[f], Object.prototype.hasOwnProperty.call(o, c) && o[c] && d.push(o[c][0]), o[c] = 0; for (r in s)Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]); u && u(n); while (d.length)d.shift()(); return i.push.apply(i, l || []), t(); } function t() { for (var e, n = 0; n < i.length; n++) { for (var t = i[n], r = !0, a = 1; a < t.length; a++) { const s = t[a]; o[s] !== 0 && (r = !1); }r && (i.splice(n--, 1), e = c(c.s = t[0])); } return e; } const r = {}; var o = { app: 0 }; var i = []; function c(n) { if (r[n]) return r[n].exports; const t = r[n] = { i: n, l: !1, exports: {} }; return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports; }c.m = e, c.c = r, c.d = function (e, n, t) { c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t }); }, c.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, c.t = function (e, n) { if (1 & n && (e = c(e)), 8 & n) return e; if (4 & n && typeof e === 'object' && e && e.__esModule) return e; const t = Object.create(null); if (c.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: e }), 2 & n && typeof e !== 'string') for (const r in e)c.d(t, r, ((n) => e[n]).bind(null, r)); return t; }, c.n = function (e) { const n = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return c.d(n, 'a', n), n; }, c.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n); }, c.p = '/'; let a = window.webpackJsonp = window.webpackJsonp || []; const s = a.push.bind(a); a.push = n, a = a.slice(); for (let l = 0; l < a.length; l++)n(a[l]); var u = s; i.push([0, 'chunk-vendors']), t(); }({
  0(e, n, t) { e.exports = t('56d7'); },
  2395(e, n, t) {},
  '31f2': function (e, n, t) {
    t('ebce');
  },
  '56d7': function (e, n, t) {
    t.r(n); t('e260'), t('e6cf'), t('cca6'), t('a79d'); const r = t('2b0e'); const o = function () { const e = this; const n = e.$createElement; const t = e._self._c || n; return t('div', [t('HelloWorld')], 1); }; const i = []; const c = function () { const e = this; const n = e.$createElement; const t = e._self._c || n; return t('div', { attrs: { id: 'container' } }); }; const a = []; const s = t('5a89'); const l = t('ae37')(s); const u = {
      data() {
        return {
          camera: null, scene: null, renderer: null, mesh: null, controls: null,
        };
      },
      mounted() { this.init(), this.animate(); },
      methods: { init() { this.scene = new s.Scene(); const e = new s.BoxGeometry(0.2, 0.2, 0.2); const n = new s.MeshNormalMaterial({ color: 'white' }); this.mesh = new s.Mesh(e, n), this.scene.add(this.mesh); const t = document.getElementById('container'); this.camera = new s.PerspectiveCamera(70, t.clientWidth / t.clientHeight, 0.01, 10), this.camera.position.z = 1, this.renderer = new s.WebGLRenderer({ antialias: !0 }), this.renderer.setSize(t.clientWidth, t.clientHeight), t.appendChild(this.renderer.domElement), this.controls = new l(this.camera, this.renderer.domElement); }, animate() { requestAnimationFrame(this.animate), this.renderer.render(this.scene, this.camera); } },
    }; const f = u; const d = (t('31f2'), t('2877')); const p = Object(d.a)(f, c, a, !1, null, null, null); const h = p.exports; const m = { components: { HelloWorld: h } }; const v = m; const b = (t('7c55'), Object(d.a)(v, o, i, !1, null, null, null)); const g = b.exports; const w = t('2f62'); const y = t('0e44'); r.a.use(w.a); const O = new w.a.Store({
      state: {}, mutations: {}, actions: {}, modules: {}, plugins: [Object(y.a)()],
    }); const j = t('9483'); Object(j.a)(''.concat('/', 'service-worker.js'), {
      ready() { console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'); }, registered() { console.log('Service worker has been registered.'); }, cached() { console.log('Content has been cached for offline use.'); }, updatefound() { console.log('New content is downloading.'); }, updated() { console.log('New content is available; please refresh.'); }, offline() { console.log('No internet connection found. App is running in offline mode.'); }, error(e) { console.error('Error during service worker registration:', e); },
    }), r.a.config.productionTip = !1, new r.a({ store: O, render(e) { return e(g); } }).$mount('#app');
  },
  '7c55': function (e, n, t) {
    t('2395');
  },
  ebce(e, n, t) {},
}));
// # sourceMappingURL=app.9edb40a8.js.map
