function hexdigest(data) {
	return [...new Uint8Array(data)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const getUtf8Bytes = str =>
	new Uint8Array(
	[...unescape(encodeURIComponent(str))].map(c => c.charCodeAt(0))
);

class _jwt_frame {
	constructor(data, mode, key) {
		this.data = data;
		this.mode = mode;
		this.key = key;
	}

	sign(func) {
		let payload = getUtf8Bytes(JSON.stringify(this.data));
		crypto.subtle.importKey('raw', getUtf8Bytes(this.key), { name: 'HMAC', hash: 'SHA-256' }, true, ['sign']).then(function(cryptoKey) {
			crypto.subtle.sign('HMAC', cryptoKey, payload).then(function(signature) {
				func(signature);
			})
		})
	}
}

window.jwt_frame = _jwt_frame;
