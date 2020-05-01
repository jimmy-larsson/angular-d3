import { Node } from './node';
import { ExtraProperties } from './extra-properties';
import { Link } from './link';

export interface Data {
  nodes: Node<ExtraProperties, ExtraProperties>[];
  links: Link<ExtraProperties, ExtraProperties>[];
}
