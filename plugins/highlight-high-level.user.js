// ==UserScript==
// @id             iitc-plugin-highlight-portals-high-level
// @name           IITC plugin: Highlight high level portals
// @category       Highlighter
// @version        0.1.0.@@DATETIMEVERSION@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Use the portal fill color to denote high level portals: Purple L8, Red L7, Orange L6
@@METAINFO@@
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
window.plugin.portalHighlighterPortalsHighLevel = function() {};

window.plugin.portalHighlighterPortalsHighLevel.colorLevel = function(data) {
  var portal_level = data.portal.options.data.level;
  var opacity = 0.7;
  var color = undefined;

  switch (portal_level) {
    case 6: color='orange'; break;
    case 7: color='red'; break;
    case 8: color='magenta'; break;
  }

  if (color) {
    data.portal.setStyle({fillColor: color, fillOpacity: opacity});
  }
}

var setup =  function() {
  window.addPortalHighlighter('Higher Level Portals', window.plugin.portalHighlighterPortalsHighLevel.colorLevel);
}

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
