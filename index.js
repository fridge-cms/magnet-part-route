const Route = ({ pattern, content }) => (
  <span>
    {pattern.replace(/{(\w*)}/g, (m, key) =>
      content.hasOwnProperty(key) ? content[key] : ""
    )}
  </span>
);

const part = {
  name: "Route",
  group: "Content",
  options: {
    pattern: {
      label: "URL Pattern",
      type: "string"
    }
  },
  schema: part => ({
    type: "string",
    component: ({ config: { content } }) => (
      <Route pattern={part.pattern} content={content} />
    ),
    render: ({ content }) => <Route pattern={part.pattern} content={content} />
  })
};

Fridge.registerPart("route", part);
