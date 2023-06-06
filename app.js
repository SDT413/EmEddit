document.addEventListener('alpine:init', () => {
    let prewiev = document.getElementById("preview");
    let editorArea = document.getElementById("editorArea")
    Alpine.data("app", () => ({
        txt: "",
        init() {
            window.addEventListener("beforeunload", () => this.save())
            window.addEventListener("blur", () => this.save())
            if (window.localStorage.txt) {
                this.txt = window.localStorage.txt;
            }
        },
        markdown() {
            return marked.parse(this.txt);
        },
        chars () {
            return this.txt.length + " characters";
        },
        words() {
            return this.txt.split(" ").length + " words";
        },
        save() {
            window.localStorage = this.txt;
        }
    }));
});
