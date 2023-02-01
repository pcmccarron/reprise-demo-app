import type { Config, Context } from 'https://edge.netlify.com/';

export default async (request: Request, context: Context) => {

    return new Response.json({
        city: context.geo.city,
    });
}
console.log(location);
export const config: Config = {path: "/city"}