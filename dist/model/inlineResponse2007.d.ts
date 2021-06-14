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
export declare class InlineResponse2007 {
    'clientId'?: string;
    'name'?: string;
    'description'?: string;
    'url'?: string;
    /**
    * URL of Terms of Use
    */
    'termsOfUse'?: string;
    /**
    * URL of Privacy Policy
    */
    'privacyPolicy'?: string;
    'status'?: InlineResponse2007.StatusEnum;
    'redirectUri'?: Array<string>;
    'liveTradingApproved'?: boolean;
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
export declare namespace InlineResponse2007 {
    enum StatusEnum {
        Active,
        Disabled
    }
}