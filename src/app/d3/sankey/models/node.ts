import { NodeMinimal } from './node-minimal';
import { ExtraProperties } from './extra-properties';

export type Node<N extends ExtraProperties, L extends ExtraProperties> = N & NodeMinimal;
