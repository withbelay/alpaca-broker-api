/**
 * Alpaca Broker API
 * Open brokerage accounts, enable commission-free trading, and manage the ongoing user experience with Alpaca Broker API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Account } from './account';
import { AccountExtendedAllOf } from './accountExtendedAllOf';
import { AccountStatus } from './accountStatus';
import { ApplicationDocument } from './applicationDocument';
import { Contact } from './contact';
import { Disclosures } from './disclosures';
import { Identity } from './identity';
import { KycResult } from './kycResult';
import { TrustedContact } from './trustedContact';

export class AccountExtended {
    'id'?: string;
    'accountNumber'?: string;
    'status'?: AccountStatus;
    /**
    * Always \"USD\"
    */
    'currency'?: string;
    'createdAt'?: Date;
    'lastEquity'?: string;
    'kycResults'?: KycResult;
    'contact'?: Contact;
    'identity'?: Identity;
    'disclosures'?: Disclosures;
    /**
    * The client has to present Alpaca Account Agreement and Margin Agreement to the end user, and have them read full sentences. 
    */
    'agreements'?: Array<object>;
    'documents'?: Array<ApplicationDocument>;
    'trustedContact'?: TrustedContact;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountStatus"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "lastEquity",
            "baseName": "last_equity",
            "type": "string"
        },
        {
            "name": "kycResults",
            "baseName": "kyc_results",
            "type": "KycResult"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "Contact"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "Identity"
        },
        {
            "name": "disclosures",
            "baseName": "disclosures",
            "type": "Disclosures"
        },
        {
            "name": "agreements",
            "baseName": "agreements",
            "type": "Array<object>"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<ApplicationDocument>"
        },
        {
            "name": "trustedContact",
            "baseName": "trusted_contact",
            "type": "TrustedContact"
        }    ];

    static getAttributeTypeMap() {
        return AccountExtended.attributeTypeMap;
    }
}

