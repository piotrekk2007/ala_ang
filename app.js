// ===== BADGES DEFINITION (global so checkBadges can reference names) =====
const BADGES_DEF = [
  { id:'first_test',   icon:'🎯', name:'Pierwszy test',     desc:'Ukończ swój pierwszy test' },
  { id:'perfect',      icon:'💯', name:'Perfekcja!',        desc:'Zdobądź 100% w teście' },
  { id:'perfect3',     icon:'👑', name:'Królowa 100%',      desc:'Trzy razy z rzędu 100%' },
  { id:'streak3',      icon:'🔥', name:'3 dni z rzędu',     desc:'Ucz się 3 dni z rzędu' },
  { id:'streak7',      icon:'🌟', name:'Tygodniowa passa',  desc:'Ucz się 7 dni z rzędu' },
  { id:'streak14',     icon:'⚡', name:'Dwa tygodnie!',     desc:'Ucz się 14 dni z rzędu' },
  { id:'streak30',     icon:'🚀', name:'Miesiąc nauki!',    desc:'Ucz się 30 dni z rzędu' },
  { id:'five_tests',   icon:'📊', name:'5 testów',          desc:'Ukończ 5 testów' },
  { id:'twenty_tests', icon:'🏅', name:'20 testów',         desc:'Ukończ 20 testów' },
  { id:'fifty_tests',  icon:'🥇', name:'50 testów',         desc:'Ukończ 50 testów' },
  { id:'all_sets',     icon:'🏆', name:'Kolekcjoner',       desc:'Stwórz 3 zestawy słówek' },
  { id:'five_sets',    icon:'📚', name:'Biblioteka',        desc:'Stwórz 5 zestawów słówek' },
  { id:'words50',      icon:'✨', name:'50 słówek',         desc:'Miej 50 słówek w zestawach' },
  { id:'words100',     icon:'🌈', name:'100 słówek!',       desc:'Miej 100 słówek w zestawach' },
  { id:'song_added',   icon:'🎵', name:'Muzyczny geniusz',  desc:'Dodaj swoją pierwszą piosenkę' },
  { id:'songs3',       icon:'🎤', name:'Gwiazda pop',       desc:'Dodaj 3 piosenki' },
  { id:'three_good',   icon:'😎', name:'Passa wyników',     desc:'Trzy razy powyżej 80%' },
  { id:'improved',     icon:'📈', name:'Coraz lepiej!',     desc:'Popraw swój poprzedni wynik' },
];

// ===== STORAGE =====
const DB = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)) || null; } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
};

function getSets()     { return DB.get('sets') || []; }
function saveSets(s)   { DB.set('sets', s); }
function getSongs()    { return DB.get('songs') || []; }
function saveSongs(s)  { DB.set('songs', s); }
function getProgress() { return DB.get('progress') || { streak: { lastDate: null, count: 0 }, badges: [], history: [] }; }
function saveProgress(p) { DB.set('progress', p); }

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

// ===== STREAK =====
function updateStreak() {
  const prog = getProgress();
  const today = new Date().toISOString().slice(0, 10);
  const last = prog.streak.lastDate;
  if (last === today) return prog;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (last === yesterday) { prog.streak.count += 1; }
  else { prog.streak.count = 1; }
  prog.streak.lastDate = today;
  saveProgress(prog);
  return prog;
}

// ===== ROUTER =====
let currentSetId  = null;
let currentSongId = null;

function showView(name, params = {}) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  const el = document.getElementById('view-' + name);
  if (!el) return;
  el.style.display = '';

  if (name === 'home')        renderHome();
  if (name === 'sets-list')   renderSetsList();
  if (name === 'set-edit')    initSetEdit(params.id || null);
  if (name === 'set-detail')  { currentSetId = params.id; renderSetDetail(params.id); }
  if (name === 'songs-list')    renderSongsList();
  if (name === 'song-edit')     initSongEdit(params.id || null);
  if (name === 'song-detail')   { currentSongId = params.id; renderSongDetail(params.id); }
  if (name === 'song-translate'){ currentSongId = params.id; renderTranslate(params.id); }
  if (name === 'song-extract')  { currentSongId = params.id; renderExtract(params.id); }
  if (name === 'hangman')     {} // initialized by startHangman()
  if (name === 'match')       {} // initialized by startMatch()
  if (name === 'progress')    renderProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== HOME =====
function renderHome() {
  const prog = updateStreak();
  const streak = prog.streak.count;
  document.getElementById('hero-greeting').textContent = 'Cześć Ala! 👋';
  document.getElementById('hero-streak').textContent =
    streak > 1 ? `🔥 ${streak} dni z rzędu! Niesamowite!`
    : streak === 1 ? '🌟 Zaczynamy dzisiaj!'
    : '👀 Zaloguj się jutro, żeby utrzymać passę!';

  const sets = getSets();
  const recent = document.getElementById('home-recent');
  if (sets.length === 0) { recent.innerHTML = ''; return; }
  const lastSet = [...sets].sort((a, b) => (b.lastUsed || 0) - (a.lastUsed || 0))[0];
  recent.innerHTML = `
    <h2>📖 Ostatnio ćwiczone</h2>
    <div class="sets-grid" style="max-width:300px">
      ${renderSetCard(lastSet)}
    </div>`;
}

// ===== SETS LIST =====
function renderSetsList() {
  const sets = getSets();
  const grid = document.getElementById('sets-grid');
  if (sets.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📚</div>
      <p>Nie masz jeszcze żadnych zestawów.<br>Stwórz pierwszy!</p>
      <button class="btn btn-primary btn-large" onclick="showView('set-edit',{id:null})">➕ Nowy zestaw</button>
    </div>`;
    return;
  }
  grid.innerHTML = sets.map(renderSetCard).join('');
}

function renderSetCard(s) {
  const best = s.results && s.results.length ? Math.max(...s.results.map(r => r.score)) : 0;
  return `<div class="set-card" onclick="showView('set-detail',{id:'${s.id}'})">
    <div class="set-card-icon">${s.icon || '📚'}</div>
    <div class="set-card-name">${s.name}</div>
    <div class="set-card-count">${s.words.length} słówek</div>
    <div class="set-card-bar"><div class="set-card-fill" style="width:${best}%"></div></div>
    <div style="font-size:.8rem;color:var(--text-light);margin-top:4px">Najlepszy wynik: ${best}%</div>
  </div>`;
}

// ===== SET EDIT =====
const EMOJIS = ['📚','🌈','🐶','🐱','🐸','🦁','🌸','⭐','🍎','🏠','🚗','🎨','🌍','🎭','🦋','🔢','🎯','🏅'];
let editingSetId = null;
let selectedEmoji = '📚';

function initSetEdit(id) {
  editingSetId = id;
  selectedEmoji = '📚';
  document.getElementById('set-edit-title').textContent = id ? 'Edytuj zestaw' : 'Nowy zestaw';
  document.getElementById('delete-set-btn').style.display = id ? '' : 'none';
  document.getElementById('bulk-input').value = '';

  const emojiPicker = document.getElementById('emoji-picker');
  emojiPicker.innerHTML = EMOJIS.map(e =>
    `<span class="emoji-opt${e === selectedEmoji ? ' selected' : ''}" onclick="selectEmoji('${e}')">${e}</span>`
  ).join('');

  if (id) {
    const set = getSets().find(s => s.id === id);
    if (!set) return;
    document.getElementById('set-name-input').value = set.name;
    selectedEmoji = set.icon || '📚';
    document.querySelectorAll('.emoji-opt').forEach(el => {
      el.classList.toggle('selected', el.textContent === selectedEmoji);
    });
    renderWordRows(set.words);
  } else {
    document.getElementById('set-name-input').value = '';
    renderWordRows([{ id: uid(), en: '', pl: '' }, { id: uid(), en: '', pl: '' }]);
  }
}

function selectEmoji(e) {
  selectedEmoji = e;
  document.querySelectorAll('.emoji-opt').forEach(el => el.classList.toggle('selected', el.textContent === e));
}

function renderWordRows(words) {
  const table = document.getElementById('words-table');
  table.innerHTML = words.map((w, i) => `
    <div class="word-row" id="row-${w.id}">
      <input type="text" value="${esc(w.en)}" placeholder="Angielski" class="word-en-input" data-id="${w.id}"
        onkeydown="if(event.key==='Enter')addWordRow()" />
      <input type="text" value="${esc(w.pl)}" placeholder="Polski" class="word-pl-input" data-id="${w.id}"
        onkeydown="if(event.key==='Enter')addWordRow()" />
      <button class="delete-word-btn" onclick="removeWordRow('${w.id}')">✕</button>
    </div>`).join('');
}

function getWordRowsData() {
  return Array.from(document.querySelectorAll('.word-row')).map(row => ({
    id: row.id.replace('row-', ''),
    en: row.querySelector('.word-en-input').value.trim(),
    pl: row.querySelector('.word-pl-input').value.trim(),
  })).filter(w => w.en || w.pl);
}

function addWordRow() {
  const newId = uid();
  const row = document.createElement('div');
  row.className = 'word-row';
  row.id = 'row-' + newId;
  row.innerHTML = `
    <input type="text" placeholder="Angielski" class="word-en-input" data-id="${newId}"
      onkeydown="if(event.key==='Enter')addWordRow()" />
    <input type="text" placeholder="Polski" class="word-pl-input" data-id="${newId}"
      onkeydown="if(event.key==='Enter')addWordRow()" />
    <button class="delete-word-btn" onclick="removeWordRow('${newId}')">✕</button>`;
  document.getElementById('words-table').appendChild(row);
  row.querySelector('.word-en-input').focus();
}

function removeWordRow(id) {
  const row = document.getElementById('row-' + id);
  if (row) row.remove();
}

function parseBulk() {
  const raw = document.getElementById('bulk-input').value;
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  const words = lines.map(l => {
    const sep = l.includes('=') ? '=' : l.includes('-') ? '-' : null;
    if (!sep) return null;
    const [en, ...rest] = l.split(sep);
    return { id: uid(), en: en.trim(), pl: rest.join(sep).trim() };
  }).filter(Boolean);
  if (!words.length) { showToast('Nie znaleziono słówek. Użyj formatu: angielski = polski'); return; }
  const existing = getWordRowsData();
  renderWordRows([...existing, ...words]);
  document.getElementById('bulk-input').value = '';
  showToast(`✅ Dodano ${words.length} słówek!`);
}

function saveSet() {
  const name = document.getElementById('set-name-input').value.trim();
  if (!name) { showToast('Podaj nazwę zestawu!'); return; }
  const words = getWordRowsData();
  if (!words.length) { showToast('Dodaj przynajmniej jedno słówko!'); return; }

  const sets = getSets();
  if (editingSetId) {
    const idx = sets.findIndex(s => s.id === editingSetId);
    if (idx >= 0) {
      sets[idx] = { ...sets[idx], name, icon: selectedEmoji, words };
    }
  } else {
    sets.push({ id: uid(), name, icon: selectedEmoji, words, results: [], createdAt: today(), lastUsed: Date.now() });
  }
  saveSets(sets);
  showToast('✅ Zestaw zapisany!');
  showView('sets-list');
}

function deleteSet() {
  showModal('Usuń zestaw', 'Na pewno chcesz usunąć ten zestaw? Nie można tego cofnąć.', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSets(getSets().filter(s => s.id !== editingSetId));
      closeModal();
      showView('sets-list');
      showToast('Zestaw usunięty.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

function deleteCurrentSet() {
  showModal('Usuń zestaw', 'Na pewno chcesz usunąć ten zestaw? Nie można tego cofnąć.', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSets(getSets().filter(s => s.id !== currentSetId));
      closeModal();
      showView('sets-list');
      showToast('Zestaw usunięty.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

function exportSet() {
  const words = getWordRowsData();
  const name = document.getElementById('set-name-input').value.trim() || 'zestaw';
  const data = { name, icon: selectedEmoji, words };
  downloadJSON(data, `zestaw_${slug(name)}.json`);
  showToast('📤 Plik pobrany!');
}

function importSet() { document.getElementById('import-file').click(); }

function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.words || !Array.isArray(data.words)) throw new Error();
      const sets = getSets();
      const newSet = {
        id: uid(),
        name: data.name || 'Importowany zestaw',
        icon: data.icon || '📚',
        words: data.words.map(w => ({ id: uid(), en: w.en || '', pl: w.pl || '' })),
        results: [],
        createdAt: today(),
        lastUsed: Date.now(),
      };
      sets.push(newSet);
      saveSets(sets);
      showToast(`✅ Zaimportowano "${newSet.name}"!`);
      renderSetsList();
    } catch { showToast('❌ Błędny plik JSON!'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ===== SET DETAIL =====
function renderSetDetail(id) {
  const set = getSets().find(s => s.id === id);
  if (!set) { showView('sets-list'); return; }
  document.getElementById('set-detail-title').textContent = `${set.icon || '📚'} ${set.name}`;

  const best = set.results && set.results.length ? Math.max(...set.results.map(r => r.score)) : null;
  const attempts = set.results ? set.results.length : 0;
  document.getElementById('set-detail-stats').innerHTML = `
    <div class="stat-badge"><div class="stat-num">${set.words.length}</div><div class="stat-label">Słówek</div></div>
    <div class="stat-badge"><div class="stat-num">${attempts}</div><div class="stat-label">Testów</div></div>
    <div class="stat-badge"><div class="stat-num">${best !== null ? best + '%' : '—'}</div><div class="stat-label">Najlepszy wynik</div></div>`;

  document.getElementById('set-words-preview').innerHTML = `
    <div class="words-preview-header">
      <h3>Wszystkie słówka (${set.words.length})</h3>
      <button class="btn btn-ghost" id="toggle-words-btn" onclick="toggleWordsList()">👁️ Pokaż</button>
    </div>
    <div id="words-list-body" style="display:none">
      ${set.words.map(w => `<div class="words-list-item">
        <span class="word-en">${esc(w.en)}</span>
        <span class="word-pl">${esc(w.pl)}</span>
      </div>`).join('')}
    </div>`;
}

function editCurrentSet() {
  showView('set-edit', { id: currentSetId });
}

// ===== LEARN MODE =====
let learnQueue   = [];
let learnSetId   = null;
let learnCorrect = 0;
let learnTotal   = 0;
let learnReverse = false; // false = eng→pol, true = pol→eng

function startLearn(reverse) {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || !set.words.length) { showToast('Brak słówek!'); return; }
  learnSetId   = currentSetId;
  learnReverse = reverse || false;
  learnQueue   = shuffle([...set.words]);
  learnCorrect = 0;
  learnTotal   = learnQueue.length;

  document.getElementById('learn-title').textContent = `📖 ${set.name}`;
  updateDirectionBadge('learn');
  showView('learn');
  showLearnWord();
}

function toggleLearnSwap() {
  learnReverse = !learnReverse;
  updateDirectionBadge('learn');
  learnQueue   = shuffle([...getSets().find(s => s.id === learnSetId).words]);
  learnCorrect = 0;
  learnTotal   = learnQueue.length;
  showLearnWord();
}

function updateDirectionBadge(mode) {
  const id = mode === 'learn' ? 'learn-direction-badge' : 'test-direction-badge';
  const rev = mode === 'learn' ? learnReverse : testReverse;
  document.getElementById(id).textContent = rev ? '🇵🇱 Polski → 🇬🇧 Angielski' : '🇬🇧 Angielski → 🇵🇱 Polski';
}

function showLearnWord() {
  if (learnQueue.length === 0) {
    showToast(`🎉 Koniec! Wszystkie słówka nauczone!`);
    showView('set-detail', { id: learnSetId });
    return;
  }
  const word = learnQueue[0];
  const done = learnTotal - learnQueue.length;
  document.getElementById('learn-progress-fill').style.width = (done / learnTotal * 100) + '%';
  document.getElementById('learn-counter').textContent = `${done} / ${learnTotal}`;
  document.getElementById('learn-word').textContent = learnReverse ? word.pl.split('/')[0].trim() : word.en;
  document.getElementById('learn-hint').textContent = learnReverse ? 'Jak to jest po angielsku?' : 'Jak to jest po polsku?';
  document.getElementById('learn-input').placeholder = learnReverse ? 'Wpisz po angielsku...' : 'Wpisz po polsku...';
  document.getElementById('learn-input').value = '';
  document.getElementById('learn-input').className = 'learn-answer-input';
  document.getElementById('learn-feedback').style.display = 'none';
  document.getElementById('learn-check-btn').style.display = '';
  setTimeout(() => document.getElementById('learn-input').focus(), 50);
}

function checkLearnAnswer() {
  const word  = learnQueue[0];
  const input = document.getElementById('learn-input');
  const ans   = input.value.trim();
  if (!ans) return;

  const expected = learnReverse ? word.en : word.pl;
  const correct  = isCorrectAnswer(ans, expected);
  document.getElementById('learn-check-btn').style.display = 'none';
  document.getElementById('learn-feedback').style.display = '';
  setTimeout(() => document.getElementById('learn-input').focus(), 50);

  if (correct) {
    input.className = 'learn-answer-input correct';
    document.getElementById('feedback-icon').textContent = '✅';
    document.getElementById('feedback-text').innerHTML = `<span class="correct-answer">Świetnie!</span> Dokładnie tak!`;
    learnCorrect++;
    learnQueue.shift();
  } else {
    input.className = 'learn-answer-input incorrect';
    document.getElementById('feedback-icon').textContent = '❌';
    document.getElementById('feedback-text').innerHTML = `Twoja odpowiedź: <b style="color:var(--red)">${esc(ans)}</b>`;
    document.getElementById('learn-word').innerHTML =
      `<span style="font-size:0.85rem;color:var(--text-muted);display:block;margin-bottom:4px">Poprawna odpowiedź:</span>` +
      `<span style="color:var(--green);font-size:2rem;font-weight:900">${esc(formatExpected(expected))}</span>`;
    learnQueue.push(learnQueue.shift());
  }
}

function nextLearnWord() { showLearnWord(); }

function exitLearn() { showView('set-detail', { id: learnSetId }); }

function toggleWordsList() {
  const body = document.getElementById('words-list-body');
  const btn  = document.getElementById('toggle-words-btn');
  const hidden = body.style.display === 'none';
  body.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? '🙈 Ukryj' : '👁️ Pokaż';
}

// ===== TEST MODE =====
let testQueue    = [];
let testResults  = [];
let testSetId    = null;
let testCurrent  = 0;
let testReverse  = false;

function startTest(reverse) {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || !set.words.length) { showToast('Brak słówek!'); return; }
  testSetId   = currentSetId;
  testReverse = reverse || false;
  testQueue   = shuffle([...set.words]);
  testResults = [];
  testCurrent = 0;

  document.getElementById('test-title').textContent = `✏️ ${set.name}`;
  updateDirectionBadge('test');
  showView('test');
  showTestWord();
}

function toggleTestSwap() {
  testReverse = !testReverse;
  updateDirectionBadge('test');
  testQueue   = shuffle([...getSets().find(s => s.id === testSetId).words]);
  testResults = [];
  testCurrent = 0;
  showTestWord();
}

function showTestWord() {
  if (testCurrent >= testQueue.length) { finishTest(); return; }
  const word  = testQueue[testCurrent];
  const total = testQueue.length;
  document.getElementById('test-progress-fill').style.width = (testCurrent / total * 100) + '%';
  document.getElementById('test-counter').textContent = `${testCurrent + 1} / ${total}`;
  document.getElementById('test-word').textContent = testReverse ? word.pl.split('/')[0].trim() : word.en;
  document.getElementById('test-input').value = '';
  document.getElementById('test-input').placeholder = testReverse ? 'Wpisz po angielsku...' : 'Wpisz po polsku...';
  document.getElementById('test-input').className = 'learn-answer-input';
  document.getElementById('test-feedback').style.display = 'none';
  document.getElementById('test-check-btn').style.display = '';
  setTimeout(() => document.getElementById('test-input').focus(), 50);
}

function checkTestAnswer() {
  const word     = testQueue[testCurrent];
  const input    = document.getElementById('test-input');
  const ans      = input.value.trim();
  if (!ans) return;

  const expected = testReverse ? word.en : word.pl;
  const correct  = isCorrectAnswer(ans, expected);
  testResults.push({ word, ans, correct, expected });
  document.getElementById('test-check-btn').style.display = 'none';
  document.getElementById('test-feedback').style.display = '';

  if (correct) {
    input.className = 'learn-answer-input correct';
    document.getElementById('test-feedback-icon').textContent = '✅';
    document.getElementById('test-feedback-text').innerHTML = `<span class="correct-answer">Doskonale!</span>`;
  } else {
    input.className = 'learn-answer-input incorrect';
    document.getElementById('test-feedback-icon').textContent = '❌';
    document.getElementById('test-feedback-text').innerHTML = `Poprawnie: <span class="correct-answer">${esc(formatExpected(expected))}</span>`;
  }
}

function nextTestWord() { testCurrent++; showTestWord(); }

function finishTest() {
  const total   = testResults.length;
  const correct = testResults.filter(r => r.correct).length;
  const pct     = Math.round(correct / total * 100);
  const stars   = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;

  // Save result
  const sets = getSets();
  const idx  = sets.findIndex(s => s.id === testSetId);
  if (idx >= 0) {
    if (!sets[idx].results) sets[idx].results = [];
    sets[idx].results.push({ date: today(), score: pct, total, correct });
    sets[idx].lastUsed = Date.now();
    saveSets(sets);
  }

  // Save to progress history
  const prog = getProgress();
  const set  = getSets().find(s => s.id === testSetId);
  prog.history.unshift({ date: today(), setName: set ? set.name : '?', score: pct, correct, total, stars });
  prog.history = prog.history.slice(0, 50);
  checkBadges(prog, pct, sets);
  saveProgress(prog);

  // Render result
  document.getElementById('result-emoji').textContent = pct === 100 ? '🎉' : pct >= 80 ? '😄' : pct >= 50 ? '🙂' : '💪';
  document.getElementById('result-title').textContent = pct === 100 ? 'Perfekcyjnie!' : pct >= 80 ? 'Świetnie!' : pct >= 50 ? 'Nieźle!' : 'Ćwicz dalej!';
  document.getElementById('result-score').textContent = pct + '%';
  document.getElementById('result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  const details = testResults.map(r => `
    <div class="result-row ${r.correct ? 'correct' : 'incorrect'}">
      <span><b>${esc(testReverse ? r.word.pl : r.word.en)}</b> → ${esc(formatExpected(r.expected))}</span>
      <span class="result-row-status">${r.correct ? '✅' : '❌ ' + esc(r.ans)}</span>
    </div>`).join('');
  document.getElementById('result-details').innerHTML = details;

  showView('test-result');
}

function exitTest() { showView('set-detail', { id: testSetId }); }

// ===== SONGS LIST =====
function renderSongsList() {
  const songs = getSongs();
  const grid  = document.getElementById('songs-grid');
  if (!songs.length) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🎵</div>
      <p>Nie masz jeszcze żadnych piosenek.</p>
      <button class="btn btn-primary btn-large" onclick="showView('song-edit',{id:null})">➕ Dodaj piosenkę</button>
    </div>`;
    return;
  }
  grid.innerHTML = songs.map(s => `
    <div class="song-card" onclick="showView('song-detail',{id:'${s.id}'})">
      <div class="song-card-icon">🎵</div>
      <div class="song-card-title">${esc(s.title)}</div>
      <div class="song-card-artist">${esc(s.artist || '')}</div>
    </div>`).join('');
}

// ===== SONG EDIT =====
let editingSongId = null;

function initSongEdit(id) {
  editingSongId = id;
  document.getElementById('song-edit-title').textContent = id ? 'Edytuj piosenkę' : 'Nowa piosenka';
  document.getElementById('delete-song-btn').style.display = id ? '' : 'none';
  if (id) {
    const song = getSongs().find(s => s.id === id);
    if (!song) return;
    document.getElementById('song-title-input').value  = song.title || '';
    document.getElementById('song-artist-input').value = song.artist || '';
    document.getElementById('song-yt-input').value     = song.ytUrl || '';
    document.getElementById('song-en-input').value     = song.verses.map(v => v.en).join('\n\n');
    document.getElementById('song-pl-input').value     = song.verses.map(v => v.pl).join('\n\n');
  } else {
    ['song-title-input','song-artist-input','song-yt-input','song-en-input','song-pl-input']
      .forEach(id => document.getElementById(id).value = '');
  }
}

function saveSong() {
  const title  = document.getElementById('song-title-input').value.trim();
  const artist = document.getElementById('song-artist-input').value.trim();
  const ytRaw  = document.getElementById('song-yt-input').value.trim();
  // Accept full <iframe> embed code — extract src from it
  const iframeSrc = ytRaw.match(/src=["']([^"']+)["']/);
  const ytUrl  = iframeSrc ? iframeSrc[1] : ytRaw;
  const enRaw  = document.getElementById('song-en-input').value.trim();
  const plRaw  = document.getElementById('song-pl-input').value.trim();

  if (!title) { showToast('Podaj tytuł piosenki!'); return; }
  if (!enRaw) { showToast('Dodaj tekst piosenki po angielsku!'); return; }

  const enVerses = splitVerses(enRaw);
  const plVerses = splitVerses(plRaw);
  const verses   = enVerses.map((en, i) => ({ en, pl: plVerses[i] || '' }));

  const songs = getSongs();
  if (editingSongId) {
    const idx = songs.findIndex(s => s.id === editingSongId);
    if (idx >= 0) songs[idx] = { ...songs[idx], title, artist, ytUrl, verses };
  } else {
    songs.push({ id: uid(), title, artist, ytUrl, verses, createdAt: today() });
  }
  saveSongs(songs);
  showToast('✅ Piosenka zapisana!');
  showView('songs-list');
}

function deleteSong() {
  showModal('Usuń piosenkę', 'Na pewno chcesz usunąć tę piosenkę?', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSongs(getSongs().filter(s => s.id !== editingSongId));
      closeModal();
      showView('songs-list');
      showToast('Piosenka usunięta.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

function editCurrentSong() { showView('song-edit', { id: currentSongId }); }

function deleteCurrentSong() {
  showModal('Usuń piosenkę', 'Na pewno chcesz usunąć tę piosenkę?', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSongs(getSongs().filter(s => s.id !== currentSongId));
      closeModal();
      showView('songs-list');
      showToast('Piosenka usunięta.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

// ===== SONG DETAIL =====
function renderSongDetail(id) {
  const song = getSongs().find(s => s.id === id);
  if (!song) { showView('songs-list'); return; }
  document.getElementById('song-detail-title').textContent = `🎵 ${song.title}`;

  renderYtPlayer('song-yt-player', song.ytUrl);

  // Verses
  const versesEl = document.getElementById('song-verses');
  versesEl.innerHTML = song.verses.map((v, i) => `
    <div class="verse-block" id="verse-${i}">
      <div class="verse-en">${esc(v.en)}</div>
      ${v.pl ? `
        <button class="verse-reveal-btn" onclick="revealVerse(${i})">👁️ Pokaż tłumaczenie</button>
        <div class="verse-pl" id="verse-pl-${i}">${esc(v.pl)}</div>` : ''}
    </div>`).join('');
}

function renderYtPlayer(elId, ytUrl) {
  const el = document.getElementById(elId);
  if (!ytUrl) { el.innerHTML = ''; return; }
  const ytId = extractYtId(ytUrl);
  if (!ytId) {
    el.innerHTML = `<a href="${esc(ytUrl)}" target="_blank" class="btn btn-secondary yt-open-btn">▶️ Otwórz piosenkę na YouTube</a>`;
    return;
  }
  el.innerHTML = `
    <iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
    <div class="yt-fallback-bar">
      <span class="yt-fallback-hint">Jeśli widzisz błąd 153 → film ma zablokowane osadzanie, szukaj innej wersji</span>
      <a href="${esc(ytUrl.replace('youtube-nocookie.com','youtube.com'))}" target="_blank" class="btn btn-secondary" style="padding:6px 14px;font-size:0.85rem">▶️ Otwórz w YouTube</a>
    </div>`;
}

function revealVerse(i) {
  const plEl = document.getElementById('verse-pl-' + i);
  const btn  = plEl.previousElementSibling;
  if (plEl) { plEl.style.display = 'block'; if (btn) btn.style.display = 'none'; }
}

function revealAll() {
  document.querySelectorAll('.verse-pl').forEach(el => el.style.display = 'block');
  document.querySelectorAll('.verse-reveal-btn').forEach(el => el.style.display = 'none');
}

function hideAll() {
  document.querySelectorAll('.verse-pl').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.verse-reveal-btn').forEach(el => el.style.display = '');
}

// ===== SONG TRANSLATE MODE =====
function renderTranslate(id) {
  const song = getSongs().find(s => s.id === id);
  if (!song) return;
  document.getElementById('translate-title').textContent = `✍️ ${song.title}`;
  renderYtPlayer('translate-yt-player', song.ytUrl);

  const verses = (song.verses || []);
  document.getElementById('translate-verses').innerHTML = verses.map((v, i) => `
    <div class="translate-verse">
      <div class="verse-en translate-en-clickable">${makeClickableWords(v.en)}</div>
      <div class="translate-hint">💡 Kliknij na słowo, żeby sprawdzić tłumaczenie w Google</div>
      <textarea id="tr-input-${i}" placeholder="Wpisz tutaj swoje tłumaczenie po polsku...">${esc(v.pl || '')}</textarea>
      ${v.pl ? '<div class="verse-saved-badge">✅ Tłumaczenie zapisane</div>' : ''}
    </div>`).join('');
}

function makeClickableWords(text) {
  if (!text) return '';
  return text.split(/(\s+)/).map(token => {
    const clean = token.replace(/[^a-zA-Z'-]/g, '');
    if (!clean) return esc(token);
    const url = `https://translate.google.com/?sl=en&tl=pl&text=${encodeURIComponent(clean)}&op=translate`;
    // Only open link if nothing is selected (prevents conflict with drag-select)
    return `<a href="${url}" target="_blank" class="clickable-word" title="Sprawdź w Google Translate"
      onclick="if(window.getSelection().toString().trim().length>1){event.preventDefault();}">${esc(token)}</a>`;
  }).join('');
}

function saveTranslation() {
  const songs = getSongs();
  const idx   = songs.findIndex(s => s.id === currentSongId);
  if (idx < 0) return;
  songs[idx].verses = songs[idx].verses.map((v, i) => {
    const input = document.getElementById('tr-input-' + i);
    return { ...v, pl: input ? input.value.trim() : v.pl };
  });
  saveSongs(songs);
  showToast('✅ Tłumaczenie zapisane!');
  showView('song-detail', { id: currentSongId });
}

// ===== EXTRACT WORDS FROM SONG =====
let extractSelectedWords = {};

function extractWordsFromSong() {
  showView('song-extract', { id: currentSongId });
}

function renderExtract(id) {
  const song = getSongs().find(s => s.id === id);
  if (!song) return;
  extractSelectedWords = {};

  const fullText = song.verses.map(v => v.en).join('\n\n');
  const words    = fullText.split(/[\s\n\r]+/).map(w => w.replace(/[^a-zA-Z'-]/g, '').toLowerCase()).filter(Boolean);
  const unique   = [...new Set(words)];

  const extractEl = document.getElementById('extract-text');
  extractEl.innerHTML = song.verses.map((v, vi) =>
    '<p>' + v.en.split(/\s+/).map(raw => {
      const clean = raw.replace(/[^a-zA-Z'-]/g, '').toLowerCase();
      if (!clean) return raw;
      return `<span class="extract-word" data-word="${clean}" onclick="toggleExtractWord('${clean}', this)">${raw}</span>`;
    }).join(' ') + '</p>'
  ).join('<br>');

  document.getElementById('selected-words-list').innerHTML = '';
  document.getElementById('extract-set-name').value = song.title ? `Słówka z "${song.title}"` : 'Słówka z piosenki';
}

async function fetchTranslation(word) {
  const w = word.toLowerCase();
  // 1. Offline dictionary
  if (typeof OFFLINE_DICT !== 'undefined' && OFFLINE_DICT[w]) return OFFLINE_DICT[w];
  // 2. MyMemory fallback
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|pl`);
    const data = await res.json();
    const t = data?.responseData?.translatedText;
    if (t && t.toLowerCase() !== w) return t;
  } catch {}
  return '';
}

async function toggleExtractWord(word, el) {
  if (extractSelectedWords[word] !== undefined) {
    delete extractSelectedWords[word];
    document.querySelectorAll(`.extract-word[data-word="${word}"]`).forEach(e => e.classList.remove('selected'));
    renderSelectedChips();
  } else {
    extractSelectedWords[word] = '';
    document.querySelectorAll(`.extract-word[data-word="${word}"]`).forEach(e => e.classList.add('selected'));
    renderSelectedChips();
    const pl = await fetchTranslation(word);
    if (extractSelectedWords[word] !== undefined && extractSelectedWords[word] === '') {
      extractSelectedWords[word] = pl;
      renderSelectedChips();
    }
  }
}

function renderSelectedChips() {
  const list = document.getElementById('selected-words-list');
  list.innerHTML = Object.keys(extractSelectedWords).map(w => `
    <span class="selected-word-chip">
      <b>${w}</b> =
      <input type="text" placeholder="tłumaczenie" value="${esc(extractSelectedWords[w])}"
        oninput="extractSelectedWords['${w}']=this.value" />
      <span class="chip-remove" onclick="toggleExtractWord('${w}')">✕</span>
    </span>`).join('');
}

function saveExtractedWords() {
  const entries = Object.entries(extractSelectedWords).filter(([w, pl]) => w);
  if (!entries.length) { showToast('Wybierz przynajmniej jedno słówko!'); return; }
  const name  = document.getElementById('extract-set-name').value.trim() || 'Słówka z piosenki';
  const words = entries.map(([en, pl]) => ({ id: uid(), en, pl }));
  const sets  = getSets();
  sets.push({ id: uid(), name, icon: '🎵', words, results: [], createdAt: today(), lastUsed: Date.now() });
  saveSets(sets);
  showToast(`✅ Zestaw "${name}" zapisany!`);
  showView('sets-list');
}

// ===== PROGRESS =====
function renderProgress() {
  const prog   = getProgress();
  const streak = prog.streak.count;

  document.getElementById('progress-streak').innerHTML =
    `🔥 Passa: <b>${streak} ${streak === 1 ? 'dzień' : streak < 5 ? 'dni' : 'dni'} z rzędu!</b>
    <div style="font-size:1rem;font-weight:400;margin-top:6px">Ucz się codziennie, żeby utrzymać passę!</div>`;

  // use global BADGES_DEF

  document.getElementById('badges-grid').innerHTML = BADGES_DEF.map(b => `
    <div class="badge-item ${prog.badges.includes(b.id) ? '' : 'locked'}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
    </div>`).join('');

  if (!prog.history || !prog.history.length) {
    document.getElementById('test-history').innerHTML = '<p style="color:var(--text-light)">Brak historii testów. Rozwiąż swój pierwszy test!</p>';
    return;
  }
  document.getElementById('test-history').innerHTML = prog.history.map(h => `
    <div class="history-item">
      <span class="history-date">${h.date}</span>
      <span class="history-set">${esc(h.setName)}</span>
      <span class="history-score">${h.score}%</span>
      <span class="history-stars">${'⭐'.repeat(h.stars || 1)}</span>
    </div>`).join('');
}

function checkBadges(prog, pct, sets) {
  const add = id => { if (!prog.badges.includes(id)) { prog.badges.push(id); showToast(`🎖️ Nowa odznaka: ${BADGES_DEF.find(b=>b.id===id)?.name || id}!`); } };
  const history = prog.history;
  const totalWords = sets.reduce((s, set) => s + (set.words?.length || 0), 0);
  if (history.length >= 1)               add('first_test');
  if (pct === 100)                        add('perfect');
  if (history.filter(h=>h.score===100).length >= 3) add('perfect3');
  if (prog.streak.count >= 3)            add('streak3');
  if (prog.streak.count >= 7)            add('streak7');
  if (prog.streak.count >= 14)           add('streak14');
  if (prog.streak.count >= 30)           add('streak30');
  if (history.length >= 5)              add('five_tests');
  if (history.length >= 20)             add('twenty_tests');
  if (history.length >= 50)             add('fifty_tests');
  if (sets.length >= 3)                  add('all_sets');
  if (sets.length >= 5)                  add('five_sets');
  if (totalWords >= 50)                  add('words50');
  if (totalWords >= 100)                 add('words100');
  if (getSongs().length >= 1)            add('song_added');
  if (getSongs().length >= 3)            add('songs3');
  if (pct >= 80 && history.length >= 3 && history.slice(0,3).every(h=>h.score>=80)) add('three_good');
  const setResults = sets.find(s=>s.id===testSetId)?.results || [];
  if (setResults.length >= 2 && pct > (setResults[setResults.length-2]?.score||0)) add('improved');
}

// ===== MODAL =====
function showModal(title, body, buttons) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent  = body;
  document.getElementById('modal-actions').innerHTML = buttons.map((b, i) =>
    `<button class="btn ${b.cls}" onclick="modalActions[${i}]()">${b.label}</button>`
  ).join('');
  window.modalActions = buttons.map(b => b.action);
  document.getElementById('modal-overlay').style.display = 'flex';
}
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }

// ===== TOAST =====
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.style.display = 'none', 2800);
}

// ===== HELPERS =====
function esc(s) {
  if (!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function today() { return new Date().toISOString().slice(0, 10); }

function slug(s) { return s.toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_]/g,''); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Accept answer against expected (which may contain variants separated by '/')
function isCorrectAnswer(ans, expected) {
  const variants = expected.split('/').map(v => v.trim()).filter(Boolean);
  return variants.some(v => isSimilar(ans, v));
}

// Show all variants nicely formatted
function formatExpected(expected) {
  return expected.split('/').map(v => v.trim()).join(' / ');
}

function isSimilar(a, b) {
  a = a.trim().toLowerCase().replace(/[^a-ząćęłńóśźż\s]/gi, '');
  b = b.trim().toLowerCase().replace(/[^a-ząćęłńóśźż\s]/gi, '');
  if (a === b) return true;
  // Allow 1 typo for words ≥4 chars
  if (b.length >= 4 && levenshtein(a, b) <= 1) return true;
  return false;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, (_, i) => Array.from({length: n+1}, (_, j) => i ? (j ? 0 : i) : j));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

function splitVerses(text) {
  return text.split(/\n\n+/).map(v => v.trim()).filter(Boolean);
}

function extractYtId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ===== HANGMAN =====
const HANGMAN_PARTS = ['h-head','h-body','h-larm','h-rarm','h-lleg','h-rleg'];
let hangmanSetId   = null;
let hangmanQueue   = [];
let hangmanWord    = '';
let hangmanGuessed = [];
let hangmanWrong   = 0;
let hangmanCorrect = 0;
let hangmanTotal   = 0;
const MAX_WRONG    = 6;

function startHangman() {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || !set.words.length) { showToast('Brak słówek!'); return; }
  hangmanSetId = currentSetId;
  hangmanQueue = shuffle([...set.words]);
  hangmanCorrect = 0;
  hangmanWrong   = 0;
  hangmanTotal   = hangmanQueue.length;
  document.getElementById('hangman-title').textContent = `🪢 ${set.name}`;
  showView('hangman');
  nextHangmanWord();
}

function nextHangmanWord() {
  if (!hangmanQueue.length) {
    showHangmanGameOver();
    return;
  }
  const word = hangmanQueue.shift();
  hangmanWord    = word.en.toLowerCase();
  hangmanGuessed = [];

  // Pokaż tylko tyle części wisielca ile błędów już popełniono
  HANGMAN_PARTS.forEach((id, i) => {
    document.getElementById(id).style.display = i < hangmanWrong ? '' : 'none';
  });
  document.getElementById('hangman-result').style.display = 'none';
  document.getElementById('hangman-keyboard').style.display = '';

  document.getElementById('hangman-clue').textContent = `Znaczenie: ${word.pl}`;
  document.getElementById('hangman-score-badge').textContent = `✅ ${hangmanCorrect} odgadniętych`;
  renderHangmanWord();
  renderHangmanWrong();
  renderHangmanKeyboard();
}

function renderHangmanWord() {
  const letters = hangmanWord.split('');
  document.getElementById('hangman-word').innerHTML = letters.map(l => {
    if (l === ' ') return `<span class="hangman-letter space"></span>`;
    const shown = hangmanGuessed.includes(l) ? l : '';
    return `<span class="hangman-letter">${shown}</span>`;
  }).join('');
}

function renderHangmanWrong() {
  const wrongThisWord = hangmanGuessed.filter(l => !hangmanWord.includes(l));
  document.getElementById('hangman-wrong-letters').textContent = wrongThisWord.length ? '✗ ' + wrongThisWord.join('  ') : '';
  document.getElementById('hangman-wrong-count').textContent = `Błędy: ${hangmanWrong} / ${MAX_WRONG}`;
}

function renderHangmanKeyboard() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const plLetters = ['ą','ć','ę','ł','ń','ó','ś','ź','ż'];
  const allLetters = [...letters, ...plLetters];
  document.getElementById('hangman-keyboard').innerHTML =
    letters.map(l => {
      const used    = hangmanGuessed.includes(l);
      const correct = used && hangmanWord.includes(l);
      const wrong   = used && !hangmanWord.includes(l);
      return `<button class="hangman-key ${correct?'correct':''} ${wrong?'wrong':''}"
        onclick="guessLetter('${l}')" ${used?'disabled':''}>${l}</button>`;
    }).join('') +
    `<div class="hangman-pl-row">` +
    plLetters.map(l => {
      const used    = hangmanGuessed.includes(l);
      const correct = used && hangmanWord.includes(l);
      const wrong   = used && !hangmanWord.includes(l);
      return `<button class="hangman-key ${correct?'correct':''} ${wrong?'wrong':''}"
        onclick="guessLetter('${l}')" ${used?'disabled':''}>${l}</button>`;
    }).join('') +
    `</div>`;
}

function guessLetter(l) {
  if (hangmanGuessed.includes(l)) return;
  hangmanGuessed.push(l);

  if (!hangmanWord.includes(l)) {
    hangmanWrong++;
    const part = document.getElementById(HANGMAN_PARTS[hangmanWrong - 1]);
    if (part) part.style.display = '';
  }

  renderHangmanWord();
  renderHangmanWrong();
  renderHangmanKeyboard();

  // Check win (this word)
  const allGuessed = hangmanWord.split('').every(l => l === ' ' || hangmanGuessed.includes(l));
  if (allGuessed) {
    hangmanCorrect++;
    showHangmanResult(true);
    return;
  }
  // Check game over (6 błędów łącznie)
  if (hangmanWrong >= MAX_WRONG) {
    showHangmanResult(false);
  }
}

function showHangmanResult(won) {
  document.getElementById('hangman-keyboard').style.display = 'none';
  document.getElementById('hangman-result').style.display = '';
  // Reveal word
  document.getElementById('hangman-word').innerHTML = hangmanWord.split('').map(l =>
    l === ' ' ? `<span class="hangman-letter space"></span>`
              : `<span class="hangman-letter" style="color:${won?'var(--green)':'var(--red)'}">${l}</span>`
  ).join('');

  if (won) {
    document.getElementById('hangman-result-icon').textContent = '🎉';
    document.getElementById('hangman-result-text').innerHTML =
      `<span style="color:var(--green);font-size:1.3rem">Brawo! Odgadłaś!</span>`;
    // Przycisk: następne słówko (lub koniec jeśli kolejka pusta)
    document.querySelector('#hangman-result button').textContent =
      hangmanQueue.length ? 'Następne słówko →' : '🏁 Zakończ grę';
    document.querySelector('#hangman-result button').onclick = hangmanQueue.length
      ? nextHangmanWord : showHangmanGameOver;
  } else {
    // Koniec gry — 6 błędów
    document.getElementById('hangman-result-icon').textContent = '💀';
    document.getElementById('hangman-result-text').innerHTML =
      `Słówko to: <span style="color:var(--purple);font-size:1.3rem;font-weight:900">${hangmanWord}</span><br>` +
      `<span style="font-size:1.1rem">Odgadłaś <b>${hangmanCorrect}</b> z <b>${hangmanTotal}</b> słówek</span>`;
    document.querySelector('#hangman-result button').textContent = '← Wróć do zestawu';
    document.querySelector('#hangman-result button').onclick = exitHangman;
  }
}

function showHangmanGameOver() {
  document.getElementById('hangman-keyboard').style.display = 'none';
  document.getElementById('hangman-result').style.display = '';
  document.getElementById('hangman-result-icon').textContent = '🏆';
  document.getElementById('hangman-result-text').innerHTML =
    `<span style="color:var(--green);font-size:1.2rem">Wszystkie słówka zaliczone!</span><br>` +
    `Odgadłaś <b>${hangmanCorrect}</b> z <b>${hangmanTotal}</b> słówek bez straty życia!`;
  document.querySelector('#hangman-result button').textContent = '← Wróć do zestawu';
  document.querySelector('#hangman-result button').onclick = exitHangman;
}

document.addEventListener('keydown', e => {
  const view = document.getElementById('view-hangman');
  if (!view || view.style.display === 'none') return;
  if (document.getElementById('hangman-result').style.display !== 'none') return;
  const l = e.key.toLowerCase();
  if (/^[a-z]$/.test(l)) guessLetter(l);
});

function exitHangman() { showView('set-detail', { id: hangmanSetId }); }

// ===== MATCH PAIRS =====
let matchSetId     = null;
let matchSelected  = null;
let matchMoves     = 0;
let matchMatched   = 0;
let matchPairs     = 0;
let matchStartTime = 0;

function startMatch() {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || set.words.length < 2) { showToast('Potrzebujesz minimum 2 słówka!'); return; }
  matchSetId    = currentSetId;
  matchSelected = null;
  matchMoves    = 0;
  matchMatched  = 0;
  matchStartTime = Date.now();

  // Take up to 6 pairs
  const words = shuffle([...set.words]).slice(0, 6);
  matchPairs = words.length;

  document.getElementById('match-title').textContent = `🃏 ${set.name}`;
  document.getElementById('match-complete').style.display = 'none';
  document.getElementById('match-grid').style.display = '';
  updateMatchInfo();

  // Build shuffled grid: EN cards + PL cards
  const cards = shuffle([
    ...words.map((w, i) => ({ id: i, lang: 'en', text: w.en })),
    ...words.map((w, i) => ({ id: i, lang: 'pl', text: w.pl.split('/')[0].trim() })),
  ]);

  document.getElementById('match-grid').innerHTML = cards.map((c, ci) => `
    <div class="match-card ${c.lang}" id="mc-${ci}" data-id="${c.id}" data-lang="${c.lang}" data-idx="${ci}"
      onclick="selectMatchCard(${ci}, ${c.id}, '${c.lang}')">
      ${esc(c.text)}
    </div>`).join('');

  showView('match');
}

function selectMatchCard(idx, id, lang) {
  const el = document.getElementById('mc-' + idx);
  if (!el || el.classList.contains('matched') || el.classList.contains('selected')) return;

  if (!matchSelected) {
    matchSelected = { idx, id, lang };
    el.classList.add('selected');
    return;
  }

  // Second card selected
  const first = document.getElementById('mc-' + matchSelected.idx);
  matchMoves++;
  updateMatchInfo();

  if (matchSelected.id === id && matchSelected.lang !== lang) {
    // Match!
    el.classList.add('matched');
    first.classList.remove('selected');
    first.classList.add('matched');
    matchMatched++;
    matchSelected = null;
    updateMatchInfo();
    if (matchMatched === matchPairs) {
      setTimeout(showMatchComplete, 400);
    }
  } else {
    // Wrong
    el.classList.add('wrong');
    first.classList.remove('selected');
    first.classList.add('wrong');
    matchSelected = null;
    setTimeout(() => {
      el.classList.remove('wrong');
      first.classList.remove('wrong');
    }, 600);
  }
}

function updateMatchInfo() {
  document.getElementById('match-pairs-left').textContent = `✅ Dopasowane: ${matchMatched} / ${matchPairs}`;
  document.getElementById('match-moves').textContent      = `🎯 Próby: ${matchMoves}`;
  document.getElementById('match-score-badge').textContent = `${matchMatched}/${matchPairs}`;
}

function showMatchComplete() {
  const secs    = Math.round((Date.now() - matchStartTime) / 1000);
  const mins    = Math.floor(secs / 60);
  const timeStr = mins > 0 ? `${mins} min ${secs % 60} sek` : `${secs} sek`;
  const perfect = matchMoves === matchPairs;

  document.getElementById('match-grid').style.display = 'none';
  document.getElementById('match-complete').style.display = '';
  document.getElementById('match-result-emoji').textContent  = perfect ? '🏆' : matchMoves <= matchPairs * 1.5 ? '🌟' : '😄';
  document.getElementById('match-result-title').textContent  = perfect ? 'Perfekcyjnie!' : 'Wszystkie pary!';
  document.getElementById('match-result-stats').textContent  = `${matchMoves} prób · ${timeStr}`;
}

function exitMatch() { showView('set-detail', { id: matchSetId }); }

// ===== SAVE / LOAD ALL =====
function saveAll() {
  const data = {
    version: 1,
    savedAt: new Date().toISOString(),
    sets: getSets(),
    songs: getSongs(),
    progress: getProgress(),
  };
  downloadJSON(data, `angielski_ala_backup_${today()}.json`);
  showToast('💾 Zapisano wszystko! Plik pobrany.');
}

function loadAll() { document.getElementById('load-all-file').click(); }

function handleLoadAll(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.sets || !data.songs) throw new Error();
      showModal('Wczytaj zapisany stan', 'To zastąpi wszystkie obecne dane (słówka, piosenki, postępy). Na pewno?', [
        { label: 'Tak, wczytaj', cls: 'btn-primary', action: () => {
          if (data.sets)     saveSets(data.sets);
          if (data.songs)    saveSongs(data.songs);
          if (data.progress) saveProgress(data.progress);
          closeModal();
          showToast('✅ Dane wczytane!');
          showView('home');
        }},
        { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
      ]);
    } catch { showToast('❌ Błędny plik kopii zapasowej!'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const learnFeedback = document.getElementById('learn-feedback');
    const testFeedback  = document.getElementById('test-feedback');
    if (learnFeedback && learnFeedback.style.display !== 'none') { nextLearnWord(); return; }
    if (testFeedback  && testFeedback.style.display  !== 'none') { nextTestWord();  return; }
  }
});

// ===== SELECTION TRANSLATE BUTTON =====
(function() {
  const btn = document.getElementById('selection-translate-btn');
  let hideTimer = null;

  document.addEventListener('mouseup', e => {
    if (e.target === btn) return;
    clearTimeout(hideTimer);
    setTimeout(() => {
      const sel = window.getSelection();
      const text = sel ? sel.toString().trim() : '';
      // Show only when translate view is visible
      const translateView = document.getElementById('view-song-translate');
      const viewVisible = translateView && translateView.style.display !== 'none';
      if (text.length >= 2 && viewVisible) {
        const rect = sel.getRangeAt(0).getBoundingClientRect();
        // position: fixed — use viewport coords directly, no scrollY
        let top  = rect.top - 40;
        let left = rect.left + rect.width / 2 - 60;
        left = Math.max(8, Math.min(left, window.innerWidth - 140));
        btn.style.top  = top + 'px';
        btn.style.left = left + 'px';
        btn.style.display = 'block';
        btn._text = text;
      } else {
        btn.style.display = 'none';
      }
    }, 10);
  });

  btn.addEventListener('mousedown', e => {
    e.preventDefault(); // prevent losing selection
  });

  btn.addEventListener('click', () => {
    if (!btn._text) return;
    const url = `https://translate.google.com/?sl=en&tl=pl&text=${encodeURIComponent(btn._text)}&op=translate`;
    window.open(url, '_blank');
    btn.style.display = 'none';
    window.getSelection()?.removeAllRanges();
  });

  document.addEventListener('mousedown', e => {
    if (e.target !== btn) {
      hideTimer = setTimeout(() => btn.style.display = 'none', 200);
    }
  });

  document.addEventListener('scroll', () => { btn.style.display = 'none'; }, true);
})();

// ===== DEFAULT SETS =====
const DEFAULT_SETS_VERSION = 1;
const DEFAULT_SETS_DATA = [
  { name: 'Dom', icon: '🏠', words: [
    {en:'house',pl:'dom'},{en:'apartment',pl:'mieszkanie'},{en:'room',pl:'pokój'},
    {en:'kitchen',pl:'kuchnia'},{en:'bathroom',pl:'łazienka'},{en:'bedroom',pl:'sypialnia'},
    {en:'living room',pl:'salon'},{en:'garden',pl:'ogród'},{en:'window',pl:'okno'},
    {en:'door',pl:'drzwi'},{en:'floor',pl:'podłoga'},{en:'ceiling',pl:'sufit'},
    {en:'wall',pl:'ściana'},{en:'table',pl:'stół'},{en:'chair',pl:'krzesło'},
    {en:'sofa',pl:'sofa/kanapa'},{en:'bed',pl:'łóżko'},{en:'lamp',pl:'lampa'},
    {en:'mirror',pl:'lustro'},{en:'shelf',pl:'półka'},{en:'wardrobe',pl:'szafa'},
    {en:'fridge',pl:'lodówka'},{en:'stove',pl:'kuchenka'},{en:'oven',pl:'piekarnik'},
    {en:'sink',pl:'zlew'},{en:'toilet',pl:'toaleta'},{en:'shower',pl:'prysznic'},
    {en:'bath',pl:'wanna'},{en:'stairs',pl:'schody'},{en:'garage',pl:'garaż'},
    {en:'balcony',pl:'balkon'},{en:'basement',pl:'piwnica'},{en:'attic',pl:'strych'},
    {en:'roof',pl:'dach'},{en:'fence',pl:'płot/ogrodzenie'},{en:'gate',pl:'brama'},
    {en:'key',pl:'klucz'},{en:'lock',pl:'zamek'},{en:'curtain',pl:'zasłona/firanka'},
    {en:'carpet',pl:'dywan'},
  ]},
  { name: 'Rodzina', icon: '👨‍👩‍👧', words: [
    {en:'mother',pl:'mama/matka'},{en:'father',pl:'tata/ojciec'},{en:'sister',pl:'siostra'},
    {en:'brother',pl:'brat'},{en:'grandmother',pl:'babcia'},{en:'grandfather',pl:'dziadek'},
    {en:'aunt',pl:'ciocia'},{en:'uncle',pl:'wujek'},{en:'cousin',pl:'kuzyn/kuzynka'},
    {en:'daughter',pl:'córka'},{en:'son',pl:'syn'},{en:'wife',pl:'żona'},
    {en:'husband',pl:'mąż'},{en:'parents',pl:'rodzice'},{en:'children',pl:'dzieci'},
    {en:'baby',pl:'niemowlę'},{en:'family',pl:'rodzina'},{en:'grandparents',pl:'dziadkowie'},
    {en:'niece',pl:'siostrzenica'},{en:'nephew',pl:'siostrzeniec'},{en:'stepmother',pl:'macocha'},
    {en:'stepfather',pl:'ojczym'},{en:'mother-in-law',pl:'teściowa'},{en:'father-in-law',pl:'teść'},
    {en:'sister-in-law',pl:'szwagierka'},{en:'brother-in-law',pl:'szwagier'},
    {en:'great-grandmother',pl:'prababcia'},{en:'great-grandfather',pl:'pradziadek'},
    {en:'twin',pl:'bliźniak'},{en:'relative',pl:'krewny'},{en:'godmother',pl:'matka chrzestna'},
    {en:'godfather',pl:'ojciec chrzestny'},{en:'newborn',pl:'noworodek'},
    {en:'toddler',pl:'maluch'},{en:'teenager',pl:'nastolatek'},{en:'adult',pl:'dorosły'},
    {en:'elderly',pl:'starszy'},{en:'only child',pl:'jedynak'},{en:'generation',pl:'pokolenie'},
    {en:'orphan',pl:'sierota'},
  ]},
  { name: 'Popularne czasowniki', icon: '⚡', words: [
    {en:'to be',pl:'być'},{en:'to have',pl:'mieć'},{en:'to do',pl:'robić'},
    {en:'to say',pl:'mówić/powiedzieć'},{en:'to go',pl:'iść/jechać'},{en:'to get',pl:'dostać'},
    {en:'to make',pl:'robić/tworzyć'},{en:'to know',pl:'wiedzieć/znać'},{en:'to think',pl:'myśleć'},
    {en:'to take',pl:'brać/wziąć'},{en:'to see',pl:'widzieć'},{en:'to come',pl:'przychodzić'},
    {en:'to want',pl:'chcieć'},{en:'to look',pl:'patrzeć/wyglądać'},{en:'to use',pl:'używać'},
    {en:'to find',pl:'znajdować'},{en:'to give',pl:'dawać'},{en:'to tell',pl:'mówić/opowiadać'},
    {en:'to work',pl:'pracować'},{en:'to call',pl:'dzwonić/nazywać'},{en:'to try',pl:'próbować'},
    {en:'to ask',pl:'pytać'},{en:'to need',pl:'potrzebować'},{en:'to feel',pl:'czuć'},
    {en:'to become',pl:'stawać się'},{en:'to leave',pl:'wychodzić/zostawiać'},
    {en:'to put',pl:'kłaść/stawiać'},{en:'to mean',pl:'znaczyć'},{en:'to keep',pl:'trzymać'},
    {en:'to let',pl:'pozwalać'},{en:'to begin',pl:'zaczynać'},{en:'to show',pl:'pokazywać'},
    {en:'to hear',pl:'słyszeć'},{en:'to play',pl:'bawić się/grać'},{en:'to run',pl:'biec/biegać'},
    {en:'to move',pl:'ruszać się/poruszać'},{en:'to live',pl:'mieszkać/żyć'},
    {en:'to believe',pl:'wierzyć'},{en:'to hold',pl:'trzymać'},{en:'to bring',pl:'przynosić'},
  ]},
  { name: 'Popularne przymiotniki', icon: '🌈', words: [
    {en:'big',pl:'duży'},{en:'small',pl:'mały'},{en:'good',pl:'dobry'},
    {en:'bad',pl:'zły'},{en:'happy',pl:'szczęśliwy'},{en:'sad',pl:'smutny'},
    {en:'fast',pl:'szybki'},{en:'slow',pl:'wolny/powolny'},{en:'hot',pl:'gorący'},
    {en:'cold',pl:'zimny'},{en:'new',pl:'nowy'},{en:'old',pl:'stary'},
    {en:'beautiful',pl:'piękny'},{en:'ugly',pl:'brzydki'},{en:'strong',pl:'silny'},
    {en:'weak',pl:'słaby'},{en:'tall',pl:'wysoki'},{en:'short',pl:'niski/krótki'},
    {en:'long',pl:'długi'},{en:'wide',pl:'szeroki'},{en:'narrow',pl:'wąski'},
    {en:'heavy',pl:'ciężki'},{en:'light',pl:'lekki/jasny'},{en:'dark',pl:'ciemny'},
    {en:'clean',pl:'czysty'},{en:'dirty',pl:'brudny'},{en:'easy',pl:'łatwy'},
    {en:'difficult',pl:'trudny'},{en:'funny',pl:'zabawny/śmieszny'},{en:'boring',pl:'nudny'},
    {en:'interesting',pl:'interesujący/ciekawy'},{en:'important',pl:'ważny'},
    {en:'different',pl:'inny/różny'},{en:'same',pl:'taki sam'},{en:'right',pl:'prawy/poprawny'},
    {en:'wrong',pl:'zły/błędny'},{en:'open',pl:'otwarty'},{en:'closed',pl:'zamknięty'},
    {en:'full',pl:'pełny'},{en:'empty',pl:'pusty'},
  ]},
  { name: 'Szkoła', icon: '🎒', words: [
    {en:'school',pl:'szkoła'},{en:'classroom',pl:'sala lekcyjna/klasa'},{en:'teacher',pl:'nauczyciel/nauczycielka'},
    {en:'student',pl:'uczeń/uczennica'},{en:'lesson',pl:'lekcja'},{en:'homework',pl:'zadanie domowe'},
    {en:'test',pl:'test/sprawdzian'},{en:'grade',pl:'ocena/stopień'},{en:'book',pl:'książka'},
    {en:'notebook',pl:'zeszyt'},{en:'pencil',pl:'ołówek'},{en:'pen',pl:'długopis'},
    {en:'ruler',pl:'linijka'},{en:'eraser',pl:'gumka'},{en:'backpack',pl:'plecak'},
    {en:'desk',pl:'ławka'},{en:'blackboard',pl:'tablica'},{en:'chalk',pl:'kreda'},
    {en:'library',pl:'biblioteka'},{en:'subject',pl:'przedmiot'},{en:'mathematics',pl:'matematyka'},
    {en:'English',pl:'angielski'},{en:'history',pl:'historia'},{en:'science',pl:'przyroda'},
    {en:'art',pl:'plastyka/sztuka'},{en:'music',pl:'muzyka'},{en:'sport',pl:'wychowanie fizyczne'},
    {en:'break',pl:'przerwa'},{en:'timetable',pl:'plan lekcji'},{en:'uniform',pl:'mundurek szkolny'},
    {en:'principal',pl:'dyrektor'},{en:'report card',pl:'świadectwo'},{en:'exam',pl:'egzamin'},
    {en:'question',pl:'pytanie'},{en:'answer',pl:'odpowiedź'},{en:'exercise',pl:'ćwiczenie'},
    {en:'project',pl:'projekt'},{en:'presentation',pl:'prezentacja'},
    {en:'group work',pl:'praca w grupie'},{en:'canteen',pl:'stołówka/bufet'},
  ]},
  { name: 'Ubrania', icon: '👗', words: [
    {en:'shirt',pl:'koszula'},{en:'T-shirt',pl:'koszulka'},{en:'trousers',pl:'spodnie'},
    {en:'jeans',pl:'dżinsy'},{en:'dress',pl:'sukienka'},{en:'skirt',pl:'spódnica'},
    {en:'jacket',pl:'kurtka/marynarka'},{en:'coat',pl:'płaszcz'},{en:'jumper',pl:'sweter'},
    {en:'hoodie',pl:'bluza z kapturem'},{en:'socks',pl:'skarpetki'},{en:'shoes',pl:'buty'},
    {en:'boots',pl:'kozaki/buty z cholewką'},{en:'trainers',pl:'adidasy/trampki'},
    {en:'slippers',pl:'kapcie'},{en:'sandals',pl:'sandały'},{en:'hat',pl:'czapka/kapelusz'},
    {en:'scarf',pl:'szalik'},{en:'gloves',pl:'rękawiczki'},{en:'belt',pl:'pasek'},
    {en:'tie',pl:'krawat'},{en:'suit',pl:'garnitur'},{en:'pyjamas',pl:'piżama'},
    {en:'underwear',pl:'bielizna'},{en:'shorts',pl:'szorty/krótkie spodenki'},
    {en:'swimsuit',pl:'kostium kąpielowy'},{en:'tights',pl:'rajstopy'},{en:'leggings',pl:'legginsy'},
    {en:'blouse',pl:'bluzka'},{en:'cardigan',pl:'sweter zapinany/kardigan'},
    {en:'vest',pl:'kamizelka/podkoszulek'},{en:'cap',pl:'czapka z daszkiem'},
    {en:'beanie',pl:'czapka'},{en:'raincoat',pl:'płaszcz przeciwdeszczowy'},
    {en:'apron',pl:'fartuch'},{en:'zipper',pl:'zamek błyskawiczny'},{en:'button',pl:'guzik'},
    {en:'pocket',pl:'kieszeń'},{en:'sleeve',pl:'rękaw'},{en:'collar',pl:'kołnierz'},
  ]},
  { name: 'Jedzenie', icon: '🍎', words: [
    {en:'bread',pl:'chleb'},{en:'butter',pl:'masło'},{en:'milk',pl:'mleko'},
    {en:'egg',pl:'jajko'},{en:'cheese',pl:'ser'},{en:'meat',pl:'mięso'},
    {en:'chicken',pl:'kurczak'},{en:'fish',pl:'ryba'},{en:'apple',pl:'jabłko'},
    {en:'banana',pl:'banan'},{en:'orange',pl:'pomarańcza'},{en:'strawberry',pl:'truskawka'},
    {en:'tomato',pl:'pomidor'},{en:'potato',pl:'ziemniak'},{en:'carrot',pl:'marchewka'},
    {en:'onion',pl:'cebula'},{en:'garlic',pl:'czosnek'},{en:'rice',pl:'ryż'},
    {en:'pasta',pl:'makaron'},{en:'soup',pl:'zupa'},{en:'salad',pl:'sałatka'},
    {en:'pizza',pl:'pizza'},{en:'sandwich',pl:'kanapka'},{en:'cake',pl:'ciasto'},
    {en:'chocolate',pl:'czekolada'},{en:'ice cream',pl:'lody'},{en:'cookie',pl:'ciasteczko'},
    {en:'water',pl:'woda'},{en:'juice',pl:'sok'},{en:'coffee',pl:'kawa'},
    {en:'tea',pl:'herbata'},{en:'sugar',pl:'cukier'},{en:'salt',pl:'sól'},
    {en:'pepper',pl:'pieprz'},{en:'oil',pl:'olej/oliwa'},{en:'jam',pl:'dżem'},
    {en:'honey',pl:'miód'},{en:'yogurt',pl:'jogurt'},{en:'cream',pl:'śmietana/krem'},
    {en:'mushroom',pl:'grzyb/pieczarka'},
  ]},
  { name: 'Czas', icon: '⏰', words: [
    {en:'time',pl:'czas'},{en:'hour',pl:'godzina'},{en:'minute',pl:'minuta'},
    {en:'second',pl:'sekunda'},{en:'day',pl:'dzień'},{en:'week',pl:'tydzień'},
    {en:'month',pl:'miesiąc'},{en:'year',pl:'rok'},{en:'morning',pl:'rano/poranek'},
    {en:'afternoon',pl:'popołudnie'},{en:'evening',pl:'wieczór'},{en:'night',pl:'noc'},
    {en:'today',pl:'dzisiaj/dziś'},{en:'tomorrow',pl:'jutro'},{en:'yesterday',pl:'wczoraj'},
    {en:'now',pl:'teraz'},{en:'soon',pl:'wkrótce/niedługo'},{en:'later',pl:'później'},
    {en:'early',pl:'wcześnie'},{en:'late',pl:'późno'},{en:'Monday',pl:'poniedziałek'},
    {en:'Tuesday',pl:'wtorek'},{en:'Wednesday',pl:'środa'},{en:'Thursday',pl:'czwartek'},
    {en:'Friday',pl:'piątek'},{en:'Saturday',pl:'sobota'},{en:'Sunday',pl:'niedziela'},
    {en:'January',pl:'styczeń'},{en:'February',pl:'luty'},{en:'March',pl:'marzec'},
    {en:'April',pl:'kwiecień'},{en:'May',pl:'maj'},{en:'June',pl:'czerwiec'},
    {en:'July',pl:'lipiec'},{en:'August',pl:'sierpień'},{en:'September',pl:'wrzesień'},
    {en:'October',pl:'październik'},{en:'November',pl:'listopad'},{en:'December',pl:'grudzień'},
    {en:'clock',pl:'zegar'},
  ]},
  { name: 'Części ciała', icon: '🫀', words: [
    {en:'head',pl:'głowa'},{en:'hair',pl:'włosy'},{en:'eye',pl:'oko'},
    {en:'ear',pl:'ucho'},{en:'nose',pl:'nos'},{en:'mouth',pl:'usta'},
    {en:'tooth',pl:'ząb'},{en:'tongue',pl:'język'},{en:'lip',pl:'warga'},
    {en:'chin',pl:'broda'},{en:'cheek',pl:'policzek'},{en:'forehead',pl:'czoło'},
    {en:'neck',pl:'szyja/kark'},{en:'shoulder',pl:'ramię/bark'},{en:'arm',pl:'ramię/ręka'},
    {en:'elbow',pl:'łokieć'},{en:'wrist',pl:'nadgarstek'},{en:'hand',pl:'dłoń/ręka'},
    {en:'finger',pl:'palec'},{en:'thumb',pl:'kciuk'},{en:'chest',pl:'klatka piersiowa'},
    {en:'back',pl:'plecy'},{en:'stomach',pl:'brzuch/żołądek'},{en:'waist',pl:'talia/pas'},
    {en:'hip',pl:'biodro'},{en:'leg',pl:'noga'},{en:'knee',pl:'kolano'},
    {en:'ankle',pl:'kostka'},{en:'foot',pl:'stopa'},{en:'toe',pl:'palec u nogi'},
    {en:'heel',pl:'pięta'},{en:'skin',pl:'skóra'},{en:'bone',pl:'kość'},
    {en:'muscle',pl:'mięsień'},{en:'heart',pl:'serce'},{en:'lung',pl:'płuco'},
    {en:'brain',pl:'mózg'},{en:'blood',pl:'krew'},{en:'nail',pl:'paznokieć'},
    {en:'eyebrow',pl:'brew'},
  ]},
  { name: 'Emocje', icon: '😊', words: [
    {en:'happy',pl:'szczęśliwy'},{en:'sad',pl:'smutny'},{en:'angry',pl:'zły/wściekły'},
    {en:'scared',pl:'przestraszony'},{en:'surprised',pl:'zaskoczony'},{en:'excited',pl:'podekscytowany'},
    {en:'bored',pl:'znudzony'},{en:'tired',pl:'zmęczony'},{en:'nervous',pl:'zdenerwowany'},
    {en:'calm',pl:'spokojny'},{en:'proud',pl:'dumny'},{en:'ashamed',pl:'zawstydzony'},
    {en:'jealous',pl:'zazdrosny'},{en:'love',pl:'miłość/kochać'},{en:'hate',pl:'nienawiść/nienawidzić'},
    {en:'hope',pl:'nadzieja/mieć nadzieję'},{en:'fear',pl:'strach/bać się'},{en:'joy',pl:'radość'},
    {en:'grief',pl:'smutek/żal'},{en:'loneliness',pl:'samotność'},{en:'confidence',pl:'pewność siebie'},
    {en:'anxiety',pl:'niepokój/lęk'},{en:'relief',pl:'ulga'},{en:'disgust',pl:'wstręt/obrzydzenie'},
    {en:'envy',pl:'zazdrość'},{en:'guilt',pl:'wina/poczucie winy'},{en:'shame',pl:'wstyd'},
    {en:'curiosity',pl:'ciekawość'},{en:'disappointment',pl:'rozczarowanie'},
    {en:'frustration',pl:'frustracja'},{en:'gratitude',pl:'wdzięczność'},
    {en:'confusion',pl:'dezorientacja/zagubienie'},{en:'embarrassment',pl:'zakłopotanie'},
    {en:'lonely',pl:'samotny'},{en:'cheerful',pl:'radosny/wesoły'},{en:'grumpy',pl:'zrzędliwy'},
    {en:'shy',pl:'nieśmiały'},{en:'brave',pl:'odważny'},{en:'thoughtful',pl:'zamyślony/troskliwy'},
    {en:'surprise',pl:'zaskoczenie'},
  ]},
  { name: 'Zakupy', icon: '🛍️', words: [
    {en:'shop',pl:'sklep'},{en:'market',pl:'rynek/targ'},{en:'supermarket',pl:'supermarket'},
    {en:'shopping centre',pl:'centrum handlowe'},{en:'cashier',pl:'kasjer/kasjerka'},
    {en:'price',pl:'cena'},{en:'discount',pl:'rabat/zniżka'},{en:'sale',pl:'wyprzedaż'},
    {en:'receipt',pl:'paragon'},{en:'change',pl:'reszta'},{en:'cash',pl:'gotówka'},
    {en:'credit card',pl:'karta kredytowa'},{en:'queue',pl:'kolejka'},{en:'basket',pl:'koszyk'},
    {en:'trolley',pl:'wózek sklepowy'},{en:'bag',pl:'torba'},{en:'buy',pl:'kupować'},
    {en:'sell',pl:'sprzedawać'},{en:'pay',pl:'płacić'},{en:'spend',pl:'wydawać pieniądze'},
    {en:'save',pl:'oszczędzać'},{en:'afford',pl:'móc sobie pozwolić'},
    {en:'expensive',pl:'drogi'},{en:'cheap',pl:'tani'},{en:'free',pl:'darmowy/bezpłatny'},
    {en:'size',pl:'rozmiar'},{en:'colour',pl:'kolor'},{en:'brand',pl:'marka'},
    {en:'quality',pl:'jakość'},{en:'exchange',pl:'wymienić/wymiana'},{en:'refund',pl:'zwrot pieniędzy'},
    {en:'fitting room',pl:'przymierzalnia'},{en:'shelf',pl:'półka'},{en:'product',pl:'produkt'},
    {en:'offer',pl:'oferta'},{en:'voucher',pl:'kupon/bon'},{en:'delivery',pl:'dostawa'},
    {en:'online shopping',pl:'zakupy online'},{en:'checkout',pl:'kasa/finalizacja zakupu'},
    {en:'loyalty card',pl:'karta stałego klienta'},
  ]},
  { name: 'Zwierzęta domowe', icon: '🐾', words: [
    {en:'dog',pl:'pies'},{en:'cat',pl:'kot'},{en:'rabbit',pl:'królik'},
    {en:'hamster',pl:'chomik'},{en:'guinea pig',pl:'świnka morska'},{en:'parrot',pl:'papuga'},
    {en:'goldfish',pl:'złota rybka'},{en:'turtle',pl:'żółw'},{en:'lizard',pl:'jaszczurka'},
    {en:'snake',pl:'wąż'},{en:'mouse',pl:'mysz'},{en:'rat',pl:'szczur'},
    {en:'canary',pl:'kanarek'},{en:'budgerigar',pl:'papużka falista'},{en:'horse',pl:'koń'},
    {en:'pony',pl:'kucyk'},{en:'ferret',pl:'fretka'},{en:'hedgehog',pl:'jeż'},
    {en:'chinchilla',pl:'szynszyla'},{en:'gecko',pl:'gekon'},{en:'puppy',pl:'szczeniak'},
    {en:'kitten',pl:'kociak'},{en:'paw',pl:'łapa'},{en:'tail',pl:'ogon'},
    {en:'fur',pl:'sierść/futro'},{en:'feather',pl:'pióro'},{en:'beak',pl:'dziób'},
    {en:'cage',pl:'klatka'},{en:'lead',pl:'smycz'},{en:'collar',pl:'obroża'},
    {en:'bowl',pl:'miska'},{en:'vet',pl:'weterynarz'},{en:'vaccination',pl:'szczepienie'},
    {en:'walk',pl:'spacer'},{en:'cuddle',pl:'przytulać/pieszczoty'},{en:'bark',pl:'szczekać/szczekanie'},
    {en:'meow',pl:'miauczeć/miauczenie'},{en:'purr',pl:'mruczeć/mruczenie'},
    {en:'breed',pl:'rasa'},{en:'litter',pl:'miot/ściółka'},
  ]},
];

function seedDefaultSets() {
  if ((DB.get('defaultSetsVersion') || 0) >= DEFAULT_SETS_VERSION) return;
  const existing = getSets();
  const seeded = DEFAULT_SETS_DATA.map(s => ({
    id: uid(),
    name: s.name,
    icon: s.icon,
    words: s.words.map(w => ({ id: uid(), en: w.en, pl: w.pl })),
    results: [],
    createdAt: today(),
    lastUsed: 0,
  }));
  saveSets([...seeded, ...existing]);
  DB.set('defaultSetsVersion', DEFAULT_SETS_VERSION);
}

// ===== INIT =====
seedDefaultSets();
showView('home');
