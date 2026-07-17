const state = {
  frame: 1
};

const frameHistory = [];
let isRestoring = false;

const mainTitle = document.getElementById('mainTitle');
const infoText = document.getElementById('infoText');
const infoImage = document.getElementById('infoImage');
const actionButtons = document.getElementById('actionButtons');
const pinAirport = document.getElementById('pinAirport');
const pinPoor = document.getElementById('pinPoor');
const pinFib = document.getElementById('pinFib');
const pinRich = document.getElementById('pinRich');
const pinBallas = document.getElementById('pinBallas');

function resizeApp() {
  const app = document.getElementById('app');
  const scaleX = window.innerWidth / 1920;
  const scaleY = window.innerHeight / 1080;
  const scale = Math.min(scaleX, scaleY);
  app.style.transform = `scale(${scale})`;
}
window.addEventListener('resize', resizeApp);
resizeApp();

function clearButtons() {
  actionButtons.innerHTML = '';
}

function addButton(label, onClick) {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = label;
  btn.addEventListener('click', onClick);
  actionButtons.appendChild(btn);
}

function addBackButton() {
  if (frameHistory.length === 0) return;

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = 'Назад';
  btn.addEventListener('click', goBack);
  actionButtons.prepend(btn);
}

function goBack() {
  if (frameHistory.length === 0) return;
  isRestoring = true;
  const previousFrame = frameHistory.pop();
  setFrame(previousFrame);
}

function setFrame(frame) {
  if (!isRestoring && state.frame !== frame) {
    frameHistory.push(state.frame);
  }

  isRestoring = false;
  state.frame = frame;

  mainTitle.classList.add('hidden');
  pinAirport.classList.add('hidden');
  pinPoor.classList.add('hidden');
  pinFib.classList.add('hidden');
  pinRich.classList.add('hidden');
  pinBallas.classList.add('hidden');

  pinAirport.style.display = 'none';
  pinPoor.style.display = 'none';
  pinFib.style.display = 'none';
  pinRich.style.display = 'none';
  pinBallas.style.display = 'none';

  clearButtons();

  if (frame === 1) {
    mainTitle.classList.remove('hidden');
    document.querySelector(".bg").style.filter = "blur(8px)";
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Пропущенный звонок';
    addButton('Послушать голосовое', () => setFrame(2));
  }

  if (frame === 2) {
    pinAirport.style.display = 'block';
    pinAirport.classList.add('highlight');
    document.querySelector(".bg").style.filter = "blur(0px)";
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Данил, привет, мне очень нужна твоя помощь. Мой друг пропал, нужно его найти, могу положиться только на тебя! Если ты согласен жду тебя в Аэропорту LS.';
    addButton('В путь', () => setFrame(3));
  }

  if (frame === 3) {
    pinPoor.style.display = 'block';
    pinFib.style.display = 'block';
    pinRich.style.display = 'block';
    pinBallas.style.display = 'block';
    infoImage.src = 'Bruno/bruno1.jpg';
    infoText.textContent = 'Я рад, что ты откликнулся на мою просьбу, теперь поедем к моим знакомым';
    addButton('Rich(В разработке)', () => setFrame(3.1));
    addButton('Poor(В разработке)', () => setFrame(3.2));
    addButton('FIB', () => setFrame(3.3));
    addButton('Ballas(В разработке)', () => setFrame(3.4));
  }

if (frame === 3.1) {
    pinRich.style.display = 'block';
    infoImage.src = 'Team/Rich/rich1.webp';
    infoText.textContent = 'Это мои знакомые модники, любят хайповый шмот и крутые тачки';
    addButton('Согласен', () => setFrame(4));
  }

  if (frame === 3.2) {
    pinPoor.style.display = 'block';
    infoImage.src = 'Team/Poor/HMORI.webp';
    infoText.textContent = 'Классные типочки, любят реп, один раз они развеселили весь полицейский участок, теперь часто там ошиваются';
    addButton('Согласен', () => setFrame(4));
  }

  if (frame === 3.3) {
    pinFib.style.display = 'block';
    infoImage.src = 'Team/FIB/sisters.png';
    infoText.textContent = 'Поздоровайся это две сестрички, думаю информация о том, что они вдвоем остановили несколько каптов в гетто, даст тебе уверености в них, я пока тебя оставлю с ними, надо разобраться с работой, ты не против?';
    addButton('Газ знакомиться', () =>
    {
      selectFaction('FIB');
      setFrame(4);
    });
  }

  if (frame === 3.4) {
    pinBallas.style.display = 'block';
    infoImage.src = 'Team/Ballas/Ballas_Member_1.webp';
    infoText.textContent = 'Лучшие в своем деле, без лидера фракции возродили группировку, одним словом - легенды';
    addButton('Согласен', () => setFrame(4));
  }

  if (frame === 4) {
    document
    .querySelectorAll('.pin')
    .forEach(pin => {

        pin.style.display = 'none';

    });
    const faction = factionState.selectedFaction;
    const pinFaction = document.getElementById(faction.pin);
    pinFaction.style.display = 'block';
    infoImage.src = factionState.selectedFaction.image;
    infoText.textContent = faction.introText;
    addButton('Погнали', () => setFrame(5));
  }

  if (frame === 5) {
    document
    .querySelectorAll('.pin')
    .forEach(pin => {

        pin.style.display = 'none';

    });
    const faction = factionState.selectedFaction;
    const pinField = document.getElementById(faction.field);
    pinField.style.display = 'block';
    infoImage.src = factionState.selectedFaction.image;
    infoText.textContent = faction.secondText;
    addButton('Постараюсь', () => setFrame(5.1));
  }

if (frame === 5.1) {
  const faction = factionState.selectedFaction;
  const pinField = document.getElementById(faction.field);
  pinField.style.display = 'none';

  document.getElementById('battlefield').src = 'fields/cityhall.png';
  document.getElementById('firstPosEnemy').src = 'Enemy/firstEnemyCityHall.webp';
  document.getElementById('secondPosEnemy').src = 'Enemy/secondEnemyCityHall.webp';
  document.getElementById('thirdPosEnemy').src = 'Enemy/thirdEnemyCityHall.webp';
  document.getElementById('firstPos').src = 'Team/FIB/sisters_battle.png';
  document.getElementById('secondPos').src = 'Team/FIB/secondFIB.png';
  document.getElementById('thirdPos').src = 'Team/FIB/thirdFIB.png';

/*  battlefield.style.display = 'block';
  firstPosEnemy.style.display = 'block';
  secondPosEnemy.style.display = 'block';
  thirdPosEnemy.style.display = 'block';
  firstPos.style.display = 'block';
  secondPos.style.display = 'block';
  thirdPos.style.display = 'block'; */

  infoImage.style.display = 'none';
  infoText.textContent = 'Бой начинается';
  initBattle();
}

  if (frame === 5.2) {
    const faction = factionState.selectedFaction;
    const pinField = document.getElementById(faction.field);
    pinField.style.display = 'block';
    infoImage.style.display = 'block';
    pinGasStation.style.display = 'block';
    infoImage.src = factionState.selectedFaction.image;
    infoText.textContent = faction.fourthText;
    addButton('7 лет в мобилке по звёдным войнам дают о себе знать', () => setFrame(6));
  }

    if (frame === 6) {
    const faction = factionState.selectedFaction;
    const pinField = document.getElementById(faction.field);
    pinGasStation.classList.add('highlight');
    infoImage.src = factionState.selectedFaction.image;
    infoText.textContent = faction.fifthText;
    addButton('Поехать на заправку', () => setFrame(6.1));
  }

    if (frame === 6.1) {
    const faction = factionState.selectedFaction;
    const pinField = document.getElementById(faction.field);
    pinField.style.display = 'none';
    infoImage.src = 'plot/brunowomen.png';
    infoText.textContent = 'Приехав на место, вы наблюдаете следующую картину. Бруно разговаривает с какой-то шл#хой, к ним подходят...';
    addButton('Обратить внимание на людей слева', () => setFrame(6.2));
  }

    if (frame === 6.2) {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/Varrios_Los_Aztecas.webp';
    infoText.textContent = 'Ацтеки!!! Быстро из машины, Бруно помощь нужна!';
    addButton('На помощь Бруно', () => setFrame(6.3));
  }

    if (frame === 6.3) {
    const faction = factionState.selectedFaction;
    pinGasStation.style.display = 'none';
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/gasStation.webp';
    document.getElementById('firstPosEnemy').src = 'Enemy/firstAztec.webp';
    document.getElementById('secondPosEnemy').src = 'Enemy/secondAztec.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/thirdAztec.webp';
    document.getElementById('thirdPos').src = 'Team/bruno.png';

    resetBattleState()
    initBattle();
  }

    if (frame === 6.4) {
    const faction = factionState.selectedFaction;
    pinGasStation.style.display = 'block';
    infoImage.src = 'block';
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'Ладно, нет времени, погнали дальше, сами видите какое здесь местечко не безоспасное, по дороге объясню, что да и как';
    addButton('Продолжить путь', () => setFrame(7.1));
  }

    if (frame === 7.1) {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'block';
    pinGasStation.style.display = 'none';
    pinDealer.classList.add('highlight');
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'По данным моей информаторши, какого-то копа видели у наркопритона с неким Рамирезем... Едем туда';
    addButton('Продолжить путь', () => setFrame(7.2));
  }

    if (frame === 7.2) {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'Так-с, вижу у входа есть народ, давайте лучше обойдём';
    addButton('Обойти здание и зайти через черный ход', () => setFrame(7.3));
  }

    if (frame === 7.3) {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'none';
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/dealerHouse.jpg';
    document.getElementById('firstPosEnemy').src = 'Enemy/firstDealer.webp';
    document.getElementById('secondPosEnemy').src = 'Enemy/secondDealer.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/thirdDealer.webp';
    resetBattleState()
    initBattle();
  }

    if (frame === 7.4) {
    frame7o4()
  }

      if (frame === 7.5) {
    frame7o5()
  }

      if (frame === 7.6) {
    frame7o6()
  }

      if (frame === 7.7) {
    frame7o7()
  }

      if (frame === 7.8) {
    frame7o8()
  }

      if (frame === 8) {
    frame8o0()
  }

      if (frame === 8.1) {
    frame8o1()
  }

        if (frame === 8.2) {
    frame8o2()
  }

        if (frame === 8.3) {
    frame8o3()
  }

        if (frame === 8.4) {
    frame8o4()
  }

        if (frame === 8.5) {
    frame8o5()
  }

        if (frame === 8.6) {
    frame8o6()
  }
if (frame === 8.7) {
    frame8o7()
  }
if (frame === 8.8) {
    frame8o8()
  }
if (frame === 9) {
    frame9o0()
  }  
if (frame === 9.1) {
    frame9o1()
  }
if (frame === 9.2) {
    frame9o2()
  }
if (frame === 9.3) {
    frame9o3()
  }
if (frame === 9.4) {
    frame9o4()
  }
if (frame === 9.5) {
    frame9o5()
  }
if (frame === 9.6) {
    frame9o6()
  }
if (frame === 9.7) {
    frame9o7()
  }
if (frame === 9.8) {
    frame9o8()
  }
if (frame === 10) {
    frame10o0()
  }
if (frame === 10.1) {
    frame10o1()
  }
if (frame === 10.2) {
    frame10o2()
  }
if (frame === 10.3) {
    frame10o3()
  }
if (frame === 10.4) {
    frame10o4()
  }
if (frame === 10.5) {
    frame10o5()
  }
if (frame === 10.6) {
    frame10o6()
  }
if (frame === 10.7) {
    frame10o7()
  }
if (frame === 10.8) {
    frame10o8()
  }
if (frame === 10.9) {
    frame10o9()
  }
if (frame === 11) {
    frame11o0()
  }
if (frame === 11.1) {
    frame11o1()
  }
if (frame === 11.2) {
    frame11o2()
  }
if (frame === 11.3) {
    frame11o3()
  }
if (frame === 11.4) {
    frame11o4()
  }
if (frame === 11.5) {
    frame11o5()
  }
if (frame === 11.6) {
    frame11o6()
  }
if (frame === 11.7) {
    frame11o7()
  }
if (frame === 12) {
    frame12o0()
  }
if (frame === 12.1) {
    frame12o1()
  }
if (frame === 12.2) {
    frame12o2()
  }
if (frame === 12.3) {
    frame12o3()
  }
if (frame === 13) {
    frame13o0()
  }
if (frame === 13.1) {
    frame13o1()
  }
if (frame === 13.2) {
    frame13o2()
  }
if (frame === 13.3) {
    frame13o3()
  }
if (frame === 13.4) {
    frame13o4()
  }
if (frame === 13.5) {
    frame13o5()
  }
if (frame === 13.6) {
    frame13o6()
  }
if (frame === 13.7) {
    frame13o7()
  }

  addBackButton();
}

setFrame(1);