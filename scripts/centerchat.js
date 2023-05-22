module.exports = () => {
  const script0 = `
    const style = document.createElement('style');
    style.innerHTML = \`
.MessageList .messages-container {
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 1rem 1rem 0 1.125rem;
}
#MiddleColumn .middle-column-footer {
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
    position: relative;
    display: flex;
    align-items: flex-end;
    z-index: var(--z-middle-footer);
    transform: translate3d(0, 0, 0);
    transition: top 200ms,transform var(--layer-transition);
}

    \`;
    document.head.appendChild(style);
  `;
  return script0;
};
