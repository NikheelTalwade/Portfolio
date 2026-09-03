
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-63VWYYXJ.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OTPQYFRZ.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RJLMUVOG.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNIFH7RU.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HMS6ABNK.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-64IWEOXJ.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/certifications"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5BCX6KQO.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VXZGEOB2.js",
      "chunk-I6QBHLWP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2079, hash: '3030c3a9988c702f4fbe2e4a4bb1f8b2123e094af84a00c68902e61fcca820c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1744, hash: '3523e8986f1386061a11e4b2a95efc5288b8902a14f2979ee13f60e2d7c4c779', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 237, hash: 'dcbbd3d1ba769acac38b5122765d43caf9a118a8df7b190acb864c3a5928b47b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13361, hash: 'd1aa92da9732a240cb4fc99cc3d2d7477a1b2bc2e4d2560db65d4613e575a490', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 18245, hash: '992d3954ebe9d756832097aacb0274702afe7559b348afd3b1c6a493c674859d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20800, hash: 'e6d80e9567cafbf92fd3a38e70564b82a90f8f7b3334eba89129838275af367c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16057, hash: 'd40996d68f3a5170e92f3c7a2e5414b4ed727ec06a537b85f1cf4fc506d3ace2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18759, hash: '3a06c714f3280f0ace5c77a1836232e139c74e0530ab02dfcdcdc197aae1b0b6', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 12955, hash: 'b1f59e9040cf3a02c7919768d7ffc42b15813988d74f8686134039b9d2ac6807', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 14235, hash: '1607305c5715ebc0da87abd775f49d05fe59b526c5bda1c3496ba9eb42ea0a37', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 18618, hash: 'aebf3297b01e05a0da4963bdb05dc2cb015fcedcb4a66a989ff7eb84ff1bcc34', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-RNOXFWLQ.css': {size: 1705, hash: 'hB21S3086Wo', text: () => import('./assets-chunks/styles-RNOXFWLQ_css.mjs').then(m => m.default)}
  },
};
