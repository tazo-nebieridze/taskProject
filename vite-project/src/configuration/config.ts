import { FooterProps } from "../components/footer/Footer";
import { MenuProps } from "../components/menu/Menu";
import { ProductListProps } from "../components/productList/ProductList";



export interface ConfigComponentInterface<T> {
  key: string;
  enabled: boolean;
  source: string;
  props: T;
}

export class ConfigComponent<T> implements ConfigComponentInterface<T> {
  key: string;
  enabled: boolean;
  source: string;
  props: T;

  constructor(key: string, enabled: boolean, source: string, props: T) {
    this.key = key;
    this.enabled = enabled;
    this.source = source;
    this.props = props;
  }
}

export const componentConfigs: ConfigComponent<any>[] = [
  new ConfigComponent<MenuProps>
  ( 
    'menu',
    true,
    './components/menu/Menu',
    { backgroundColor: 'blue'}
  ),
  new ConfigComponent<ProductListProps>
  (
    'productList',
    true,
    './components/productList/ProductList',
    { layout: 'grid' }),
  new ConfigComponent<FooterProps>
  (
    'footer',
    true,
    './components/footer/Footer',
    { textColor: 'black', backgroundColor: 'yellow' }
  ),
];