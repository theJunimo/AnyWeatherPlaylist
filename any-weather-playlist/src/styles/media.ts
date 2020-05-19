const sizes = {
    desktop: 1024,
    tablet: 768,
};

const media = (key: keyof typeof sizes) => {
    return (style: TemplateStringsArray | String) =>
        `@media (max-width: ${sizes[key] / 16}em) { ${style} }`;
};

export default media;
