import { LinkMinimal } from './link-minimal';
import { ExtraProperties } from './extra-properties';

export type Link<N extends ExtraProperties, L extends ExtraProperties> = L & LinkMinimal;
