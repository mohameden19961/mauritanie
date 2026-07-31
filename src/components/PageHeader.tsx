import { useI18n } from '../i18n';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbItems?: BreadcrumbItem[];
}

export default function PageHeader({ title, description, breadcrumbItems }: PageHeaderProps) {
  const { t } = useI18n();
  return (
    <section className="page-header">
      <div className="container">
        {breadcrumbItems && (
          <div className="breadcrumb">
            <a href="/">{t('Accueil')}</a>
            {breadcrumbItems.map((item, i) => (
              <span key={i}>
                <span>/</span>
                {item.href ? <a href={item.href}>{t(item.label)}</a> : <span>{t(item.label)}</span>}
              </span>
            ))}
          </div>
        )}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}