import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={displayClass ?? ""}>
        <div class="footer-content">
          <div style="display: flex; align-items: center; justify-content: center; gap: 2rem;">
            <img src="https://formetrix.fit/assets/aev-gem.gif" alt="AEV Labs Logo" width="44" height="74" />
            <div>
              <p>
          <strong>Formetrix™</strong> is a product of <strong>AEV Labs</strong>.
              </p>
              <p>
          © {year} AEV LABS. All rights reserved.
              </p>
            </div>
            
          </div>

          <div class="footer-links-group">
            <a href="https://aevlabs.com" target="_blank" rel="noopener noreferrer">
              aevlabs.com
            </a>
            <a href="https://formetrix.fit" target="_blank" rel="noopener noreferrer">
              formetrix.fit
            </a>
            <a href="mailto:support@formetrix.fit">
              support@formetrix.fit
            </a>
          </div>
        </div>
      </footer>
    )
  }

  // Use a modern CSS string literal here instead of importing a SCSS file
  Footer.css = `
    footer {
      margin-top: 4rem;
      padding: 2rem 0;

      border-top: 1px solid var(--gray);
      text-align: center; /* Center all text globally */
      color: var(--darkgray);
    }

    .footer-content p {
      margin: 0.5rem 0; /* Space between the text lines */
    }

    .footer-links-group {
      display: flex;
      justify-content: center; /* Centers the links horizontally */
      gap: 1.5rem; /* Adds space between the links */
      margin-top: 1rem;
      flex-wrap: wrap; /* Allows links to wrap on very small screens */
    }

    .footer-links-group a {
      color: var(--darkgray); /* Subtle link color */
      text-decoration: none; /* Removes underline by default */
    }

    .footer-links-group a:hover {
      color: var(--secondary); /* Accent color on hover */
      text-decoration: underline; 
    }
  `
  return Footer
}) satisfies QuartzComponentConstructor
