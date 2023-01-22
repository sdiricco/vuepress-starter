import{_ as n,o as e,c as s,a}from"./app.30ed76b5.js";const i={},o=a(`<h1 id="approfondimento-fade" tabindex="-1"><a class="header-anchor" href="#approfondimento-fade" aria-hidden="true">#</a> Approfondimento Fade</h1><p>Apri lo sketch <code>File/Esempi/01.Basics/Fade</code>.</p><p>Quanto impiega il ciclo di accensione?<br> vista l&#39;espressione <code>brightness = brightness + fadeAmount</code> e visto il ritardo pari a <code>30ms</code>, si ha che <code>brightness</code> passa da 0 <code>255</code> in <code>51</code> step ( <code>255/5</code> ) e quindi il ciclo di accensione graduale dura <code>30ms*51 = 1.53 secondi</code>. Poich\xE8 il ciclo di spegnimento \xE8 simmetrico, se ne deduce che il ciclo completo (accensione + spegnimento) dura poco pi\xF9 di <code>3 secondi</code></p><p>Puoi provare a cambiare il ritardo di <code>30ms</code> o il <code>fadeAmount</code> per cambiare la velocit\xE0 di accensione/spegnimento.</p><p>Puoi anche impostare un valore minimo di <code>brightness</code> e un valore massimo</p><p>Ecco un esempio:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">/*
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
<span class="token keyword">int</span> fadeAmount <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>    <span class="token comment">// how many points to fade the LED by</span>
byte maxBrightness <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
byte minBrightness <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

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
  <span class="token keyword">if</span> <span class="token punctuation">(</span>brightness <span class="token operator">&lt;=</span> minBrightness <span class="token operator">||</span> brightness <span class="token operator">&gt;=</span> maxBrightness<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fadeAmount <span class="token operator">=</span> <span class="token operator">-</span>fadeAmount<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// wait for 3 milliseconds to see the dimming effect</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="frequenza-pwm" tabindex="-1"><a class="header-anchor" href="#frequenza-pwm" aria-hidden="true">#</a> Frequenza PWM</h1><p>Come gi\xE0 detto, Arduino imposta un valore di frequenza per il segnale PWM ma quale? Per Arduino UNO il valore \xE8 <code>490.20 Hz</code> per i pin <code>D3,D9, D10, D11</code> e il valore <code>976.56 Hz</code> per i pin <code>D5 &amp; D6</code>.</p><p>Cosa cambia al variare della frequenza? (una spiegazione qualitativa)<br> IL PWM agisce sul&#39;inerzia elettromeccanica dei componenti. Puoi intuire che abbassando la frequenza il componente possa diventare meno fluido. Se si parla di un LED, a una frequenza molto bassa vedrai lampeggiare il LED. Allo stesso tempo puoi intuire che alzando troppo la frequenza sia difficile per il componente leggere valori di duty cicle troppo piccoli. Nel caso del LED, lo vedrai sempre spento. Per determinare i valori minimi e massimi di frequenza PWM \xE8 necessario eseguire un&#39;analisi dei componenti capacitivi/indutti parassiti e studiare la caratteristica al variare della frequenza. Per adesso comunque ti basta sapere che in linea generale, le frequenze possono andare nei casi pi\xF9 comuni tra <code>[100Hz - 100Khz]</code>. Avrai frequenze piuttosto basse se il componente ha una <em>capacit\xE0 di reazione</em> lenta e frequenze pi\xF9 alte per componenti che hanno una <em>capacit\xE0 di reazione</em> alta</p>`,10),t=[o];function c(p,l){return e(),s("div",null,t)}var r=n(i,[["render",c],["__file","08.html.vue"]]);export{r as default};
