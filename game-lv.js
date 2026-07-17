function frame7o4() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'block';
    pinDealer.classList.add('highlight');
    infoImage.src = 'plot/dealer.png';
    infoText.textContent = 'Чил, чил братан, не убивай... Ты и так погасил всех моих сотрудников меня пощади...';
    addButton('Слушать дальше', () => setFrame(7.5));
}

function frame7o5() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'block';
    pinDealer.classList.add('highlight');
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Учись пушку держать при себе, иначе постоянно будешь на такое натыкаться. Говори всё, что ты знаешь о копе, который тут ошивался, где ты его прячешь?';
    addButton('Слушать дальше', () => setFrame(7.6));
}

function frame7o6() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'block';
    pinDealer.classList.add('highlight');
    infoImage.src = 'plot/dealer.png';
    infoText.textContent = 'Какой еще нахр*ен коп... Не было здесь копов';
    addButton('Слушать дальше', () => setFrame(7.7));
}

function frame7o7() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'block';
    pinDealer.classList.add('highlight');
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = '*Надавил сильнее на рану ногой* Вот этот *показывает на телефоне фотку своего друга*';
    addButton('Слушать дальше', () => setFrame(7.8));
}

function frame7o8() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'block';
    pinMotel.style.display = 'block';
    pinDealer.classList.remove('highlight');
    pinMotel.classList.add('highlight');
    infoImage.src = 'plot/dealer.png';
    infoText.textContent = 'Ааа... Коп под прекрытием, жалкое зрелище... Я его отправил в отель.. Мы не барижым здесь порошком';
    addButton('Отправиться к отелю', () => setFrame(8));
}

function frame8o0() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'none';
    infoImage.src = 'plot/dealer.png';
    infoText.textContent = 'Ааа... Коп под прекрытием, жалкое зрелище... Я его отправил в отель.. Мы не барижым здесь порошком';
    addButton('Отправиться к отелю', () => setFrame(8.1));
}

function frame8o1() {
    const faction = factionState.selectedFaction;
    pinDealer.style.display = 'none';
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'Я знал, что в отеле шлюшарня, но то, что там еще и торгуют более тяжелыми для меня открытие... Надеюсь, он еще жив';
    addButton('Подъехать к отелю', () => setFrame(8.2));
}

function frame8o2() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'Нас походу уже ждут... Крыса на дилере...';
    addButton('Принять перестрелку', () => setFrame(8.3));
}

function frame8o3() {
    const faction = factionState.selectedFaction;
    pinMotel.style.display = 'none';
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/motelStreet.jpg';
    document.getElementById('firstPosEnemy').src = 'Enemy/streetFirst.jpg';
    document.getElementById('secondPosEnemy').src = 'Enemy/streetSecond.jpg';
    document.getElementById('thirdPosEnemy').src = 'Enemy/streetThird.jpg';
    resetBattleState()
    initBattle();
}

function frame8o4() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/motelReception.webp';
    document.getElementById('firstPosEnemy').src = 'Enemy/reseptionFirst.webp';
    document.getElementById('secondPosEnemy').src = 'Enemy/reseptionSecond.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/reseptionThird.jpg';
    resetBattleState()
    initBattle();
}

function frame8o5() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/motelBoss.jpg';
    document.getElementById('firstPosEnemy').src = 'Enemy/motelFirst.webp';
    document.getElementById('secondPosEnemy').src = 'Enemy/motelSecond.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/motelThird.webp';
    resetBattleState()
    initBattle();
}

function frame8o6() {
    const faction = factionState.selectedFaction;
    pinMotel.style.display = 'block';
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Ублюдок, прятаться за своими же шлюхами очень низко, а теперь отвечай, куда ты дел полицейского?';
    addButton('Слушать дальше', () => setFrame(8.7));
}

function frame8o7() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/pimp.png';
    infoText.textContent = 'Мы его продали за крышу... Какой-то мафиозной группировке... Ничего не знаю, наш посредник из LV, лично меня на встрече не было, увёз он его буквально пару часов назад... Посредника зовут Роберто, Латинос... Увез на чёрной машине... не убивайте только *видно как его штаны становятся влажными*';
    addButton('Слушать дальше', () => setFrame(8.8));
}

function frame8o8() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Ладно, видимо придётся ехать в LV, не люблю это место... Заедем там к моей подруге, возможно, она что-то может знать';
    addButton('Отправиться в Las Venturas', () => setFrame(9));
}

function frame9o0() {
    const faction = factionState.selectedFaction;
    pinMotel.style.display = 'none';
    pinFriendHouse.style.display = 'block';
    document.getElementById('mainMap').src = 'locations/LV.png';
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'Езжай в юго-восточный район города, там есть домик... Думаю она нам точно поможет';
    addButton('Отправиться к дому', () => setFrame(9.1));
}

function frame9o1() {
    const faction = factionState.selectedFaction;
    pinFriendHouse.classList.add('highlight');
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Вот мы и у дома... Надеюсь она здесь';
    addButton('Постучать в дверь', () => setFrame(9.2));
}

function frame9o2() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/lilit.jpg';
    infoText.textContent = 'Ооо Бруно, ты еще и с друзьями, проходите не стойте в дверях';
    addButton('Принять приглашение', () => setFrame(9.3));
}

function frame9o3() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Слушай, я опять с проблемой... Моего друга увезли в LV мафиозники, не знаем какие и не знаем куда... Можешь помочь там по своим связям?';
    addButton('Внимательно слушать', () => setFrame(9.4));
}

function frame9o4() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/lilit.jpg';
    infoText.textContent = 'Мафиозники говоришь... А зачем его забрали, не уточнял, да?';
    addButton('Внимательно слушать', () => setFrame(9.5));
}

function frame9o5() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Знаю, только одно, продали его за крышу наркодиллеров, он просто копал под них и попал в западню';
    addButton('Внимательно слушать', () => setFrame(9.6));
}

function frame9o6() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/lilit.jpg';
    infoText.textContent = 'Есть у меня одна идея, он наверняка взял с собой какой-нибудь жучок или что-то в этом роде... Нам будет отследить сигнал. Каков план, каждый вечер мафиозники катаются играть в казино, можно будет присоединить жучки к их машинам, как только они уловят радиоволны или какие-то сигналы копа из LS, то будет ответ, где он находится';
    addButton('Внимательно слушать', () => setFrame(9.7));
}

function frame9o7() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Господи, это отличная идея!!! Когда выдвигаемся?';
    addButton('Внимательно слушать', () => setFrame(9.8));
}

function frame9o8() {
    const faction = factionState.selectedFaction;
    pinWarehouse.style.display = 'block';
    infoImage.src = 'plot/lilit.jpg';
    infoText.textContent = 'Стой-стой, ты думал будет так всё просто? Не так уж... Они не приезжают на специальных машинах с надписью ЗДЕСЬ СИДИТ МАФИЯ, мы просто так не поймём, нужен знающий человек и у меня такой есть, отправляйся на склад на юго-западе города, моего человека зовут Вузи, я предупрежу о вас, а пока подготовлю маячки, встретимся тогда сразу у Казино, куда ехать вам покажут';
    addButton('Поехать на встречу с Вузи', () => setFrame(10));
}

function frame10o0() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'fields/warehouseClean.webp';
    pinFriendHouse.style.display = 'none';
    pinWarehouse.classList.add('highlight');
    infoText.textContent = '*Вы замечаете пустой склад с парочкой машин в ней и одну из них бьёт мантировкой какой-то мужик*';
    addButton('Подойти к нему', () => setFrame(10.1));
}

function frame10o1() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'Я так понимаю вы от Азиатной Сучки, меня Вузи зовут. Слышал у вас друг пропал, но я просто так не помогаю, нужна помощь с этой грудой металла, они никому не понадобились из продавцов, поэтому их надо утилизировать поможете? *протягивает вам монтировку*';
    addButton('Взять монтировку', () => setFrame(10.2));
}

function frame10o2() {
    const faction = factionState.selectedFaction;
    pinWarehouse.style.display = 'none';
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/warehouseClean.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/warehouseFirst.webp';
    resetBattleState()
    battleUnits.firstPosEnemy.hp = 0;
    battleUnits.secondPosEnemy.hp = 0;
    battleUnits.thirdPosEnemy.hp = 500;
    initBattle();
}

function frame10o3() {
    const faction = factionState.selectedFaction;
    pinWarehouse.style.display = 'block';
    pinCasino.style.display = 'block';
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'Ребят, вы ужасные помощники, чуть себя осколками стекла и метала не угробили... Займусь остальными потом, поехали тогда в казино, мне маякнули, что пора на вылазку';
    addButton('По машинам!', () => setFrame(10.4));
}

function frame10o4() {
    const faction = factionState.selectedFaction;
    pinWarehouse.style.display = 'none';
    pinCasino.classList.add('highlight');
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'Нам необходимо сейчас пробраться на подземную парковку, в такие вечера там стоят машины богачей, чиновников и городской элиты, ну или простым языком - мафии';
    addButton('Слушать план', () => setFrame(10.5));
}

function frame10o5() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/lilit2.jpg';
    infoText.textContent = 'Думаю разделимся, Бруно и Вузи спустятся вниз, остальные со мной на шухере';
    addButton('А я?', () => setFrame(10.6));
}

function frame10o6() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno0.jpg';
    infoText.textContent = 'Ты пойдешь с нами в самые гущи, чтобы не расслаблялся';
    addButton('Направиться в сторону парковки', () => setFrame(10.7));
}

function frame10o7() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'fields/parking.webp';
    infoText.textContent = 'Вроде всё спокойно и никого нет';
    addButton('Отправиться искать машины', () => setFrame(10.8));
}

function frame10o8() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'Так-с, вроде на все повесил, но такой нюанс, нет машин Якудзы. Не похоже на них, они одни из первых приезжают сюда *в этот момент открывается дверь лифта на парковку*';
    addButton('Спрятаться', () => setFrame(10.9));
}

function frame10o9() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/parkingManager.png';
    infoText.textContent = 'Ребят, вас прекрасно видно на камерах, выходите';
    addButton('Принять бой', () => setFrame(11));
}

function frame11o0() {
    const faction = factionState.selectedFaction;
    pinCasino.style.display = 'none';
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/parking.webp';
    document.getElementById('firstPosEnemy').src = 'Enemy/parkingFirst.jpg';
    document.getElementById('secondPosEnemy').src = 'Enemy/parkingSecond.jpg';
    document.getElementById('thirdPosEnemy').src = 'Enemy/parkingThird.jpg';
    document.getElementById('secondPos').src = 'Team/Woozy.png';
    resetBattleState()
    battleUnits.firstPos.hp = 0;
    battleUnits.secondPos.minAttack = 45;
    battleUnits.secondPos.maxAttack = 45;
    initBattle();
}

function frame11o1() {
    const faction = factionState.selectedFaction;
    pinCasino.style.display = 'block';
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'Дёру отсюда! На точку сбора';
    addButton('Убежать', () => setFrame(11.2));
}

function frame11o2() {
    const faction = factionState.selectedFaction;
    pinCasino.style.display = 'none';
    pinFriendHouse.style.display = 'block';
    infoImage.src = 'plot/lilit2.jpg';
    infoText.textContent = 'Что такого случилось на парковке, что пришлось сбегать?';
    addButton('Объяснить, что было', () => setFrame(11.3));
}

function frame11o3() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/lilit2.jpg';
    infoText.textContent = 'Не было машин Якудза говорите... К сожалению, у меня нет больше идей...';
    addButton('Осмотреть всех остальных', () => setFrame(11.4));
}

function frame11o4() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'Слушайте, у меня план, но вы будете мне должны огромную кучу денег или убежище в другом городе. У меня есть заказ и есть большая уверенность, что это Якудза...';
    addButton('Внимательно слушать', () => setFrame(11.5));
}

function frame11o5() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/lilit2.jpg';
    infoText.textContent = 'Прикрепим маячок, узнаем примерно расположение и возможно словим сигнал LSPD, отличная идея!';
    addButton('Слушать дальше', () => setFrame(11.6));
}

function frame11o6() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/thief.jpg';
    infoText.textContent = 'В общем, я поеду узнавать, если что МАЯКНУ';
    addButton('Ждать известий', () => setFrame(11.7));
}

function frame11o7() {
    const faction = factionState.selectedFaction;
    pinYakuza.style.display = 'block';
    infoImage.src = 'plot/lilit.jpg';
    infoText.textContent = 'Отличная новость, Вузи дал метку на карте, выдвигаемся';
    addButton('Поехать к особняку', () => setFrame(12));
}

function frame12o0() {
    const faction = factionState.selectedFaction;
    pinStopCar.style.display = 'block';
    pinFriendHouse.style.display = 'none';
    pinStopCar.classList.add('highlight');
    infoImage.src = 'Bruno/bruno2.jpg';
    infoText.textContent = 'Ну какого х*я, копы...';
    addButton('Остановить машину', () => setFrame(12.1));
}

function frame12o1() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/corruptCop.jpg';
    infoText.textContent = 'Афицъэр Щугъи шерыфскоко дипартамэнта, можно ващи докумэнты? Кхуда пут дэржим...';
    addButton('Дальше', () => setFrame(12.2));
}

function frame12o2() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'Bruno/bruno2.jpg'
    infoText.textContent = 'Возьмите Сэр, город исследуем с друзьями, очень необычный';
    addButton('Дальше', () => setFrame(12.3));
}

function frame12o3() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/corruptCop.jpg';
    infoText.textContent = 'Изъ Лус-Сантосъа к нам приэхали, агха... Атличний горот, приъатной вам дорогхи';
    addButton('К особняку', () => setFrame(13));
}

function frame13o0() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/corruptCop.jpg';
    infoText.textContent = 'Изъ Лус-Сантосъа к нам приэхали, агха... Атличний горот, приъатной вам дорогхи';
    addButton('К особняку', () => setFrame(13.1));
}

function frame13o1() {
    const faction = factionState.selectedFaction;
    pinStopCar.style.display = 'none';
    pinYakuza.classList.add('highlight');
    infoImage.src = 'Bruno/bruno2.jpg'
    infoText.textContent = 'Походу нас ждут';
    addButton('Выпрыгнуть из машины в бой', () => setFrame(13.2));
}


function frame13o2() {
    const faction = factionState.selectedFaction;
    pinYakuza.style.display = 'none';
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/yakuza.jpg';
    document.getElementById('firstPosEnemy').src = 'Enemy/yakuza/Ya1.jpg';
    document.getElementById('secondPosEnemy').src = 'Enemy/yakuza/Ya2.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/yakuza/Ya3.webp';
    document.getElementById('secondPos').src = 'Team/FIB/secondFIB.png';
    battleUnits.firstPos.hp = 100;
    battleUnits.firstPos.minAttack = 10;
    battleUnits.firstPos.maxAttack = 30;
    battleUnits.secondPos.minAttack = 15;
    battleUnits.secondPos.maxAttack = 20;
    battleUnits.thirdPos.minAttack = 15;
    battleUnits.thirdPos.maxAttack = 45;
    resetBattleState()
    initBattle();
}

function frame13o3() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/yakuza3.png';
    document.getElementById('firstPosEnemy').src = 'Enemy/yakuza/Ya123.jpg';
    document.getElementById('secondPosEnemy').src = 'Enemy/yakuza/Ya123.jpg';
    document.getElementById('thirdPosEnemy').src = 'Enemy/yakuza/Ya123.jpg';
    resetBattleState()
    initBattle();
}

function frame13o4() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'none';
    document.getElementById('battlefield').src = 'fields/yakuza2.png';
    document.getElementById('firstPosEnemy').src = 'Enemy/yakuza/Yal1.png';
    document.getElementById('secondPosEnemy').src = 'Enemy/yakuza/Yal2.webp';
    document.getElementById('thirdPosEnemy').src = 'Enemy/yakuza/Yal3.jpg';
    resetBattleState()
    initBattle();
}

function frame13o5() {
    const faction = factionState.selectedFaction;
    pinYakuza.style.display = 'block';
    infoImage.src = 'Bruno/bruno0.jpg'
    infoText.textContent = 'Иди освободи освободи его';
    addButton('Освободить заключенного', () => setFrame(13.6));
}

function frame13o6() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/brunoFriend.jpg'
    infoText.textContent = 'Спасибо тебе больше за спасения. За спасения самого себя в этот прекрасный день от самого себя, теперь Хирото Накамуро сядет в тюрьму и вся его деятельность закроется';
    addButton('всм, чо рил типа неужели рил, чо дум', () => setFrame(13.7));
}

function frame13o7() {
    const faction = factionState.selectedFaction;
    infoImage.src = 'plot/happy.jpg'
    infoText.textContent = 'С днем рождения, поздравляю тебя с твоим праздником, теперь ты официально перевалил за 25 и вступил к официальную скуфскую коалицию. Решил опять поиграть на ностальгии, думаю получилось нормально. В сроки не уложился, поэтому отчасти игра сырая, но мб в будущем доработаю до идеала. С праздником!';
    addButton('Happy Birthday!', () => setFrame(13.7));
}