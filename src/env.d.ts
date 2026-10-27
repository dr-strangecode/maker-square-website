/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BRAND?: string;
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
  readonly PUBLIC_SMARTWAIVER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
