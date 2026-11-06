import{C as e,E as t,T as n,_ as r,a as i,b as a,g as o,h as s,i as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h,v as g,w as _,x as v,y}from"./Lightformer-hgHTY40f.js";import{o as b,r as x,t as S}from"./index-y39LsO7I.js";var C={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},w={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},T=parseInt(`187`.replace(/\D+/g,``)),E=b(x()),D=E.forwardRef(({scale:e=10,frames:n=1/0,opacity:i=1,width:s=1,height:c=1,blur:l=1,near:d=0,far:m=10,resolution:g=512,smooth:_=!0,color:v=`#000000`,depthWrite:b=!1,renderOrder:x,...S},T)=>{let D=E.useRef(null),O=p(e=>e.scene),k=p(e=>e.gl),A=E.useRef(null);s*=Array.isArray(e)?e[0]:e||1,c*=Array.isArray(e)?e[1]:e||1;let[j,M,N,P,F,I,L]=E.useMemo(()=>{let e=new t(g,g),n=new t(g,g);n.texture.generateMipmaps=e.texture.generateMipmaps=!1;let i=new y(s,c).rotateX(Math.PI/2),l=new o(i),u=new r;u.depthTest=u.depthWrite=!1,u.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new h(v)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let d=new a(C),f=new a(w);return f.depthTest=d.depthTest=!1,[e,i,u,l,d,f,n]},[g,s,c,e,v]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return u(()=>{A.current&&(n===1/0||z<n)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(l),_&&R(l*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),E.useImperativeHandle(T,()=>D.current,[]),E.createElement(`group`,f({"rotation-x":Math.PI/2},S,{ref:D}),E.createElement(`mesh`,{renderOrder:x,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},E.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:i,depthWrite:b})),E.createElement(`orthographicCamera`,{ref:A,args:[-s/2,s/2,c/2,-c/2,d,m]}))}),O=class extends a{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${T>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}},k=e=>e&&e.constructor===Float32Array,A=e=>[e.r,e.g,e.b],j=t=>t instanceof e||t instanceof _||t instanceof n,M=e=>Array.isArray(e)?e:j(e)?e.toArray():[e,e,e];function N(e,t,n){return E.useMemo(()=>{if(t!==void 0){if(k(t))return t;if(t instanceof h){let n=Array.from({length:e*3},()=>A(t)).flat();return Float32Array.from(n)}if(j(t)||Array.isArray(t)){let n=Array.from({length:e*3},()=>M(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}var P=E.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:r=1,scale:a=1,size:o,color:c,children:l,...d},m)=>{E.useMemo(()=>i({SparklesImplMaterial:O}),[]);let g=E.useRef(null),_=p(e=>e.viewport.dpr),v=M(a),y=E.useMemo(()=>Float32Array.from(Array.from({length:t},()=>v.map(s.randFloatSpread)).flat()),[t,...v]),b=N(t,o,Math.random),x=N(t,r),S=N(t,n),C=N(t*3,e),w=N(c===void 0?t*3:t,k(c)?c:new h(c),()=>1);return u(e=>{g.current&&g.current.material&&(g.current.material.time=e.clock.elapsedTime)}),E.useImperativeHandle(m,()=>g.current,[]),E.createElement(`points`,f({key:`particle-${t}-${JSON.stringify(a)}`},d,{ref:g}),E.createElement(`bufferGeometry`,null,E.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[y,3]}),E.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[b,1]}),E.createElement(`bufferAttribute`,{attach:`attributes-opacity`,args:[x,1]}),E.createElement(`bufferAttribute`,{attach:`attributes-speed`,args:[S,1]}),E.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[w,3]}),E.createElement(`bufferAttribute`,{attach:`attributes-noise`,args:[C,3]})),l||E.createElement(`sparklesImplMaterial`,{transparent:!0,pixelRatio:_,depthWrite:!1}))}),F=S();function I(){let e=new v;e.absarc(0,0,.78,0,Math.PI*2,!1);let t=new g;t.absarc(-.18,0,.26,0,Math.PI*2,!0),e.holes.push(t);let n=new v,r=[0,-.16,-.06,-.22,-.04,-.18,-.08,0];n.moveTo(.55,.2),n.lineTo(3.15,.2),n.lineTo(3.45,.02),n.lineTo(3.3,-.2);let i=2.6/r.length;for(let e=0;e<r.length;e++){let t=3.15-e*i;n.lineTo(t-i*.3,-.2+r[e]),n.lineTo(t-i*.7,-.2+r[e])}n.lineTo(.55,-.2),n.closePath();let a={depth:.14,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:3,curveSegments:48},o=new d(e,a),s=new d(n,{...a,depth:.1});return o.translate(0,0,-.07),s.translate(0,0,-.05),[o,s]}function L(){let e=new v;e.moveTo(0,1.55),e.quadraticCurveTo(.75,1.25,1.35,1.35),e.lineTo(1.35,.1),e.quadraticCurveTo(1.25,-1.15,0,-1.75),e.quadraticCurveTo(-1.25,-1.15,-1.35,.1),e.lineTo(-1.35,1.35),e.quadraticCurveTo(-.75,1.25,0,1.55);let t=new d(e,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:4,curveSegments:32});return t.translate(0,0,-.09),t}function R({input:e,reduced:t,compact:n}){let r=(0,E.useRef)(null),i=(0,E.useRef)(null),[a,o]=(0,E.useMemo)(I,[]),c=(0,E.useMemo)(L,[]),{camera:l}=p();u((n,a)=>{let o=Math.min(a,.05),c=e.current,u=r.current;if(u){let e=Math.min(1,c.scroll*1.6)*(Math.PI/2);u.rotation.x=s.damp(u.rotation.x,e+c.y*.15,4,o),u.rotation.y=s.damp(u.rotation.y,-.35+c.x*.35+(t?0:Math.sin(n.clock.elapsedTime*.6)*.12),4,o),u.position.y=t?0:Math.sin(n.clock.elapsedTime*.9)*.08}i.current&&(i.current.rotation.y=s.damp(i.current.rotation.y,c.x*.18,3,o)),l.position.z=s.damp(l.position.z,9-c.scroll*2.5,3,o)});let d=(0,F.jsx)(`meshStandardMaterial`,{color:`#F6C945`,metalness:1,roughness:.16,envMapIntensity:1.8});return(0,F.jsxs)(`group`,{scale:n?.62:1,children:[(0,F.jsxs)(`group`,{ref:i,position:[.2,.05,-1.4],children:[(0,F.jsx)(`mesh`,{geometry:c,children:(0,F.jsx)(`meshStandardMaterial`,{color:`#1E4378`,metalness:.5,roughness:.3,envMapIntensity:1.4,emissive:`#0B2350`,emissiveIntensity:.35})}),(0,F.jsx)(`mesh`,{geometry:c,scale:[1.08,1.08,.5],position:[0,0,-.06],children:(0,F.jsx)(`meshStandardMaterial`,{color:`#F2C230`,metalness:1,roughness:.2,envMapIntensity:1.6})})]}),(0,F.jsx)(`group`,{ref:r,rotation:[0,-.35,.18],position:[0,0,.3],children:(0,F.jsxs)(`group`,{position:[-1.55,0,0],children:[(0,F.jsx)(`mesh`,{geometry:a,children:d}),(0,F.jsx)(`mesh`,{geometry:o,children:d}),(0,F.jsxs)(`mesh`,{position:[1.9,.02,.06],children:[(0,F.jsx)(`boxGeometry`,{args:[2.5,.05,.02]}),(0,F.jsx)(`meshStandardMaterial`,{color:`#8E6A1E`,metalness:1,roughness:.4})]})]})})]})}function z({reduced:e,active:t=!0,onReady:n}){let[r]=(0,E.useState)(()=>typeof window<`u`&&window.innerWidth<768),i=(0,E.useRef)({x:0,y:0,scroll:0});return(0,E.useEffect)(()=>{let e=e=>{i.current.x=e.clientX/innerWidth*2-1,i.current.y=e.clientY/innerHeight*2-1},t=()=>i.current.scroll=Math.min(1,scrollY/innerHeight);return addEventListener(`pointermove`,e),addEventListener(`scroll`,t,{passive:!0}),()=>{removeEventListener(`pointermove`,e),removeEventListener(`scroll`,t)}},[]),(0,F.jsxs)(c,{frameloop:t?`always`:`demand`,dpr:r?[1,1.25]:[1,1.5],camera:{position:[0,0,9],fov:35},gl:{antialias:!0,alpha:!0,powerPreference:`high-performance`},onCreated:()=>n?.(),children:[(0,F.jsx)(`ambientLight`,{intensity:.7}),(0,F.jsx)(`directionalLight`,{position:[1,2,7],intensity:2.4,color:`#FFF4DA`}),(0,F.jsx)(`spotLight`,{position:[3,5,5],angle:.5,penumbra:1,intensity:90,color:`#FFE6B0`}),(0,F.jsx)(`pointLight`,{position:[-4,-1,3],intensity:10,color:`#5B8CFF`}),(0,F.jsxs)(l,{resolution:128,children:[(0,F.jsx)(m,{intensity:3,position:[0,4,3],scale:[8,2,1],color:`#FFF1D0`}),(0,F.jsx)(m,{intensity:1.6,position:[-4,0,1],"rotation-y":Math.PI/2,scale:[10,1.5,1],color:`#9DB8FF`}),(0,F.jsx)(m,{intensity:1.2,position:[4,0,-1],"rotation-y":-Math.PI/2,scale:[10,1,1],color:`#F2C230`})]}),(0,F.jsx)(R,{input:i,reduced:e,compact:r}),!e&&(0,F.jsx)(P,{count:r?36:60,scale:[8,6,4],size:2,speed:.3,color:`#F2C230`,opacity:.6}),(0,F.jsx)(D,{position:[0,-2.4,0],opacity:.5,scale:8,blur:2.6,far:3,resolution:256})]})}export{z as default};