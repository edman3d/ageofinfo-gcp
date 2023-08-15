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
  attack_bonus?: CombatBonus[];
  armor_bonus?: CombatBonus[];
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
