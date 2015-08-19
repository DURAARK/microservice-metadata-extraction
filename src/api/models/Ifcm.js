/**
 * Ifcm.js
 *
 * @description :: Ifcm model
 */

module.exports = {
  attributes: {
    path: {
      type: 'string',
      required: true
    },

    serialization: {
      type: 'string',
      required: false
    },

    schemaName: {
      type: 'string',
      required: false
    },

    schemaVersion: {
      type: 'string',
      required: false
    },

    metadata: {
      type: 'string',
      required: false
    }
  }
};
