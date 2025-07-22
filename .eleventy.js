const pluginHandlebars = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHandlebars);

  // Copy CSS files to output directory
  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
    },
  };
};
