import{_ as a,o as i,c as o,b as n,d as t,a as c,e as s,r as l}from"./app.30ed76b5.js";const p={},d=c(`<h1 id="primo-sketch" tabindex="-1"><a class="header-anchor" href="#primo-sketch" aria-hidden="true">#</a> Primo sketch</h1><p>Come primo Sketch vedremo come far lampeggiare un LED. Useremo il LED connesso direttamente ad arduino al <code>pin 13</code>. Per far ci\xF2 dovremo:</p><p>in <code>void setup {}</code>:</p><ul><li>Impostare il <code>pin 13</code> come <code>output</code></li></ul><p>in <code>void loop(){}</code>:</p><ul><li>Scrivere il valore logico <code>HIGH</code> sul <code>pin 13</code> per fornire <code>5v</code> ed accendere il led tramite l&#39;istruzione <code>digitalWrite()</code></li><li>Inserire un ritardo che esprime il tempo in cui il <code>pin</code> star\xE0 acceso con l&#39;istruzione <code>delay()</code></li><li>Scrivere il valore logico <code>LOW</code> sul <code>pin 13</code> per togliere l&#39;alimentazione e spegnere il led tramite l&#39;istruzione <code>digitalWrite()</code></li><li>Inserire un ritardo che esprime il tempo in cui il <code>pin</code> star\xE0 spento con l&#39;istruzione <code>delay()</code></li></ul><p>Poich\xE8 il <code>void loop(){}</code> esegue in loop le istruzioni, realizzerai un lampeggio del LED infinito.</p><p>Il codice completo:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// initialize digital pin LED_BUILTIN as an output.</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// the loop function runs over and over again forever</span>
<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// turn the LED on (HIGH is the voltage level)</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// wait for a second</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// turn the LED off by making the voltage LOW</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// wait for a second</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adesso \xE8 sufficiente:</p><ul><li>Premere il tasto <code>Verifica</code> che controller\xE0 la sintassi e ti avviser\xE0 se hai inserito qualche comando non valido nella finestra nera in basso</li><li>Premere il tasto <code>Esegui</code> che andr\xE0 a inserire il codice all&#39;interno della memoria di Arduino e a procedere con l&#39;esecuzione dello sketch</li></ul><p>E&#39; possibile trovare questo sketch esempio su <code>File/Esempi/01.Basics/Blink</code></p><p>Apparir\xE0 come:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">/*
  Blink

  Turns an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO
  it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN is set to
  the correct LED pin independent of which board is used.
  If you want to know what pin the on-board LED is connected to on your Arduino
  model, check the Technical Specs of your board at:
  https://www.arduino.cc/en/Main/Products

  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/Blink
*/</span>

<span class="token comment">// the setup function runs once when you press reset or power the board</span>
<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// initialize digital pin LED_BUILTIN as an output.</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>LED_BUILTIN<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// the loop function runs over and over again forever</span>
<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED_BUILTIN<span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// turn the LED on (HIGH is the voltage level)</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// wait for a second</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED_BUILTIN<span class="token punctuation">,</span> LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// turn the LED off by making the voltage LOW</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// wait for a second</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>L&#39;unica differenza che trovi \xE8 <code>LED_BUILTIN</code>. E&#39; una <strong>costante</strong> il cui valore \xE8 pari a <code>13</code>.</p>`,15),u=s("Il valore di tutte le costanti di Arduino le puoi trovare sulla documentazione ufficiale: "),r={href:"https://www.arduino.cc/reference/it/language/variables/constants/constants/",target:"_blank",rel:"noopener noreferrer"},v=s("Arduino - constants");function m(k,b){const e=l("ExternalLinkIcon");return i(),o("div",null,[d,n("p",null,[u,n("a",r,[v,t(e)])])])}var h=a(p,[["render",m],["__file","05.html.vue"]]);export{h as default};
