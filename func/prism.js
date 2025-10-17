// 🌸 Marina's Beautiful Code Highlighter
// 💫 Elegant syntax highlighting with Marina's colors

const styles = {
	// 🌊 Marina's Color Palette
	cdata: "color:#ff69b4",        // Pink
	comment: "color:#9370db",      // Purple
	doctype: "color:#ff69b4",      // Pink
	prolog: "color:#ff69b4",       // Pink
	punctuation: "color:#ffb6c1",  // Light Pink
	namespace: "opacity:.7",
	
	// 🌺 Keywords and Constants
	constant: "color:#ff1493",     // Deep Pink
	deleted: "color:#ff1493",      // Deep Pink
	property: "color:#ff1493",     // Deep Pink
	symbol: "color:#ff1493",       // Deep Pink
	tag: "color:#ff1493",          // Deep Pink
	
	// 💫 Numbers and Booleans
	boolean: "color:#ba55d3",      // Medium Orchid
	number: "color:#ba55d3",       // Medium Orchid
	
	// 🎀 Strings and Attributes
	'attr-name': "color:#32cd32",  // Lime Green
	builtin: "color:#32cd32",      // Lime Green
	char: "color:#32cd32",         // Lime Green
	inserted: "color:#32cd32",     // Lime Green
	selector: "color:#32cd32",     // Lime Green
	string: "color:#87ceeb",       // Sky Blue
	
	// ✨ Special Elements
	'language-css .token.string': "color:#ffb6c1",
	'.style .token.string': "color:#ffb6c1",
	entity: "color:#ffb6c1; cursor:help",
	operator: "color:#ffb6c1",     // Light Pink
	url: "color:#ffb6c1",          // Light Pink
	variable: "color:#ffb6c1",     // Light Pink
	
	// 🌸 Functions and Classes
	atrule: "color:#ffd700",       // Gold
	'attr-value': "color:#ffd700", // Gold
	'class-name': "color:#ffd700", // Gold
	'function': "color:#00ced1",   // Dark Turquoise
	
	// 💕 Keywords and Regex
	keyword: "color:#00bfff",      // Deep Sky Blue
	regex: "color:#ffa500",        // Orange
	important: "color:#ff4500; font-weight:bold", // Orange Red
	
	// 🎀 Text Styles
	bold: "font-weight:bold",
	italic: "font-style:italic"
};

// 🌊 Marina's LinkedList Implementation
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	const head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	const tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

// 💫 Marina's Utility Functions
function addAfter(list, node, value) {
	const next = node.next;
	const newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;
	return newNode;
}

function matchPattern(pattern, pos, text, lookbehind) {
	pattern.lastIndex = pos;
	const match = pattern.exec(text);
	if (match && lookbehind && match[1]) {
		const lookbehindLength = match[1].length;
		match.index += lookbehindLength;
		match[0] = match[0].slice(lookbehindLength);
	}
	return match;
}

function removeRange(list, node, count) {
	let next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}

function toArray(list) {
	const array = [];
	let node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}

// 🌸 Marina's Grammar Matching
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (const token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		let patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (let j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + ',' + j) {
				return;
			}

			const patternObj = patterns[j];
			const inside = patternObj.inside;
			const lookbehind = !!patternObj.lookbehind;
			const greedy = !!patternObj.greedy;
			const alias = patternObj.alias;

			if (greedy && !patternObj.pattern.global) {
				const flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
			}

			/** @type {RegExp} */
			const pattern = patternObj.pattern || patternObj;

			for (let currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				if (rematch && pos >= rematch.reach) {
					break;
				}

				let str = currentNode.value;

				if (tokenList.length > text.length) {
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				let removeCount = 1;
				var match;

				if (greedy) {
					match = matchPattern(pattern, pos, text, lookbehind);
					if (!match || match.index >= text.length) {
						break;
					}

					var from = match.index;
					const to = match.index + match[0].length;
					let p = pos;

					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					p -= currentNode.value.length;
					pos = p;

					if (currentNode.value instanceof Token) {
						continue;
					}

					for (let k = currentNode;
						k !== tokenList.tail && (p < to || typeof k.value === 'string');
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					match = matchPattern(pattern, 0, str, lookbehind);
					if (!match) {
						continue;
					}
				}

				var from = match.index;
				const matchStr = match[0];
				const before = str.slice(0, from);
				const after = str.slice(from + matchStr.length);

				const reach = pos + str.length;
				if (rematch && reach > rematch.reach) {
					rematch.reach = reach;
				}

				let removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				const wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}

				if (removeCount > 1) {
					const nestedRematch = {
						cause: token + ',' + j,
						reach: reach
					};
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

					if (rematch && nestedRematch.reach > rematch.reach) {
						rematch.reach = nestedRematch.reach;
					}
				}
			}
		}
	}
}

// 🎀 Marina's Token Class
function Token(type, content, alias, matchedStr) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	this.length = (matchedStr || '').length | 0;
}

Token.stringify = function stringify(o, language, options = {}) {
	const stylesCss = options.styles || styles;
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		let s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	const env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	const aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	let attributes = '';
	for (const name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	// 🌸 Marina's Beautiful Styling
	const tokenStyles = env.classes.map(c => stylesCss[c] || '').filter(i => i).join(';');
	const marinaStyle = tokenStyles + ';font-family:Monaco,Consolas,"Courier New",monospace;font-size:14px;line-height:1.5;';

	return `<${env.tag} class="${env.classes.join(' ')}"${attributes} style="${marinaStyle}">${env.content}</${env.tag}>`;
};

// 💫 Marina's Core Library
const _ = {
	hooks: {
		all: {},
		add: function (name, callback) {
			const hooks = _.hooks.all;
			hooks[name] = hooks[name] || [];
			hooks[name].push(callback);
		},
		run: function (name, env) {
			const callbacks = _.hooks.all[name];
			if (!callbacks || !callbacks.length) {
				return;
			}
			for (let i = 0, callback; (callback = callbacks[i++]);) {
				callback(env);
			}
		}
	},
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		}
	},
	tokenize: function (text, grammar) {
		const rest = grammar.rest;
		if (rest) {
			for (const token in rest) {
				grammar[token] = rest[token];
			}
			delete grammar.rest;
		}

		const tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);
		matchGrammar(text, tokenList, grammar, tokenList.head, 0);
		return toArray(tokenList);
	}
};

// 🌊 Marina's Prism Highlighter
const Prism = {
	highlight: function (text, grammar, language, options = {}) {
		const env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		if (!env.grammar) {
			throw new Error('🌸 The language "' + env.language + '" has no grammar.');
		}
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language, options);
	}
};

// 🎀 Marina's Language Definitions
Prism.languages = {};

// 🌸 JSON Language with Marina's Colors
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

// 💫 JavaScript Stack Trace
Prism.languages.jsstacktrace = {
	'error-message': {
		pattern: /^\S.*/m,
		alias: 'string'
	},
	'stack-frame': {
		pattern: /(^[ \t]+)at[ \t].*/m,
		lookbehind: true,
		inside: {
			'not-my-code': {
				pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
				alias: 'comment'
			},
			'filename': {
				pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
				lookbehind: true,
				alias: 'url'
			},
			'function': {
				pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
				lookbehind: true,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /[()]/,
			'keyword': /\b(?:at|new)\b/,
			'alias': {
				pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
				alias: 'variable'
			},
			'line-number': {
				pattern: /:\d+(?::\d+)?\b/,
				alias: 'number',
				inside: {
					'punctuation': /:/
				}
			}
		}
	}
};

// ✨ Aliases
Prism.languages.jsstack = Prism.languages.jsstacktrace;
Prism.languages.webmanifest = Prism.languages.json;

// 🌺 Marina's Special Hook for Beautiful Code
_.hooks.add('wrap', function(env) {
	if (env.type === 'comment') {
		env.attributes['title'] = '🌸 Marina\'s Comment';
	}
	if (env.type === 'string') {
		env.attributes['title'] = '💫 Marina\'s String';
	}
});

module.exports = Prism;
