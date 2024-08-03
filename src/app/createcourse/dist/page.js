'use client';
"use strict";
exports.__esModule = true;
var Form_1 = require("@/components/course/Form");
var header_1 = require("@/components/header");
function CreateCourse() {
    return (React.createElement("main", { className: 'flex min-h-screen flex-col items-center justify-start p-24 bg-white' },
        React.createElement("div", { className: ' bg-white z-10 w-full absolute top-0 ' },
            React.createElement(header_1["default"], { displayLogin: true })),
        React.createElement(Form_1["default"], null)));
}
exports["default"] = CreateCourse;
