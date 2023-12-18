const qbtn = document.querySelectorAll('.question')

qbtn.forEach(btn => {
    btn.addEventListener('click', function () {
        console.log("working")
        this.classList.toggle('active')
        const desc = this.nextElementSibling
        const pbtn = this.querySelector('.plusbtn')
        const mbtn = this.querySelector('.minbtn')

        if (desc.style.maxHeight) {
            desc.style.maxHeight = null
            pbtn.style.display = 'block'
            mbtn.style.display = 'none'
        }
        else {
            desc.style.maxHeight = desc.scrollHeight + 'px'
            pbtn.style.display = 'none'
            mbtn.style.display = 'block'
        }
    })
})
const hello = function hi() {
    console.log("hi")
}