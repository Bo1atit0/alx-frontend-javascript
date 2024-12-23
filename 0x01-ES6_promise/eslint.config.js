export default [
    {
      files: ["*.js"],
      languageOptions: {
        globals: {
          window: "readonly",
          document: "readonly",
          console: "readonly",
          process: "readonly",
        },
        ecmaVersion: 2021,
      },
      rules: {
        semi: ["error", "always"],
      },
    },
  ];
  