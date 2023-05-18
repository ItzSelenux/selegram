/* 
 *
 * The theme starts from line 37, the first CSS snipplets are for Selegram behavior,
 * if you want to put custom limit about sidebar, change icon used instead of telegram ones, and a lot of funny things, welcome
 * 
*/


module.exports = () => {
  const script = `
    const style = document.createElement('style');
    style.innerHTML = \`
    
            .auth-form #logo {
    background: url(/res/icon.svg) center no-repeat;
    background-size: 100%;
}
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
    
    .auth-form #logo {
    background: url(/res/icon.svg) center no-repeat;
    background-size: 100%;
}
    
    
    html, body {
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: var(--color-text);
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --font-family: "Perfect DOS VGA", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-family-monospace: "Cascadia Mono", "Roboto Mono", "Droid Sans Mono", "SF Mono", "Menlo", "Ubuntu Mono", "Consolas", monospace;
}

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








.Button.primary:not(.disabled):not(:disabled) {
    background-color: #91a666;
}
.Button.primary:not(.disabled):not(:disabled):hover {
    background-color: #919666;
}
.Button.translucent.activated {
    color: #8fa876;
}
.Switcher input:checked+.widget {
    background: #91a666;
}
.Switcher input:checked+.widget:after {
    transform: translateX(100%);
    border-color: #91a666;
}



.Message.own {
    flex-direction: row-reverse;
    --background-color: #91a666;
    --hover-color: #00000061;
    --color-reaction: #91a666;
    --hover-color-reaction: #00000061;
    --active-color: #00000061;
    --max-width: 30rem;
    --accent-color: var(--color-accent-own);
    --accent-shade-color: var(--color-green);
    --secondary-color: var(--color-accent-own);
    --color-code: var(--color-code-own);
    --color-code-bg: var(--color-code-own-bg);
    --color-links: var(--color-own-links);
    --meta-safe-area-base: 3.5rem;
    --deleting-translate-x: 50%;
    --color-text-green: var(--color-accent-own);
    --color-voice-transcribe: var(--color-voice-transcribe-button-own);
    --thumbs-background: var(--color-background-own);
}
.text-entity-link {
    color: #91a666 !important;
    text-decoration: none !important;
    word-break: break-word;
    cursor: var(--custom-cursor, pointer);
    unicode-bidi: initial;
}
.WebPage .WebPage--content::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.125rem;
    background: #91a666;
    border-radius: 0.125rem;
}
.WebPage .site-name {
    color: #91a666;
    font-weight: 500;
    margin-bottom: 0.125rem;
}
.LastMessageMeta .MessageOutgoingStatus {
    color: #91a666;
    margin-right: .125rem;
    font-size: 1.125rem;
}
.Composer>.Button:not(:active):not(:focus):not(:hover) .icon-send, .Composer>.Button:not(:active):not(:focus):not(:hover) .icon-schedule, .Composer>.Button:not(:active):not(:focus):not(:hover) .icon-check {
    color: #91a666;
}
.ComposerEmbeddedMessage .embedded-left-icon {
    flex-shrink: 0;
    background: none !important;
    width: 3.5rem;
    height: 2.875rem;
    margin: 0 -0.0625rem 0 0;
    padding: 0;
    display: grid;
    place-content: center;
    font-size: 1.5rem;
    color: #91a666;
}
.EmbeddedMessage.inside-input {
    padding-inline-start: .5625rem;
    width: 100%;
    --accent-color: #91a666;
    --hover-color: var(--color-interactive-element-hover);
    --active-color: var(--color-reply-active);
}
.Button.secondary:hover {
    background-color: #2a2a2a;
    color: rgba(var(--color-text-secondary-rgb), 0.75);
    --ripple-color: rgba(0, 0, 0, 0.08);
}


.q9_FnsHlndM1hZqZjxjM {
    font-weight: 500;
    font-size: .875rem;
    line-height: 1rem;
    height: 1rem;
    color: #91a666;
    margin-bottom: .125rem;
    white-space: pre;
    text-align: initial;
}

.VerifiedIcon {
    display: inline-block;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    --color-fill: #91a666;
    --color-checkmark: #fff;
}

.LastMessageMeta .MessageOutgoingStatus {
    color: #91a666;
    margin-right: .125rem;
    font-size: 1.125rem;
}


.Tab .badge {
    min-width: 1.25rem;
    height: 1.25rem;
    margin-inline-start: .5rem;
    background: #3a3a3a;
    border-radius: .75rem;
    padding: 0 .3125rem;
    color: #fff;
    font-size: .875rem;
    line-height: 1.3125rem;
    font-weight: 500;
    text-align: center;
    flex-shrink: 0;
}
.ChatBadge {
    min-width: 1.5rem;
    height: 1.5rem;
    background: #2f2f2f;
    border-radius: .75rem;
    padding: 0 .4375rem;
    color: #fff;
    font-size: .875rem;
    line-height: 1.5625rem;
    font-weight: 500;
    text-align: center;
    flex-shrink: 0;
}

.Tab--active {
    cursor:  #91a666;
    color: #91a666;
}
.Tab .platform {
    position: absolute;

    left: 0;
    opacity: 0;
    background-color: #91a666;
    height: .1875rem;
    width: 100%;
    border-radius: .1875rem .1875rem 0 0;
    pointer-events: none;
    box-sizing: content-box;
    transform-origin: left;
}
.Chat.selected:not(.forum) .ListItem-button, .Chat.selected:not(.forum):hover .ListItem-button {
    --background-color: #91a666 !important;
    --color-text: var(--color-white);
    --color-text-meta-colored: var(--color-white);
    --color-text-meta: var(--color-white);
    --color-text-secondary: var(--color-white);
    --color-error: var(--color-white);
    --color-pinned: var(--color-white);
    --color-chat-username: var(--color-white);
}










.TelegramK_items_from_here{}


.bubbles-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    max-width: 100%;
    max-width: 1;
    height: 100%;
    padding: 0 .8125rem;
    transform: translateY(0);
    transition: transform var(--transition-standard-out);
    width: 100%;
}

    \`;
    document.head.appendChild(style);
  `;
  return script;
};
