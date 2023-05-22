module.exports = () => {
  const script1 = `
    const style = document.createElement('style');
    style.innerHTML = \`

#LeftColumn {
    --left-column-min-width: 0%;
    --left-column-max-width: 100%;
    width: 33vw;
    min-width: var(--left-column-min-width);
    max-width: var(--left-column-max-width);
    height: 100%;
    overflow: hidden;
    position: relative;
    background-color: var(--color-background);
}

    \`;
    document.head.appendChild(style);
  `;
  return script1;
};
