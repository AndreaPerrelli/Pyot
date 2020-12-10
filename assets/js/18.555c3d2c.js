(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{369:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),e("p",[t._v("This is an object that executes coroutines in a queue/workers basic. Unlike Gatherer, this object creates true workers on the same thread, exposing the instance as a context manager that can be passed freely to coroutines, mostly for accessing the sid of the queue which is created similarly to Gatherer.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This object is only accessible as a context manager with the "),e("code",[t._v("async with")]),t._v(" syntax for safeguarding session closing and workers joining.")])]),t._v(" "),e("h2",{attrs:{id:"pyot-queue-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pyot-queue-api"}},[t._v("#")]),t._v(" Pyot Queue API")]),t._v(" "),e("p",[t._v("A managed Queue on top of asyncio.Queue. This Queue is only usable as a context manager.")]),t._v(" "),e("p",[t._v("Unlike Gatherer, Queue has real workers that acts like consumers.\nA session is created and accessible on 'sid' attribute, the maxsize will default to workers * 2.\nNormally the queue object will be passed down to coroutines to give access to session id or queue methods.")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Queue\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" quque"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DO STUFF")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("blockquote",[e("h3",{attrs:{id:"init-workers-int-25-maxsize-int-none-log-level-int-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-workers-int-25-maxsize-int-none-log-level-int-10"}},[t._v("#")]),t._v(" "),e("code",[t._v("__init__(workers: int = 25, maxsize: int = None, log_level: int = 10)")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("workers")]),t._v(" "),e("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),e("code",[t._v("int")]),t._v(": Maximum number of workers to spawn for the queue. Increasing the number of workers may increase or decrease performance. Defaults to 25.")],1),t._v(" "),e("li",[e("code",[t._v("log_level")]),t._v(" "),e("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),e("code",[t._v("bool")]),t._v(": Set the log level for the Gatherer (does not affect pipeline logs). Defaults to 10 (DEBUG level).")],1),t._v(" "),e("li",[e("code",[t._v("maxsize")]),t._v(" "),e("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),e("code",[t._v("int")]),t._v(": Max size of the queue. Defaults to "),e("code",[t._v("workers * 2")]),t._v(".")],1)])]),t._v(" "),e("blockquote",[e("h3",{attrs:{id:"put-coro-coroutine-delay-float-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#put-coro-coroutine-delay-float-0"}},[t._v("#")]),t._v(" "),e("code",[t._v("put(coro: Coroutine, delay: float = 0)")]),t._v(" "),e("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),e("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),t._v(" "),e("p",[t._v("Put a coroutine object to the queue, if the queue is full, wait for availability. A delay may be provided if desired for execution balancing.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("coro")]),t._v(" "),e("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),e("code",[t._v("Coroutine")]),t._v(": The coroutine to put on the queue.")],1),t._v(" "),e("li",[e("code",[t._v("delay")]),t._v(" "),e("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),t._v(" -> "),e("code",[t._v("float")]),t._v(": The amount of delay in seconds before putting the coroutine into the queue. Defaults to 0.")],1)])]),t._v(" "),e("blockquote",[e("h3",{attrs:{id:"join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[t._v("#")]),t._v(" "),e("code",[t._v("join()")]),t._v(" "),e("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),t._v(" "),e("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}}),t._v(":")],1),t._v(" "),e("p",[t._v("Block until all items in the queue have been gotten and processed. Empty the collected responses and returns them. NoneType and Exceptions are not collected, order of the responses might not correspond the put order.")])]),t._v(" "),e("blockquote",[e("h3",{attrs:{id:"sid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sid"}},[t._v("#")]),t._v(" "),e("code",[t._v("sid")]),t._v(" "),e("Badge",{attrs:{text:"property",type:"error",vertical:"middle"}})],1),t._v(" "),e("p",[t._v("Property where the session id is stored, can be used to pass down to the Core objects "),e("code",[t._v("get()")]),t._v(" to reuse a session.")])]),t._v(" "),e("blockquote",[e("h3",{attrs:{id:"responses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responses"}},[t._v("#")]),t._v(" "),e("code",[t._v("responses")]),t._v(" "),e("Badge",{attrs:{text:"property",type:"error",vertical:"middle"}})],1),t._v(" "),e("p",[t._v("Property where all the responses are saved, unlike Gatherer, this property "),e("strong",[e("em",[t._v("is not safe to access")])]),t._v(" as it may have inconsistenty.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You can use the same queue to "),e("code",[t._v("join()")]),t._v(" as many time as you want, this creates a nice way to do everything in a single Queue, For example: get ChallengerLeague -> all Summoner in the entries -> pull all MatchHistory of the gotten Summoners.")]),t._v(" "),e("p",[t._v("It's best practice to pass the "),e("code",[t._v("sid")]),t._v(" to the Core objects so it can reuse a session since creating a new session (created when no "),e("code",[t._v("sid")]),t._v(" is provided) will cause some overhead.")])]),t._v(" "),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" List\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lol\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Queue\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FrozenGenerator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shuffle_list\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_puuid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" summoner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Summoner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    summoner "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" summoner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" summoner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("puuid\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pull_puuids")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: Queue")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChallengerLeague"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RANKED_SOLO_5x5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"na1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MasterLeague"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RANKED_SOLO_5x5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"na1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        leagues "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: List[lol.ChallengerLeague]")]),t._v("\n\n        summoners "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" league "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" leagues"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" entry "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" league"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                summoners"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("summoner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Shuffles the list by platform to balance rate limits by region ")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Also freezes the list to prevent mutation that causes memory leak")]),t._v("\n        summoners "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FrozenGenerator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shuffle_list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("summoners"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"platform"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" summoner "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" summoners"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_puuid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" summoner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br")])]),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("MEMORY AWARENESS")]),t._v(" "),e("p",[t._v("The coroutine passed to the queue, try your best to not return anything or return small objects, because "),e("code",[t._v("Queue")]),t._v(" will save those returning values for the "),e("code",[t._v("join()")]),t._v(", meaning that memory can start to increase over time, try to design the coroutines to consume the object instead.")]),t._v(" "),e("p",[t._v("Assuming we want to gather 30k matches, take the following examples in term of memory usage")]),t._v(" "),e("ul",[e("li",[e("em",[e("strong",[t._v("BAD")])])])]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_matches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    matches "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_with_30k_match_timelines "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- Suppose")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: Queue")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" match "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" matches"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("ul",[e("li",[e("em",[e("strong",[t._v("GOOD")])])])]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_matches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    matches "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_with_30k_match_timelines "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <-- Suppose")]),t._v("\n    matches "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FrozenGenerator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matches"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Freezes the list to prevent mutation")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: Queue")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" match "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" matches"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("consume_match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("consume_match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the session to reuse")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Consume your match (e.g. get specific stat, mutate a dictionary, save to db, etc.) ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR no return at all (When no return is stated, defaults to return None)")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("DETAILS")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FrozenGenerator")]),t._v(" was used to isolate the summoners objects so it doesn't pass by reference and therefore not mutating the original list and prevent possible memory leak.")]),t._v(" "),e("li",[e("code",[t._v("shuffle_list")]),t._v(" was used to shuffle the list by "),e("code",[t._v('"platform"')]),t._v(" to take advantage of crossing the waiting time on the rate limits for the different regions.")]),t._v(" "),e("li",[t._v("A good use of inline type hinting can help you with IDE autocompletion. Note: You might not use this if responses contains more than 1 type of Pyot Core objects.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);