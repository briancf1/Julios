globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { v as vue_cjs_prod, _ as __nuxt_component_0$1, a as _export_sfc } from './server.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';

const _sfc_main = vue_cjs_prod.defineComponent({
  name: "IndexPage",
  components: { OverlayMenu: __nuxt_component_0$1 },
  data() {
    return {
      isActive: false,
      windowWidth: 0
    };
  },
  computed: {
    videoSource() {
      const imgUrl = new URL("/LoopDesktop.mp4", globalThis._importMeta_.url);
      this.reload();
      return imgUrl.toString();
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    isOverlayActive(isActive) {
      this.isActive = isActive;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    reload() {
      const video = document.getElementById("video");
      if (video != null) {
        video.load();
      }
    }
  }
});
const _imports_0 = "" + globalThis.__buildAssetsURL("Logo.ba0892b4.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_OverlayMenu = __nuxt_component_0$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_OverlayMenu, { onIsOverlayActive: _ctx.isOverlayActive }, null, _parent));
  _push(`<div class="container">`);
  if (!_ctx.isActive) {
    _push(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt="Julio&#39;s Mexican Street Food">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="main-content"><video id="video" autoplay loop muted><source${serverRenderer.exports.ssrRenderAttr("src", _ctx.videoSource)} type="video/mp4"> Your browser does not support the video tag. </video></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.0b0b5c77.mjs.map
