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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserAndUpdate = exports.findUserAndDelete = exports.createUser = exports.findUserById = exports.findUsers = void 0;
var user_model_1 = require("../model/user.model");
var findUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allusers, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_model_1.UserModel.find()];
            case 1:
                allusers = _a.sent();
                // allusers.filter((user, index) => index < limit )
                return [2 /*return*/, res.json(allusers)];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.send(err_1).status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findUsers = findUsers;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, age, isAdmin, role, body, newUser, createdUser, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password, age = _a.age, isAdmin = _a.isAdmin, role = _a.role;
                body = { username: username, password: password, age: age, isAdmin: isAdmin, role: role };
                newUser = user_model_1.UserModel.createUser(body);
                return [4 /*yield*/, newUser.save()];
            case 1:
                createdUser = _b.sent();
                return [2 /*return*/, res.json(createdUser).status(201)];
            case 2:
                err_2 = _b.sent();
                console.log(err_2);
                return [2 /*return*/, res.send({ err: err_2.message }).status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var findUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, foundUser, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_model_1.UserModel.findById(id)];
            case 2:
                foundUser = _a.sent();
                return [2 /*return*/, res.send(foundUser)];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                return [2 /*return*/, res.send(err_3).status(500)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.findUserById = findUserById;
var findUserAndDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteResult, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_model_1.UserModel.findByIdAndRemove(id)];
            case 2:
                deleteResult = _a.sent();
                return [2 /*return*/, res.send(deleteResult)];
            case 3:
                err_4 = _a.sent();
                console.log(err_4);
                return [2 /*return*/, res.send(err_4).status(500)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.findUserAndDelete = findUserAndDelete;
var findUserAndUpdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updateResult, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_model_1.UserModel.findByIdAndUpdate(id, req.body)];
            case 2:
                updateResult = _a.sent();
                return [2 /*return*/, res.send(updateResult)];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                return [2 /*return*/, res.send(err_5).status(500)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.findUserAndUpdate = findUserAndUpdate;
