import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { concatenateResources } from "../util/resources"

// @ts-ignore
const script = `
(() => {
  const apply = () => {
    const img = document.querySelector(".page-title .icon img[data-theme-icon]");
    if (!img) return;

    const theme =
      localStorage.getItem("quartz-theme") ||
      document.documentElement.getAttribute("data-theme") ||
      "light";

    const lightSrc = "/static/title-icon-light.png";
    const darkSrc  = "/static/title-icon.png";

    img.setAttribute("src", theme === "light" ? lightSrc : darkSrc);
  };

  // initial load
  apply();

  // theme toggle
  document.addEventListener("themechange", () => apply());

  // Quartz client-side navigation
  document.addEventListener("navchange", () => apply());
})();
`

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const alt = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} aria-label={alt} class="page-title-link">
        <span class="icon">
          <img
            data-theme-icon
            
            src="/static/title-icon-light.png"
            alt={alt}
          />
        </span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.page-title-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

/* Light mode halo (default) */
.icon::before {
  content: "";
  position: absolute;
  inset: -24px;
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgba(247, 119, 7, 0.8) 0%,
    rgba(255, 198, 149, 0.40) 35%,
    rgba(255, 255, 255, 0) 60%
  );
  filter: blur(14px);
  z-index: -1;
  animation: halo-breathe 6s ease-in-out infinite;
}

/* Dark mode halo */
html[data-theme="dark"] .icon::before {
  background: radial-gradient(
    circle,
    rgba(255, 198, 149, 0.85) 0%,
    rgba(99, 102, 118, 0.55) 35%,
    rgba(0, 20, 38, 0) 60%
  );
  filter: blur(10px);
}

@keyframes halo-breathe {
  0%, 100% { transform: scale(.96); opacity: .75; }
  50%      { transform: scale(1.02); opacity: .95; }
}

.icon img {
  width: 180px;
  height: 180px;
  display: block;
}

/* Smaller logo on phones / narrow screens */
@media (max-width: 600px) {
  .icon img {
    width: 86px;
    height: 86px;
  }
}
`

PageTitle.afterDOMLoaded = concatenateResources(script, "")

export default (() => PageTitle) satisfies QuartzComponentConstructor