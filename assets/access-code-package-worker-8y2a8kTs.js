(function(){"use strict";function e(){return[{id:1,name:"1 Kode Akses",old_price:null,new_price:15e3,tag:null},{id:2,name:"2 Kode Akses",old_price:15e3*2,new_price:28e3,tag:"Terlaris"},{id:3,name:"5 Kode Akses",old_price:15e3*5,new_price:65e3,tag:null},{id:4,name:"10 Kode Akses",old_price:15e3*10,new_price:12e4,tag:null},{id:5,name:"20 Kode Akses",old_price:15e3*20,new_price:22e4,tag:null},{id:6,name:"50 Kode Akses",old_price:15e3*50,new_price:5e5,tag:null},{id:7,name:"100 Kode Akses",old_price:15e3*100,new_price:9e5,tag:"Rekomendasi"}]}self.onmessage=function(){console.time("access-code-package-worker.ts");const s=e();self.postMessage({accessCodePackages:s}),console.timeEnd("access-code-package-worker.ts")}})();
