export type Unit = {
  name: string;
  id: number;
  description: string;
  expansion: string;
  age: "N/A" | "Dark" | "Feudal" | "Castle" | "Imperial";
  created_in: string; // some units can be created in multiple bldgs (e.g. Castle;Donjon)
  cost: string; // not a Cost type because data isnt JSON by default (e.g. {Food: 2; Wood: 2} instead of {Food: 2, Wood: 2})
  build_time: string; // string type because some are "N/A"
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: string; // string type because some units have a min range (e.g. 5-12)
  attack: number;
  armor: string; // string type because its currently represented as melee armor/ranged armor (e.g 2/5)
  attack_bonus?: CombatBonus[];
  armor_bonus?: CombatBonus[];
  search_radius: number;
  accuracy: number;
  blast_radius: number;
  image: string;
  type: "Cheat" | "Civilian" | "Gaia" | "Military" | "Navy" | "Unbuildable";
  armor_class: string;
  special?: string;
};

export type CombatBonus = {
  amount: number;
  against: string;
};
