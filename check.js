let referrer_url = document.referrer;
console.log(referrer_url);
const body = document.querySelector('.body')

if(referrer_url != 'https://spectre2004.github.io/project/'){
     window.location.href = 'https://spectre2004.github.io/project/'
}