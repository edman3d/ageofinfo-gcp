export type Unit = {
  name: string;
  id: number;
  description: string;
  expansion: string;
  age: string;
  created_in: string;
  cost: string;
  build_time: string;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: string;
  attack: number;
  armor: string;
  attack_bonus: string;
  atk_bonus?: CombatBonus[];
  armor_bonus: string;
  armr_bonus?: CombatBonus[];
  search_radius: number;
  accuracy: number;
  blast_radius: number;
  image: string;
  type: string;
  armor_class: string;
  special: string;
};

export type CombatBonus = {
  amount: number;
  against: string;
};

// "name": "Alfred the Alpaca",
// "description": "Cheat unit.",
// "expansion": "Age of Empires II HD: The Forgotten",
// "age": "Dark",
// "created_in": "Town Center",
// "cost": "N/A",
// "build_time": "0",
// "reload_time": 2,
// "attack_delay": 0,
// "movement_rate": 1,
// "line_of_sight": 6,
// "hit_points": 140,
// "range": "0",
// "attack": 120,
// "armor": "20/20",
// "attack_bonus": "+100 vs Standard Buildings;+100 vs Stone Defenses",
// "armor_bonus": "",
// "search_radius": -1,
// "accuracy": 100,
// "blast_radius": 1,
// "image": "alfred-the-alpaca",
// "type": "cheat",
// "armor_class": "None"
