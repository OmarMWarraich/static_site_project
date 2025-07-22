const pluginHandlebars = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHandlebars);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
    },
  };
};
