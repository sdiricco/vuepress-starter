import{_ as o,o as p,c as i,b as s,d as e,e as n,a as t,r as c}from"./app.30ed76b5.js";const l={},r=s("h1",{id:"typescript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),n(" Typescript")],-1),u=n("Da "),d={href:"https://it.wikipedia.org/wiki/TypeScript",target:"_blank",rel:"noopener noreferrer"},k=n("wikipedia"),v=n(" TypeScript \xE8 un linguaggio di programmazione open source sviluppato da Microsoft. Si tratta di un Super-set di JavaScript che basa le sue caratteristiche su ECMAScript 6."),m=t('<p>Il linguaggio estende la sintassi di JavaScript in modo che qualunque programma scritto in JavaScript sia anche in grado di funzionare con TypeScript senza nessuna modifica. \xC8 stato progettato per lo sviluppo di grandi applicazioni ed \xE8 destinato a essere compilato in JavaScript per poter essere interpretato da qualunque web browser o app.</p><h2 id="caratteristiche" tabindex="-1"><a class="header-anchor" href="#caratteristiche" aria-hidden="true">#</a> Caratteristiche:</h2><ul><li>E&#39; Javascript</li><li>Ha una fase di transpilazione</li><li>Supporto alle caratteristiche future di ES</li><li>Pensato per Applicazioni Enterprise</li><li>Rispetta gli standard ECMA</li><li>Utilizzabile con NodeJS</li><li>Options Static Typed</li><li>Adozione graduale</li><li>Language Service integrato negli IDE</li><li>Pieno supporto alle Classi</li></ul><h2 id="qualche-guida-di-riferimento" tabindex="-1"><a class="header-anchor" href="#qualche-guida-di-riferimento" aria-hidden="true">#</a> Qualche guida di riferimento</h2>',4),g={href:"https://www.mrw.it/javascript/guida-typescript/",target:"_blank",rel:"noopener noreferrer"},b=n("mrv-typescript"),h=s("h2",{id:"installazione-di-typescript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installazione-di-typescript","aria-hidden":"true"},"#"),n(" Installazione di Typescript")],-1),y=n("Puoi installare "),f={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},q=n("Typescript"),_=n(" come un pacchetto globale "),w={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},x=n("npm"),j=n(". Assicurati quindi di aver installato "),z={href:"https://nodejs.org/it/",target:"_blank",rel:"noopener noreferrer"},S=n("NodeJs"),E=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> typescript --save-dev //Locally as dev dependency.
<span class="token function">npm</span> <span class="token function">install</span> typescript -g         //Install as a global module.
<span class="token function">npm</span> <span class="token function">install</span> typescript@latest -g  //Update Typecript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="primo-esempio" tabindex="-1"><a class="header-anchor" href="#primo-esempio" aria-hidden="true">#</a> Primo esempio</h2><p>Per inizializzare un progetto con Typescript, da terminale digita:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc -init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Verr\xE0 creato un file <code>tsconfig.json</code> che per il momento puoi ignorare.</p><p>A questo punto puoi creare un file Typescript, ad esempio <code>index.ts</code> e, come riferimento, puoi copiare il seguente pezzo di codice:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.ts</span>
<span class="token keyword">function</span> <span class="token function">mapWord</span><span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token punctuation">(</span>string<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span> <span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span> <span class="token operator">:</span> number<span class="token punctuation">{</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">filter</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">filterEqual</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">{</span>
        <span class="token keyword">return</span> word <span class="token operator">===</span> key
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> nullRes <span class="token operator">=</span> <span class="token function">mapWord</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;uno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;due&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tre&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;quattro&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;uno&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">filterEqual</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nullRes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
<span class="token keyword">const</span> unoRes <span class="token operator">=</span> <span class="token function">mapWord</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;uno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;due&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tre&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;quattro&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;uno&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">filterEqual</span><span class="token punctuation">(</span><span class="token string">&quot;uno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>unoRes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Infine, dovrai transcompilare il codice con il comando</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Verr\xE0 creato il relativo file Javascript, ad esempio <code>index.js</code> il quale potrai eseguire con NodeJs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="qualche-strumento-utile" tabindex="-1"><a class="header-anchor" href="#qualche-strumento-utile" aria-hidden="true">#</a> Qualche strumento utile</h2>`,12),A=n("Su "),T={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},J=n("typecriptlang.org"),I=n(", trovi "),P={href:"https://www.typescriptlang.org/play?#code/DYUwLgBAFizA9gdXgJ2AEwgXggIgBKwITJrq4DcAUAPQ0QQB6A-EA",target:"_blank",rel:"noopener noreferrer"},V=n("Playground"),C=n(", uno strumento che ti permette di transcompilare codice Typescript e vedere come viene quindi convertito in Javascript con tutta una serie di utility."),N=t(`<h2 id="tsc-config" tabindex="-1"><a class="header-anchor" href="#tsc-config" aria-hidden="true">#</a> tsc config</h2><p>Creeremo un <code>tsconfig.json</code> semplice, configurando:</p><ul><li>un unico file typescript: <code>index.js</code></li><li>standard Javascript: <code>ES6</code></li><li>cartella di destinazione file transpilati Javascript: <code>dist</code></li></ul><p>Puoi quindi creare <code>tsconfig.json</code> vuoto e compilarlo in questo modo:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">//tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;index.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A questo punto puoi creare un file <code>index.ts</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.ts</span>
<span class="token keyword">const</span> <span class="token function-variable function">helloworld</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;Hello wolrd!!!&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">helloworld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lanciare il comando di transcompilazione</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Verr\xE0 creata la folder <code>dist</code> con i file transcompilati Javascript.</p><p>Per lanciare il file</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> /dist/index.js 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O pi\xF9 semplicemente</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> /dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Dal momento che implicitamente cercher\xE0 il file <code>index.js</code> come entry point</p><h2 id="tsc-config-include-exclude" tabindex="-1"><a class="header-anchor" href="#tsc-config-include-exclude" aria-hidden="true">#</a> tsc config include - exclude</h2><p>Con l&#39;opzione <code>files</code> vengono aggiunti alla transpilazione i file specificati puntualmente un <code>tsconfig.json</code>. Con le opzioni <code>include</code> ed <code>exclude</code> \xE8 possibile aggiungere ed escludere dalla transpilazione delle directories</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.spec.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tutti i file all&#39;interno di <code>src</code> verranno transpilati in javascript e aggiunti alla directory <code>dist</code></p><h2 id="type-annotation-variabili" tabindex="-1"><a class="header-anchor" href="#type-annotation-variabili" aria-hidden="true">#</a> type annotation - variabili</h2><p>Vediamo un esempio con i vari tipi nativi assegnabili con typescript</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//type annotation</span>
<span class="token keyword">let</span> <span class="token literal-property property">foo1</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">foo2</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;cento&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">foo3</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">foo4</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token string">&#39;any&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pi\xF9 genericamente per l&#39;assegnazione delle variabili:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">let</span><span class="token operator">|</span>const<span class="token operator">|</span>var varName: varType <span class="token operator">=</span> varValue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="type-annotation-array" tabindex="-1"><a class="header-anchor" href="#type-annotation-array" aria-hidden="true">#</a> type annotation - array</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//da preferire</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;string1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string3&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr2</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token literal-property property">arr3</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;string1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-annotation-object-inline" tabindex="-1"><a class="header-anchor" href="#type-annotation-object-inline" aria-hidden="true">#</a> type annotation - object inline</h2><p>Questo non \xE8 il modo migliore. E&#39; un modo prolisso.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">persona</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nome</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">cognome</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">indirizzo</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">via</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token literal-property property">citta</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token literal-property property">civico</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isAdmin</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nome</span><span class="token operator">:</span> <span class="token string">&quot;Lorenzo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cognome</span><span class="token operator">:</span> <span class="token string">&quot;Biondi&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">indirizzo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">via</span><span class="token operator">:</span> <span class="token string">&quot;Roma&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">citta</span><span class="token operator">:</span> <span class="token string">&quot;Treviso&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">civico</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isAdmin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Il modo migliore passa attraverso le interfacce o le clasi.</p>`,30);function B(D,L){const a=c("ExternalLinkIcon");return p(),i("div",null,[r,s("p",null,[u,s("a",d,[k,e(a)]),v]),m,s("ul",null,[s("li",null,[s("a",g,[b,e(a)])])]),h,s("p",null,[y,s("a",f,[q,e(a)]),_,s("a",w,[x,e(a)]),j,s("a",z,[S,e(a)])]),E,s("p",null,[A,s("a",T,[J,e(a)]),I,s("a",P,[V,e(a)]),C]),N])}var R=o(l,[["render",B],["__file","index.html.vue"]]);export{R as default};
