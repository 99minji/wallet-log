// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `
    @use "_variables" as *;
    @use "_mixins" as mixins;
    `,
  },
};
