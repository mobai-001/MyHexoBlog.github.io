// Offensive items set
// An object containing all of our offensive equippable cards for our various function to pull from
// Master audio array.
const _masterAudio = [
{
  'name': 'bgmusic',
  'source': 'https://assets.codepen.io/217233/hackbgsoundtrack.mp3',
  'stack': 1 },
{
  'name': 'heal',
  'source': 'https://assets.codepen.io/217233/hackHealFX.wav' },
{
  'name': 'invalid',
  'source': 'https://assets.codepen.io/217233/hackErrorFX.wav',
  'stack': 4 },
{
  'name': 'stageComplete',
  'source': 'https://assets.codepen.io/217233/hackStageCompleteFX.mp3' },
{
  'name': 'cardHover',
  'source': 'https://assets.codepen.io/217233/hackCardHoverFX.wav',
  'stack': 5 },
{
  'name': 'enemyKilled',
  'source': 'https://assets.codepen.io/217233/hackEnemyDeadFX.wav' },
{
  'name': 'defensiveEquipped',
  'source': 'https://assets.codepen.io/217233/hackDefensiveEquipped.mp3' },
{
  'name': 'enemyHit',
  'source': 'https://assets.codepen.io/217233/hackEnemyHitFX.mp3',
  'stack': 4 },
{
  'name': 'node',
  'source': 'https://assets.codepen.io/217233/hackNodeFX.wav',
  'stack': 2 },
{
  'name': 'data',
  'source': 'https://assets.codepen.io/217233/hackDataFX.mp3',
  'stack': 3 },
{
  'name': 'buy',
  'source': 'https://assets.codepen.io/217233/hackBuyFX.mp3',
  'stack': 2 },
{
  'name': 'openShop',
  'source': 'https://assets.codepen.io/217233/hackOpenShopFX.mp3' },
{
  'name': 'take',
  'source': 'https://assets.codepen.io/217233/hackTakeFX.mp3',
  'stack': 6 },
{
  'name': 'trash',
  'source': 'https://assets.codepen.io/217233/hackTrashFX.mp3',
  'stack': 2 },
{
  'name': 'enemyAttackFlesh',
  'source': 'https://assets.codepen.io/217233/hackEnemyAttackFX.mp3',
  'stack': 3 },
{
  'name': 'enemyAttackShield',
  'source': 'https://assets.codepen.io/217233/hackEnemyAttackShieldFX_1.wav',
  'stack': 3 },
{
  'name': 'achievement',
  'source': 'https://assets.codepen.io/217233/hack--achievementsfx.mp3' },
{
  'name': 'mine',
  'source': 'https://assets.codepen.io/217233/hack--dataminingsfx.wav',
  'stack': 2 },
{
  'name': 'intro',
  'source': 'https://assets.codepen.io/217233/hack--intro.mp3' },
{
  'name': 'takerelic',
  'source': 'https://assets.codepen.io/217233/hack--takerelicsfx.wav' }];



const offensiveCards = [
{
  name: 'DDoS',
  baseAttack: 3,
  attack: 3, // Penetration lel
  durability: 2,
  cost: 12,
  type: 'offensive',
  description: '分布式拒绝服务攻击 进攻卡片' },


{
  name: 'Worm',
  baseAttack: 4,
  attack: 4,
  durability: 2,
  cost: 18,
  type: 'offensive',
  description: '自我复制传播主动攻击病毒 进攻卡片' },

{
  name: 'Rootkit',
  baseAttack: 5,
  attack: 5,
  durability: 1,
  cost: 12,
  type: 'offensive',
  description: '拥Root权限可操纵模拟的病毒 进攻卡片' },

{
  name: 'RAT',
  baseAttack: 6,
  attack: 6,
  durability: 1,
  cost: 15,
  type: 'offensive',
  description: '特洛伊木马变体 进攻卡片' },

{
  name: 'Virus',
  baseAttack: 5,
  attack: 5,
  durability: 2,
  cost: 23,
  type: 'offensive',
  description: '计算机病毒 进攻卡片' }];



// Defensive items set
// An object containing all of our defensive equippable cards for our various function to pull from

const defensiveCards = [
{
  name: 'Shell',
  defence: 2,
  cost: 8,
  type: 'defensive',
  description: '命令解析器 防御卡片' },

{
  name: 'Proxy',
  defence: 4,
  cost: 12,
  type: 'defensive',
  description: '网络代理 防御卡片' },

{
  name: 'Spoofer',
  defence: 6,
  cost: 18,
  type: 'defensive',
  description: '欺骗器 防御卡片' },

{
  name: 'Cloak',
  defence: 8,
  cost: 25,
  type: 'defensive',
  description: '遮盖 防御卡片' }];



// Defensive items set
// An object containing all of our defensive equippable cards for our various function to pull from

const healthCards = [
{
  name: 'Defrag',
  value: 3,
  baseValue: 3,
  cost: 4,
  type: 'healing',
  description: '碎片整理 恢复卡片' },

{
  name: 'Recompile',
  value: 6,
  baseValue: 6,
  cost: 8,
  type: 'healing',
  description: '复编译 恢复卡片' },

{
  name: 'Debug',
  value: 8,
  baseValue: 8,
  cost: 10,
  type: 'healing',
  description: '调试器 恢复卡片' }];




// Locations set
// An object containing all of our non interactive locations or 'nodes'

const nodeCards = [
{
  name: '邮箱账户',
  type: 'node' },

{
  name: '网络交换机',
  type: 'node' },

{
  name: 'FTP 服务器',
  type: 'node' },

{
  name: 'Web 服务器',
  type: 'node' },

{
  name: '储存数据',
  type: 'node' },

{
  name: '贮存物',
  type: 'node' },

{
  name: '银行账户',
  type: 'node' },

{
  name: '档案系统',
  type: 'node' },

{
  name: '热点',
  type: 'node' },

{
  name: '邮件服务器',
  type: 'node' },

{
  name: '终端',
  type: 'node' },

{
  name: '加密基金',
  type: 'node' }];



// Enemies set
// An object containing all of our games enemies and their base stats

const enemies = [
{
  name: '网关',
  health: 2,
  baseHealth: 2,
  attack: 1,
  type: 'enemy',
  description: '黑入它以继续' },

{
  name: '路由器',
  health: 4,
  baseHealth: 4,
  attack: 2,
  type: 'enemy',
  description: '黑入它以继续' },

{
  name: '数据库',
  health: 5,
  baseHealth: 5,
  attack: 1,
  type: 'enemy',
  description: '黑入它以继续' },

{
  name: '堡垒机',
  health: 2,
  baseHealth: 2,
  attack: 6,
  type: 'enemy',
  description: '黑入它以继续' },

{
  name: '虚拟主机',
  health: 4,
  baseHealth: 4,
  attack: 3,
  type: 'enemy',
  description: '黑入它以继续' }];



// Boss set
// An object containing all of our games bosses

const bosses = [
{
  name: '数据中心',
  health: 14,
  attack: 3,
  type: 'enemy',
  description: '黑入它以完成此关卡' },

{
  name: '安全警示器',
  health: 12,
  attack: 5,
  type: 'enemy',
  description: '黑入它以完成此关卡' },

{
  name: '专业主机',
  health: 10,
  attack: 6,
  type: 'enemy',
  description: '黑入它以完成此关卡' },

{
  name: '杀毒软件',
  health: 8,
  attack: 8,
  type: 'enemy',
  description: '黑入它以完成此关卡' },

{
  name: '防火墙',
  health: 4,
  attack: 15,
  type: 'enemy',
  description: '黑入它以完成此关卡' },

{
  name: '服务器',
  health: 20,
  attack: 2,
  type: 'enemy',
  description: '黑入它以完成此关卡' },

{
  name: '网域',
  health: 9,
  attack: 4,
  type: 'enemy',
  description: '黑入它以完成此关卡' }];



// Relic set
// An object containing all of our games relics and their effects

const relicCards = [
{
  name: 'Ram module',
  type: 'relic',
  description: '技术平台卡片最大容量增加 1',
  targets: ['player.maxInventory'],
  operator: ['+='],
  change: [1],
  cost: 12 },

{
  name: 'Lag switch',
  type: 'relic',
  description: '最大完整度(生命值)增加 5',
  targets: ['player.maxHealth'],
  operator: ['+='],
  change: [5],
  cost: 15 },

{
  name: 'Premium proxy',
  type: 'relic',
  description: '最大完整度(生命值)增加 10',
  targets: ['player.maxHealth'],
  operator: ['+='],
  change: [10],
  cost: 25 },

{
  name: 'Sensitive data',
  type: 'relic',
  description: '商店商品数量增加 1',
  targets: ['player.shopCardTotal'],
  operator: ['+='],
  change: [1],
  cost: 15 },

{
  name: 'Hacker rep',
  type: 'relic',
  description: '商店 1 折',
  targets: ['player.shopDiscount'],
  operator: ['+='],
  change: [10],
  cost: 25 },

{
  name: 'Hard reset',
  type: 'relic',
  description: '完全恢复你的完整度(生命值)',
  targets: ['player.health'],
  operator: ['+='],
  change: [1000],
  cost: 12 },

{
  name: 'Filter coffee',
  type: 'relic',
  description: '将完整度(生命值)恢复率提高 5%',
  targets: ['player.restHealPercentage'],
  operator: ['+='],
  change: [5],
  cost: 12 },

{
  name: 'Additional CPU',
  type: 'relic',
  description: '每次卡片强化时最大完整度(生命值)增加 1',
  targets: ['player.restMaxHealthIncrease'],
  operator: ['+='],
  change: [2],
  cost: 10 },

{
  name: 'Packet sniffer',
  type: 'relic',
  description: '失去 10 点完整度(生命值)获得 20 数据点',
  targets: ['player.health', 'player.currency'],
  operator: ['-=', '+='],
  change: [10, 20],
  cost: 5 },

{
  name: 'NMAP',
  type: 'relic',
  description: '失去 5 最大完整度(生命值)获得 15 数据点',
  targets: ['player.maxHealth', 'player.currency'],
  operator: ['-=', '+='],
  change: [10, 15],
  cost: 5 },
{
  name: 'Quantum processor',
  type: 'relic',
  description: '失去 15 点最大完整度(生命值)获得 1 点伤害提高',
  targets: ['player.boosts["Brute force"]', 'player.maxHealth'],
  operator: ['+=', '-='],
  change: [1, 15],
  cost: 25 },
{
  name: 'Additional servers',
  type: 'relic',
  description: 'DDoS 的攻击力加 1',
  targets: ['player.boosts["DDoS"]'],
  affects: 0,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Worm AI',
  type: 'relic',
  description: 'Worms 的攻击力加 1',
  targets: ['player.boosts["Worm"]'],
  affects: 1,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Multilang rootkits',
  type: 'relic',
  description: 'Rootkits 的攻击力加 1',
  targets: ['player.boosts["Rootkit"]'],
  operator: ['+='],
  affectGroup: "offensiveCards",
  affects: 2,
  change: [1],
  cost: 15 },

{
  name: 'Remote Bypass',
  type: 'relic',
  description: 'RATs 的攻击力加 1',
  targets: ['player.boosts["RAT"]'],
  affects: 3,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Automatic concealment',
  type: 'relic',
  description: 'Virus 的攻击力加 1',
  targets: ['player.boosts["Virus"]'],
  affects: 4,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'YO-YO attacks',
  type: 'relic',
  description: 'DDoS 的使用次数加 1',
  targets: ['player.boosts["DDoSDurability"]'],
  affects: 0,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Advanced replication',
  type: 'relic',
  description: 'Worms 的使用次数加 1',
  targets: ['player.boosts["WormDurability"]'],
  affects: 1,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Admin overrides',
  type: 'relic',
  description: 'Rootkits 的使用次数加 1',
  targets: ['player.boosts["RootkitDurability"]'],
  affects: 2,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },

{
  name: 'Anti-detection capabilities',
  type: 'relic',
  description: 'RATs 的使用次数加 1',
  targets: ['player.boosts["RATDurability"]'],
  affects: 3,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Deep embedding',
  type: 'relic',
  description: 'Virus 的使用次数加 1',
  targets: ['player.boosts["VirusDurability"]'],
  affects: 4,
  affectGroup: "offensiveCards",
  operator: ['+='],
  change: [1],
  cost: 15 },
{
  name: 'Remote terminal',
  type: 'relic',
  description: 'Shells 的防御值加 2',
  targets: ['player.boosts["Shell"]'],
  operator: ['+='],
  affects: 0,
  affectGroup: "defensiveCards",
  change: [2],
  cost: 15 },
{
  name: 'Auto rotate',
  type: 'relic',
  description: 'Proxys 的防御值加 2',
  targets: ['player.boosts["Proxy"]'],
  affects: 1,
  affectGroup: "defensiveCards",
  operator: ['+='],
  change: [2],
  cost: 15 },
{
  name: 'HWID Spoofing',
  type: 'relic',
  description: 'Spoofers 的防御值加 2',
  targets: ['player.boosts["Spoofer"]'],
  operator: ['+='],
  affects: 2,
  affectGroup: "defensiveCards",
  change: [2],
  cost: 15 },
{
  name: 'Super cloak',
  type: 'relic',
  description: 'Cloaks 的防御值加 2',
  targets: ['player.boosts["Cloak"]'],
  operator: ['+='],
  affects: 3,
  affectGroup: "defensiveCards",
  change: [2],
  cost: 15 },
{
  name: 'NVMes',
  type: 'relic',
  description: 'Defrag replenishes 的回复量加 2',
  targets: ['player.boosts["Defrag"]'],
  affects: 0,
  affectGroup: "healthCards",
  operator: ['+='],
  change: [2],
  cost: 15 },
{
  name: 'Distcc',
  type: 'relic',
  description: 'Recompiling replenishes 的回复量加 2',
  targets: ['player.boosts["Recompile"]'],
  operator: ['+='],
  affects: 1,
  affectGroup: "healthCards",
  change: [2],
  cost: 15 },
{
  name: 'Advanced IDEs',
  type: 'relic',
  description: 'Debug replenishes 的回复量加 2',
  targets: ['player.boosts["Debug"]'],
  affects: 2,
  affectGroup: "healthCards",
  operator: ['+='],
  change: [2],
  cost: 15 },
{
  name: 'Selective targets',
  type: 'relic',
  description: '数据节点 增加 10% 的数据点含量',
  targets: ['player.boosts["Data"]'],
  operator: ['+='],
  change: [10],
  cost: 15 },
{
  name: 'Self repair',
  type: 'relic',
  description: '在每个关卡结束时完整性(生命值)加 2',
  targets: ['player.boosts["StageHeal"]'],
  operator: ['+='],
  change: [2],
  cost: 15 }];



const startingCards = [
{
  name: 'Brute force',
  attack: 1, // Penetration lel
  baseAttack: 1,
  durability: 999999,
  cost: 0,
  type: 'offensive',
  description: '暴力破解 进攻卡片' }];



const achievements = [
{
  name: '最大攻击力',
  description: '让任意攻击性卡片的攻击力提升 9 或更多' },

{
  name: '斯诺登',
  description: '试图攻击中央情报局' },

{
  name: '脚本小子',
  description: '在一次游戏中收集 5 次升级' },

{
  name: 'Red hat',
  description: 'Collect 10 upgrades in one run' },

{
  name: 'Black hat',
  description: 'Collect 15 upgrades in one run' },

{
  name: 'Elite hacker',
  description: 'Collect 20 upgrades in one run' },

{
  name: 'Impenetrable',
  description: 'Get any firewall module to 12 or more resistance' },

{
  name: 'Gigabyte',
  description: 'Collect 30 or more data' },

{
  name: 'Teabyte',
  description: 'Collect 100 or more data' },

{
  name: 'Petabyte',
  description: 'Collect 150 or more data' },

{
  name: 'Mine, all mine',
  description: 'Mine a network node' },

{
  name: 'One down',
  description: 'Terminate a node' },

{
  name: 'Top up',
  description: 'Heal yourself' },

{
  name: 'n00b',
  description: 'Get detected' },

{
  name: 'Its a UNIX system!',
  description: 'Complete a stage' },

{
  name: 'What upgrades?',
  description: 'Complete a stage with no upgrades' },

{
  name: 'Jackpot',
  description: 'Mine a node worth 14 or more data' },

{
  name: 'Kitted',
  description: 'Have a max tech deck capacity of 8 or more' },

{
  name: 'Data dump',
  description: 'Hack a Data Center' },

{
  name: 'Not so secure',
  description: 'Hack a Security beacon' },

{
  name: 'My kung fu is stronger',
  description: 'Hack a Mainframe' },

{
  name: 'Antivirus down',
  description: 'Hack an Antivirus' },

{
  name: 'Through the fire and flame',
  description: 'Hack a Firewall' },

{
  name: 'Youve been served',
  description: 'Hack a Server' },

{
  name: 'Piece of cake',
  description: 'Hack a Subnet' },

{
  name: "We're in",
  description: 'Successfully hack an easy target' },

{
  name: 'I am invincible',
  description: 'Successfully hack a medium target' },

{
  name: 'There is no spoon',
  description: 'Successfully hack a hard target' },

{
  name: 'I know Kung Fu',
  description: 'Download something from the dark web' },

{
  name: 'Dictionary attack',
  description: 'Increase your Brute Force penetration' },

{
  name: 'Absolute unit',
  description: 'Have a max integrity of 40 or more' },

{
  name: 'Fort Knox',
  description: 'Have a max integrity of 70 or more' },

{
  name: 'They are on to you',
  description: 'Take more than 10 damage in one hit' },

{
  name: 'Skin of your teeth',
  description: 'Complete a stage with just 1 integrity remaining' },

{
  name: 'Digital don',
  description: 'Complete a stage with full integrity' },

{
  name: 'Who needs health',
  description: 'Reduce your max integrity to 5 or below' },


// seed specific
{
  name: 'McKinnon would be proud',
  description: 'Successfully hack NASA on hard' },

{
  name: 'Bourne to do this',
  description: 'Successfully hack TREADSTONE on hard' },

{
  name: 'Judgement day prevented',
  description: 'Successfully hack SKYNET on hard' },

{
  name: "I'm sorry, Dave",
  description: 'Successfully hack HAL9000 on hard' }];