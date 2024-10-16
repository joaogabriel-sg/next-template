import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(
  request: NextRequest,
): Promise<ReturnType<typeof intlMiddleware>> {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
