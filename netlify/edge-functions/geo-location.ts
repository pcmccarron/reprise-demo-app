import type { Config, Context } from 'https://edge.netlify.com/';

export default async (request: Request, context: Context) => {

    return new Response(context.geo.city);
}
export const config: Config = {path: "/city"}