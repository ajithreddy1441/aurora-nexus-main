import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pmwhhlrqpkyvwdcamxqq.supabase.co";
const supabaseAnonKey = "sb_publishable_nb2AWyFEH8uMSc37npbSBg_WCAyZUut";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);