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
    $('#' + textArea).keydown(function(event) {
        showStatus();
    });
    $('#' + textArea).keyup(function(event) {
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
