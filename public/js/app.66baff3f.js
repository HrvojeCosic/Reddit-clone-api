(function (t) {
	function e(e) {
		for (
			var s, i, r = e[0], c = e[1], u = e[2], l = 0, d = [];
			l < r.length;
			l++
		)
			(i = r[l]),
				Object.prototype.hasOwnProperty.call(n, i) && n[i] && d.push(n[i][0]),
				(n[i] = 0);
		for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
		m && m(e);
		while (d.length) d.shift()();
		return a.push.apply(a, u || []), o();
	}
	function o() {
		for (var t, e = 0; e < a.length; e++) {
			for (var o = a[e], s = !0, r = 1; r < o.length; r++) {
				var c = o[r];
				0 !== n[c] && (s = !1);
			}
			s && (a.splice(e--, 1), (t = i((i.s = o[0]))));
		}
		return t;
	}
	var s = {},
		n = { app: 0 },
		a = [];
	function i(e) {
		if (s[e]) return s[e].exports;
		var o = (s[e] = { i: e, l: !1, exports: {} });
		return t[e].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
	}
	(i.m = t),
		(i.c = s),
		(i.d = function (t, e, o) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
		}),
		(i.r = function (t) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(i.t = function (t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t;
			if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
			var o = Object.create(null);
			if (
				(i.r(o),
				Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
				2 & e && 'string' != typeof t)
			)
				for (var s in t)
					i.d(
						o,
						s,
						function (e) {
							return t[e];
						}.bind(null, s)
					);
			return o;
		}),
		(i.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t['default'];
					  }
					: function () {
							return t;
					  };
			return i.d(e, 'a', e), e;
		}),
		(i.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(i.p = '/');
	var r = (window['webpackJsonp'] = window['webpackJsonp'] || []),
		c = r.push.bind(r);
	(r.push = e), (r = r.slice());
	for (var u = 0; u < r.length; u++) e(r[u]);
	var m = c;
	a.push([0, 'chunk-vendors']), o();
})({
	0: function (t, e, o) {
		t.exports = o('56d7');
	},
	'034f': function (t, e, o) {
		'use strict';
		var s = o('85ec'),
			n = o.n(s);
		n.a;
	},
	'0957': function (t, e, o) {
		'use strict';
		var s = o('5228'),
			n = o.n(s);
		n.a;
	},
	'28d3': function (t, e, o) {},
	'29d2': function (t, e, o) {},
	'2a29': function (t, e, o) {
		'use strict';
		var s = o('4464'),
			n = o.n(s);
		n.a;
	},
	'2b69': function (t, e, o) {},
	'2ccb': function (t, e, o) {
		'use strict';
		var s = o('ad30'),
			n = o('d01b'),
			a = (o('cbfe'), o('2877')),
			i = Object(a['a'])(
				n['default'],
				s['a'],
				s['b'],
				!1,
				null,
				'4d73d917',
				null
			);
		e['default'] = i.exports;
	},
	3032: function (t, e, o) {},
	'3b1f': function (t, e, o) {
		'use strict';
		var s = o('dd75'),
			n = o.n(s);
		n.a;
	},
	4464: function (t, e, o) {},
	'490b': function (t, e, o) {
		'use strict';
		var s = o('d8cc'),
			n = o.n(s);
		n.a;
	},
	'4aec': function (t, e, o) {
		'use strict';
		var s = o('29d2'),
			n = o.n(s);
		n.a;
	},
	5228: function (t, e, o) {},
	'56d7': function (t, e, o) {
		'use strict';
		o.r(e);
		o('e260'), o('e6cf'), o('cca6'), o('a79d');
		var s = o('2b0e'),
			n = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', { attrs: { id: 'app' } }, [o('router-view')], 1);
			},
			a = [],
			i = {},
			r = i,
			c = (o('034f'), o('2877')),
			u = Object(c['a'])(r, n, a, !1, null, null, null),
			m = u.exports,
			l = o('8c4f'),
			d = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', { staticClass: 'main' }, [o('Header'), o('Feed')], 1);
			},
			p = [],
			v = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return t.loadingSpinner
					? o('div', { staticClass: 'loader-container' }, [t._m(0)])
					: o(
							'div',
							{ staticClass: 'feed-container' },
							[
								o('SubmitCommunityForm', {
									class: { hidden: t.hideCommunityModal },
									on: { 'close-community-modal': t.toggleCommunityModal },
								}),
								o(
									'div',
									{ staticClass: 'post-container' },
									[
										this.$store.state.tokenFound
											? o('CreatePost')
											: o('div', { staticClass: 'not-logged-in-post' }, [
													t._v(
														' Welcome! Log in to create posts and communities '
													),
											  ]),
										t._l(this.$store.state.postsToShow, function (t) {
											return o('Post', { key: t._id, attrs: { post: t } });
										}),
										o(
											'button',
											{
												staticClass: 'create-community-sticky',
												on: { click: t.toggleCommunityModal },
											},
											[t._v(' + ')]
										),
									],
									2
								),
								o(
									'div',
									{ staticClass: 'featured-communities-container' },
									[
										o(
											'button',
											{
												directives: [
													{
														name: 'show',
														rawName: 'v-show',
														value: this.$store.state.tokenFound,
														expression: 'this.$store.state.tokenFound',
													},
												],
												staticClass: 'create-community-title',
												on: { click: t.toggleCommunityModal },
											},
											[t._v(' Create Community ')]
										),
										o('h1', { staticClass: 'featured-communities-title' }, [
											t._v(' FeaturedCommunities '),
										]),
										t._l(t.uniqueCommunities, function (t) {
											return o('FeaturedCommunities', {
												key: t,
												attrs: { community: t },
											});
										}),
									],
									2
								),
							],
							1
					  );
			},
			h = [
				function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return s('div', { staticClass: 'loader main-loader' }, [
						s('img', {
							staticClass: 'spinner-logo',
							attrs: { src: o('cf05'), alt: 'Mode-toggle-btn' },
						}),
					]);
				},
			],
			f =
				(o('4160'),
				o('d3b7'),
				o('6062'),
				o('3ca3'),
				o('159b'),
				o('ddb0'),
				o('bc3a')),
			g = o.n(f),
			C = o('2ccb'),
			_ = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					'div',
					{
						attrs: {
							id: [
								'user-profile' === t.classProp
									? t.profilePagePostContainer
									: t.mainPagePostContainer,
							],
						},
					},
					[
						o('PostVoting', { attrs: { post: t.post } }),
						o(
							'router-link',
							{
								staticClass: 'post-link',
								attrs: {
									to: {
										name: 'PostContent',
										params: { id: t.post._id, post: t.post },
									},
								},
							},
							[
								o(
									'div',
									{
										staticClass: 'post-main',
										on: { click: t.findClickedPost },
									},
									[
										o(
											'div',
											{ staticClass: 'upper-part' },
											[
												o(
													'router-link',
													{
														staticClass: 'link',
														attrs: {
															to: {
																name: 'Community',
																params: { subreddit: t.post.subreddit },
															},
														},
													},
													[
														o('a', { staticClass: 'community' }, [
															t._v('r/' + t._s(t.post.subreddit)),
														]),
													]
												),
												o(
													'router-link',
													{
														staticClass: 'link',
														attrs: {
															to: {
																name: 'UserProfile',
																params: { user_id: t.post.author._id },
															},
														},
													},
													[
														o('a', { staticClass: 'posted-by' }, [
															t._v('u/' + t._s(t.post.author.username)),
														]),
													]
												),
												o('a', { staticClass: 'date-posted' }, [
													t._v(t._s(t.post.timestamp)),
												]),
											],
											1
										),
										o('div', { staticClass: 'post-title' }, [
											t._v(t._s(t.post.title)),
										]),
										o('div', { staticClass: 'comments' }, [
											t._v(t._s(t.post.comments.length) + ' comments'),
										]),
									]
								),
							]
						),
					],
					1
				);
			},
			b = [],
			w = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', { staticClass: 'post-voting-container' }, [
					o('div', { staticClass: 'post-voting' }, [
						o('div', {
							staticClass: 'upvote',
							class: {
								upvotedPost: this.$store.state.upvotedPosts.includes(
									t.post._id
								),
							},
							on: {
								click: function (e) {
									return t.upvotePost(t.post._id);
								},
							},
						}),
						o(
							'div',
							{
								class: {
									upvotedNumber: this.$store.state.upvotedPosts.includes(
										t.post._id
									),
									downvotedNumber: this.$store.state.downvotedPosts.includes(
										t.post._id
									),
								},
							},
							[o('p', [t._v(t._s(t.post.upvotes))])]
						),
						o('div', {
							staticClass: 'downvote',
							class: {
								downvotedPost: this.$store.state.downvotedPosts.includes(
									t.post._id
								),
							},
							on: {
								click: function (e) {
									return t.downvotePost(t.post._id);
								},
							},
						}),
					]),
				]);
			},
			P = [],
			y =
				(o('caad'),
				o('2532'),
				{
					props: ['post'],
					methods: {
						upvotePost: function (t) {
							return this.$store.state.downvotedPosts.includes(t)
								? (this.$store.commit('removeDownvotedPost', t),
								  this.$store.commit('pushUpvotedPost', t),
								  void (this.post.upvotes += 2))
								: this.$store.state.upvotedPosts.includes(t)
								? (this.$store.commit('removeUpvotedPost', t),
								  void this.post.upvotes--)
								: (this.$store.commit('pushUpvotedPost', t),
								  void this.post.upvotes++);
						},
						downvotePost: function (t) {
							return this.$store.state.upvotedPosts.includes(t)
								? (this.$store.commit('removeUpvotedPost', t),
								  this.$store.commit('pushDownvotedPost', t),
								  void (this.post.upvotes -= 2))
								: this.$store.state.downvotedPosts.includes(t)
								? (this.$store.commit('removeDownvotedPost', t),
								  void this.post.upvotes++)
								: (this.post.upvotes--,
								  void this.$store.commit('pushDownvotedPost', t));
						},
					},
				}),
			k = y,
			$ = (o('4aec'), Object(c['a'])(k, w, P, !1, null, null, null)),
			x = $.exports,
			S = {
				components: { PostVoting: x },
				name: 'Post',
				props: ['post', 'classProp'],
				data: function () {
					return {
						mainPagePostContainer: 'post-container',
						profilePagePostContainer: 'profile-post-container',
					};
				},
				methods: {
					findClickedPost: function () {
						this.$store.state.clickedPost = [];
						var t = this.post,
							e = t.upvotes,
							o = t.subreddit,
							s = t.timestamp,
							n = t.title,
							a = t.comments,
							i = t.text,
							r = t._id,
							c = this.post.author.username,
							u = {
								author: c,
								title: n,
								subreddit: o,
								timestamp: s,
								comments: a,
								upvotes: e,
								text: i,
								_id: r,
							};
						this.$store.commit('changeClickedPost', u);
					},
				},
			},
			N = S,
			O = (o('911d'), Object(c['a'])(N, _, b, !1, null, 'ad429bac', null)),
			U = O.exports,
			T = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					'router-link',
					{
						staticClass: 'link',
						attrs: {
							to: { name: 'Community', params: { subreddit: t.community } },
						},
					},
					[
						o('div', { staticClass: 'featured-communities' }, [
							t._v('r/' + t._s(t.community)),
						]),
					]
				);
			},
			E = [],
			D = { name: 'FeaturedCommunities', props: ['community'] },
			M = D,
			j = (o('95c0'), Object(c['a'])(M, T, E, !1, null, '0eaf60b0', null)),
			F = j.exports,
			L = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', [
					o('div', {
						staticClass: 'comm-modal',
						on: {
							click: function (e) {
								return t.$emit('close-community-modal');
							},
						},
					}),
					o('div', { staticClass: 'new-community-modal' }, [
						o('div', { staticClass: 'comm-form-container' }, [
							o('div', { staticClass: 'comm-title' }, [
								o('h2', [t._v('Create a community')]),
								o(
									'button',
									{
										staticClass: 'close-button',
										on: {
											click: function (e) {
												return t.$emit('close-community-modal');
											},
										},
									},
									[t._v(' X ')]
								),
							]),
							o('h3', [t._v('Name')]),
							o('input', {
								directives: [
									{
										name: 'model',
										rawName: 'v-model',
										value: t.communityName,
										expression: 'communityName',
									},
								],
								staticClass: 'comm-name',
								attrs: { type: 'text' },
								domProps: { value: t.communityName },
								on: {
									input: function (e) {
										e.target.composing || (t.communityName = e.target.value);
									},
								},
							}),
							o('form', [
								o('h3', [t._v('Description')]),
								o('textarea', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.communityDesc,
											expression: 'communityDesc',
										},
									],
									staticClass: 'comm-description',
									attrs: { type: 'text' },
									domProps: { value: t.communityDesc },
									on: {
										input: function (e) {
											e.target.composing || (t.communityDesc = e.target.value);
										},
									},
								}),
								t._v(' '),
								o('h3', { staticStyle: { color: '#E73A37' } }, [
									t._v(t._s(t.error)),
								]),
							]),
							o('input', {
								staticClass: 'submit-comm',
								attrs: { type: 'submit', value: 'CREATE COMMUNITY' },
								on: { click: t.submitNewCommunity },
							}),
						]),
					]),
				]);
			},
			A = [],
			H = {
				data: function () {
					return { communityName: '', communityDesc: '', error: '' };
				},
				methods: {
					submitNewCommunity: function () {
						var t = this;
						return this.communityName.length <= 0 ||
							this.communityDesc.length <= 0
							? (this.error = 'Please fill out all fields')
							: this.communityName.length > 20 || this.communityName.length < 3
							? (this.error = "Make your community's name 3-20 characters long")
							: ((this.error = ''),
							  void g.a
									.post('api/subreddits/new-subreddit', {
										communityName: this.communityName,
										communityDesc: this.communityDesc,
										timestamp: new Date().toLocaleDateString(),
									})
									.then(function () {
										t.$emit('close-community-modal'),
											(t.communityName = ''),
											(t.communityDesc = '');
									})
									.catch(function (e) {
										t.error = e.data.error;
									}));
					},
				},
			},
			V = H,
			I = (o('2a29'), Object(c['a'])(V, L, A, !1, null, null, null)),
			J = I.exports,
			q = {
				name: 'Feed',
				beforeCreate: function () {
					var t = this;
					g.a.get('api/posts/').then(function (e) {
						t.$store.commit('changePostsToShow', e.data.posts),
							(t.loadingSpinner = !1);
					});
				},
				data: function () {
					return { hideCommunityModal: !0, loadingSpinner: !0 };
				},
				methods: {
					toggleCommunityModal: function () {
						this.hideCommunityModal
							? (this.hideCommunityModal = !1)
							: (this.hideCommunityModal = !0);
					},
				},
				computed: {
					uniqueCommunities: function () {
						var t = [];
						return (
							this.$store.state.postsToShow.forEach(function (e) {
								t.push(e.subreddit);
							}),
							(t = new Set(t)),
							t
						);
					},
				},
				components: {
					Post: U,
					FeaturedCommunities: F,
					CreatePost: C['default'],
					SubmitCommunityForm: J,
				},
			},
			K = q,
			B = (o('b422'), Object(c['a'])(K, v, h, !1, null, '52ef281c', null)),
			G = B.exports,
			R = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s(
					'div',
					{ attrs: { id: 'header' } },
					[
						s('router-link', { staticClass: 'link', attrs: { to: '/' } }, [
							s('div', { staticClass: 'title' }, [
								s('img', { attrs: { id: 'logo', src: o('cf05') } }),
								s('h1', [t._v('redditLight')]),
							]),
						]),
						s('Searchbar'),
						s(
							'div',
							{ staticClass: 'buttons-log-sign' },
							[
								s('img', {
									staticClass: 'mode-toggle-btn',
									attrs: {
										src:
											'https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png',
										alt: 'Mode-toggle-btn',
									},
									on: { click: t.toggleMode },
								}),
								s(
									'router-link',
									{
										directives: [
											{
												name: 'show',
												rawName: 'v-show',
												value: !t.$store.state.tokenFound,
												expression: '!$store.state.tokenFound',
											},
										],
										staticClass: 'log-in-btn',
										attrs: { to: '/log-in' },
									},
									[t._v('LOG IN')]
								),
								s(
									'router-link',
									{
										directives: [
											{
												name: 'show',
												rawName: 'v-show',
												value: !t.$store.state.tokenFound,
												expression: '!$store.state.tokenFound',
											},
										],
										staticClass: 'sign-up-btn',
										attrs: { to: '/sign-up' },
									},
									[t._v('SIGN UP')]
								),
								s(
									'router-link',
									{
										staticStyle: {
											'text-decoration': 'none',
											color: 'inherit',
										},
										attrs: {
											to: {
												name: 'UserProfile',
												params: { user_id: t.user_id },
											},
										},
									},
									[
										s(
											'div',
											{
												directives: [
													{
														name: 'show',
														rawName: 'v-show',
														value: t.$store.state.tokenFound,
														expression: '$store.state.tokenFound',
													},
												],
												staticClass: 'logged-in-user',
											},
											[s('h3', [t._v(t._s(t.username))])]
										),
									]
								),
								s(
									'button',
									{
										directives: [
											{
												name: 'show',
												rawName: 'v-show',
												value: t.$store.state.tokenFound,
												expression: '$store.state.tokenFound',
											},
										],
										staticClass: 'logout-btn',
										on: { click: t.logout },
									},
									[t._v(' Log Out ')]
								),
							],
							1
						),
					],
					1
				);
			},
			Y = [],
			W = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('input', {
					directives: [
						{
							name: 'show',
							rawName: 'v-show',
							value: '/' == this.$route.path,
							expression: "this.$route.path == '/'",
						},
					],
					staticClass: 'search',
					attrs: { placeholder: 'Search for posts' },
					on: {
						keyup: function (e) {
							return !e.type.indexOf('key') &&
								t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
								? null
								: t.searchPosts(e);
						},
					},
				});
			},
			X = [],
			z = {
				methods: {
					searchPosts: function (t) {
						var e = this;
						'.' != t.target.value[0] &&
							(t.target.value.length > 0
								? g.a
										.get('api/posts/searchPost/'.concat(t.target.value))
										.then(function (t) {
											e.$store.commit('changePostsToShow', t.data.postsFound);
										})
								: g.a.get('api/posts/').then(function (t) {
										e.$store.state.postsToShow = t.data.posts;
								  }));
					},
				},
			},
			Q = z,
			Z = Object(c['a'])(Q, W, X, !1, null, null, null),
			tt = Z.exports,
			et = {
				beforeCreate: function () {
					!0 !== this.$store.state.darkMode
						? document.documentElement.setAttribute('data-theme', 'light')
						: document.documentElement.setAttribute('data-theme', 'dark');
				},
				data: function () {
					return { username: '', user_id: '.' };
				},
				mounted: function () {
					var t = this;
					this.$store.state.tokenFound &&
						g.a
							.get('api/users/login', {
								headers: { token: this.$store.state.tokenFound },
							})
							.then(function (e) {
								(t.username = e.data.user.username),
									(t.user_id = e.data.user.id);
							})
							.catch(function (t) {
								console.log(t);
							});
				},
				methods: {
					logout: function () {
						var t = this;
						this.$store.commit('changeJwt', null),
							this.$store.commit('addCurrentUser', null),
							ae.push('/').catch(function (e) {
								'/' !== t.$route.path && console.log(e);
							});
					},
					toggleMode: function () {
						!1 === this.$store.state.darkMode
							? (document.documentElement.setAttribute('data-theme', 'dark'),
							  (this.theme = 'dark'),
							  this.$store.commit('toggleDarkMode'))
							: (document.documentElement.setAttribute('data-theme', 'light'),
							  (this.theme = 'light'),
							  this.$store.commit('toggleDarkMode'));
					},
				},
				components: { Searchbar: tt },
			},
			ot = et,
			st = (o('da4c'), Object(c['a'])(ot, R, Y, !1, null, null, null)),
			nt = st.exports,
			at = { components: { Feed: G, Header: nt } },
			it = at,
			rt = (o('59f2'), Object(c['a'])(it, d, p, !1, null, null, null)),
			ct = rt.exports,
			ut = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', [
					o('div', { staticClass: 'log-in-container' }, [
						o('h2', [t._v('Login To Your Account')]),
						o(
							'form',
							{ staticClass: 'loginbox', attrs: { autocomplete: 'off' } },
							[
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.email,
											expression: 'email',
										},
									],
									attrs: { placeholder: 'Email', type: 'text', id: 'email' },
									domProps: { value: t.email },
									on: {
										input: function (e) {
											e.target.composing || (t.email = e.target.value);
										},
									},
								}),
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.password,
											expression: 'password',
										},
									],
									attrs: {
										placeholder: 'Password',
										type: 'password',
										id: 'password',
									},
									domProps: { value: t.password },
									on: {
										input: function (e) {
											e.target.composing || (t.password = e.target.value);
										},
									},
								}),
								o(
									'button',
									{ attrs: { id: 'submit' }, on: { click: t.login } },
									[
										t.loadingSpinner
											? o('div', { staticClass: 'loader button-loader' })
											: o('p', [t._v('Login')]),
									]
								),
							]
						),
						o(
							'h3',
							{
								class: ['login successful.' === t.alert ? t.success : t.failed],
							},
							[t._v(' ' + t._s(t.alert) + ' ')]
						),
						o(
							'div',
							{ staticClass: 'links' },
							[
								o(
									'router-link',
									{ staticClass: 'back-to-hp', attrs: { to: '/' } },
									[t._v('Back to home page')]
								),
								o(
									'router-link',
									{ staticClass: 'sign-up-instead', attrs: { to: '/sign-up' } },
									[t._v('New? Sign-up instead')]
								),
							],
							1
						),
					]),
				]);
			},
			mt = [],
			lt = {
				data: function () {
					return {
						email: '',
						password: '',
						alert: '',
						failed: 'login-failed',
						success: 'logged-in',
						loadingSpinner: !1,
					};
				},
				methods: {
					login: function () {
						var t = this;
						this.loadingSpinner = !0;
						var e = { email: this.email, password: this.password };
						g.a
							.post('api/users/login', e)
							.then(function (o) {
								(t.alert = o.data.title),
									t.$store.commit('changeJwt', o.data.token),
									t.$store.commit('addCurrentUser', e.email),
									ae.push('/'),
									(t.loadingSpinner = !1);
							})
							.catch(function (e) {
								(t.alert = e.response.data.error), (t.loadingSpinner = !1);
							});
					},
				},
				name: 'LogInPage',
			},
			dt = lt,
			pt = (o('3b1f'), Object(c['a'])(dt, ut, mt, !1, null, '60ea040e', null)),
			vt = pt.exports,
			ht = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', [
					o('div', { staticClass: 'sign-up-container' }, [
						o('h2', [t._v('Create a new account')]),
						o(
							'form',
							{ staticClass: 'loginbox', attrs: { autocomplete: 'off' } },
							[
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.username,
											expression: 'username',
										},
									],
									attrs: {
										placeholder: 'Username',
										type: 'text',
										id: 'username',
									},
									domProps: { value: t.username },
									on: {
										input: function (e) {
											e.target.composing || (t.username = e.target.value);
										},
									},
								}),
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.email,
											expression: 'email',
										},
									],
									attrs: { placeholder: 'E-mail', type: 'text', id: 'e-mail' },
									domProps: { value: t.email },
									on: {
										input: function (e) {
											e.target.composing || (t.email = e.target.value);
										},
									},
								}),
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.password,
											expression: 'password',
										},
									],
									attrs: {
										placeholder: 'Password',
										type: 'password',
										id: 'password',
									},
									domProps: { value: t.password },
									on: {
										input: function (e) {
											e.target.composing || (t.password = e.target.value);
										},
									},
								}),
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.repeatPassword,
											expression: 'repeatPassword',
										},
									],
									attrs: {
										placeholder: 'Repeat password',
										type: 'password',
										id: 'repeat-password',
									},
									domProps: { value: t.repeatPassword },
									on: {
										input: function (e) {
											e.target.composing || (t.repeatPassword = e.target.value);
										},
									},
								}),
								o(
									'button',
									{ attrs: { id: 'submit' }, on: { click: t.createUser } },
									[
										t.loadingSpinner
											? o('div', { staticClass: 'loader button-loader' })
											: o('p', [t._v('Sign Up')]),
									]
								),
								o(
									'h3',
									{
										class: [
											'Signed up successfully.' === t.alert
												? t.success
												: t.failed,
										],
									},
									[t._v(' ' + t._s(t.alert) + ' ')]
								),
								o(
									'router-link',
									{ staticClass: 'back-to-hp2', attrs: { to: '/' } },
									[t._v('Back to home page')]
								),
							],
							1
						),
					]),
				]);
			},
			ft = [],
			gt = {
				data: function () {
					return {
						username: '',
						password: '',
						repeatPassword: '',
						email: '',
						createdAt: new Date().toLocaleDateString(),
						alert: '',
						success: 'signed-up',
						failed: 'signup-failed',
						loadingSpinner: !1,
					};
				},
				methods: {
					createUser: function () {
						var t = this;
						this.loadingSpinner = !0;
						var e = {
							username: this.username,
							password: this.password,
							repeatPassword: this.repeatPassword,
							email: this.email,
							createdAt: this.createdAt,
						};
						g.a
							.post('api/users', e)
							.then(function (e) {
								(t.alert = e.data.title),
									ae.push('/log-in'),
									(t.loadingSpinner = !1);
							})
							.catch(function (e) {
								(t.alert = e.response.data.error), (t.loadingSpinner = !1);
							});
					},
				},
				name: 'SignUpPage',
			},
			Ct = gt,
			_t = (o('cbbc'), Object(c['a'])(Ct, ht, ft, !1, null, '6a16dfc9', null)),
			bt = _t.exports,
			wt = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					'div',
					[
						o('Header'),
						o('div', { staticClass: 'form-container' }, [
							o('div', { staticClass: 'form-header' }, [
								o('h2', [t._v('Create a post')]),
								o('h3', [t._v('Choose a community')]),
								o(
									'select',
									{
										directives: [
											{
												name: 'model',
												rawName: 'v-model',
												value: t.postCommunity,
												expression: 'postCommunity',
											},
										],
										on: {
											change: function (e) {
												var o = Array.prototype.filter
													.call(e.target.options, function (t) {
														return t.selected;
													})
													.map(function (t) {
														var e = '_value' in t ? t._value : t.value;
														return e;
													});
												t.postCommunity = e.target.multiple ? o : o[0];
											},
										},
									},
									t._l(t.communities, function (e) {
										return o(
											'option',
											{ key: e.name, domProps: { value: e } },
											[t._v('r/' + t._s(e))]
										);
									}),
									0
								),
							]),
							o('form', [
								o('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.postTitle,
											expression: 'postTitle',
										},
									],
									attrs: { type: 'text', placeholder: 'Title' },
									domProps: { value: t.postTitle },
									on: {
										input: function (e) {
											e.target.composing || (t.postTitle = e.target.value);
										},
									},
								}),
								o('textarea', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.postText,
											expression: 'postText',
										},
									],
									attrs: { type: 'text', placeholder: 'Text (optional)' },
									domProps: { value: t.postText },
									on: {
										input: function (e) {
											e.target.composing || (t.postText = e.target.value);
										},
									},
								}),
							]),
							o(
								'div',
								{ staticClass: 'buttons-container' },
								[
									o('router-link', { attrs: { to: '/' } }, [
										o('input', { attrs: { type: 'submit', value: 'CANCEL' } }),
									]),
									o('input', {
										attrs: { type: 'submit', value: 'POST' },
										on: { click: t.submitPost },
									}),
								],
								1
							),
							o('h1', { staticStyle: { color: '#E73A37' } }, [
								t._v(t._s(t.error)),
							]),
						]),
					],
					1
				);
			},
			Pt = [],
			yt = {
				beforeCreate: function () {
					var t = this;
					g.a.get('api/subreddits/').then(function (e) {
						var o = new Set(e.data);
						t.communities = o;
					});
				},
				data: function () {
					return {
						postCommunity: '',
						postTitle: '',
						postText: '',
						timestamp: new Date(),
						error: '',
						communities: [],
					};
				},
				components: { Header: nt },
				methods: {
					submitPost: function () {
						var t = this,
							e = {
								author: this.$store.state.currentUser,
								community: this.postCommunity,
								title: this.postTitle,
								text: this.postText,
								timestamp: this.timestamp.toLocaleDateString(),
							};
						'' === e.community || '' === e.title
							? (this.error = 'Please fill out all the required fields.')
							: g.a
									.post('api/posts', e)
									.then(function () {
										t.$router.push('/');
									})
									.catch(function () {
										t.error = 'Something went wrong. Try again later';
									});
					},
				},
			},
			kt = yt,
			$t = (o('85fd'), Object(c['a'])(kt, wt, Pt, !1, null, '2a93926b', null)),
			xt = $t.exports,
			St = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					'div',
					[
						o('Header'),
						t.loadingSpinner
							? o('div', { staticClass: 'loader' })
							: o('div', { attrs: { id: 'post-content-container' } }, [
									o(
										'div',
										{ staticClass: 'post-voting' },
										[
											o('PostVoting', {
												style: { backgroundColor: 'white' },
												attrs: { post: t.post },
											}),
										],
										1
									),
									o('div', { staticClass: 'post-details' }, [
										o(
											'div',
											{ staticClass: 'post-upper-part' },
											[
												o(
													'router-link',
													{
														staticClass: 'link',
														attrs: {
															to: {
																name: 'Community',
																params: { subreddit: t.post.subreddit },
															},
														},
													},
													[o('h3', [t._v('r/' + t._s(t.post.subreddit))])]
												),
												o(
													'p',
													{ staticClass: 'author' },
													[
														t._v(' Posted by '),
														o(
															'router-link',
															{
																staticClass: 'link',
																attrs: {
																	to: {
																		name: 'UserProfile',
																		params: { user_id: t.post.author._id },
																	},
																},
															},
															[t._v('u/' + t._s(t.post.author.username) + ' ')]
														),
													],
													1
												),
											],
											1
										),
										o('p', { staticClass: 'timestamp' }, [
											t._v(t._s(t.post.timestamp)),
										]),
										o('div', { staticClass: 'post-mid-part' }, [
											o('h3', [t._v(t._s(t.post.title))]),
											o('p', [t._v(t._s(t.post.text))]),
										]),
										o('div', { staticClass: 'post-lower-part' }, [
											o('p', [t._v(t._s(t.comments.length) + ' comments')]),
										]),
									]),
									o('div', { staticClass: 'post-submit-comment' }, [
										o(
											'form',
											{ key: t.formKey, on: { submit: t.createNewComment } },
											[
												this.$store.state.tokenFound
													? o('div', {
															staticClass: 'comment-input',
															attrs: { type: 'text', contenteditable: 'true' },
													  })
													: o('div', { staticClass: 'not-logged-in-comment' }, [
															t._v(' Log in or sign up to leave a comment '),
													  ]),
												this.$store.state.tokenFound
													? o('input', {
															attrs: { type: 'submit', value: 'COMMENT' },
													  })
													: t._e(),
											]
										),
									]),
									o(
										'div',
										{ staticClass: 'comments-container' },
										t._l(this.comments, function (t) {
											return o(
												'div',
												{ key: t._id },
												[o('PostComment', { attrs: { comment: t } })],
												1
											);
										}),
										0
									),
							  ]),
					],
					1
				);
			},
			Nt = [],
			Ot = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', { staticClass: 'comment' }, [
					o(
						'div',
						{ staticClass: 'upper-part-comment' },
						[
							o('CommentVoting', {
								attrs: { comment: t.comment },
								on: { 'update-upvotes': t.updateUpvotes },
							}),
							o(
								'router-link',
								{
									staticClass: 'link',
									attrs: {
										to: {
											name: 'UserProfile',
											params: { user_id: t.comment.author._id },
										},
									},
								},
								[
									o('p', { staticClass: 'author' }, [
										t._v(t._s(t.comment.author.username)),
									]),
								]
							),
							o('div', { staticClass: 'points-date' }, [
								o('p', { staticClass: 'points' }, [
									t._v(t._s(t.commentUpvotes) + ' points'),
								]),
								o('p', { staticClass: 'date' }, [
									t._v(t._s(t.comment.timestamp)),
								]),
							]),
							o(
								'p',
								{
									directives: [
										{
											name: 'show',
											rawName: 'v-show',
											value: t.comment.edited,
											expression: 'comment.edited',
										},
									],
									staticClass: 'edited',
								},
								[t._v('comment edited')]
							),
						],
						1
					),
					o('h3', { staticClass: 'content' }, [t._v(t._s(t.comment.content))]),
				]);
			},
			Ut = [],
			Tt = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o('div', { staticClass: 'voting-comment' }, [
					o('div', {
						staticClass: 'upvote-comment',
						class: {
							upvotedComment: this.$store.state.comments.upvotedComments.includes(
								t.comment._id
							),
						},
						on: {
							click: function (e) {
								return t.upvoteComment(t.comment._id);
							},
						},
					}),
					o('div', {
						staticClass: 'downvote-comment',
						class: {
							downvotedComment: this.$store.state.comments.downvotedComments.includes(
								t.comment._id
							),
						},
						on: {
							click: function (e) {
								return t.downvoteComment(t.comment._id);
							},
						},
					}),
				]);
			},
			Et = [],
			Dt = {
				data: function () {
					return {
						upvotedComments: this.$store.state.comments.upvotedComments,
						downvotedComments: this.$store.state.comments.downvotedComments,
					};
				},
				props: ['comment'],
				methods: {
					upvoteComment: function (t) {
						return this.$store.state.comments.downvotedComments.includes(t)
							? (this.$store.commit('removeDownvotedComment', t),
							  this.$store.commit('pushUpvotedComment', t),
							  void this.$emit('update-upvotes', 2))
							: this.$store.state.comments.upvotedComments.includes(t)
							? (this.$store.commit('removeUpvotedComment', t),
							  void this.$emit('update-upvotes', -1))
							: (this.$store.commit('pushUpvotedComment', t),
							  void this.$emit('update-upvotes', 1));
					},
					downvoteComment: function (t) {
						return this.$store.state.comments.upvotedComments.includes(t)
							? (this.$store.commit('removeUpvotedComment', t),
							  this.$store.commit('pushDownvotedComment', t),
							  void this.$emit('update-upvotes', -2))
							: this.$store.state.comments.downvotedComments.includes(t)
							? (this.$store.commit('removeDownvotedComment', t),
							  void this.$emit('update-upvotes', 1))
							: (this.$store.commit('pushDownvotedComment', t),
							  void this.$emit('update-upvotes', -1));
					},
				},
			},
			Mt = Dt,
			jt = (o('490b'), Object(c['a'])(Mt, Tt, Et, !1, null, '3866ace3', null)),
			Ft = jt.exports,
			Lt = {
				data: function () {
					return { commentUpvotes: this.comment.upvotes };
				},
				components: { CommentVoting: Ft },
				props: ['comment'],
				methods: {
					updateUpvotes: function (t) {
						this.commentUpvotes += t;
					},
				},
			},
			At = Lt,
			Ht = (o('c04c'), Object(c['a'])(At, Ot, Ut, !1, null, '772b573e', null)),
			Vt = Ht.exports,
			It = {
				created: function () {
					var t = this;
					g.a.get('api/posts/post/'.concat(this.post._id)).then(function (e) {
						e.data.post.comments.forEach(function (e) {
							t.comments.push(e);
						}),
							(t.post = e.data.post),
							(t.loadingSpinner = !1);
					});
				},
				data: function () {
					return {
						post: this.$store.state.clickedPost,
						comments: [],
						error: '',
						formKey: 0,
						loadingSpinner: !0,
					};
				},
				components: { Header: nt, PostComment: Vt, PostVoting: x },
				methods: {
					createNewComment: function (t) {
						var e = this,
							o = t.target.innerText;
						g.a
							.post('api/posts/post/'.concat(this.post._id), {
								author: this.$store.state.currentUser,
								comment: o,
								timestamp: new Date().toLocaleDateString(),
							})
							.then(function (t) {
								e.comments.push(t.data.comment);
							}),
							this.formKey++;
					},
				},
			},
			Jt = It,
			qt = (o('0957'), Object(c['a'])(Jt, St, Nt, !1, null, null, null)),
			Kt = qt.exports,
			Bt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s(
					'div',
					[
						s('Header'),
						s('div', { attrs: { id: 'user-profile-container' } }, [
							s('div', { staticClass: 'user-overview' }, [
								s('img', {
									staticClass: 'profile-picture',
									attrs: { src: o('92db') },
								}),
								t.loadingSpinner
									? s('div', { staticClass: 'loader' })
									: s('div', { staticClass: 'username' }, [
											t._v('u/' + t._s(t.username)),
									  ]),
								t.loadingSpinner
									? t._e()
									: s('div', { staticClass: 'user-timestamp' }, [
											t._v(' Created: ' + t._s(t.timestamp) + ' '),
									  ]),
								t.loadingSpinner
									? t._e()
									: s('div', [t._v('posts: ' + t._s(t.posts.length))]),
							]),
							s(
								'div',
								{ staticClass: 'posts-user-profile' },
								t._l(t.posts, function (t) {
									return s(
										'div',
										{ key: t._id },
										[
											s('Post', {
												attrs: { post: t, classProp: 'user-profile' },
											}),
										],
										1
									);
								}),
								0
							),
						]),
					],
					1
				);
			},
			Gt = [],
			Rt = {
				created: function () {
					var t = this;
					g.a.get('api/users/user/'.concat(this.user_id)).then(function (e) {
						var o = e.data,
							s = o.userUsername,
							n = o.userTimestamp,
							a = o.posts;
						(t.username = s),
							(t.timestamp = n),
							(t.posts = a),
							(t.loadingSpinner = !1);
					});
				},
				data: function () {
					return { username: '', timestamp: '', posts: [], loadingSpinner: !0 };
				},
				components: { Header: nt, Post: U },
				props: ['user_id'],
			},
			Yt = Rt,
			Wt = (o('f235'), Object(c['a'])(Yt, Bt, Gt, !1, null, null, null)),
			Xt = Wt.exports,
			zt = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					'div',
					{ staticClass: 'community-hero' },
					[
						o('Header'),
						t.loadingSpinner
							? o('div', { staticClass: 'loader' })
							: o('div', { staticClass: 'community-header' }, [
									o('h1', [t._v('r/' + t._s(t.name))]),
									o('h3', [t._v(t._s(t.description))]),
									o('div', { staticClass: 'community-side-info' }, [
										o('p', [t._v('Created ' + t._s(t.timestamp))]),
										o('p', [t._v(t._s(t.numberOfPosts) + ' posts')]),
									]),
							  ]),
						o(
							'div',
							{ staticClass: 'community-post-container' },
							t._l(this.$store.state.postsToShow, function (t) {
								return o('Post', {
									key: t._id,
									attrs: { post: t, classProp: 'user-profile' },
								});
							}),
							1
						),
					],
					1
				);
			},
			Qt = [],
			Zt =
				(o('a4d3'),
				o('e01a'),
				o('b0c0'),
				{
					beforeCreate: function () {
						var t = this,
							e = this.$route.params.subreddit;
						g.a.get('api/subreddits/subreddit/'.concat(e)).then(function (e) {
							t.$store.commit('changePostsToShow', e.data.posts),
								(t.name = e.data.name),
								(t.description = e.data.description),
								(t.timestamp = e.data.timestamp),
								(t.numberOfPosts = e.data.posts.length),
								(t.loadingSpinner = !1);
						});
					},
					data: function () {
						return {
							name: '',
							description: '',
							timestamp: '',
							numberOfPosts: 0,
							loadingSpinner: !0,
						};
					},
					components: { Header: nt, Post: U },
				}),
			te = Zt,
			ee = (o('6338'), Object(c['a'])(te, zt, Qt, !1, null, '390e90f7', null)),
			oe = ee.exports;
		s['a'].use(l['a']);
		var se = [
				{ path: '/', name: 'MainPage', component: ct, Header: nt },
				{ path: '/log-in', name: 'LogInPage', component: vt },
				{ path: '/sign-up', name: 'SignUpPage', component: bt },
				{ path: '/submit', name: 'SubmitPostForm', component: xt },
				{ path: '/post/:id', name: 'PostContent', component: Kt, props: !0 },
				{
					path: '/user/:user_id',
					name: 'UserProfile',
					component: Xt,
					props: !0,
				},
				{ path: '/community/:subreddit', name: 'Community', component: oe },
			],
			ne = new l['a']({ routes: se }),
			ae = ne,
			ie = (o('4de4'), o('2f62')),
			re = o('0e44');
		s['a'].use(ie['a']);
		var ce = {
			state: { upvotedComments: [], downvotedComments: [] },
			mutations: {
				pushUpvotedComment: function (t, e) {
					t.upvotedComments.includes(e) ||
						(t.upvotedComments.push(e),
						g.a.put('api/comments/comment/vote/'.concat(e), {
							action: 'upvote',
						}));
				},
				pushDownvotedComment: function (t, e) {
					t.downvotedComments.includes(e) ||
						(t.downvotedComments.push(e),
						g.a.put('api/comments/comment/vote/'.concat(e), {
							action: 'downvote',
						}));
				},
				removeDownvotedComment: function (t, e) {
					var o = t.downvotedComments.filter(function (t) {
						return t !== e;
					});
					(t.downvotedComments = o),
						g.a.put('api/comments/comment/vote/'.concat(e), {
							action: 'upvote',
						});
				},
				removeUpvotedComment: function (t, e) {
					var o = t.upvotedComments.filter(function (t) {
						return t !== e;
					});
					(t.upvotedComments = o),
						g.a.put('api/comments/comment/vote/'.concat(e), {
							action: 'downvote',
						});
				},
			},
		};
		s['a'].use(ie['a']);
		var ue = new ie['a'].Store({
			plugins: [Object(re['a'])()],
			modules: { comments: ce },
			state: {
				darkMode: !1,
				tokenFound: null,
				currentUser: '',
				clickedPost: {},
				postsToShow: [],
				upvotedPosts: [],
				downvotedPosts: [],
			},
			mutations: {
				toggleDarkMode: function (t) {
					t.darkMode = !t.darkMode;
				},
				changeJwt: function (t, e) {
					t.tokenFound = e;
				},
				addCurrentUser: function (t, e) {
					t.currentUser = e;
				},
				changeClickedPost: function (t, e) {
					t.clickedPost = e;
				},
				changePostsToShow: function (t, e) {
					t.postsToShow = e;
				},
				pushNewPost: function (t, e) {
					t.postsToShow.push(e);
				},
				pushUpvotedPost: function (t, e) {
					t.upvotedPosts.includes(e) ||
						(t.upvotedPosts.push(e),
						g.a.put('api/posts/votePost', { post: e, action: 'addVote' }));
				},
				pushDownvotedPost: function (t, e) {
					t.downvotedPosts.includes(e) ||
						(t.downvotedPosts.push(e),
						g.a.put('api/posts/votePost', { post: e, action: 'subtractVote' }));
				},
				removeUpvotedPost: function (t, e) {
					var o = t.upvotedPosts.filter(function (t) {
						return t !== e;
					});
					(t.upvotedPosts = o),
						g.a.put('api/posts/votePost', { post: e, action: 'subtractVote' });
				},
				removeDownvotedPost: function (t, e) {
					var o = t.downvotedPosts.filter(function (t) {
						return t !== e;
					});
					(t.downvotedPosts = o),
						g.a.put('api/posts/votePost', { post: e, action: 'addVote' });
				},
			},
		});
		(s['a'].config.productionTip = !1),
			new s['a']({
				router: ae,
				store: ue,
				render: function (t) {
					return t(m);
				},
			}).$mount('#app');
	},
	'59f2': function (t, e, o) {
		'use strict';
		var s = o('fcca'),
			n = o.n(s);
		n.a;
	},
	6163: function (t, e, o) {},
	6338: function (t, e, o) {
		'use strict';
		var s = o('afc5'),
			n = o.n(s);
		n.a;
	},
	'85ec': function (t, e, o) {},
	'85fd': function (t, e, o) {
		'use strict';
		var s = o('2b69'),
			n = o.n(s);
		n.a;
	},
	'911d': function (t, e, o) {
		'use strict';
		var s = o('ec08'),
			n = o.n(s);
		n.a;
	},
	'92db': function (t, e, o) {
		t.exports = o.p + 'img/profile-picture.0e657868.png';
	},
	'95c0': function (t, e, o) {
		'use strict';
		var s = o('c580'),
			n = o.n(s);
		n.a;
	},
	'9dbb': function (t, e, o) {},
	'9f81': function (t, e, o) {},
	ad30: function (t, e, o) {
		'use strict';
		o.d(e, 'a', function () {
			return s;
		}),
			o.d(e, 'b', function () {
				return n;
			});
		var s = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					'div',
					{ staticClass: 'create-post-container' },
					[
						o(
							'router-link',
							{ staticClass: 'link-submit-post', attrs: { to: '/submit' } },
							[
								o('input', {
									staticClass: 'create-post-btn',
									attrs: { placeholder: 'Create Post' },
								}),
							]
						),
					],
					1
				);
			},
			n = [];
	},
	afc5: function (t, e, o) {},
	b422: function (t, e, o) {
		'use strict';
		var s = o('c6b0'),
			n = o.n(s);
		n.a;
	},
	c04c: function (t, e, o) {
		'use strict';
		var s = o('9dbb'),
			n = o.n(s);
		n.a;
	},
	c580: function (t, e, o) {},
	c6b0: function (t, e, o) {},
	cbbc: function (t, e, o) {
		'use strict';
		var s = o('28d3'),
			n = o.n(s);
		n.a;
	},
	cbfe: function (t, e, o) {
		'use strict';
		var s = o('9f81'),
			n = o.n(s);
		n.a;
	},
	cf05: function (t, e, o) {
		t.exports = o.p + 'img/logo.ecb0612a.png';
	},
	d01b: function (t, e, o) {
		'use strict';
		var s = o('f9d7'),
			n = o.n(s);
		e['default'] = n.a;
	},
	d8cc: function (t, e, o) {},
	da4c: function (t, e, o) {
		'use strict';
		var s = o('6163'),
			n = o.n(s);
		n.a;
	},
	dd75: function (t, e, o) {},
	ec08: function (t, e, o) {},
	f235: function (t, e, o) {
		'use strict';
		var s = o('3032'),
			n = o.n(s);
		n.a;
	},
	f9d7: function (t, e) {},
	fcca: function (t, e, o) {},
});
//# sourceMappingURL=app.66baff3f.js.map
