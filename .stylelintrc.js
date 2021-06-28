module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
      // 'order/properties-alphabetical-order': true, // Ensure CSS properties are ordered
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'mixin', 'include'], // Stylelint won't flag if it finds any of these strings
        },
      ],
      'declaration-block-trailing-semicolon': "always", // Ensure there is a semi-colon at the end of a declaration block
      'no-empty-source': null,
      'rule-empty-line-before': null,
      'selector-list-comma-newline-after': null,
      'no-descending-specificity': null,
      'declaration-block-trailing-semicolon': null,
      'declaration-empty-line-before': null,
      'at-rule-empty-line-before': [
        'always',
        {
          except: ['first-nested']
        }
      ],
      'block-no-empty' : true,
      'block-closing-brace-newline-after': 'always',
      'comment-empty-line-before': [
        'always', 
        {
          ignore: ['after-comment'],
          except: ["first-nested"]
        }
      ],
  },
};
