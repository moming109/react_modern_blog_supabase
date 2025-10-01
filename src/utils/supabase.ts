import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/database";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//데이터 베이스 타입 지정
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
