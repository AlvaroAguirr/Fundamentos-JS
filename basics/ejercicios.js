function wrapping(gifts){
  const bolsa =gifts.map(
    gift=> {
      const tapa= '*'.repeat(gift.length+2)
      return `${tapa}\n*${gift}*\n${tapa}`
    }
  );
  return bolsa;
}


const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
wrapped.forEach(box=> console.log(box));
