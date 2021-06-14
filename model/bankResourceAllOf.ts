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

export class BankResourceAllOf {
    'accountId': string;
    'status': BankResourceAllOf.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BankResourceAllOf.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return BankResourceAllOf.attributeTypeMap;
    }
}

export namespace BankResourceAllOf {
    export enum StatusEnum {
        Queued = <any> 'QUEUED',
        CancelRequested = <any> 'CANCEL_REQUESTED',
        SentToClearing = <any> 'SENT_TO_CLEARING',
        Approved = <any> 'APPROVED',
        Canceled = <any> 'CANCELED'
    }
}
