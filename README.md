There are 3 source-files :
- `index.ts` imports `test.vue`
- `test.vue` imports `testImp.ts`

The later is the problematic import : the file `testImp.ts` will NOT be bundled.

### Tests:
```
npm install
node fuse
node test
```
### Expected result:
```json
{
	"rolae": 42,
	"testImp": {
		"hi": "I am imported"
	}
}
```

### Behaviour:
```
Error: Cannot find module 'testImp'
```
Also, having a peek in `dist/bndl.ts` reveals the file `testImp.ts` is absent
```javascript
(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
exports.__esModule = true;
var test = require("./test.vue");
console.dir(test);

});
___scope___.file("test.vue", function(exports, require, module, __filename, __dirname){

var _p = {};
var _v = function(exports){"use strict";
exports.__esModule = true;
var testImp = require("testImp");
exports["default"] = {
    rolae: 42,
    testImp: testImp
};

};
_p.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("Blup")])}
_p.staticRenderFns = [  ];
var _e = {}; _v(_e); _p = Object.assign(_e.default, _p)
module.exports =_p
                
});
});

FuseBox.import("default/index.js");
FuseBox.main("default/index.js");
})
```