module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/index.tsx",
                templateFile: "templates/Component/component.template.hbs",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/_{{kebabCase name}}.scss",
                templateFile: "templates/Component/component.styles.hbs",
            },
            {
                path: "src/scss/entry.scss",
                pattern: /(\/\/ Append component here)/g,
                template: "@use \"../components/{{pascalCase name}}/{{kebabCase name}}\";\n$1",
                type: "modify",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
                templateFile: "templates/Component/component.test.hbs",
            },
        ],
    });

    plop.setGenerator("page", {
        description: "Create a page",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your page name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/pages/{{pascalCase name}}/index.tsx",
                templateFile: "templates/Page/Page.template.hbs",
            },
            {
                type: "add",
                path: "src/pages/{{pascalCase name}}/_{{kebabCase name}}.scss",
                templateFile: "templates/Page/Page.styles.hbs",
            },
            {
                path: "src/libs/routes.tsx",
                pattern: /(\/\/ Append import here)/g,
                template: "import {{pascalCase name}} from \"../pages/{{pascalCase name}}\";\n$1",
                type: "modify",
            },
            {
                path: "src/libs/routes.tsx",
                pattern: /(\/\/ Append configuration here)/g,
                template: "\{ path: \"{{kebabCase name}}\", element: <{{pascalCase name}} /> \},\n$1",
                type: "modify",
            },
            {
                path: "src/scss/entry.scss",
                pattern: /(\/\/ Append page here)/g,
                template: "@use \"../pages/{{pascalCase name}}/{{kebabCase name}}\";\n$1",
                type: "modify",
            },
        ],
    });

    plop.setGenerator("hook", {
        description: "Create a hook",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your hook's name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/libs/hooks/{{camelCase name}}.tsx",
                templateFile: "templates/Hook/hook.template.hbs",
            },
        ],
    });
};