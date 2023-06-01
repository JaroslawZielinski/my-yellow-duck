/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
$(document).ready(function() {
    let clipBoard = '';
    const textArea = 'yellow_duck_content', submitButton = 'yellow_duck_button';
    $('#' + textArea).focus();
    const clipboard = new ClipboardJS('#' + submitButton, {
        target: function () {
            if (confirm('Are you sure Yellow Duck hasn\'t solved your problem yet?')) {
                if (confirm('Please confirm. Are you really sure?')) {
                    return document.getElementById(textArea);
                }
            }
            return null;
        }
    });
    clipboard.on('success', function(e) {
        clipBoard = $('#' + textArea).val();
        showStatus();
    });
    clipboard.on('error', function(e) {
        alert('Copying to clipboard was not successful.');
    });
    $('#' + textArea).on('keydown', function(event) {
        if (event.ctrlKey && event.which === 65) { // Ctrl-A
            console.log('Ctrl-A event detected. Execution blocked.');
            event.preventDefault();
        } else if ((event.ctrlKey && event.which === 67) || (event.ctrlKey && event.which === 45)) { // Copy event
            console.log('Copy event detected (Ctrl-C or Ctrl-Insert). Execution blocked.');
            event.preventDefault();
        } else if ((event.ctrlKey && event.which === 86) || (event.shiftKey && event.which === 45)) { // Paste event
            console.log('Paste event detected (Ctrl-V or Shift-Insert). Execution blocked.');
            event.preventDefault();
        } else if ((event.ctrlKey && event.which === 88) || (event.shiftKey && event.which === 46)) { // Cut event
            console.log('Cut event detected (Ctrl-X or Shift-Delete). Execution blocked.');
            event.preventDefault();
        }
        showStatus();
    });
    $('#' + textArea).on('keyup', function(event) {
        showStatus();
    });
    $('#' + textArea).on('change', function(event) {
        showStatus();
    });
    function showStatus() {
        const content = $('#' + textArea).val();
        if (clipBoard !== content) {
            $('#' + submitButton).attr('class', 'btn btn-primary').text('Copy To Clipboard');
        } else if (clipBoard !== '') {
            $('#' + submitButton).attr('class', 'btn btn-success').text('Copied!✓');
        }
    }
});
