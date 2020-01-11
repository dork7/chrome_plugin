document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        })
    }
    function setCount(res) {
        const div = document.createElement('div')
        const div2 = document.createElement('div')
        div.textContent = `${res.count} bears`
        div2.textContent = `${res.url} url`
        document.body.appendChild(div)
        document.body.appendChild(div2)
    }
}, false)




