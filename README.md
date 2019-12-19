# javascript-olife
JavaScript bindings for [obtain.life](https://github.com/Torxed/obtain.life).<br>
Used in back-end services or front-end to get SSO *(single Sign On)* or to communicate with the obtain.life Identity Management suit *(self-hosted or otherwise)*.

On its own, it only creates valid data structures for `obtain.life`.<br>
To send them, use HTTP or WebSocket requests, via for instance [slimWebSocket](https://github.com/Torxed/slimWebSocket).

# Features

 * [HS256](https://github.com/Torxed/javascript-olife/wiki/HS256)
 * <strike>HS384</strike>
 * <strike>HS512</strike>
 * <strike>RS256</strike>
 * <strike>RS384</strike>
 * <strike>RS512</strike>
 * <strike>ES256</strike>
 * <strike>ES384</strike>
 * <strike>ES512</strike>
 * <strike>PS256</strike>
 * <strike>PS384</strike>
 * <strike>PS512</strike>
 * <strike>EdDSA</strike>

# Installation

```html
<script type="text/javascript" href="./olife.js"></script>
```

Or via GitHub as CDN:

```html
<script type="text/javascript">
	// Loading JavaScript from a cross-site resource is blocked on GitHub.
	// But there's nothing stopping us from downloading the script as a
	// text-blob and placing it within the <script> </ script> tags,
	// which causes the browser to parse it, but not as a forrain object.
	//
	// #LoadingScriptsFromGithub

	let xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://raw.githubusercontent.com/Torxed/javascript-olife/master/olife.js', true);
	xhr.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.innerHTML = this.responseText;
			document.head.appendChild(script);
		}
	}
	xhr.send();
</script>
```
# Example usecases

```html
<script>
	let secret = "rather secret key";
  
	let life = new olife('obtain.life', 'HS256', secret);
	life.login('username', 'password');
	
	let payload = {
		"algo": "HS256",
		"something": "to be sent"
	};
	life.sign(function(signature) {
		payload['sign'] = signature
		external_socket.send(payload);
	})
</script>
```
