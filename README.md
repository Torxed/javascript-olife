# miniJWT
A very minimal implementation of JWT using crypto.subtle

# Example usecases

```html
<script>
	let secret = "rather secret key";
	let json = {"something": "to be sent"};
  
  json['sign'] = null;
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
	let socket = null; // Create a global socket element, initate it with `new slimWebSocket();` later
	
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
