export type Building = {
  name: string;
  id: string;
  expansion: string;
  age: string;
  cost: string;
  build_time: number;
  hit_points: number;
  line_of_sight: number;
  melee_armor: number;
  ranged_armor: number;
  min_range: number;
  max_range: number;
  reload_time: number;
  attack?: number;
  special?: string;
  image: string;
};
