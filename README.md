<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


The onboarding API allows you to refer your customers and personal contacts to Brex.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brexonboarding.referrals.createNewReferral`](#brexonboardingreferralscreatenewreferral)
  * [`brexonboarding.referrals.getById`](#brexonboardingreferralsgetbyid)
  * [`brexonboarding.referrals.getList`](#brexonboardingreferralsgetlist)
  * [`brexonboarding.referrals.uploadDocument`](#brexonboardingreferralsuploaddocument)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Onboarding&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexOnboarding } from "brex-onboarding-typescript-sdk";

const brexonboarding = new BrexOnboarding({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const createNewReferralResponse =
  await brexonboarding.referrals.createNewReferral({
    referral_code: "referral_code_example",
    applicant: {
      last_name: "last_name_example",
      first_name: "first_name_example",
      email: "email_example",
    },
  });

console.log(createNewReferralResponse);
```

## Reference<a id="reference"></a>


### `brexonboarding.referrals.createNewReferral`<a id="brexonboardingreferralscreatenewreferral"></a>

This creates new referrals. The response will contain an identifier and a unique personalized link to an application flow. Many fields are optional and when they're provided they'll prefill the application flow for Brex.  You should handle and store these references securely as they contain sensitive information about the referral.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReferralResponse =
  await brexonboarding.referrals.createNewReferral({
    referral_code: "referral_code_example",
    applicant: {
      last_name: "last_name_example",
      first_name: "first_name_example",
      email: "email_example",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### referral_code: `string`<a id="referral_code-string"></a>

Referral code that attributes credit to you if the prospect signs up for a Brex account.

##### applicant: [`Applicant`](./models/applicant.ts)<a id="applicant-applicantmodelsapplicantts"></a>

##### business: [`CreateReferralRequestBusiness`](./models/create-referral-request-business.ts)<a id="business-createreferralrequestbusinessmodelscreate-referral-request-businessts"></a>

##### contact_preference: [`ContactPreference`](./models/contact-preference.ts)<a id="contact_preference-contactpreferencemodelscontact-preferencets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Referral](./models/referral.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/referrals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexonboarding.referrals.getById`<a id="brexonboardingreferralsgetbyid"></a>

Returns a referral object by ID if it exists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexonboarding.referrals.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Referral](./models/referral.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/referrals/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexonboarding.referrals.getList`<a id="brexonboardingreferralsgetlist"></a>

Returns referrals created.
*Note*: This doesn't include referrals that have expired.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await brexonboarding.referrals.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReferralPage](./models/referral-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/referrals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexonboarding.referrals.uploadDocument`<a id="brexonboardingreferralsuploaddocument"></a>


The `uri` will be a presigned S3 URL allowing you to upload the referral doc securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will use this to prefill the application.

Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this presigned S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadDocumentResponse = await brexonboarding.referrals.uploadDocument({
  id: "id_example",
  type: "ARTICLES_OF_INCORPORATION",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: [`DocumentType`](./models/document-type.ts)<a id="type-documenttypemodelsdocument-typets"></a>

Type of document being submitted. Allowable types: - ARTICLES_OF_INCORPORATION - IRS_EIN_CONFIRMATION (IRS CP 575 or 147C form) - IRS_EIN_APPLICATION (IRS SS4 form) - CERTIFICATE_GOOD_STANDING 

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/referrals/{id}/document_upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
