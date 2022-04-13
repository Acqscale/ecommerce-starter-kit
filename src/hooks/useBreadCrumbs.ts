export const useBreadCrumbs = (
  breadcrumbs: {
    name: string;
    link: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[],
  pathname: string
) => {
  return breadcrumbs.map((item, index) => ({
    id: index,
    name: item.name,
    link: item.link,
    Icon: item.Icon || undefined,
    active: pathname === item.link,
  }));
};
