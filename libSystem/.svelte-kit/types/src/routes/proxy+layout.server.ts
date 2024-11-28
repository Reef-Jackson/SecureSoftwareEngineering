// @ts-nocheck
import type { LayoutServerLoad } from "./$types";

export const load = async ({ locals }: Parameters<LayoutServerLoad>[0]) => {
  return {
    isAuthenticated: locals.pb.authStore.isValid,
    mediaAPIKey: locals.mediaAPIKey
  };
};



