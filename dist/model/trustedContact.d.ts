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
/**
* This model input is optional. However, the client should make reasonable effort to obtain the trusted contact information. See more details in [FINRA Notice 17-11](https://www.finra.org/sites/default/files/Regulatory-Notice-17-11.pdf)
*/
export declare class TrustedContact {
    'givenName': string;
    'familyName': string;
    /**
    * at least one of `email_address`, `phone_number` or `street_address` is required
    */
    'emailAddress'?: string;
    /**
    * at least one of `email_address`, `phone_number` or `street_address` is required
    */
    'phoneNumber'?: string;
    /**
    * at least one of `email_address`, `phone_number` or `street_address` is required
    */
    'streetAddress'?: Array<string>;
    /**
    * required if `street_address` is set
    */
    'city'?: string;
    /**
    * required if `street_address` is set
    */
    'state'?: string;
    /**
    * required if `street_address` is set
    */
    'postalCode'?: string;
    /**
    * [ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html). required if `street_address` is set
    */
    'country'?: string;
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
