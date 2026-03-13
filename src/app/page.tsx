import Image from "next/image";
import Link from "next/link";

import { AmbientHero } from "@/components/portfolio/ambient-hero";
import { Reveal } from "@/components/portfolio/reveal";
import { siteContent } from "@/content/site-content";

import styles from "./page.module.css";

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function Home() {
  const { meta, hero, nav, approach, proof, cases, strengths, contact, footer } =
    siteContent;

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandName}>{meta.name}</span>
          <span className={styles.brandRole}>{meta.role}</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.contactButton} href={`mailto:${meta.email}`}>
          Email
        </a>
      </header>

      <section className={styles.hero}>
        <Reveal className={styles.heroCopy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroDescription}>{hero.description}</p>

          <div className={styles.heroActions}>
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                className={
                  cta.variant === "primary"
                    ? styles.primaryAction
                    : styles.secondaryAction
                }
                href={cta.href}
                target={isExternalHref(cta.href) ? "_blank" : undefined}
                rel={isExternalHref(cta.href) ? "noopener noreferrer" : undefined}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <div className={styles.heroMeta}>
            <p>{hero.availability}</p>
            <p>{hero.note}</p>
          </div>
        </Reveal>

        <Reveal className={styles.heroVisual} delay={0.12}>
          <AmbientHero />
        </Reveal>
      </section>

      <Reveal className={styles.section} id="approach" delay={0.04}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{approach.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{approach.title}</h2>
        </div>

        <div className={styles.approachGrid}>
          {approach.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.approachParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.section} delay={0.08}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{proof.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{proof.title}</h2>
            <p className={styles.sectionIntro}>{proof.intro}</p>
          </div>
        </div>

        <div className={styles.proofGrid}>
          {proof.metrics.map((metric) => (
            <article key={metric.label} className={styles.metricCard}>
              <p className={styles.metricLabel}>{metric.label}</p>
              <p className={styles.metricValue}>{metric.value}</p>
              <p className={styles.metricNote}>{metric.note}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.section} id="cases" delay={0.12}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{cases.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{cases.title}</h2>
            <p className={styles.sectionIntro}>{cases.intro}</p>
          </div>
        </div>

        <div className={styles.casesGrid}>
          {siteContent.caseStudies.map((caseStudy) => (
            <article key={caseStudy.slug} className={styles.caseCard}>
              <div className={styles.caseVisual}>
                <Image
                  src={caseStudy.previewImage}
                  alt={`${caseStudy.title} preview`}
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className={styles.caseImage}
                />
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseMeta}>
                  <p className={styles.caseNumber}>{caseStudy.number}</p>
                  <p className={styles.caseEyebrow}>{caseStudy.eyebrow}</p>
                </div>

                <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                <p className={styles.caseSummary}>{caseStudy.summary}</p>
                <p className={styles.caseOutcome}>{caseStudy.outcome}</p>

                <div className={styles.caseTags}>
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className={styles.caseTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link className={styles.caseLink} href={`/cases/${caseStudy.slug}`}>
                  Open case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.section} id="strengths" delay={0.16}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{strengths.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{strengths.title}</h2>
            <p className={styles.sectionIntro}>{strengths.intro}</p>
          </div>
        </div>

        <div className={styles.strengthsGrid}>
          {strengths.items.map((item) => (
            <article key={item.title} className={styles.strengthCard}>
              <p className={styles.strengthEyebrow}>{item.eyebrow}</p>
              <h3 className={styles.strengthTitle}>{item.title}</h3>
              <p className={styles.strengthDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className={`${styles.section} ${styles.contactSection}`} id="contact">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{contact.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{contact.title}</h2>
            <p className={styles.sectionIntro}>{contact.intro}</p>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <article className={styles.contactLead}>
            <p className={styles.contactStatement}>
              Cleaner support execution, stronger packaging, and fewer repeated
              conversations usually come from the same place: clearer structure.
            </p>
            <a className={styles.primaryAction} href={`mailto:${meta.email}`}>
              Start a conversation
            </a>
          </article>

          <ul className={styles.contactList}>
            {contact.links.map((item) => (
              <li key={item.label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{item.label}</span>
                {item.href ? (
                  <a
                    className={styles.contactValue}
                    href={item.href}
                    target={isExternalHref(item.href) ? "_blank" : undefined}
                    rel={
                      isExternalHref(item.href) ? "noopener noreferrer" : undefined
                    }
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.contactValue}>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <footer className={styles.footer}>
        <p>{footer}</p>
        <p>{meta.location}</p>
      </footer>
    </main>
  );
}
