export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      cabinets: {
        Row: {
          active: boolean;
          badges: string[];
          brand: string;
          contributors: Json;
          created_at: string;
          depth_mm: number | null;
          description: string;
          directivity_horizontal: number | null;
          directivity_vertical: number | null;
          driver_size: string[];
          files: Json;
          frequency_end: number | null;
          frequency_start: number | null;
          height_mm: number | null;
          id: string;
          images: Json;
          max_spl: number[];
          measurements: Json;
          model: string;
          sensitivity: number | null;
          sensitivity_measurement_settings: string | null;
          short_description: string;
          timeline: Json;
          type: string | null;
          weight_kg: number | null;
          width_mm: number | null;
          wood_thickness_mm: string | null;
        };
        Insert: {
          active?: boolean;
          badges?: string[];
          brand?: string;
          contributors?: Json;
          created_at?: string;
          depth_mm?: number | null;
          description?: string;
          directivity_horizontal?: number | null;
          directivity_vertical?: number | null;
          driver_size?: string[];
          files?: Json;
          frequency_end?: number | null;
          frequency_start?: number | null;
          height_mm?: number | null;
          id?: string;
          images?: Json;
          max_spl: number[];
          measurements?: Json;
          model?: string;
          sensitivity?: number | null;
          sensitivity_measurement_settings?: string | null;
          short_description?: string;
          timeline?: Json;
          type?: string | null;
          weight_kg?: number | null;
          width_mm?: number | null;
          wood_thickness_mm?: string | null;
        };
        Update: {
          active?: boolean;
          badges?: string[];
          brand?: string;
          contributors?: Json;
          created_at?: string;
          depth_mm?: number | null;
          description?: string;
          directivity_horizontal?: number | null;
          directivity_vertical?: number | null;
          driver_size?: string[];
          files?: Json;
          frequency_end?: number | null;
          frequency_start?: number | null;
          height_mm?: number | null;
          id?: string;
          images?: Json;
          max_spl?: number[];
          measurements?: Json;
          model?: string;
          sensitivity?: number | null;
          sensitivity_measurement_settings?: string | null;
          short_description?: string;
          timeline?: Json;
          type?: string | null;
          weight_kg?: number | null;
          width_mm?: number | null;
          wood_thickness_mm?: string | null;
        };
        Relationships: [];
      };
      driver_recommendations: {
        Row: {
          cabinet_id: string;
          created_at: string;
          driver_id: string;
          id: number;
          notes: string | null;
          rank: string;
        };
        Insert: {
          cabinet_id: string;
          created_at?: string;
          driver_id: string;
          id?: number;
          notes?: string | null;
          rank: string;
        };
        Update: {
          cabinet_id?: string;
          created_at?: string;
          driver_id?: string;
          id?: number;
          notes?: string | null;
          rank?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_driver_recommendations_cabinet_id_fkey';
            columns: ['cabinet_id'];
            isOneToOne: false;
            referencedRelation: 'cabinets';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_driver_recommendations_driver_id_fkey';
            columns: ['driver_id'];
            isOneToOne: false;
            referencedRelation: 'drivers';
            referencedColumns: ['id'];
          }
        ];
      };
      drivers: {
        Row: {
          air_gap: number | null;
          badges: string[];
          bl: number | null;
          blre: number | null;
          brand: string;
          cms: number | null;
          created_at: string;
          dd: number | null;
          depth: number | null;
          description: string | null;
          diam: number | null;
          diaphragm_material: string | null;
          fr_end: number | null;
          fr_start: number | null;
          frame_material: string | null;
          fs: number | null;
          id: string;
          kms: number | null;
          le: number | null;
          magnet: string | null;
          magnet_weight_kg: number | null;
          mmd: number | null;
          mms: number | null;
          model: string;
          mounting_diam: number | null;
          p_max: number | null;
          p_w: number | null;
          qes: number | null;
          qms: number | null;
          qts: number | null;
          re: number | null;
          rms: number | null;
          sd: number | null;
          size: number | null;
          size_inches: number | null;
          spl: number | null;
          surround_material: string | null;
          type: string | null;
          vas: number | null;
          vc_diam: number | null;
          vc_former: string | null;
          vc_material: string | null;
          vd: number | null;
          volume: number | null;
          weight_kg: number | null;
          x_lim: number | null;
          x_max: number | null;
          z: number | null;
        };
        Insert: {
          air_gap?: number | null;
          badges?: string[];
          bl?: number | null;
          blre?: number | null;
          brand: string;
          cms?: number | null;
          created_at?: string;
          dd?: number | null;
          depth?: number | null;
          description?: string | null;
          diam?: number | null;
          diaphragm_material?: string | null;
          fr_end?: number | null;
          fr_start?: number | null;
          frame_material?: string | null;
          fs?: number | null;
          id?: string;
          kms?: number | null;
          le?: number | null;
          magnet?: string | null;
          magnet_weight_kg?: number | null;
          mmd?: number | null;
          mms?: number | null;
          model: string;
          mounting_diam?: number | null;
          p_max?: number | null;
          p_w?: number | null;
          qes?: number | null;
          qms?: number | null;
          qts?: number | null;
          re?: number | null;
          rms?: number | null;
          sd?: number | null;
          size?: number | null;
          size_inches?: number | null;
          spl?: number | null;
          surround_material?: string | null;
          type?: string | null;
          vas?: number | null;
          vc_diam?: number | null;
          vc_former?: string | null;
          vc_material?: string | null;
          vd?: number | null;
          volume?: number | null;
          weight_kg?: number | null;
          x_lim?: number | null;
          x_max?: number | null;
          z?: number | null;
        };
        Update: {
          air_gap?: number | null;
          badges?: string[];
          bl?: number | null;
          blre?: number | null;
          brand?: string;
          cms?: number | null;
          created_at?: string;
          dd?: number | null;
          depth?: number | null;
          description?: string | null;
          diam?: number | null;
          diaphragm_material?: string | null;
          fr_end?: number | null;
          fr_start?: number | null;
          frame_material?: string | null;
          fs?: number | null;
          id?: string;
          kms?: number | null;
          le?: number | null;
          magnet?: string | null;
          magnet_weight_kg?: number | null;
          mmd?: number | null;
          mms?: number | null;
          model?: string;
          mounting_diam?: number | null;
          p_max?: number | null;
          p_w?: number | null;
          qes?: number | null;
          qms?: number | null;
          qts?: number | null;
          re?: number | null;
          rms?: number | null;
          sd?: number | null;
          size?: number | null;
          size_inches?: number | null;
          spl?: number | null;
          surround_material?: string | null;
          type?: string | null;
          vas?: number | null;
          vc_diam?: number | null;
          vc_former?: string | null;
          vc_material?: string | null;
          vd?: number | null;
          volume?: number | null;
          weight_kg?: number | null;
          x_lim?: number | null;
          x_max?: number | null;
          z?: number | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          created_at: string;
          id: string;
          role: Database['public']['Enums']['role'] | null;
        };
        Insert: {
          created_at?: string;
          id: string;
          role?: Database['public']['Enums']['role'] | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          role?: Database['public']['Enums']['role'] | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      role: 'guest' | 'admin';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
