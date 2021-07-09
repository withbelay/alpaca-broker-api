import localVarRequest from 'request';

export * from './aCHRelationshipData';
export * from './aCHRelationshipResource';
export * from './aCHRelationshipResourceAllOf';
export * from './account';
export * from './accountCreationObject';
export * from './accountExtended';
export * from './accountStatus';
export * from './accountUpdate';
export * from './activity';
export * from './activityItem';
export * from './activityType';
export * from './agreement';
export * from './applicationDocument';
export * from './assetResource';
export * from './bankData';
export * from './bankResource';
export * from './bankResourceAllOf';
export * from './batchJournalRequest';
export * from './batchJournalRequestEntries';
export * from './batchJournalResponse';
export * from './contact';
export * from './createOrder';
export * from './createOrderStopLoss';
export * from './createOrderTakeProfit';
export * from './disclosures';
export * from './documentType';
export * from './documentUpload';
export * from './identifiedResource';
export * from './identity';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse207';
export * from './journalData';
export * from './journalJNLC';
export * from './journalJNLS';
export * from './journalResource';
export * from './kycResult';
export * from './modelError';
export * from './nonTradeActivity';
export * from './nonTradeActivityAllOf';
export * from './orderObject';
export * from './patchOrder';
export * from './portfolioHistory';
export * from './position';
export * from './tradeActivity';
export * from './tradeActivityAllOf';
export * from './transferData';
export * from './transferDataAllOf';
export * from './transferResource';
export * from './transferResourceAllOf';
export * from './trustedContact';
export * from './untypedACHTransferData';
export * from './untypedACHTransferDataAllOf';
export * from './untypedTransferData';
export * from './untypedWireTransferData';
export * from './untypedWireTransferDataAllOf';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ACHRelationshipData } from './aCHRelationshipData';
import { ACHRelationshipResource } from './aCHRelationshipResource';
import { ACHRelationshipResourceAllOf } from './aCHRelationshipResourceAllOf';
import { Account } from './account';
import { AccountCreationObject } from './accountCreationObject';
import { AccountExtended } from './accountExtended';
import { AccountStatus } from './accountStatus';
import { AccountUpdate } from './accountUpdate';
import { Activity } from './activity';
import { ActivityItem } from './activityItem';
import { ActivityType } from './activityType';
import { Agreement } from './agreement';
import { ApplicationDocument } from './applicationDocument';
import { AssetResource } from './assetResource';
import { BankData } from './bankData';
import { BankResource } from './bankResource';
import { BankResourceAllOf } from './bankResourceAllOf';
import { BatchJournalRequest } from './batchJournalRequest';
import { BatchJournalRequestEntries } from './batchJournalRequestEntries';
import { BatchJournalResponse } from './batchJournalResponse';
import { Contact } from './contact';
import { CreateOrder } from './createOrder';
import { CreateOrderStopLoss } from './createOrderStopLoss';
import { CreateOrderTakeProfit } from './createOrderTakeProfit';
import { Disclosures } from './disclosures';
import { DocumentType } from './documentType';
import { DocumentUpload } from './documentUpload';
import { IdentifiedResource } from './identifiedResource';
import { Identity } from './identity';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse207 } from './inlineResponse207';
import { JournalData } from './journalData';
import { JournalJNLC } from './journalJNLC';
import { JournalJNLS } from './journalJNLS';
import { JournalResource } from './journalResource';
import { KycResult } from './kycResult';
import { ModelError } from './modelError';
import { NonTradeActivity } from './nonTradeActivity';
import { NonTradeActivityAllOf } from './nonTradeActivityAllOf';
import { OrderObject } from './orderObject';
import { PatchOrder } from './patchOrder';
import { PortfolioHistory } from './portfolioHistory';
import { Position } from './position';
import { TradeActivity } from './tradeActivity';
import { TradeActivityAllOf } from './tradeActivityAllOf';
import { TransferData } from './transferData';
import { TransferDataAllOf } from './transferDataAllOf';
import { TransferResource } from './transferResource';
import { TransferResourceAllOf } from './transferResourceAllOf';
import { TrustedContact } from './trustedContact';
import { UntypedACHTransferData } from './untypedACHTransferData';
import { UntypedACHTransferDataAllOf } from './untypedACHTransferDataAllOf';
import { UntypedTransferData } from './untypedTransferData';
import { UntypedWireTransferData } from './untypedWireTransferData';
import { UntypedWireTransferDataAllOf } from './untypedWireTransferDataAllOf';

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

let enumsMap: {[index: string]: any} = {
        "ACHRelationshipData.BankAccountTypeEnum": ACHRelationshipData.BankAccountTypeEnum,
        "ACHRelationshipResource.BankAccountTypeEnum": ACHRelationshipResource.BankAccountTypeEnum,
        "ACHRelationshipResource.StatusEnum": ACHRelationshipResource.StatusEnum,
        "ACHRelationshipResourceAllOf.StatusEnum": ACHRelationshipResourceAllOf.StatusEnum,
        "AccountStatus": AccountStatus,
        "ActivityItem.TypeEnum": ActivityItem.TypeEnum,
        "ActivityItem.SideEnum": ActivityItem.SideEnum,
        "ActivityItem.OrderStatusEnum": ActivityItem.OrderStatusEnum,
        "ActivityItem.StatusEnum": ActivityItem.StatusEnum,
        "ActivityType": ActivityType,
        "Agreement.AgreementEnum": Agreement.AgreementEnum,
        "BankData.BankCodeTypeEnum": BankData.BankCodeTypeEnum,
        "BankResource.BankCodeTypeEnum": BankResource.BankCodeTypeEnum,
        "BankResource.StatusEnum": BankResource.StatusEnum,
        "BankResourceAllOf.StatusEnum": BankResourceAllOf.StatusEnum,
        "BatchJournalRequest.EntryTypeEnum": BatchJournalRequest.EntryTypeEnum,
        "BatchJournalResponse.EntryTypeEnum": BatchJournalResponse.EntryTypeEnum,
        "BatchJournalResponse.StatusEnum": BatchJournalResponse.StatusEnum,
        "CreateOrder.SideEnum": CreateOrder.SideEnum,
        "CreateOrder.TypeEnum": CreateOrder.TypeEnum,
        "CreateOrder.TimeInForceEnum": CreateOrder.TimeInForceEnum,
        "CreateOrder.OrderClassEnum": CreateOrder.OrderClassEnum,
        "Disclosures.EmploymentStatusEnum": Disclosures.EmploymentStatusEnum,
        "DocumentType": DocumentType,
        "Identity.TaxIdTypeEnum": Identity.TaxIdTypeEnum,
        "Identity.FundingSourceEnum": Identity.FundingSourceEnum,
        "InlineResponse2006.StatusEnum": InlineResponse2006.StatusEnum,
        "JournalData.EntryTypeEnum": JournalData.EntryTypeEnum,
        "JournalJNLC.StatusEnum": JournalJNLC.StatusEnum,
        "JournalJNLS.StatusEnum": JournalJNLS.StatusEnum,
        "JournalResource.StatusEnum": JournalResource.StatusEnum,
        "NonTradeActivity.StatusEnum": NonTradeActivity.StatusEnum,
        "NonTradeActivityAllOf.StatusEnum": NonTradeActivityAllOf.StatusEnum,
        "OrderObject.OrderClassEnum": OrderObject.OrderClassEnum,
        "OrderObject.OrderTypeEnum": OrderObject.OrderTypeEnum,
        "OrderObject.TypeEnum": OrderObject.TypeEnum,
        "OrderObject.SideEnum": OrderObject.SideEnum,
        "OrderObject.TimeInForceEnum": OrderObject.TimeInForceEnum,
        "OrderObject.StatusEnum": OrderObject.StatusEnum,
        "PatchOrder.TimeInForceEnum": PatchOrder.TimeInForceEnum,
        "TradeActivity.TypeEnum": TradeActivity.TypeEnum,
        "TradeActivity.SideEnum": TradeActivity.SideEnum,
        "TradeActivity.OrderStatusEnum": TradeActivity.OrderStatusEnum,
        "TradeActivityAllOf.TypeEnum": TradeActivityAllOf.TypeEnum,
        "TradeActivityAllOf.SideEnum": TradeActivityAllOf.SideEnum,
        "TradeActivityAllOf.OrderStatusEnum": TradeActivityAllOf.OrderStatusEnum,
        "TransferData.TransferTypeEnum": TransferData.TransferTypeEnum,
        "TransferData.TimingEnum": TransferData.TimingEnum,
        "TransferData.DirectionEnum": TransferData.DirectionEnum,
        "TransferDataAllOf.TransferTypeEnum": TransferDataAllOf.TransferTypeEnum,
        "TransferDataAllOf.TimingEnum": TransferDataAllOf.TimingEnum,
        "TransferResource.TypeEnum": TransferResource.TypeEnum,
        "TransferResource.StatusEnum": TransferResource.StatusEnum,
        "TransferResource.DirectionEnum": TransferResource.DirectionEnum,
        "TransferResourceAllOf.TypeEnum": TransferResourceAllOf.TypeEnum,
        "TransferResourceAllOf.StatusEnum": TransferResourceAllOf.StatusEnum,
        "UntypedACHTransferData.DirectionEnum": UntypedACHTransferData.DirectionEnum,
        "UntypedTransferData.DirectionEnum": UntypedTransferData.DirectionEnum,
        "UntypedWireTransferData.DirectionEnum": UntypedWireTransferData.DirectionEnum,
}

let typeMap: {[index: string]: any} = {
    "ACHRelationshipData": ACHRelationshipData,
    "ACHRelationshipResource": ACHRelationshipResource,
    "ACHRelationshipResourceAllOf": ACHRelationshipResourceAllOf,
    "Account": Account,
    "AccountCreationObject": AccountCreationObject,
    "AccountExtended": AccountExtended,
    "AccountUpdate": AccountUpdate,
    "Activity": Activity,
    "ActivityItem": ActivityItem,
    "Agreement": Agreement,
    "ApplicationDocument": ApplicationDocument,
    "AssetResource": AssetResource,
    "BankData": BankData,
    "BankResource": BankResource,
    "BankResourceAllOf": BankResourceAllOf,
    "BatchJournalRequest": BatchJournalRequest,
    "BatchJournalRequestEntries": BatchJournalRequestEntries,
    "BatchJournalResponse": BatchJournalResponse,
    "Contact": Contact,
    "CreateOrder": CreateOrder,
    "CreateOrderStopLoss": CreateOrderStopLoss,
    "CreateOrderTakeProfit": CreateOrderTakeProfit,
    "Disclosures": Disclosures,
    "DocumentUpload": DocumentUpload,
    "IdentifiedResource": IdentifiedResource,
    "Identity": Identity,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse207": InlineResponse207,
    "JournalData": JournalData,
    "JournalJNLC": JournalJNLC,
    "JournalJNLS": JournalJNLS,
    "JournalResource": JournalResource,
    "KycResult": KycResult,
    "ModelError": ModelError,
    "NonTradeActivity": NonTradeActivity,
    "NonTradeActivityAllOf": NonTradeActivityAllOf,
    "OrderObject": OrderObject,
    "PatchOrder": PatchOrder,
    "PortfolioHistory": PortfolioHistory,
    "Position": Position,
    "TradeActivity": TradeActivity,
    "TradeActivityAllOf": TradeActivityAllOf,
    "TransferData": TransferData,
    "TransferDataAllOf": TransferDataAllOf,
    "TransferResource": TransferResource,
    "TransferResourceAllOf": TransferResourceAllOf,
    "TrustedContact": TrustedContact,
    "UntypedACHTransferData": UntypedACHTransferData,
    "UntypedACHTransferDataAllOf": UntypedACHTransferDataAllOf,
    "UntypedTransferData": UntypedTransferData,
    "UntypedWireTransferData": UntypedWireTransferData,
    "UntypedWireTransferDataAllOf": UntypedWireTransferDataAllOf,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
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
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
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
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
