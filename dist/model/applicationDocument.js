"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationDocument = void 0;
/**
* If an account has documents on the application submission, it has the ApplicationDocument model in exchange with DocumentUpload.
*/
class ApplicationDocument {
    static getAttributeTypeMap() {
        return ApplicationDocument.attributeTypeMap;
    }
}
exports.ApplicationDocument = ApplicationDocument;
ApplicationDocument.discriminator = undefined;
ApplicationDocument.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "documentType",
        "baseName": "document_type",
        "type": "DocumentType"
    },
    {
        "name": "documentSubType",
        "baseName": "document_sub_type",
        "type": "string"
    },
    {
        "name": "mimeType",
        "baseName": "mime_type",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    }
];
