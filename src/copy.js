function getText(e) {
    e.innerHTML = `...`;
    setTimeout(() => {
        let copy_content = document.querySelector('#modal-body-content > .text-msg');
        let copy_container = document.querySelector('#modal-body-container');
        // Buat variabel kosong untuk menampung teks yang akan Anda baca
        var teks = '';

        // Loop melalui semua elemen di dalam copy_content dan tambahkan teksnya ke variabel teks
        for (var i = 0; i < copy_content.childNodes.length; i++) {
            var node = copy_content.childNodes[i];
            if (node.nodeType === 3) { // 3 adalah tipe node teks
                teks += node.textContent;
            } else if (node.nodeType === 1) { // 1 adalah tipe node elemen
                if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
                    let new_text = node.value.replace('\n', "<br>")
                    teks += new_text;
                } else if (node.nodeName === 'BR') {
                    teks += '<br>';
                } else {
                    teks += node.innerText;
                }
            }
        }
        copy_container.innerHTML = teks;
        modal.hide()
        modal_copy.show();
        e.innerHTML = `Generate`;
    }, 2000)

}