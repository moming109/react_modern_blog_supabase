import type { JwtPayload } from "@supabase/supabase-js";

type Claims =
  | (JwtPayload & {
      sub: string;
      role?: string;
      //개발자 도구 Application에서 확인
      user_metadata?: {
        avatar_url: string;
        email: string;
        email_verified: boolean;
        iss: string;
        phone_verified: boolean;
        preferred_username: string;
        provider_id: string;
        sub: string;
        user_name: string;
      };
    })
  | null;
