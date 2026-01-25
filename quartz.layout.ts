import { url } from "node:inspector";
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      url: "https://formetrix.fit",
      text: "Formetrix",
      "AEV Labs": "https://aevlabs.com",
      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      // Add a filter here to ignore the "assets" folder in the *navigation only*
      filterFn: (node) => {
        // Set containing names of everything you want to filter out from the sidebar list
        const omit = new Set(["assets", "Assets"]); 
    
        // Returns true if the item is NOT in the omit set
        return !omit.has(node.displayName.toLowerCase());
      },
      
    }),
  ],
  right: [
    Component.Graph({localGraph: {
    drag: true, // whether to allow panning the view around
    zoom: true, // whether to allow zooming in and out
    depth: 1, // how many hops of notes to display
    scale: 1.2, // default view scale
    repelForce: 1.0, // how much nodes should repel each other
    centerForce: 0.3, // how much force to use when trying to center the nodes
    linkDistance: 80, // how long should the links be by default?
    fontSize: 0.6, // what size should the node labels be?
    opacityScale: 1, // how quickly do we fade out the labels when zooming out?
    removeTags: [], // what tags to remove from the graph
    showTags: false, // whether to show tags in the graph
    enableRadial: false, // whether to constrain the graph, similar to Obsidian
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 1.2,      // Increased default view scale slightly
    repelForce: 1.0,   // Increased repel force (was 0.5)
    centerForce: 0.3,
    linkDistance: 100,  // Increased link distance (was 60)
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [],
    showTags: false,
    enableRadial: true,
    
  },
 }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
