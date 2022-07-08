export const deprecationWarning =
  process.env.NODE_ENV !== 'production'
    ? ({
        version = 'next',
        message = 'This file tried to warn of a deprecated feature',
        condition = true
      }) => {
        if (condition) {
          console.warn(`LE&DS ${version} Deprecation Warning: ${message}`);
        }
      }
    : null;
