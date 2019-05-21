const Route = ({ pattern, content, asLink = false }) => {
  const url = pattern.replace(/{(\w*)}/g, (m, key) =>
    content.hasOwnProperty(key) ? content[key] : ""
  );

  if (asLink) {
    return (
      <a href={url} target="_blank">
        {url}
      </a>
    );
  }

  return <span>{url}</span>;
};

const part = {
  name: "Route",
  group: "Content",
  options: {
    pattern: {
      label: "URL Pattern",
      type: "string"
    },
    link: {
      label: "Display as link?",
      type: "boolean"
    }
  },
  schema: part => ({
    type: "string",
    component: ({ config: { content } }) => (
      <Route pattern={part.pattern} content={content} asLink={part.link} />
    ),
    render: ({ content }) => (
      <Route pattern={part.pattern} content={content} asLink={part.link} />
    )
  })
};

Fridge.registerPart("route", part);
