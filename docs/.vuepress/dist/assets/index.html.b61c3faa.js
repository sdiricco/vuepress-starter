import{_ as e,o as n,c as i,a}from"./app.30ed76b5.js";const s={},t=a(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> Git init</h2><p>Il comando <code>git init</code> inizializza una repository e la prepara al versionamento con git</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> init

Initialized empty Git repository <span class="token keyword">in</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>/.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In pratica verr\xE0 creata una cartella nascosta <code>.git</code> con il seguente contenuto:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500\u2500 hooks
\u2502   \u251C\u2500\u2500 applypatch-msg.sample
\u2502   \u251C\u2500\u2500 commit-msg.sample
\u2502   \u251C\u2500\u2500 fsmonitor-watchman.sample
\u2502   \u251C\u2500\u2500 post-update.sample
\u2502   \u251C\u2500\u2500 pre-applypatch.sample
\u2502   \u251C\u2500\u2500 pre-commit.sample
\u2502   \u251C\u2500\u2500 pre-merge-commit.sample
\u2502   \u251C\u2500\u2500 pre-push.sample
\u2502   \u251C\u2500\u2500 pre-rebase.sample
\u2502   \u251C\u2500\u2500 pre-receive.sample
\u2502   \u251C\u2500\u2500 prepare-commit-msg.sample
\u2502   \u251C\u2500\u2500 push-to-checkout.sample
\u2502   \u2514\u2500\u2500 update.sample
\u251C\u2500\u2500 info
\u2502   \u2514\u2500\u2500 exclude
\u251C\u2500\u2500 objects
\u2502   \u251C\u2500\u2500 info
\u2502   \u2514\u2500\u2500 pack
\u251C\u2500\u2500 refs
\u2502   \u251C\u2500\u2500 heads
\u2502   \u2514\u2500\u2500 tags
\u251C\u2500\u2500 config
\u251C\u2500\u2500 description
\u2514\u2500\u2500 HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status" aria-hidden="true">#</a> Git status</h2><p>Il comando git status, ritorna lo stato della repository.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status

On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        test.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> Git add</h2><p>Aggiungi un file alla tua <code>repository</code>, ad esempio <code>test.txt</code> e usa <code>git status</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status

On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        test.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adesso puoi aggiungere il file a git</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Puoi usare diverse opzioni per il comando <code>git add</code>:</p><table><thead><tr><th>comando</th><th>descrizione</th></tr></thead><tbody><tr><td><code>git add .</code></td><td>Aggiunge tutti i file e cartelle non tracciati da git al versionamento</td></tr><tr><td><code>git add &lt;file&gt;</code></td><td>Aggiunge solo il <code>&lt;file&gt;</code> al versionamento</td></tr><tr><td><code>git add *.txt</code></td><td>Aggiunge tutti i file con estensione <code>.txt</code> al versionamento</td></tr></tbody></table><h3 id="staging-area" tabindex="-1"><a class="header-anchor" href="#staging-area" aria-hidden="true">#</a> Staging area</h3><p>I file aggiunti a git attraverso il comando <code>git add</code> fanno parte della <strong>staging area</strong></p><h2 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> Git commit</h2><p>Per poter salvare un&#39;itantanea della repository, si utilizza il comando <code>git commit</code>. Il commit verr\xE0 eseguito solo dei file presenti nella <strong>staging area</strong>, cio\xE8 i file precedentemente aggiunti tramite il comando <code>git add</code>. Se non hai file nella <strong>staging area</strong> non verr\xE0 eseguito il commit di alcun file.</p><p>Se hai dei file nella <strong>staging area</strong>, la situazione sar\xE0 la seguente:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A questo punto puoi lanciare il comando <code>git commit</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit
hint: Waiting <span class="token keyword">for</span> your editor to close the file<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Verr\xE0 aperto l&#39;editor di testo default impostato in fase di installazione di git</p><h2 id="comandi-utili" tabindex="-1"><a class="header-anchor" href="#comandi-utili" aria-hidden="true">#</a> Comandi utili</h2><p>Vediamo adesso una lista di comandi utili</p><table><thead><tr><th>comando</th><th>descrizione</th></tr></thead><tbody><tr><td><code>git checkout --track origin/&lt;branch-name&gt;</code></td><td>Crea un branch locale con lo stesso nome del branch remoto e imposta il tracking tra i due</td></tr></tbody></table>`,28),d=[t];function l(o,c){return n(),i("div",null,d)}var u=e(s,[["render",l],["__file","index.html.vue"]]);export{u as default};
