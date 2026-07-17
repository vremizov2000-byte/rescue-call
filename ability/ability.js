const abilities = {
  // Базовая атака Colt – наносит прямой урон одной цели, без кулдауна
  baseColt: {
    id: 'baseColt',
    damage: 15,
    image: 'ability/baseColt.png',
    energyCost: 0,
    energyGain: 10, 
    // cooldown отсутствует (базовая атака доступна всегда)
  },

  // Мощный Deagle – высокий урон, но требует перезарядки
  hugeDeagle: {
    id: 'hugeDeagle',
    damage: 30,
    cooldown: 2,          // 2 раунда ожидания
    image: 'ability/hugeDeagle.png',
    energyCost: 20,
  },

  // Слезоточивый газ – наносит урон каждый раунд (DOT-эффект)
  baseTearGas: {
    id: 'baseTearGas',
    damage: 8,            // урон за один тик
    cooldown: 4,
    image: 'ability/baseTearGas.png',
    isDot: true,          // флаг, указывающий на эффект с течением времени
    duration: 3,          // количество раундов, в течение которых действует DOT
    energyCost: 30,
  },

  // Ультимейт – наносит урон всем противникам одновременно
  ultCall: {
    id: 'ultCall',
    damage: 50,
    cooldown: 8,
    image: 'ability/ultCall.png',
    targetsAllEnemies: true, // флаг массового поражения
    energyCost: 50,
  },

    // ---------- Новые способности ----------

  baseNitestick: {
    id: 'baseNitestick',
    damage: 0,                     // нет прямого урона
    cooldown: 3,
    image: 'ability/baseNitestick.png',
    energyCost: 30,
    stun: true,                    // оглушение – цель пропускает ход
  },

  hugeColt: {
    id: 'hugeColt',
    damage: 17,
    cooldown: 1,
    image: 'ability/hugeColt.png',
    energyCost: 20,
    noActionCost: true,            // после использования герой продолжает ход
    passiveBonus: {                // добавляет +2 урона к baseColt
      targetAbilityId: 'baseColt',
      bonusDamage: 2,
    },
  },

  hugeShotgun: {
    id: 'hugeShotgun',
    damage: 30,                    // основной урон по цели
    cooldown: 2,
    image: 'ability/hugeShotgun.png',
    energyCost: 20,
    aoeDamage: 10,                 // дополнительный урон по остальным врагам
  },

  itemSprunk: {
    id: 'itemSprunk',
    image: 'ability/itemSprunk.png',
    energyGain: 20,                // восполняет энергию
    cooldown: 3,
    noActionCost: true,            // не тратит ход
  },

  itemDrug: {
    id: 'itemDrug',
    image: 'ability/itemDrug.png',
    cooldown: 4,
    noActionCost: true,
    maxHpBonus: 50,                // увеличивает максимум HP на 50
    heal: 50,                      // восстанавливает текущее HP на 50
    energyCost: 0,                 // не требует энергии
  },

  itemWalkieTalkie: {
    id: 'itemWalkieTalkie',
    image: 'ability/itemWalkieTalkie.png',
    energyGain: 10,
    cooldown: 3,
    noActionCost: true,
    grantExtraTurnToTarget: true,  // даёт следующий ход указанному персонажу
  },
};

// ============================================================
//  Вспомогательные функции (расширены для новых полей)
// ============================================================

// Получить способность по ID
function getAbility(id) {
  return abilities[id] || null;
}

// Проверить, является ли способность DOT
function isDot(ability) {
  return ability && ability.isDot === true;
}

// Проверить, наносит ли урон всем врагам
function isAoE(ability) {
  return ability && ability.targetsAllEnemies === true;
}

// Проверить, есть ли оглушение
function hasStun(ability) {
  return ability && ability.stun === true;
}

// Проверить, не тратит ли способность ход
function hasNoActionCost(ability) {
  return ability && ability.noActionCost === true;
}

// Получить чистое изменение энергии (отрицательное – затраты, положительное – восполнение)
function getEnergyDelta(ability) {
  const cost = ability.energyCost || 0;
  const gain = ability.energyGain || 0;
  return cost - gain; // например, для baseColt: 0 - 10 = -10 (энергия увеличится)
}

// Проверить, можно ли применить способность (по энергии)
function canUseAbility(ability, currentEnergy) {
  const cost = ability.energyCost || 0;
  return currentEnergy >= cost;
}

// Получить пассивный бонус (если есть)
function getPassiveBonus(ability) {
  return ability.passiveBonus || null;
}