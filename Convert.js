window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const tableDownload = this.document.getElementById("tabledownload");
            console.log(tableDownload);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'Project convert html2pdf.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(tableDownload).set(opt).save();
        })
}