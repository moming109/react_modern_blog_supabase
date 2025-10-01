import type { Database } from "./database";

// // 방법 1
// interface Profile {
//   id: string;
//   created_at: string;
//   email: string;
//   display_name: string | null;
//   avatar_url: string | null;
//   bio: string | null;
// }

// 방법 2
type Profile = Database["public"]["Tables"]["profiles"]["Row"];
