"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./aCHRelationshipData"), exports);
__exportStar(require("./aCHRelationshipResource"), exports);
__exportStar(require("./aCHRelationshipResourceAllOf"), exports);
__exportStar(require("./account"), exports);
__exportStar(require("./accountCreationObject"), exports);
__exportStar(require("./accountExtended"), exports);
__exportStar(require("./accountExtendedAllOf"), exports);
__exportStar(require("./accountStatus"), exports);
__exportStar(require("./accountUpdate"), exports);
__exportStar(require("./applicationDocument"), exports);
__exportStar(require("./bankData"), exports);
__exportStar(require("./bankResource"), exports);
__exportStar(require("./bankResourceAllOf"), exports);
__exportStar(require("./contact"), exports);
__exportStar(require("./createOrder"), exports);
__exportStar(require("./createOrderStopLoss"), exports);
__exportStar(require("./createOrderTakeProfit"), exports);
__exportStar(require("./disclosures"), exports);
__exportStar(require("./documentType"), exports);
__exportStar(require("./documentUpload"), exports);
__exportStar(require("./identifiedResource"), exports);
__exportStar(require("./identity"), exports);
__exportStar(require("./inlineObject"), exports);
__exportStar(require("./inlineObject1"), exports);
__exportStar(require("./inlineObject2"), exports);
__exportStar(require("./inlineResponse200"), exports);
__exportStar(require("./inlineResponse2001"), exports);
__exportStar(require("./inlineResponse20010"), exports);
__exportStar(require("./inlineResponse2002"), exports);
__exportStar(require("./inlineResponse2003"), exports);
__exportStar(require("./inlineResponse2004"), exports);
__exportStar(require("./inlineResponse2005"), exports);
__exportStar(require("./inlineResponse2006"), exports);
__exportStar(require("./inlineResponse2007"), exports);
__exportStar(require("./inlineResponse2008"), exports);
__exportStar(require("./inlineResponse2009"), exports);
__exportStar(require("./inlineResponse207"), exports);
__exportStar(require("./journalJNLC"), exports);
__exportStar(require("./journalJNLS"), exports);
__exportStar(require("./kycResult"), exports);
__exportStar(require("./modelError"), exports);
__exportStar(require("./orderObject"), exports);
__exportStar(require("./patchOrder"), exports);
__exportStar(require("./transferData"), exports);
__exportStar(require("./transferDataAllOf"), exports);
__exportStar(require("./transferResource"), exports);
__exportStar(require("./transferResourceAllOf"), exports);
__exportStar(require("./trustedContact"), exports);
__exportStar(require("./untypedACHTransferData"), exports);
__exportStar(require("./untypedACHTransferDataAllOf"), exports);
__exportStar(require("./untypedTransferData"), exports);
__exportStar(require("./untypedWireTransferData"), exports);
__exportStar(require("./untypedWireTransferDataAllOf"), exports);
const aCHRelationshipData_1 = require("./aCHRelationshipData");
const aCHRelationshipResource_1 = require("./aCHRelationshipResource");
const aCHRelationshipResourceAllOf_1 = require("./aCHRelationshipResourceAllOf");
const account_1 = require("./account");
const accountCreationObject_1 = require("./accountCreationObject");
const accountExtended_1 = require("./accountExtended");
const accountExtendedAllOf_1 = require("./accountExtendedAllOf");
const accountStatus_1 = require("./accountStatus");
const accountUpdate_1 = require("./accountUpdate");
const applicationDocument_1 = require("./applicationDocument");
const bankData_1 = require("./bankData");
const bankResource_1 = require("./bankResource");
const bankResourceAllOf_1 = require("./bankResourceAllOf");
const contact_1 = require("./contact");
const createOrder_1 = require("./createOrder");
const createOrderStopLoss_1 = require("./createOrderStopLoss");
const createOrderTakeProfit_1 = require("./createOrderTakeProfit");
const disclosures_1 = require("./disclosures");
const documentType_1 = require("./documentType");
const documentUpload_1 = require("./documentUpload");
const identifiedResource_1 = require("./identifiedResource");
const identity_1 = require("./identity");
const inlineObject_1 = require("./inlineObject");
const inlineObject1_1 = require("./inlineObject1");
const inlineObject2_1 = require("./inlineObject2");
const inlineResponse200_1 = require("./inlineResponse200");
const inlineResponse2001_1 = require("./inlineResponse2001");
const inlineResponse20010_1 = require("./inlineResponse20010");
const inlineResponse2002_1 = require("./inlineResponse2002");
const inlineResponse2003_1 = require("./inlineResponse2003");
const inlineResponse2004_1 = require("./inlineResponse2004");
const inlineResponse2005_1 = require("./inlineResponse2005");
const inlineResponse2006_1 = require("./inlineResponse2006");
const inlineResponse2007_1 = require("./inlineResponse2007");
const inlineResponse2008_1 = require("./inlineResponse2008");
const inlineResponse2009_1 = require("./inlineResponse2009");
const inlineResponse207_1 = require("./inlineResponse207");
const journalJNLC_1 = require("./journalJNLC");
const journalJNLS_1 = require("./journalJNLS");
const kycResult_1 = require("./kycResult");
const modelError_1 = require("./modelError");
const orderObject_1 = require("./orderObject");
const patchOrder_1 = require("./patchOrder");
const transferData_1 = require("./transferData");
const transferDataAllOf_1 = require("./transferDataAllOf");
const transferResource_1 = require("./transferResource");
const transferResourceAllOf_1 = require("./transferResourceAllOf");
const trustedContact_1 = require("./trustedContact");
const untypedACHTransferData_1 = require("./untypedACHTransferData");
const untypedACHTransferDataAllOf_1 = require("./untypedACHTransferDataAllOf");
const untypedTransferData_1 = require("./untypedTransferData");
const untypedWireTransferData_1 = require("./untypedWireTransferData");
const untypedWireTransferDataAllOf_1 = require("./untypedWireTransferDataAllOf");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "ACHRelationshipData.BankAccountTypeEnum": aCHRelationshipData_1.ACHRelationshipData.BankAccountTypeEnum,
    "ACHRelationshipResource.BankAccountTypeEnum": aCHRelationshipResource_1.ACHRelationshipResource.BankAccountTypeEnum,
    "ACHRelationshipResource.StatusEnum": aCHRelationshipResource_1.ACHRelationshipResource.StatusEnum,
    "ACHRelationshipResourceAllOf.StatusEnum": aCHRelationshipResourceAllOf_1.ACHRelationshipResourceAllOf.StatusEnum,
    "AccountStatus": accountStatus_1.AccountStatus,
    "BankData.BankCodeTypeEnum": bankData_1.BankData.BankCodeTypeEnum,
    "BankResource.BankCodeTypeEnum": bankResource_1.BankResource.BankCodeTypeEnum,
    "BankResource.StatusEnum": bankResource_1.BankResource.StatusEnum,
    "BankResourceAllOf.StatusEnum": bankResourceAllOf_1.BankResourceAllOf.StatusEnum,
    "CreateOrder.SideEnum": createOrder_1.CreateOrder.SideEnum,
    "CreateOrder.TypeEnum": createOrder_1.CreateOrder.TypeEnum,
    "CreateOrder.TimeInForceEnum": createOrder_1.CreateOrder.TimeInForceEnum,
    "CreateOrder.OrderClassEnum": createOrder_1.CreateOrder.OrderClassEnum,
    "Disclosures.EmploymentStatusEnum": disclosures_1.Disclosures.EmploymentStatusEnum,
    "DocumentType": documentType_1.DocumentType,
    "Identity.TaxIdTypeEnum": identity_1.Identity.TaxIdTypeEnum,
    "Identity.FundingSourceEnum": identity_1.Identity.FundingSourceEnum,
    "InlineObject.EntryTypeEnum": inlineObject_1.InlineObject.EntryTypeEnum,
    "InlineResponse20010.ActivityTypeEnum": inlineResponse20010_1.InlineResponse20010.ActivityTypeEnum,
    "InlineResponse20010.StatusEnum": inlineResponse20010_1.InlineResponse20010.StatusEnum,
    "InlineResponse2007.StatusEnum": inlineResponse2007_1.InlineResponse2007.StatusEnum,
    "JournalJNLC.StatusEnum": journalJNLC_1.JournalJNLC.StatusEnum,
    "JournalJNLS.StatusEnum": journalJNLS_1.JournalJNLS.StatusEnum,
    "OrderObject.OrderClassEnum": orderObject_1.OrderObject.OrderClassEnum,
    "OrderObject.OrderTypeEnum": orderObject_1.OrderObject.OrderTypeEnum,
    "OrderObject.TypeEnum": orderObject_1.OrderObject.TypeEnum,
    "OrderObject.SideEnum": orderObject_1.OrderObject.SideEnum,
    "OrderObject.TimeInForceEnum": orderObject_1.OrderObject.TimeInForceEnum,
    "OrderObject.StatusEnum": orderObject_1.OrderObject.StatusEnum,
    "PatchOrder.TimeInForceEnum": patchOrder_1.PatchOrder.TimeInForceEnum,
    "TransferData.TransferTypeEnum": transferData_1.TransferData.TransferTypeEnum,
    "TransferData.TimingEnum": transferData_1.TransferData.TimingEnum,
    "TransferData.DirectionEnum": transferData_1.TransferData.DirectionEnum,
    "TransferDataAllOf.TransferTypeEnum": transferDataAllOf_1.TransferDataAllOf.TransferTypeEnum,
    "TransferDataAllOf.TimingEnum": transferDataAllOf_1.TransferDataAllOf.TimingEnum,
    "TransferResource.TypeEnum": transferResource_1.TransferResource.TypeEnum,
    "TransferResource.StatusEnum": transferResource_1.TransferResource.StatusEnum,
    "TransferResource.DirectionEnum": transferResource_1.TransferResource.DirectionEnum,
    "TransferResourceAllOf.TypeEnum": transferResourceAllOf_1.TransferResourceAllOf.TypeEnum,
    "TransferResourceAllOf.StatusEnum": transferResourceAllOf_1.TransferResourceAllOf.StatusEnum,
    "UntypedACHTransferData.DirectionEnum": untypedACHTransferData_1.UntypedACHTransferData.DirectionEnum,
    "UntypedTransferData.DirectionEnum": untypedTransferData_1.UntypedTransferData.DirectionEnum,
    "UntypedWireTransferData.DirectionEnum": untypedWireTransferData_1.UntypedWireTransferData.DirectionEnum,
};
let typeMap = {
    "ACHRelationshipData": aCHRelationshipData_1.ACHRelationshipData,
    "ACHRelationshipResource": aCHRelationshipResource_1.ACHRelationshipResource,
    "ACHRelationshipResourceAllOf": aCHRelationshipResourceAllOf_1.ACHRelationshipResourceAllOf,
    "Account": account_1.Account,
    "AccountCreationObject": accountCreationObject_1.AccountCreationObject,
    "AccountExtended": accountExtended_1.AccountExtended,
    "AccountExtendedAllOf": accountExtendedAllOf_1.AccountExtendedAllOf,
    "AccountUpdate": accountUpdate_1.AccountUpdate,
    "ApplicationDocument": applicationDocument_1.ApplicationDocument,
    "BankData": bankData_1.BankData,
    "BankResource": bankResource_1.BankResource,
    "BankResourceAllOf": bankResourceAllOf_1.BankResourceAllOf,
    "Contact": contact_1.Contact,
    "CreateOrder": createOrder_1.CreateOrder,
    "CreateOrderStopLoss": createOrderStopLoss_1.CreateOrderStopLoss,
    "CreateOrderTakeProfit": createOrderTakeProfit_1.CreateOrderTakeProfit,
    "Disclosures": disclosures_1.Disclosures,
    "DocumentUpload": documentUpload_1.DocumentUpload,
    "IdentifiedResource": identifiedResource_1.IdentifiedResource,
    "Identity": identity_1.Identity,
    "InlineObject": inlineObject_1.InlineObject,
    "InlineObject1": inlineObject1_1.InlineObject1,
    "InlineObject2": inlineObject2_1.InlineObject2,
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "InlineResponse20010": inlineResponse20010_1.InlineResponse20010,
    "InlineResponse2002": inlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": inlineResponse2003_1.InlineResponse2003,
    "InlineResponse2004": inlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": inlineResponse2005_1.InlineResponse2005,
    "InlineResponse2006": inlineResponse2006_1.InlineResponse2006,
    "InlineResponse2007": inlineResponse2007_1.InlineResponse2007,
    "InlineResponse2008": inlineResponse2008_1.InlineResponse2008,
    "InlineResponse2009": inlineResponse2009_1.InlineResponse2009,
    "InlineResponse207": inlineResponse207_1.InlineResponse207,
    "JournalJNLC": journalJNLC_1.JournalJNLC,
    "JournalJNLS": journalJNLS_1.JournalJNLS,
    "KycResult": kycResult_1.KycResult,
    "ModelError": modelError_1.ModelError,
    "OrderObject": orderObject_1.OrderObject,
    "PatchOrder": patchOrder_1.PatchOrder,
    "TransferData": transferData_1.TransferData,
    "TransferDataAllOf": transferDataAllOf_1.TransferDataAllOf,
    "TransferResource": transferResource_1.TransferResource,
    "TransferResourceAllOf": transferResourceAllOf_1.TransferResourceAllOf,
    "TrustedContact": trustedContact_1.TrustedContact,
    "UntypedACHTransferData": untypedACHTransferData_1.UntypedACHTransferData,
    "UntypedACHTransferDataAllOf": untypedACHTransferDataAllOf_1.UntypedACHTransferDataAllOf,
    "UntypedTransferData": untypedTransferData_1.UntypedTransferData,
    "UntypedWireTransferData": untypedWireTransferData_1.UntypedWireTransferData,
    "UntypedWireTransferDataAllOf": untypedWireTransferDataAllOf_1.UntypedWireTransferDataAllOf,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
