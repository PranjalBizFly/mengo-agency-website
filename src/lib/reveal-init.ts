/**
 * Pre-paint reveal arming.
 *
 * The scroll-reveal system defines its hidden state under `html.js-reveal`. If
 * that class were added by the controller after hydration, anything already on
 * screen would have been painted visible first, so it could only be switched
 * on rather than animated in — hiding it at that point would blink content the
 * reader is already looking at. Arming before first paint makes the hidden
 * state the first painted state, which is what lets a page open with a
 * composed entrance instead of appearing all at once.
 *
 * Three conditions have to hold, and all are checked here rather than after
 * hydration, because after hydration is too late:
 *
 *   - the visitor has not asked for reduced motion
 *   - IntersectionObserver exists, so something can un-hide the rest
 *   - JavaScript ran at all, which this script executing implies
 *
 * The timeout is the failsafe. If the controller never arrives — a chunk that
 * fails to load, a network that drops between this script and the app — the
 * hidden state must not outlive the page load, because it is hiding real
 * content. Removing the class restores everything at once, and the abort flag
 * stops a late controller from hiding it all over again.
 */
export const REVEAL_ARM_ATTR = "data-reveal-ready";
export const REVEAL_ABORT_ATTR = "data-reveal-abort";

/** How long the controller has before the page un-hides itself. */
const FAILSAFE_MS = 4000;

export const REVEAL_INIT_SCRIPT = `(function(){try{
var r=document.documentElement;
if(typeof IntersectionObserver==='undefined')return;
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
r.classList.add('js-reveal');
setTimeout(function(){
if(!r.hasAttribute('${REVEAL_ARM_ATTR}')){r.setAttribute('${REVEAL_ABORT_ATTR}','');r.classList.remove('js-reveal');}
},${FAILSAFE_MS});
}catch(e){}})();`;

/**
 * Theme selection, applied before first paint for the same reason: a deferred
 * script would paint the light theme and then flip it.
 */
export const THEME_STORAGE_KEY = "mengo-agency-theme";

export const THEME_INIT_SCRIPT = `(function(){try{
var t=localStorage.getItem('${THEME_STORAGE_KEY}');
if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);
}catch(e){}})();`;
