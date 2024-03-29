export type Unit = {
  name: string;
  id: string;
  description: string;
  expansion: string;
  age: "N/A" | "Dark" | "Feudal" | "Castle" | "Imperial";
  created_in: string; // some units can be created in multiple bldgs (e.g. Castle;Donjon)
  cost?: string;
  build_time: string; // string type because some are "N/A"
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  min_range: number;
  max_range: number;
  attack: number;
  melee_armor: number;
  ranged_armor: number;
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
