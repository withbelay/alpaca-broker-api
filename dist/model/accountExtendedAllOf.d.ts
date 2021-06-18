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
import { Agreement } from './agreement';
import { ApplicationDocument } from './applicationDocument';
import { Contact } from './contact';
import { Disclosures } from './disclosures';
import { Identity } from './identity';
import { TrustedContact } from './trustedContact';
export declare class AccountExtendedAllOf {
    'contact'?: Contact;
    'identity'?: Identity;
    'disclosures'?: Disclosures;
    /**
    * The client has to present Alpaca Account Agreement and Margin Agreement to the end user, and have them read full sentences.
    */
    'agreements'?: Array<Agreement>;
    'documents'?: Array<ApplicationDocument>;
    'trusted_contact'?: TrustedContact;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
