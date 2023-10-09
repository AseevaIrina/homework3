"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        if (response.ok) {
            return response.json();
        }
    }
    catch (e) {
        console.log(e);
    }
});
getData(COMMENTS_URL)
    .then(data => {
    if (data) {
        const myPost = [];
        data.map(post => {
            myPost.push({ id: post.id, email: post.email });
        });
        myPost.map(post => {
            console.log(`ID: ${post.id}, Email: ${post.email}`);
        });
    }
});
