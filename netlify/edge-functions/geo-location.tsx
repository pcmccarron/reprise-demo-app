import type { Config, Context } from 'https://edge.netlify.com/';

export default async (context: Context) => {
    const location = context.geo.city || "Unknown"; 

    return new Response(location);
}
console.log(location);
export const config: Config = {path: "/city"}