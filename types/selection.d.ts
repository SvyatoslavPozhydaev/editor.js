/**
 * Working with selection
 *
 * @typedef {SelectionUtils} SelectionUtils
 */
export default class SelectionUtils {
    /**
     * Editor styles
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    static get CSS(): {
        editorWrapper: string;
        editorZone: string;
    };
    /**
     * Returns selected anchor
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
     *
     * @returns {Node|null}
     */
    static get anchorNode(): Node | null;
    /**
     * Returns selected anchor element
     *
     * @returns {Element|null}
     */
    static get anchorElement(): Element | null;
    /**
     * Returns selection offset according to the anchor node
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
     *
     * @returns {number|null}
     */
    static get anchorOffset(): number | null;
    /**
     * Is current selection range collapsed
     *
     * @returns {boolean|null}
     */
    static get isCollapsed(): boolean | null;
    /**
     * Check current selection if it is at Editor's zone
     *
     * @returns {boolean}
     */
    static get isAtEditor(): boolean;
    /**
     * Methods return boolean that true if selection exists on the page
     */
    static get isSelectionExists(): boolean;
    /**
     * Return first range
     *
     * @returns {Range|null}
     */
    static get range(): Range | null;
    /**
     * Calculates position and size of selected text
     *
     * @returns {DOMRect | ClientRect}
     */
    static get rect(): DOMRect | ClientRect;
    /**
     * Returns selected text as String
     *
     * @returns {string}
     */
    static get text(): string;
    /**
     * Selection instances
     *
     * @todo Check if this is still relevant
     */
    instance: Selection;
    selection: Selection;
    /**
     * This property can store SelectionUtils's range for restoring later
     *
     * @type {Range|null}
     */
    savedSelectionRange: Range;
    /**
     * Fake background is active
     *
     * @returns {boolean}
     */
    isFakeBackgroundEnabled: boolean;
    /**
     * Native Document's commands for fake background
     */
    private readonly commandBackground;
    private readonly commandRemoveFormat;
    /**
     * Returns window SelectionUtils
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
     *
     * @returns {Selection}
     */
    static get(): Selection;
    /**
     * Set focus to contenteditable or native input element
     *
     * @param element - element where to set focus
     * @param offset - offset of cursor
     *
     * @returns {DOMRect} of range
     */
    static setCursor(element: HTMLElement, offset?: number): DOMRect;
    /**
     * Removes fake background
     */
    removeFakeBackground(): void;
    /**
     * Sets fake background
     */
    setFakeBackground(): void;
    /**
     * Save SelectionUtils's range
     */
    save(): void;
    /**
     * Restore saved SelectionUtils's range
     */
    restore(): void;
    /**
     * Clears saved selection
     */
    clearSaved(): void;
    /**
     * Collapse current selection
     */
    collapseToEnd(): void;
    /**
     * Looks ahead to find passed tag from current selection
     *
     * @param  {string} tagName       - tag to found
     * @param  {string} [className]   - tag's class name
     * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
     *
     * @returns {HTMLElement|null}
     */
    findParentTag(tagName: string, className?: string, searchDepth?: number): HTMLElement | null;
    /**
     * Expands selection range to the passed parent node
     *
     * @param {HTMLElement} element - element which contents should be selcted
     */
    expandToTag(element: HTMLElement): void;
}
