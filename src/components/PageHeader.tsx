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
  return (
    <section className="page-header">
      <div className="container">
        {breadcrumbItems && (
          <div className="breadcrumb">
            <a href="/">Accueil</a>
            {breadcrumbItems.map((item, i) => (
              <span key={i}>
                <span>/</span>
                {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
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