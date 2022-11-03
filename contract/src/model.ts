export const POINT_ONE = "100000000000000000000000";

export class PostedMessage {
  premium: boolean;
  sender: string;
  text: string;

  constructor({ premium, sender, text }: PostedMessage) {
    this.premium = premium;
    this.sender = sender;
    this.text = text;
  }
}

// 植物为单位
interface Planting {
  // 育种信息
  breed?: {
    seedling_selection: string;
    soil: string;
    time_stamp: number;
  }[];

  // 生长信息
  growing?: {
    temperature: string;
    humidity: string;
    illumination: string;
    pictures: string[] | string;
    time_stamp: number;
  }[];

  // 农事信息
  farming?: {
    operation: string;
    fertilizer: {
      name: string;
      amount: string;
    };
    pesticide: {
      name: string;
      amount: string;
    };
    time_stamp: number;
  }[];

  // 采摘信息
  pluck?: {
    tool: string;
    standard: string;
    time_stamp: number;
  }[];
}

// 食品为单位
interface Production {
  process?: {
    technology: string;
    workshop: string;
    pictures: string[] | string;
    time_stamp: number;
  }[];

  package?: {
    material: string;
    pictures: string[] | string;
    workshop: string;
    time_stamp: number;
  }[];

  // 质检信息
  quality_check?: {
    object: string;
    value: string;
    result: string;
    time_stamp: number;
  }[];
  warehouse?: {
    temperature: string;
    humidity: string;
    illumination: string;
    smell: string;
    time_stamp: number;
  };
}

// 包裹为单位
interface Logistics {
  // 分拣信息
  separate?: {
    in_storage: number;
    out_storage: number;
    warehouse_id: string;
    time_stamp: number;
  }[];
  // 运输信息
  transport?: {
    longitude: number;
    latitude: number;
    time_stamp: number;
  }[];
}

// 包装为单位
interface marketing {
  // 上架信息
  upload?: {
    store_id: string;
    time_stamp: number;
  }[];

  // 下单信息
  order?: {
    price: string;
    order_id: string;
    time_stamp: number;
  }[];
}

export interface FoodTrace {
  food_trace_id: string;
  life_cycle: {
    planting?: Planting;
    production?: Production;
    logistics?: Logistics;
    marketing?: marketing;
  };
}
