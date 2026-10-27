/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
  readonly PUBLIC_SMARTWAIVER_URL?: string;
  readonly PUBLIC_MAKER_CONCEPT_ART?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
