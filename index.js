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
    component: () => {
      return <div />;
    },
    render: ({ content }) => {
      const url = part.pattern.replace(/{(\w*)}/g, (m, key) =>
        content.hasOwnProperty(key) ? content[key] : ""
      );
      return <span>{url}</span>;
    }
  })
};

Fridge.registerPart("route", part);
