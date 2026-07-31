import { useI18n } from '../i18n';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useI18n();
  return (
    <div className="breadcrumb">
      <a href="/">{t('Accueil')}</a>
      {items.map((item, i) => (
        <span key={i}>
          <span>/</span>
          {item.href ? <a href={item.href}>{t(item.label)}</a> : <span>{t(item.label)}</span>}
        </span>
      ))}
    </div>
  );
}
