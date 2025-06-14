import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({});

export default withNextIntl(nextConfig);
