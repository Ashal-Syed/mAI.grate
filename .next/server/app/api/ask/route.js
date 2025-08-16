"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/ask/route";
exports.ids = ["app/api/ask/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fask%2Froute&page=%2Fapi%2Fask%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fask%2Froute.ts&appDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fask%2Froute&page=%2Fapi%2Fask%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fask%2Froute.ts&appDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ashalsyed_Desktop_ai_immigration_app_api_ask_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/ask/route.ts */ \"(rsc)/./app/api/ask/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ask/route\",\n        pathname: \"/api/ask\",\n        filename: \"route\",\n        bundlePath: \"app/api/ask/route\"\n    },\n    resolvedPagePath: \"/Users/ashalsyed/Desktop/ai-immigration/app/api/ask/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ashalsyed_Desktop_ai_immigration_app_api_ask_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/ask/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhc2slMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFzayUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFzayUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFzaGFsc3llZCUyRkRlc2t0b3AlMkZhaS1pbW1pZ3JhdGlvbiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhc2hhbHN5ZWQlMkZEZXNrdG9wJTJGYWktaW1taWdyYXRpb24maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1pbW1pZ3JhdGlvbi8/YjZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYXNoYWxzeWVkL0Rlc2t0b3AvYWktaW1taWdyYXRpb24vYXBwL2FwaS9hc2svcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Fzay9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Fza1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXNrL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FzaGFsc3llZC9EZXNrdG9wL2FpLWltbWlncmF0aW9uL2FwcC9hcGkvYXNrL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hc2svcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fask%2Froute&page=%2Fapi%2Fask%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fask%2Froute.ts&appDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/ask/route.ts":
/*!******************************!*\
  !*** ./app/api/ask/route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n\n\n\nconst SYSTEM = `You are an Australian immigration information assistant.\nDo NOT give personalised legal advice. Provide general information, cite sources with [n], and encourage users to verify on official sites.\nIf asked for tailored advice, state you cannot provide legal advice and point to the OMARA register.\nWhen asked for process steps, use concise bullet points.\n`;\nconst INTENT_PROMPT = `Classify the user's intent into one of:\n[general_info, eligibility, process_steps, definitions, updates].\nReturn JSON only: {\"intent\":\"...\"} with no extra text.`;\nfunction parseJson(text) {\n    const t = text.trim().replace(/^```json\\s*|\\s*```$/g, \"\").trim();\n    return JSON.parse(t);\n}\nasync function POST(req) {\n    try {\n        const { question } = await req.json();\n        // Copy exact working code from search API\n        const supa = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://rsemmyavgoowlbmcuowh.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY);\n        const genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);\n        const embedModel = genAI.getGenerativeModel({\n            model: \"text-embedding-004\"\n        });\n        const emb = await embedModel.embedContent(question);\n        // Use the exact same call as the working search API\n        const { data: rows, error } = await supa.rpc(\"match_chunks\", {\n            query_embedding: emb.embedding.values,\n            match_count: 5,\n            match_threshold: 0.2\n        });\n        if (error) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n        // Generate AI response using the search results\n        const answerModel = genAI.getGenerativeModel({\n            model: \"gemini-1.5-flash\"\n        });\n        const context = (rows ?? []).map((r, i)=>`[[${i + 1}]] ${r.title || \"\"}\\nURL: ${r.url}\\n${r.content_snippet}`).join(\"\\n\\n\");\n        const answerPrompt = `${SYSTEM}\n\nQuestion: ${question}\n\nContext:\n${context}\n\nRules:\n- Use only the context for facts.\n- Add [n] markers mapping to the numbered context.\n- End with a one-line disclaimer.`;\n        const ans = await answerModel.generateContent({\n            contents: [\n                {\n                    role: \"user\",\n                    parts: [\n                        {\n                            text: answerPrompt\n                        }\n                    ]\n                }\n            ]\n        });\n        const sources = (rows ?? []).map((r, i)=>({\n                n: i + 1,\n                title: r.title,\n                url: r.url\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            intent: \"search\",\n            answer: ans.response.text(),\n            sources\n        });\n    } catch (error) {\n        console.error(\"Error in ask route:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Fzay9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQ0g7QUFDTTtBQUUzRCxNQUFNRyxTQUFTLENBQUM7Ozs7QUFJaEIsQ0FBQztBQUVELE1BQU1DLGdCQUFnQixDQUFDOztzREFFK0IsQ0FBQztBQUV2RCxTQUFTQyxVQUFVQyxJQUFZO0lBQzdCLE1BQU1DLElBQUlELEtBQUtFLElBQUksR0FBR0MsT0FBTyxDQUFDLHdCQUF3QixJQUFJRCxJQUFJO0lBQzlELE9BQU9FLEtBQUtDLEtBQUssQ0FBQ0o7QUFDcEI7QUFFTyxlQUFlSyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRW5DLDBDQUEwQztRQUMxQyxNQUFNQyxPQUFPZixtRUFBWUEsQ0FBQ2dCLDBDQUFvQyxFQUFHQSxRQUFRQyxHQUFHLENBQUNFLHlCQUF5QjtRQUN0RyxNQUFNQyxRQUFRLElBQUluQixxRUFBa0JBLENBQUNlLFFBQVFDLEdBQUcsQ0FBQ0ksb0JBQW9CO1FBQ3JFLE1BQU1DLGFBQWFGLE1BQU1HLGtCQUFrQixDQUFDO1lBQUVDLE9BQU87UUFBcUI7UUFDMUUsTUFBTUMsTUFBTSxNQUFNSCxXQUFXSSxZQUFZLENBQUNiO1FBRTFDLG9EQUFvRDtRQUNwRCxNQUFNLEVBQUVjLE1BQU1DLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWQsS0FBS2UsR0FBRyxDQUFDLGdCQUFnQjtZQUMzREMsaUJBQWlCTixJQUFJTyxTQUFTLENBQUNDLE1BQU07WUFDckNDLGFBQWE7WUFDYkMsaUJBQWlCO1FBQ25CO1FBRUEsSUFBSU4sT0FBTyxPQUFPOUIscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFZSxPQUFPQSxNQUFNTyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFFNUUsZ0RBQWdEO1FBQ2hELE1BQU1DLGNBQWNsQixNQUFNRyxrQkFBa0IsQ0FBQztZQUFFQyxPQUFPO1FBQW1CO1FBRXpFLE1BQU1lLFVBQVUsQ0FBQ1gsUUFBUSxFQUFFLEVBQUVZLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxJQUN4QyxDQUFDLEVBQUUsRUFBRUEsSUFBRSxFQUFFLEdBQUcsRUFBRUQsRUFBRUUsS0FBSyxJQUFJLEdBQUcsT0FBTyxFQUFFRixFQUFFRyxHQUFHLENBQUMsRUFBRSxFQUFFSCxFQUFFSSxlQUFlLENBQUMsQ0FBQyxFQUNsRUMsSUFBSSxDQUFDO1FBRVAsTUFBTUMsZUFBZSxDQUFDLEVBQUU3QyxPQUFPOztVQUV6QixFQUFFVyxTQUFTOzs7QUFHckIsRUFBRTBCLFFBQVE7Ozs7O2lDQUt1QixDQUFDO1FBRTlCLE1BQU1TLE1BQU0sTUFBTVYsWUFBWVcsZUFBZSxDQUFDO1lBQzVDQyxVQUFVO2dCQUFDO29CQUFFQyxNQUFNO29CQUFRQyxPQUFPO3dCQUFDOzRCQUFFL0MsTUFBTTBDO3dCQUFhO3FCQUFFO2dCQUFBO2FBQUU7UUFDOUQ7UUFFQSxNQUFNTSxVQUFVLENBQUN6QixRQUFRLEVBQUUsRUFBRVksR0FBRyxDQUFDLENBQUNDLEdBQVFDLElBQWU7Z0JBQUVZLEdBQUdaLElBQUU7Z0JBQUdDLE9BQU9GLEVBQUVFLEtBQUs7Z0JBQUVDLEtBQUtILEVBQUVHLEdBQUc7WUFBQztRQUU5RixPQUFPN0MscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUN2QnlDLFFBQVE7WUFDUkMsUUFBUVIsSUFBSVMsUUFBUSxDQUFDcEQsSUFBSTtZQUN6QmdEO1FBQ0Y7SUFDRixFQUFFLE9BQU94QixPQUFPO1FBQ2Q2QixRQUFRN0IsS0FBSyxDQUFDLHVCQUF1QkE7UUFDckMsT0FBTzlCLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFBRWUsT0FBTztRQUF3QixHQUFHO1lBQUVRLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktaW1taWdyYXRpb24vLi9hcHAvYXBpL2Fzay9yb3V0ZS50cz9iOWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuaW1wb3J0IHsgR29vZ2xlR2VuZXJhdGl2ZUFJIH0gZnJvbSAnQGdvb2dsZS9nZW5lcmF0aXZlLWFpJztcblxuY29uc3QgU1lTVEVNID0gYFlvdSBhcmUgYW4gQXVzdHJhbGlhbiBpbW1pZ3JhdGlvbiBpbmZvcm1hdGlvbiBhc3Npc3RhbnQuXG5EbyBOT1QgZ2l2ZSBwZXJzb25hbGlzZWQgbGVnYWwgYWR2aWNlLiBQcm92aWRlIGdlbmVyYWwgaW5mb3JtYXRpb24sIGNpdGUgc291cmNlcyB3aXRoIFtuXSwgYW5kIGVuY291cmFnZSB1c2VycyB0byB2ZXJpZnkgb24gb2ZmaWNpYWwgc2l0ZXMuXG5JZiBhc2tlZCBmb3IgdGFpbG9yZWQgYWR2aWNlLCBzdGF0ZSB5b3UgY2Fubm90IHByb3ZpZGUgbGVnYWwgYWR2aWNlIGFuZCBwb2ludCB0byB0aGUgT01BUkEgcmVnaXN0ZXIuXG5XaGVuIGFza2VkIGZvciBwcm9jZXNzIHN0ZXBzLCB1c2UgY29uY2lzZSBidWxsZXQgcG9pbnRzLlxuYDtcblxuY29uc3QgSU5URU5UX1BST01QVCA9IGBDbGFzc2lmeSB0aGUgdXNlcidzIGludGVudCBpbnRvIG9uZSBvZjpcbltnZW5lcmFsX2luZm8sIGVsaWdpYmlsaXR5LCBwcm9jZXNzX3N0ZXBzLCBkZWZpbml0aW9ucywgdXBkYXRlc10uXG5SZXR1cm4gSlNPTiBvbmx5OiB7XCJpbnRlbnRcIjpcIi4uLlwifSB3aXRoIG5vIGV4dHJhIHRleHQuYDtcblxuZnVuY3Rpb24gcGFyc2VKc29uKHRleHQ6IHN0cmluZykge1xuICBjb25zdCB0ID0gdGV4dC50cmltKCkucmVwbGFjZSgvXmBgYGpzb25cXHMqfFxccypgYGAkL2csICcnKS50cmltKCk7XG4gIHJldHVybiBKU09OLnBhcnNlKHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBxdWVzdGlvbiB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIC8vIENvcHkgZXhhY3Qgd29ya2luZyBjb2RlIGZyb20gc2VhcmNoIEFQSVxuICAgIGNvbnN0IHN1cGEgPSBjcmVhdGVDbGllbnQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISwgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSEpO1xuICAgIGNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShwcm9jZXNzLmVudi5HT09HTEVfR0VOQUlfQVBJX0tFWSEpO1xuICAgIGNvbnN0IGVtYmVkTW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogJ3RleHQtZW1iZWRkaW5nLTAwNCcgfSk7XG4gICAgY29uc3QgZW1iID0gYXdhaXQgZW1iZWRNb2RlbC5lbWJlZENvbnRlbnQocXVlc3Rpb24pO1xuXG4gICAgLy8gVXNlIHRoZSBleGFjdCBzYW1lIGNhbGwgYXMgdGhlIHdvcmtpbmcgc2VhcmNoIEFQSVxuICAgIGNvbnN0IHsgZGF0YTogcm93cywgZXJyb3IgfSA9IGF3YWl0IHN1cGEucnBjKCdtYXRjaF9jaHVua3MnLCB7XG4gICAgICBxdWVyeV9lbWJlZGRpbmc6IGVtYi5lbWJlZGRpbmcudmFsdWVzLFxuICAgICAgbWF0Y2hfY291bnQ6IDUsXG4gICAgICBtYXRjaF90aHJlc2hvbGQ6IDAuMlxuICAgIH0pO1xuXG4gICAgaWYgKGVycm9yKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuXG4gICAgLy8gR2VuZXJhdGUgQUkgcmVzcG9uc2UgdXNpbmcgdGhlIHNlYXJjaCByZXN1bHRzXG4gICAgY29uc3QgYW5zd2VyTW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogJ2dlbWluaS0xLjUtZmxhc2gnIH0pO1xuXG4gICAgY29uc3QgY29udGV4dCA9IChyb3dzID8/IFtdKS5tYXAoKHI6IGFueSwgaTogbnVtYmVyKSA9PlxuICAgICAgYFtbJHtpKzF9XV0gJHtyLnRpdGxlIHx8ICcnfVxcblVSTDogJHtyLnVybH1cXG4ke3IuY29udGVudF9zbmlwcGV0fWBcbiAgICApLmpvaW4oJ1xcblxcbicpO1xuXG4gICAgY29uc3QgYW5zd2VyUHJvbXB0ID0gYCR7U1lTVEVNfVxuXG5RdWVzdGlvbjogJHtxdWVzdGlvbn1cblxuQ29udGV4dDpcbiR7Y29udGV4dH1cblxuUnVsZXM6XG4tIFVzZSBvbmx5IHRoZSBjb250ZXh0IGZvciBmYWN0cy5cbi0gQWRkIFtuXSBtYXJrZXJzIG1hcHBpbmcgdG8gdGhlIG51bWJlcmVkIGNvbnRleHQuXG4tIEVuZCB3aXRoIGEgb25lLWxpbmUgZGlzY2xhaW1lci5gO1xuXG4gICAgY29uc3QgYW5zID0gYXdhaXQgYW5zd2VyTW9kZWwuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIGNvbnRlbnRzOiBbeyByb2xlOiAndXNlcicsIHBhcnRzOiBbeyB0ZXh0OiBhbnN3ZXJQcm9tcHQgfV19XSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNvdXJjZXMgPSAocm93cyA/PyBbXSkubWFwKChyOiBhbnksIGk6IG51bWJlcikgPT4gKHsgbjogaSsxLCB0aXRsZTogci50aXRsZSwgdXJsOiByLnVybCB9KSk7XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXG4gICAgICBpbnRlbnQ6ICdzZWFyY2gnLCBcbiAgICAgIGFuc3dlcjogYW5zLnJlc3BvbnNlLnRleHQoKSwgXG4gICAgICBzb3VyY2VzIFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFzayByb3V0ZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY3JlYXRlQ2xpZW50IiwiR29vZ2xlR2VuZXJhdGl2ZUFJIiwiU1lTVEVNIiwiSU5URU5UX1BST01QVCIsInBhcnNlSnNvbiIsInRleHQiLCJ0IiwidHJpbSIsInJlcGxhY2UiLCJKU09OIiwicGFyc2UiLCJQT1NUIiwicmVxIiwicXVlc3Rpb24iLCJqc29uIiwic3VwYSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwiZ2VuQUkiLCJHT09HTEVfR0VOQUlfQVBJX0tFWSIsImVtYmVkTW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJtb2RlbCIsImVtYiIsImVtYmVkQ29udGVudCIsImRhdGEiLCJyb3dzIiwiZXJyb3IiLCJycGMiLCJxdWVyeV9lbWJlZGRpbmciLCJlbWJlZGRpbmciLCJ2YWx1ZXMiLCJtYXRjaF9jb3VudCIsIm1hdGNoX3RocmVzaG9sZCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJhbnN3ZXJNb2RlbCIsImNvbnRleHQiLCJtYXAiLCJyIiwiaSIsInRpdGxlIiwidXJsIiwiY29udGVudF9zbmlwcGV0Iiwiam9pbiIsImFuc3dlclByb21wdCIsImFucyIsImdlbmVyYXRlQ29udGVudCIsImNvbnRlbnRzIiwicm9sZSIsInBhcnRzIiwic291cmNlcyIsIm4iLCJpbnRlbnQiLCJhbnN3ZXIiLCJyZXNwb25zZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ask/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/@google","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fask%2Froute&page=%2Fapi%2Fask%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fask%2Froute.ts&appDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fashalsyed%2FDesktop%2Fai-immigration&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();