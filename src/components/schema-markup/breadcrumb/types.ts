export type BreadcrumbItem = {
  '@type': string;
  item?: string;
  name: string;
  /**
   * The position of the breadcrumb in the breadcrumb trail starting from 1.
   */
  position: bigint;
};

export type BreadcrumbSchemaMarkup = {
  '@context': string;
  '@type': string;
  itemListElement: BreadcrumbItem[];
};
