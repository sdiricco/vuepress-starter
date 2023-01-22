import{_ as n,o as s,c as e,a}from"./app.30ed76b5.js";const i={},o=a(`<h1 id="fade" tabindex="-1"><a class="header-anchor" href="#fade" aria-hidden="true">#</a> Fade</h1><p>All&#39;interno della cartella degli esempi standard su <code>File/Esempi/01.Basics/</code>, trovi lo sketch <code>Fade</code></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">/*
  Fade

  This example shows how to fade an LED on pin 9 using the analogWrite()
  function.

  The analogWrite() function uses PWM, so if you want to change the pin you&#39;re
  using, be sure to use another PWM capable pin. On most Arduino, the PWM pins
  are identified with a &quot;~&quot; sign, like ~3, ~5, ~6, ~9, ~10 and ~11.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/Fade
*/</span>

<span class="token keyword">int</span> led <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>           <span class="token comment">// the PWM pin the LED is attached to</span>
<span class="token keyword">int</span> brightness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>    <span class="token comment">// how bright the LED is</span>
<span class="token keyword">int</span> fadeAmount <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>    <span class="token comment">// how many points to fade the LED by</span>

<span class="token comment">// the setup routine runs once when you press reset:</span>
<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// declare pin 9 to be an output:</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// the loop routine runs over and over again forever:</span>
<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// set the brightness of pin 9:</span>
  <span class="token function">analogWrite</span><span class="token punctuation">(</span>led<span class="token punctuation">,</span> brightness<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// change the brightness for next time through the loop:</span>
  brightness <span class="token operator">=</span> brightness <span class="token operator">+</span> fadeAmount<span class="token punctuation">;</span>

  <span class="token comment">// reverse the direction of the fading at the ends of the fade:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>brightness <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> brightness <span class="token operator">&gt;=</span> <span class="token number">255</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fadeAmount <span class="token operator">=</span> <span class="token operator">-</span>fadeAmount<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// wait for 30 milliseconds to see the dimming effect</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In questo esempio il LED, connesso al PIN <code>9</code> si accender\xE0 e si spegner\xE0 in modo graduale. Per ottenere questo effetto si agisce su parametro che regola il <code>duty cicle</code> che in questo programma \xE8 definito dalla variabile <code>brightness</code>.</p><ul><li><p>In pratica il software imposta una <code>brightness</code> pari a <code>0</code> aumenta la variabile <code>brightness</code> del valore pari a <code>fadeAmount</code> (impostata a <code>5</code>) secondo l&#39;espressione <code>brightness = brightness + fadeAmount</code> che diventa quindi <code>brightness = brightness + 5</code></p></li><li><p>Ripete questa operazione ogni <code>30 millisecondi</code>.</p></li></ul><p>In questo modo il LED aumenter\xE0 la sua luminosit\xE0 in modo graduale</p><ul><li><p>Una volta che <code>brightness</code> \xE8 arrivata al valore massimo, <code>brightness &gt;= 255</code>, inverte il valore di <code>fadeAmount</code>. In questo caso quindi l&#39;espressione diventa <code>brightness = brightness - 5</code>.</p></li><li><p>Ripete questa operazione ogni <code>30 millisecondi</code>.</p></li></ul><p>Il risultato \xE8 che il LED diminuir\xE0 la sua luminosit\xE0 in modo graduale.</p><ul><li>Una volta che <code>brightness</code> \xE8 arrivata al valore minimo, <code>brightness &lt;= 0</code>, inverte il valore di <code>fadeAmount</code>. In questo caso quindi l&#39;espressione torna a essere <code>brightness = brightness + 5</code>.</li><li>Ripete questa operazione ogni <code>30 millisecondi</code>.</li></ul><p>E continua fino al reset di Arduino.</p>`,10),t=[o];function c(l,p){return s(),e("div",null,t)}var r=n(i,[["render",c],["__file","07.html.vue"]]);export{r as default};
