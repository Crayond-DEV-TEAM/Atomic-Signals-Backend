import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";

// Global API response data
declare global {
  var status_codes: any;
}

global.status_codes = {
  success: { status: 200, api_status: "API-OK" },
  success_no_data: { status: 200, api_status: "API-OK-NO-CONTENT" },
  bad_request: { status: 400, api_status: "API-BAD-REQUEST" },
  un_authorised: { status: 401, api_status: "API-UN-AUTHORISED-ACCESS" },
  forbidden: { status: 403, api_status: "API-FORBIDDEN" },
  not_found: { status: 404, api_status: "API-NOT-FOUND" },
  error: { status: 500, api_status: "API-ERROR" },
};

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  });
};

export default app;
export { app, options };
