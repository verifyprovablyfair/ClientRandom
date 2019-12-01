function genrand() {
	var rng_nums = new Uint32Array(2); 
        if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(rng_nums); // Chrome, Opera, Firefox
        else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(rng_nums); // IE
        else rng_nums = [Math.floor(Math.random()*4294967295),Math.floor(Math.random()*4294967295)]; // All outdated browsers
        return ((rng_nums[0]>>>5)*67108864.0+(rng_nums[1]>>>6));
}
