import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   DATABASE_DIRECT_URL: process.env.DATABASE_DIRECT_URL,
  // },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: process.env,
  server: {
    APP_URL: z.string().url(),
    DATABASE_DIRECT_URL: z.string().url(),
    DATABASE_URL: z.string().url(),
  },
});
