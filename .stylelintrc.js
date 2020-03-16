module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  // plugins: ['stylelint-prettier'],
  /*
   * https://stylelint.io/user-guide/rules/list
   */
  rules: {
    "block-no-empty": false,
    "declaration-no-important": true
  }
};
