import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        config.resolve.alias['@icons'] = path.join(process.cwd(), './src/assets/img/svg-icons/');
        config.resolve.alias['@assets'] = path.join(process.cwd(), './src/assets/');

        return config;
    },
};

export default nextConfig;
