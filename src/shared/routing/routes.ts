import { createRoute, UnmappedRouteObject } from "atomic-router";

export const routes = {
  home: createRoute(),
  auth: {
    signIn: createRoute(),
    finished: createRoute(),
  },
  onboarding: {
    user: createRoute(),
  },
};

export const pageNotFoundRoute = createRoute();

export const routesMap: UnmappedRouteObject<object>[] = [
  { path: "/", route: routes.home },
  { path: "/auth/signin", route: routes.auth.signIn },
  { path: "/onboarding/user", route: routes.onboarding.user },
];
