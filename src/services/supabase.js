import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kfbgfhlyjmguxuratcki.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYmdmaGx5am1ndXh1cmF0Y2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5Njc2MTMsImV4cCI6MjAyMDU0MzYxM30.8wA291VkHviCYJirv0FsFq8xZnUPRLb5PMBKAlZCtkg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
