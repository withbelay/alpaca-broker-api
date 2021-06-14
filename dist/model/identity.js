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
exports.Identity = void 0;
/**
* Identity is the model to provide account owner’s identity information.
*/
class Identity {
    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }
}
exports.Identity = Identity;
Identity.discriminator = undefined;
Identity.attributeTypeMap = [
    {
        "name": "givenName",
        "baseName": "given_name",
        "type": "string"
    },
    {
        "name": "familyName",
        "baseName": "family_name",
        "type": "string"
    },
    {
        "name": "dateOfBirth",
        "baseName": "date_of_birth",
        "type": "string"
    },
    {
        "name": "taxId",
        "baseName": "tax_id",
        "type": "string"
    },
    {
        "name": "taxIdType",
        "baseName": "tax_id_type",
        "type": "Identity.TaxIdTypeEnum"
    },
    {
        "name": "countryOfCitizenship",
        "baseName": "country_of_citizenship",
        "type": "string"
    },
    {
        "name": "countryOfBirth",
        "baseName": "country_of_birth",
        "type": "string"
    },
    {
        "name": "countryOfTaxResidence",
        "baseName": "country_of_tax_residence",
        "type": "string"
    },
    {
        "name": "fundingSource",
        "baseName": "funding_source",
        "type": "Array<Identity.FundingSourceEnum>"
    },
    {
        "name": "annualIncomeMin",
        "baseName": "annual_income_min",
        "type": "number"
    },
    {
        "name": "annualIncomeMax",
        "baseName": "annual_income_max",
        "type": "number"
    },
    {
        "name": "liquidNetWorthMin",
        "baseName": "liquid_net_worth_min",
        "type": "number"
    },
    {
        "name": "liquidNetWorthMax",
        "baseName": "liquid_net_worth_max",
        "type": "number"
    },
    {
        "name": "totalNetWorthMin",
        "baseName": "total_net_worth_min",
        "type": "number"
    },
    {
        "name": "totalNetWorthMax",
        "baseName": "total_net_worth_max",
        "type": "number"
    },
    {
        "name": "extra",
        "baseName": "extra",
        "type": "object"
    }
];
(function (Identity) {
    let TaxIdTypeEnum;
    (function (TaxIdTypeEnum) {
        TaxIdTypeEnum[TaxIdTypeEnum["UsaSsn"] = 'USA_SSN'] = "UsaSsn";
        TaxIdTypeEnum[TaxIdTypeEnum["AusTfn"] = 'AUS_TFN'] = "AusTfn";
        TaxIdTypeEnum[TaxIdTypeEnum["AusAbn"] = 'AUS_ABN'] = "AusAbn";
        TaxIdTypeEnum[TaxIdTypeEnum["DeuTaxId"] = 'DEU_TAX_ID'] = "DeuTaxId";
        TaxIdTypeEnum[TaxIdTypeEnum["FraSpi"] = 'FRA_SPI'] = "FraSpi";
        TaxIdTypeEnum[TaxIdTypeEnum["GbrUtr"] = 'GBR_UTR'] = "GbrUtr";
        TaxIdTypeEnum[TaxIdTypeEnum["GbrNino"] = 'GBR_NINO'] = "GbrNino";
        TaxIdTypeEnum[TaxIdTypeEnum["HunTin"] = 'HUN_TIN'] = "HunTin";
        TaxIdTypeEnum[TaxIdTypeEnum["IndPan"] = 'IND_PAN'] = "IndPan";
        TaxIdTypeEnum[TaxIdTypeEnum["IsrTaxId"] = 'ISR_TAX_ID'] = "IsrTaxId";
        TaxIdTypeEnum[TaxIdTypeEnum["ItaTaxId"] = 'ITA_TAX_ID'] = "ItaTaxId";
        TaxIdTypeEnum[TaxIdTypeEnum["JpnTaxId"] = 'JPN_TAX_ID'] = "JpnTaxId";
        TaxIdTypeEnum[TaxIdTypeEnum["NldTin"] = 'NLD_TIN'] = "NldTin";
        TaxIdTypeEnum[TaxIdTypeEnum["SgpNric"] = 'SGP_NRIC'] = "SgpNric";
        TaxIdTypeEnum[TaxIdTypeEnum["SgpFin"] = 'SGP_FIN'] = "SgpFin";
        TaxIdTypeEnum[TaxIdTypeEnum["SgpAsgd"] = 'SGP_ASGD'] = "SgpAsgd";
        TaxIdTypeEnum[TaxIdTypeEnum["SgpItr"] = 'SGP_ITR'] = "SgpItr";
        TaxIdTypeEnum[TaxIdTypeEnum["SweTaxId"] = 'SWE_TAX_ID'] = "SweTaxId";
        TaxIdTypeEnum[TaxIdTypeEnum["NotSpecified"] = 'NOT_SPECIFIED'] = "NotSpecified";
    })(TaxIdTypeEnum = Identity.TaxIdTypeEnum || (Identity.TaxIdTypeEnum = {}));
    let FundingSourceEnum;
    (function (FundingSourceEnum) {
        FundingSourceEnum[FundingSourceEnum["EmploymentIncome"] = 'employment_income'] = "EmploymentIncome";
        FundingSourceEnum[FundingSourceEnum["Investments"] = 'investments'] = "Investments";
        FundingSourceEnum[FundingSourceEnum["Inheritance"] = 'inheritance'] = "Inheritance";
        FundingSourceEnum[FundingSourceEnum["BusinessIncome"] = 'business_income'] = "BusinessIncome";
        FundingSourceEnum[FundingSourceEnum["Savings"] = 'savings'] = "Savings";
        FundingSourceEnum[FundingSourceEnum["Family"] = 'family'] = "Family";
    })(FundingSourceEnum = Identity.FundingSourceEnum || (Identity.FundingSourceEnum = {}));
})(Identity = exports.Identity || (exports.Identity = {}));
