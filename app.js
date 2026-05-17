const runTarget = 10;
const storageKey = 'oneDigitHikizanFoods';
const foods = [
  { id: 'onigiri', name: 'おにぎり', emoji: '🍙', description: 'ちからが わいてくる まあるい ごはん。' },
  { id: 'sandwich', name: 'サンドイッチ', emoji: '🥪', description: 'やさいと たまごが はさまった ごほうび。' },
  { id: 'bento', name: 'おべんとう', emoji: '🍱', description: 'いろんな おかずが ならんでいるよ。' },
  { id: 'curry', name: 'カレー', emoji: '🍛', description: 'ほかほか いいにおいの カレーだよ。' },
  { id: 'ramen', name: 'ラーメン', emoji: '🍜', description: 'つるつる めんを じょうずに たべよう。' },
  { id: 'sushi', name: 'おすし', emoji: '🍣', description: 'ぴかぴか ごはんに のった おすし。' },
  { id: 'pizza', name: 'ピザ', emoji: '🍕', description: 'チーズが とろーり のびるよ。' },
  { id: 'hamburger', name: 'ハンバーガー', emoji: '🍔', description: 'ぱくっと たべたい ふかふか バンズ。' },
  { id: 'fries', name: 'ポテト', emoji: '🍟', description: 'ほそながい ポテトが いっぱい。' },
  { id: 'taco', name: 'タコス', emoji: '🌮', description: 'カラフルな ぐが つつまれているよ。' },
  { id: 'apple', name: 'りんご', emoji: '🍎', description: 'あかくて つやつや あまい くだもの。' },
  { id: 'banana', name: 'バナナ', emoji: '🍌', description: 'ひとくち たべると にこにこ。' },
  { id: 'strawberry', name: 'いちご', emoji: '🍓', description: 'ちいさな つぶつぶが かわいいね。' },
  { id: 'melon', name: 'メロン', emoji: '🍈', description: 'あまい かおりの みどりの くだもの。' },
  { id: 'watermelon', name: 'すいか', emoji: '🍉', description: 'しましま もようを みつけよう。' },
  { id: 'peach', name: 'もも', emoji: '🍑', description: 'ふんわり やさしい いろの もも。' },
  { id: 'pineapple', name: 'パイナップル', emoji: '🍍', description: 'とげとげ でも なかは あまいよ。' },
  { id: 'kiwi', name: 'キウイ', emoji: '🥝', description: 'みどりの なかに くろい たね。' },
  { id: 'bread', name: 'パン', emoji: '🍞', description: 'ふわふわ こんがり やけた パン。' },
  { id: 'croissant', name: 'クロワッサン', emoji: '🥐', description: 'みかづき みたいな サクサク パン。' },
  { id: 'cheese', name: 'チーズ', emoji: '🧀', description: 'きいろい しかくの まろやか チーズ。' },
  { id: 'egg', name: 'たまご', emoji: '🥚', description: 'ころんと まるい たまごだよ。' },
  { id: 'pancakes', name: 'パンケーキ', emoji: '🥞', description: 'ふわふわ かさねて いただきます。' },
  { id: 'waffle', name: 'ワッフル', emoji: '🧇', description: 'しかくい あみめが たのしいね。' },
  { id: 'cookie', name: 'クッキー', emoji: '🍪', description: 'さくさく あまい おやつだよ。' },
  { id: 'cake', name: 'ケーキ', emoji: '🍰', description: 'おいわい みたいな ごほうび。' },
  { id: 'cupcake', name: 'カップケーキ', emoji: '🧁', description: 'ちいさくて かわいい ケーキ。' },
  { id: 'donut', name: 'ドーナツ', emoji: '🍩', description: 'まんなかに あなが あいているよ。' },
  { id: 'icecream', name: 'アイス', emoji: '🍨', description: 'つめたくて あまい アイスだよ。' },
  { id: 'shavedice', name: 'かきごおり', emoji: '🍧', description: 'しゃりしゃり つめたい なつの おやつ。' },
  { id: 'dango', name: 'だんご', emoji: '🍡', description: 'くしに ならんだ みっつの だんご。' },
  { id: 'oden', name: 'おでん', emoji: '🍢', description: 'ほかほか しみしみ あったかい。' },
  { id: 'dumpling', name: 'ぎょうざ', emoji: '🥟', description: 'ぱりっと やけた ひとくち ごはん。' },
  { id: 'rice', name: 'ごはん', emoji: '🍚', description: 'しろくて ほかほかの ごはん。' },
  { id: 'meat', name: 'おにく', emoji: '🍖', description: 'もりもり げんきが でる おにく。' },
  { id: 'chicken', name: 'チキン', emoji: '🍗', description: 'こんがり やけた チキンだよ。' },
  { id: 'fishcake', name: 'なると', emoji: '🍥', description: 'うずまき もようが かわいいね。' },
  { id: 'salad', name: 'サラダ', emoji: '🥗', description: 'しゃきしゃき やさいが いっぱい。' },
  { id: 'carrot', name: 'にんじん', emoji: '🥕', description: 'オレンジいろの げんきな やさい。' },
  { id: 'corn', name: 'とうもろこし', emoji: '🌽', description: 'つぶつぶ きいろの とうもろこし。' },
  { id: 'tomato', name: 'トマト', emoji: '🍅', description: 'まっかな まるい トマトだよ。' },
  { id: 'avocado', name: 'アボカド', emoji: '🥑', description: 'まんなかに おおきな たね。' },
  { id: 'mushroom', name: 'きのこ', emoji: '🍄', description: 'ぽこっと かさの ある きのこ。' },
  { id: 'sweetpotato', name: 'やきいも', emoji: '🍠', description: 'ほくほく あまい やきいも。' },
  { id: 'pretzel', name: 'プレッツェル', emoji: '🥨', description: 'くるっと むすんだ かたちだよ。' },
  { id: 'popcorn', name: 'ポップコーン', emoji: '🍿', description: 'ぽんぽん はじけた おやつ。' },
  { id: 'chocolate', name: 'チョコ', emoji: '🍫', description: 'あまくて しかくい チョコレート。' },
  { id: 'candy', name: 'キャンディ', emoji: '🍬', description: 'つつみがみも かわいい あめ。' },
  { id: 'honey', name: 'はちみつ', emoji: '🍯', description: 'とろーり あまい きんいろ。' },
  { id: 'milk', name: 'ミルク', emoji: '🥛', description: 'ごくごく のみたい しろい ミルク。' }
];

const els = {
  streakCount: document.querySelector('#streak-count'),
  remainingCount: document.querySelector('#remaining-count'),
  progressBar: document.querySelector('#progress-bar'),
  addendA: document.querySelector('#addend-a'),
  addendB: document.querySelector('#addend-b'),
  groupALabel: document.querySelector('#group-a-label'),
  groupBLabel: document.querySelector('#group-b-label'),
  grapesA: document.querySelector('#grapes-a'),
  grapesB: document.querySelector('#grapes-b'),
  answerForm: document.querySelector('#answer-form'),
  answerInput: document.querySelector('#answer-input'),
  feedback: document.querySelector('#feedback'),
  keypadGrid: document.querySelector('#keypad-grid'),
  choiceGrid: document.querySelector('#choice-grid'),
  newProblemButton: document.querySelector('#new-problem-button'),
  resetRunButton: document.querySelector('#reset-run-button'),
  resetBookButton: document.querySelector('#reset-book-button'),
  ownedCount: document.querySelector('#owned-count'),
  totalCount: document.querySelector('#total-count'),
  bookGrid: document.querySelector('#book-grid'),
  lastReward: document.querySelector('#last-reward'),
  rewardModal: document.querySelector('#reward-modal'),
  wrongModal: document.querySelector('#wrong-modal'),
  wrongModalDescription: document.querySelector('#wrong-modal-description'),
  wrongModalHint: document.querySelector('#wrong-modal-hint'),
  modalEmoji: document.querySelector('#modal-emoji'),
  modalTitle: document.querySelector('#modal-title'),
  modalDescription: document.querySelector('#modal-description'),
  closeModalButton: document.querySelector('#close-modal-button'),
  closeWrongModalButton: document.querySelector('#close-wrong-modal-button')
};

const state = { currentProblem: null, streak: 0, ownedIds: loadBook(), lastRewardId: null };

function loadBook() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveBook() {
  localStorage.setItem(storageKey, JSON.stringify([...state.ownedIds]));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(values) {
  return [...values].sort(() => Math.random() - 0.5);
}

function createProblem() {
  const a = randomInt(1, 10);
  const b = randomInt(1, a);
  return { a, b, answer: a - b };
}

function makeGrapes(count, picked = false) {
  return Array.from({ length: count }, (_, index) => `<span class="grape ${picked ? 'picked' : ''}" aria-label="ぶどう ${index + 1}">🍇</span>`).join('');
}

function makeChoices(answer) {
  const choices = new Set([answer]);
  while (choices.size < 4) {
    choices.add(Math.max(0, Math.min(10, answer + randomInt(-3, 3))));
  }
  return shuffle([...choices]);
}

function renderProblem() {
  const { a, b, answer } = state.currentProblem;
  els.addendA.textContent = a;
  els.addendB.textContent = b;
  els.groupALabel.textContent = a;
  els.groupBLabel.textContent = b;
  els.grapesA.innerHTML = makeGrapes(a);
  els.grapesB.innerHTML = makeGrapes(b, true);
  els.choiceGrid.innerHTML = makeChoices(answer).map((choice) => `<button class="choice-button" type="button" data-choice="${choice}">${choice}</button>`).join('');
  els.answerInput.value = '';
}

function renderProgress() {
  els.streakCount.textContent = state.streak;
  els.remainingCount.textContent = runTarget - state.streak;
  els.progressBar.style.width = `${(state.streak / runTarget) * 100}%`;
}

function renderBook() {
  els.totalCount.textContent = foods.length;
  els.ownedCount.textContent = state.ownedIds.size;
  els.bookGrid.innerHTML = foods.map((food, index) => {
    const isOwned = state.ownedIds.has(food.id);
    return `<article class="book-card ${isOwned ? '' : 'locked'}">
      <div class="food-emoji">${isOwned ? food.emoji : '?'}</div>
      <h3>${index + 1}. ${isOwned ? food.name : '???'}</h3>
      <p>${isOwned ? food.description : '10もん せいかいしたら ゲットできるよ。'}</p>
    </article>`;
  }).join('');
}

function renderLastReward() {
  const food = foods.find((candidate) => candidate.id === state.lastRewardId);
  if (!food) {
    els.lastReward.className = 'last-reward empty';
    els.lastReward.innerHTML = `<div class="food-emoji">?</div><p>まだ たべものは ないよ。10もん せいかいして ゲットしよう。</p>`;
    return;
  }
  els.lastReward.className = 'last-reward';
  els.lastReward.innerHTML = `<div class="food-emoji">${food.emoji}</div><h3>${food.name}</h3><p>${food.description}</p>`;
}

function setFeedback(message, type = '') {
  els.feedback.textContent = message;
  els.feedback.className = `feedback ${type}`.trim();
}

function nextProblem(message = 'ぶどうを とった あとの かずを かぞえてみよう。') {
  state.currentProblem = createProblem();
  renderProblem();
  setFeedback(message);
}

function chooseReward() {
  const unowned = foods.filter((food) => !state.ownedIds.has(food.id));
  const pool = unowned.length > 0 ? unowned : foods;
  return pool[randomInt(0, pool.length - 1)];
}

function awardFood() {
  const food = chooseReward();
  state.ownedIds.add(food.id);
  state.lastRewardId = food.id;
  saveBook();
  renderBook();
  renderLastReward();
  els.modalEmoji.textContent = food.emoji;
  els.modalTitle.textContent = `${food.name}を ゲットしたよ`;
  els.modalDescription.textContent = food.description;
  els.rewardModal.hidden = false;
}

function showWrongAnswerPopup(value) {
  const { a, b } = state.currentProblem;
  els.wrongModalDescription.textContent = `${value} では なさそう。ぶどうを とった あとを もういちど みてみよう。`;
  els.wrongModalHint.textContent = `${a}こ の ぶどうから ${b}こ とると、いくつ のこるかな。`;
  els.wrongModal.hidden = false;
  els.closeWrongModalButton.focus();
}

function closeWrongAnswerPopup() {
  els.wrongModal.hidden = true;
}

function checkAnswer(value) {
  if (!els.answerInput.value || Number.isNaN(value)) {
    setFeedback('こたえを いれてね。', 'error');
    return;
  }
  if (value !== state.currentProblem.answer) {
    setFeedback('ぶどうが「ちがうみたい」と おしえてくれたよ。', 'error');
    showWrongAnswerPopup(value);
    els.answerInput.value = '';
    return;
  }
  state.streak += 1;
  renderProgress();
  if (state.streak === runTarget) {
    awardFood();
    setFeedback('10もん せいかい。たべものを ゲットしたよ。', 'success');
  } else {
    state.currentProblem = createProblem();
    renderProblem();
    setFeedback(`せいかい。あと ${runTarget - state.streak} もんで たべものを ゲットできるよ。`, 'success');
  }
}

function resetRun() {
  state.streak = 0;
  renderProgress();
  nextProblem('せいかいした かずを 0にしたよ。');
}

function resetBook() {
  const ok = window.confirm('たべもの ずかんを けしても いいですか。');
  if (!ok) return;
  state.ownedIds.clear();
  state.lastRewardId = null;
  saveBook();
  renderBook();
  renderLastReward();
  setFeedback('ずかんを けしたよ。');
}

function closeModal() {
  els.rewardModal.hidden = true;
  if (state.streak === runTarget) {
    state.streak = 0;
    renderProgress();
  }
  nextProblem('つぎの ひきざんも やってみよう。');
}

function renderKeypad() {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0];
  els.keypadGrid.innerHTML = buttons.map((value) => {
    if (value === 'clear') {
      return '<button class="keypad-button clear" type="button" data-keypad-clear>クリア</button>';
    }
    return `<button class="keypad-button" type="button" data-keypad-number="${value}">${value}</button>`;
  }).join('');
}

function appendAnswerDigit(digit) {
  const nextValue = `${els.answerInput.value}${digit}`.replace(/^0+(?=\d)/, '');
  els.answerInput.value = nextValue.slice(0, 2);
  setFeedback('こたえが できたら「こたえる」を おしてね。');
}

function clearAnswer() {
  els.answerInput.value = '';
  setFeedback('こたえを けしたよ。');
}

renderKeypad();
els.answerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  checkAnswer(Number(els.answerInput.value));
});
els.keypadGrid.addEventListener('click', (event) => {
  const numberButton = event.target.closest('[data-keypad-number]');
  if (numberButton) {
    appendAnswerDigit(numberButton.dataset.keypadNumber);
    return;
  }
  if (event.target.closest('[data-keypad-clear]')) clearAnswer();
});
els.choiceGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]');
  if (!button) return;
  const value = Number(button.dataset.choice);
  els.answerInput.value = value;
  checkAnswer(value);
});
els.newProblemButton.addEventListener('click', () => nextProblem('べつの もんだいに したよ。'));
els.resetRunButton.addEventListener('click', resetRun);
els.resetBookButton.addEventListener('click', resetBook);
els.closeModalButton.addEventListener('click', closeModal);
els.closeWrongModalButton.addEventListener('click', closeWrongAnswerPopup);
els.rewardModal.addEventListener('click', (event) => { if (event.target === els.rewardModal) closeModal(); });
els.wrongModal.addEventListener('click', (event) => { if (event.target === els.wrongModal) closeWrongAnswerPopup(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !els.wrongModal.hidden) closeWrongAnswerPopup();
});

renderProgress();
renderBook();
renderLastReward();
nextProblem();
