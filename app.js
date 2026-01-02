const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

/**
 * Minimalist markdown parser for demo purposes
 * Supports: H1, H2, Bold, Italic
 */
function parseMarkdown(text) {
    return text
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\n/gim, '<br />');
}

if (editor && preview) {
    editor.addEventListener('input', (e) => {
        preview.innerHTML = parseMarkdown(e.target.value);
    });

    // Initial render
    preview.innerHTML = parseMarkdown(editor.value || '');
}