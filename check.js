let referrer_url = document.referrer;
console.log(referrer_url);
const body = document.querySelector('.body')

if(referrer_url != 'http://127.0.0.1:5500/index.html'){
     window.location.href = 'http://127.0.0.1:5500/index.html'
}