const pluginHandlebars = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHandlebars);

  // Copy CSS files to output directory
  eleventyConfig.addPassthroughCopy("src/style.css");

  // Add Handlebars helper for equality comparison
  eleventyConfig.addHandlebarsHelper("eq", function (a, b) {
    return a === b;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
    },
  };
};
