export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62fe683f4a54cd00b4af2163",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ruarwx25",
                  apiId: "9157f3ac-49ef-4eac-bce6-814897caafde",
                },
                {
                  buildHookId: "62fe683f063dcc00aa65396c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pudrvs4i",
                  apiId: "45cb3715-34ad-45ed-8a99-069d849304a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/BrijeshBumrela/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pudrvs4i.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
