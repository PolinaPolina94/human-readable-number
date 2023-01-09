module.exports = function toReadable (number) {

    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
                'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) return num[number];
    const count = number%10;
    if (number < 100) return count? tens[Math.floor((number/10)-2)] + " " + num[count] : tens[(number/10)-2];
    if (number < 1000) return (number%100 === 0)? num[(number/100)] + " hundred" :  
                          num[Math.floor(number/100)] + " hundred" + " " + toReadable(number%100);
}
