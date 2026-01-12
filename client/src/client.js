import { createClient } from '@supabase/supabase-js';

// 1. Go to Supabase Settings -> API -> Project URL
// 2. Copy the URL and paste it inside the quotes below
const URL = 'https://lifoshfizanabxomnckh.supabase.co';

// 1. Go to Supabase Settings -> API -> Project API Keys -> anon public
// 2. Copy the KEY and paste it inside the quotes below
const API_KEY = 'sb_publishable_NlT3PmaHM9-__fwF44lFzA_7lOwscFC';

export const supabase = createClient(URL, API_KEY);