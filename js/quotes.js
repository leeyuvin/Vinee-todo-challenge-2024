const quotes = [
    {quote: '"사랑은 누군가를 너보다 먼저 두는 거야."'},
    {quote: '"과거는 아플 수 있어. 하지만 둘 중 하나야. 도망치든가 극복하든가."'},
    {quote: '"누군가를 사랑하려면 너 자신을 먼저 사랑해야해."'},
    {quote: '"기적이 일어나는데도 시간이 걸린단다."'},
    {quote: '"기억해. 너는 세상을 빛으로 가득 채울 수 있는 존재라는 걸."'},
    {quote: '"사랑은 어떻게 쓰는거야? 사랑은 쓰는게 아니야, 느끼는 거지."'},
];

const quote = document.querySelector("#quote span");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;