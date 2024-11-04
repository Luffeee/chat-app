// next-pwa.d.ts

declare module 'next-pwa' {
    import { NextConfig } from 'next';
    import { GenerateSWOptions, InjectManifestOptions } from 'workbox-build';
  
    interface PWAConfig {
      dest: string;
      register?: boolean;
      skipWaiting?: boolean;
      disable?: boolean;
      buildExcludes?: string[];
      sw?: string;
      scope?: string;
      cacheOnFrontEndNav?: boolean;
      reloadOnOnline?: boolean;
      dynamicStartUrlRedirect?: boolean;
      swSrc?: string;
      swDest?: string;
      fallbacks?: {
        document?: string;
        image?: string;
        audio?: string;
        video?: string;
        font?: string;
        [key: string]: string | undefined;
      };
      mode?: 'production' | 'development';
      publicExcludes?: string[];
      additionalManifestEntries?: string[];
      runtimeCaching?: Array<unknown>;
      manifestTransforms?: Array<unknown>;
      additionalManifestEntriesTransform?: Array<unknown>;
      additionalManifestTransforms?: Array<unknown>;
      dynamicStartUrlRedirect?: string;
      generateSwOptions?: Partial<GenerateSWOptions>;
      injectManifestOptions?: Partial<InjectManifestOptions>;
    }
  
    export default function withPWA(config: PWAConfig): (nextConfig: NextConfig) => NextConfig;
  }
  