function escapeHTML(value) {
    let pattern = /[<>& ]/g;
    value = String(value);
    return value.replace(pattern, (match) => ({

        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        ' ': '&nbsp;'
    }[match]))
}

console.log(escapeHTML('[{"Name":"<script>alert(\'Hacked\');\<\/script>", "Age":20, "City":"\'Vinkel Town\' Pernik & Co."}]'));
// Очаквано: "&lt;div&gt;&nbsp;Hello&nbsp;&amp;&nbsp;welcome&nbsp;&lt;/div&gt;"
