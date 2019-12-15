# miniJWT
A very minimal implementation of JWT using crypto.subtle.<br>
It uses a slightly more minimalistic form factor than JWT.

```json
{
  "alg": "HS256",
  "sign": crypto.suble.sign("HMAC", cryptKey, this)
}
```

# Example usecases

```html
<script>
	let secret = "rather secret key";
	let json = {"something": "to be sent"};
  
	let jwt = new jwt_frame(json, 'HMAC', secret);
	jwt.sign(function(signature) {
		json['sign'] = signature
		socket.send(json);
	})
</script>
```

# Features

 * HS256

# Installation

```html
<script type="text/javascript">
	// Loading JavaScript from a cross-site resource is blocked.
	// But there's nothing stopping us from downloading the script
	// as a text-blob and placing it within the <script> </ script> tags,
	// which causes the browser to parse it, but not as a forrain object.
	//
	// #LoadingScriptsFromGithub
	var script = document.createElement('script');
	script.type = 'text/javascript';

	let xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://raw.githubusercontent.com/Torxed/miniJWT/master/miniJWT.js', true);
	xhr.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			script.innerHTML = this.responseText;
			document.head.appendChild(script);
		}
	}
	xhr.send();
</script>
```

# More info on the structure

There's no 3-part-structure but the same behavior as a traditional JWT.<br>
A more practical example:

```json
{
  "alg": "HS256",
  "data": {
    "name": "Anton Hvornum",
    "location": "earth"
  }
}
```
Firstly, the final struct is set up, the only requirement is the algorithm.<br>
Sign it, and add in the signature after the struct is complete.<br>

```json
{
  "alg": "HS256",
  "data": {
    "name": "Anton Hvornum",
    "location": "earth"
  },
  "sign": "60be5df79cd0ac308fcf6cd8668e5a7276266b7c38593ad7707b280f4edadddf"
}
```

And there you go, `algo` telling the server what hash to generate.<br>
Custom data in any way you want, in this case a nested dict called `data`.<br>
And finalized with a `sign` signature.
